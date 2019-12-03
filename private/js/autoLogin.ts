/// <reference path="S:/06 Systems/Surveys/Master Survey/node_modules/@types/jquery/index.d.ts" />

// declare var $: any
// declare var jQuery: any
// declare var window: Window

/**
 * @overview Logic for the 'Hand Heart Pocket' style survey methodology.
 * 
 * @author Steven Lomas <Steven.Lomas@bpanz.com>
 * 
 * A giant list of participants is created in the format: 'prefix0000' and
 * uploaded to Dimensions. These passwords are randomly assigned on log in and
 * respondents can write down this ID to return to their survey later.
 * 
 * This has the effect of letting Dimensions create random participant IDs,
 * except that they are human readable and lets respondents return to their survey later.
 */


const enum MessageLevel {
    Normal,
    Success,
    Warning,
    Error,
}

/** Dimensions project code */
var project: string = 'UCH_18_ES'


/* START OF PASSWORD MODAL */

/** Respondent_ID embedded in the survey page. You can achieve this by doing the following:
 * 1. Embed a mrData element into each of your routed HTML pages at the top of the body:
 *    `<span class="sessionID" style="display:none"><mrData Index="1" QuestionElement="Label"/></span>`
 * 2. Add an 'info' item to these pages in `metadata.vbs` as the first item (before any other questions):
 *    `CoverpageInfo "{#Id}" info`;
 * 3. Create and set this `Id` variable in the `routing.vbs` using Sample Record data:
 *    `Dim Id
   Id = IOM.SampleRecord.Item["Id"]`
 */
var sessionID: string = $('.sessionID .mrQuestionText').text().trim()

/** Blackout element */
var blackout: JQuery = $('#blackout')
/** Password Modal */
var password_modal: JQuery = $('#password_modal')
/** Close modal text/button to dismiss the blackout modal */
var dismiss_modal: JQuery = $('.dismiss_modal')
/** Embed an empty DOM element in pages when we want to clear session storage (i.e. stopped/completed pages) */
var clearsession: JQuery = $('#clearsession')

// Check for embedded respondent ID in html
if (sessionID.length < 2 || sessionID == "") {
    sessionID = getFromSessionStorage(project)

    // Check if we can use ID cached in session storage
    if (sessionID != null && sessionID != '') {
        // Print ID from session storage and attach survey link
        updateModal()
    } else {
        // No ID in Session Storage or cookies are disabled!
        log('No Password!', true)

        // Can't find an ID to use anywhere, so hide the password modal and pretend nothing bad happened
        $('.password.notice').hide()
    }
} else {
    // Print ID embedded in html and attach survey link
    updateModal()

    // Save in session storage
    saveToSessionStorage(project, sessionID)
}

// Show blackout
if (blackout.length > 0) {
    // Check if a respondent has visited their survey already on this machine
    if (sessionID != undefined && sessionID != null && sessionID != '') {
        let visited: string | null = getFromLocalStorage(sessionID)
        
        // If they are a first time visitor, show blackout otherwise refrain from annoying them again with it
        if (visited != 'true') {
            blackout.fadeIn('fast')
            password_modal.fadeIn('fast')
            
            // Add close modal to click event of dismiss text/button
            dismiss_modal.click(hideModalAndBlackout)
        }
    }
}

// Clear session storage on the Stopped/Completed pages
if (clearsession.length > 0) {
    clearSessionStorage()
}

/** Print the respondents ID to the modal, and if there is no blackout attach their survey link. */
function updateModal(): void {
    // Write ID to modal
    $('#password').text(sessionID)

    // Attach link to modal
    // Only on modals outside of the blackout (so respondents can click the modal safely to dismiss it)
    if (blackout.length <= 0)
        $('#password').attr('href', location.href + '?I.Project=' + project + '&id=' + sessionID)
}

/** Remove modal and blackout from view. */
function hideModalAndBlackout(): void {
    $('#blackout').hide()
    $('#password_modal').hide()

    saveToLocalStorage(sessionID, 'true')
}

/* END PASSWORD MODAL */



/* START OF AUTOLOGIN */

/** Number of retries */
var attempts: number = 0

/** Time to wait between AJAX requests in milliseconds */
var waitTimeout: number = 500

/** List of tried passwords stored in local storage */
var storedPasswords: string | string[] | null = getFromLocalStorage(project)
/** List of passwords tried this login attempt */
var triedPasswords: any = []

// Have we have tried some passwords on this computer before?
if (storedPasswords != undefined && storedPasswords != null) {
    // Split the stored string of passwords into an array
    triedPasswords = storedPasswords.split(',')
}

var $auth_id_container: JQuery = $('#auth_id_container')

// Only activate autologin functionality on authentication pages
if ($auth_id_container.length > 0) {
    var $autologin_message: JQuery = $('.notice_message')

    // Create login buttons
    var $autologin_enter_survey: any = $('<input>', { name: '_NNext', class: 'mrNext', type: 'submit', value: 'Enter Survey' })
    var $autologin_new_user: JQuery = $('<input>', { id: 'autologin_first_time', class: 'mrNew', type: 'button', value: 'I am new user' }).click(() => { testPassword() })
    $('.start_survey_btn').html($autologin_enter_survey) // Insert enter survey button into DOM
    $('.start_survey_btn').prepend($autologin_new_user) // Insert new user button into DOM
    
    // Get our host
    var isLocalhost: boolean = new RegExp("localhost|file").test(window.location.href)
    var isStaging: boolean = (/staging7/.test(window.location.href) && !(/esurvey\.bpanz/.test(window.location.href))) || isLocalhost
    
    // Get endpoint URI
    var mrIWebUrl: string = `https://${isStaging ? 'staging7.spsscloud' : 'esurvey.bpanz'}.com/mrIWeb/mrIWeb.dll`
    log(`Dimensions URL is ${mrIWebUrl}`)
    
    // Catch url paramater
    var firstTime: boolean = !!/(?:[?&]first=)(true)/i.exec(window.location.href)
    
    // Automatically get a login for first time entry
    if (firstTime) { testPassword() }
}


/**
 * Queries a survey to see if the `password` is fresh
 * @param {string} password Password to test
 */
function testPassword(password?: string): void {
    if (password === undefined) {
        password = generateRandomPassword()
    } else if (password === null) {
        log(`Somehow we've tested every single available password?`)
        return
    }

    // Hide login input
    $auth_id_container.hide()
    
    let submissionUrl: string = `${mrIWebUrl}?I.Project=${project}&id=${password}`
    log(`Submission URL is ${submissionUrl}`)

    // Update message
    if (attempts > 0) {
        log(`Passwords attempted: ${attempts}`)
        
        if (attempts >= 10) {
            LoginMessage(`Too many attempts getting a password, please try again later...`, MessageLevel.Error)
            
            // Show login input
            $auth_id_container.show()
            
            return
        }
    }
    
    LoginMessage(`Please wait, getting you a${attempts > 0 ? ' new' : ''} password...`)
    attempts++

    $.ajax({
        url: submissionUrl,
        type: 'GET',
        success: (response) => {
            let responseAsHtmlElements: HTMLElement[] = $.parseHTML(response)
            let sessionValue: string = $(responseAsHtmlElements).find('input[name$="I.Session"]').val()
            log(`I.Session: ${sessionValue}`)

            response = response.toString()
    
            let isMetaPage: boolean = response.indexOf('meta_page_only') >= 0
            let isInactivePage: boolean = response.indexOf('inactive_page_only') >= 0
    
            if (isMetaPage) {
                log(`Meta Page...`)

                // Emulate success state
                LoginMessage('Successfully got a password...', MessageLevel.Success)

                // Post body
                let data: object = {
                    'I.Engine': 'engine8',
                    'I.Project': project,
                    'I.Session': sessionValue,
                    'I.SavePoint': 'MetaPage',
                    'I.Renderer': 'HTMLPlayer',
                    '_NNext': 'Next'
                }

                // Wait half a second and redirect
                setTimeout(() => {
                    $.ajax({
                        url: mrIWebUrl,
                        type: 'POST',
                        data: data,
                        success: (response) => {
                            response = response.toString()
    
                            let isCoverpage: boolean = response.indexOf('cover_letter__content') >= 0

                            if (isCoverpage) {
                                LoginMessage('Redirecting you now...', MessageLevel.Success)
                                window.location.href = submissionUrl
                            } else {
                                // Coverpage should come directly after MetaPage
                                log(`Not Coverpage?`)
                
                                LoginMessage(`Password is taken, fetching another...`, MessageLevel.Warning)

                                // Test another password
                                setTimeout(() => {
                                    testPassword()
                                }, waitTimeout)
                            }
                        },
                        error: autologinError
                    })
                }, waitTimeout)
            } else if (isInactivePage) {
                // Survey is inactive
                log(`Inactive Page...`)

                // We should never see this, as the authentication page is required for even attempting to log in
                // This could only happen if the survey has closed after a participant has already loaded the authentication page
                LoginMessage(`Survey census has ended.`, MessageLevel.Warning)
            } else {
                // Survey is not Fresh
                log(`${password} is used, trying another...`)
                
                LoginMessage(`Password is taken...`)

                // Test another password
                setTimeout(() => {
                    testPassword()
                }, waitTimeout)
            }
        },
        error: autologinError
    })
}

/**
 * Generates a random passphrase, joining one of the strings and a four digit number from 1000 to 9999 inclusive
 * @returns {string | null} Fresh passphrase that has not been tried on this browser before, otherwise null on error
 */
function generateRandomPassword(): string | null {
    // These are the human readable prefixes for passwords
    // Replace these with something wholesome from their cover letter, mission statement, website, etc
    let phrases: string[] = ['uch', 'uniting', 'care', 'health', 'fairness', 'fullness', 'wisdom', 'compassion', 'innovation']
    // Maximum and minimum for the numerical password suffixes
    let max: number = 9999
    let min: number = 1001
    
    // Catch issues with small numbers of passwords
    // Generate enough password combinations to give enough variation and prevent discovery
    let count: number = phrases.length * max - min
    if (triedPasswords.length >= count) {
        return null
    }
    
    // Generate a password that does not match the current set of tried passwords
    do {
        var id: string = `${phrases[Math.floor(Math.random() * phrases.length)]}${Math.floor(Math.random() * (max - min + 1)) + min}`
    } while (triedPasswords.indexOf(id) >= 0)

    // Save the tried password in localStorage
    triedPasswords.push(id)
    saveToLocalStorage(project, triedPasswords.toString())

    return id
}

/**
 * Update the login message DOM element, with optional classes for styling message types
 * @param {string} message Login message to print
 * @param {MessageLevel} type Level of message e.g. Success, Normal, Warning, Error, etc
 */
function LoginMessage(message: string, type: MessageLevel = MessageLevel.Normal): void {
    $autologin_message.removeClass('-warning').removeClass('-error').removeClass('-success')

    let level: string = ''
    switch (type) {
        case MessageLevel.Success:
            level = '-success'
            break
        case MessageLevel.Warning:
            level = '-warning'
            break
        case MessageLevel.Error:
            level = '-error'
            break
    }

    $autologin_message.text(message).addClass(level)
}

/**
 * Handle AJAX error gracefully
 * @param {any} response AJAX response object
 */
function autologinError(response: any): void {
    // show login input again
    $auth_id_container.show()
    
    LoginMessage(`Network or API error...`, MessageLevel.Error)
}

/* END AUTOLOGIN */



/* HELPER FUNCTIONS */

/**
 * Retrieves a string from Local Storage saved under a supplied key.
 * @param {string} key Key for item in storage
 * @returns {string | null} Data as `string` or `null` if item does not exist
 */
function getFromLocalStorage(key: string): string | null {
    try {
        return window.localStorage.getItem(key)
    } catch (e) {
        log('Cookies are disabled!')
    }
    return ''
}

/**
 * Saves a string in Local Storage
 * @param {string} key Key for item
 * @param {string} value `String` to save
 */
function saveToLocalStorage(key: string, value: string): void {
    try {
        window.localStorage.setItem(key, value)
    } catch (e) {
        log('Cookies are disabled!')
    }
}

/**
 * Clears the Local Storage
 */
function clearLocalStorage(): void {
    try {
        window.localStorage.clear()
    } catch (e) {
        log('Cookies are disabled!')
    }
}

/**
 * Retrieves a string from Session Storage saved under a supplied key.
 * @param {string} key Key for item in storage
 * @returns {string | null} Data as `string` or `null` if item does not exist
 */
function getFromSessionStorage(key): string | null {
    try {
        return window.sessionStorage.getItem(key)
    } catch (e) {
        log('Cookies are disabled!')
    }
    return ''
}

/**
 * Saves a string in Session Storage
 * @param {string} key Key for item
 * @param {string} value `String` to save
 */
function saveToSessionStorage(key, value): void {
    try {
        window.sessionStorage.setItem(key, value)
    } catch (e) {
        log('Cookies are disabled!')
    }
}

/**
 * Clears the Session Storage
 */
function clearSessionStorage(): void {
    try {
        window.sessionStorage.clear()
    } catch (e) {
        log('Cookies are disabled!')
    }
}

/**
 * Shorthand console log, set warn is `true` to elevate the message status
 * @param {any} message String or Object to output in console
 * @param {boolean} warn Elevate message level to a warning
 */
function log(message: any, warn: boolean = false): void {
    warn ? console.warn(message) : console.log(message)
}
