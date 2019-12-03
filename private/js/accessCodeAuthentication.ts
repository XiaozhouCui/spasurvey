/// <reference path="S:/06 Systems/Surveys/Master Survey/node_modules/@types/jquery/index.d.ts" />

interface String {
  /**
   * Extension method: tests if a string is null or empty or just whitespace
   * @return {boolean} [description]
   */
  isNullorEmptyOrWhitespace(): boolean

  /**
   * Compares one string against another, using case insensitive comparison
   * @param  {string}  otherString [the current string]
   * @return {boolean}             [true if both strings are the same, ignoring case]
   */
  caseInsensitiveCompare(otherString: string): boolean
}

interface JQuery {
  /** Check that the response content contains survey page content or the Coverpage. */
  isSurveyPage(): boolean

  /** Check that the response content contains an element specific to the WorkUnit Page. */
  isWorkUnitPage(): boolean

  /** Check that the response contains authentication page specific elements. */
  isAuthPage(): boolean

  /** Check that the response content contains the rejected or completed page classes. */
  isCompletedOrRejectedPage(): boolean

  /** Check that the response content contains the inactive page class. */
  isInactivePage(): boolean

  /** Disable a button quickly */
  disable(state: boolean): void
}

/**
 * Enum for different message types used to print user friendly output.
 */
enum MessageTypes {
  warn = 0,
  error = 1
}

/** Extend jQuery with some additional helper functions. */
jQuery.fn.extend({
  isSurveyPage: function(): boolean {
    var response = this
    return response.find('.pageInfoElement').length > 0 || response.find('.cover_letter__content').length > 0
  },
  isWorkUnitPage: function(): boolean {
    var response = this
    return response.find('textarea[name="_QWorkUnitPage_QWorkUnitCode"]').length > 0
  },
  isAuthPage: function(): boolean {
    var response = this
    return response.find('#ThisIsThePasswordAuthenticationPage').length > 0 || response.find('.auth_container').length > 0
  },
  isCompletedOrRejectedPage: function(): boolean {
    var response = this
    return response.find('.survey-rejected').length > 0 || response.find('.survey-completed').length > 0
  },
  isInactivePage: function(): boolean {
    var response = this
    return response.find('.survey-inactive').length > 0
  },
  disable: function(state) {
    return this.each(function() {
      this.disabled = state;
    });
  }
});

String.prototype.isNullorEmptyOrWhitespace = function(): boolean {
  let theString: string = this
  // tests if the string is entirely whitespace
  let isAllWhitespace: boolean = ((whitespaceString: string): boolean => {
    for (let i: number = 0; i < whitespaceString.length; i++) {
      if (whitespaceString[i] != ' ') return false
    }
    return true
  })(theString)

  return (theString == null || theString.length == 0) || isAllWhitespace
}

String.prototype.caseInsensitiveCompare = function(otherString: string): boolean {
  let theString: string = this

  return (otherString.toLowerCase() == theString.toLowerCase());
}


/** `RegExp` for Access Code in URL Paramaters */
var ACCESS_CODE: RegExp = /(?:[?&]a=)([\w]{2,})/i
/** `RegExp` for Data Entry flag in URL Paramaters */
var DATA_ENTRY: RegExp = /I\.RoutingContext=DataEntry/i

/** See if we're on localhost */
var isLocalhost: boolean = new RegExp("localhost|file").test(window.location.href)

var isStaging: boolean = (/staging7/.test(window.location.href) && !(/esurvey\.bpanz/.test(window.location.href))) || isLocalhost

/** Project code for survey on Dimenions. */
var projectCode: string = 'Master_Survey'

/** Name of Access Code for this survey. */
var idType: string = 'Access Code'

/**
 * Unique RespondentID phrase. This phrase must be different for each survey as
 * it will make up part of the participant id kept on clean. So to avoid duplicates
 * we change it to a unique value each time.
 * It's worth using a value that makes the final participant id's 9 or 10 characters,
 * because participant id's generated on are 8 and there could be conflicts.
 */
var phrase: string = 'RWNHS'

/**
 * Randomly generated participant id's are seperated by this multiplier. This helps
 * prevent passwords from forming obvious sequences and participants from guessing them.
 * The multiple must be in the set of odd numbers that are not divisible by 5: https://oeis.org/A045572
 * Use the guides below to choose how many passwords need to be generated for a survey, always
 * make sure to generate 5 or more passwords for each participant in the survey, so there is
 * enough to go around, and make it harder to guess (use a high multiplier with 5 characters).
 * For participant id's with 4 characters use multipliers:
 * - 3 (20,265 participants)
 * - 7 (8,685 participants)
 * - 21 (2,895 participants)
 * For participant id's with 5 characters use multipliers:
 * - 7 (139,647 participants)
 * - 9 (108,613 participants)
 * - 17 (57,501 participants)
 * - 21 (46,548 participants)
 * - 49 (19,949 participants)
 */
var multiplier: number = 49

/**
 * Minimum decimal number to generate for participant id's before they are converted
 * to hexadecimal. Keep in mind the length of participant id's that will be created
 * when changing this value. Use the guide below.
 * For participant id's of length 4 use the minimum:
 * - 4431
 * For participant id's of length 5 use the minimum:
 * - 70686 (with 21 or less multiplier)
 * - 70707 (with 49 multiplier)
 */
var minimum: number = 70707

/**
 * Maximum decimal number to generate for participant id's before they are converted
 * to hexadecimal. Keep in mind the length of participant id's that will be created
 * when changing this value. Use the guide below.
 * For participant id's of length 4 use the maximum:
 * - 65226
 * For participant id's of length 5 use the maximum:
 * - 1048215 (with 21 or less multiplier)
 * - 1048208 (with 49 multiplier)
 */
var maximum: number = isStaging ? minimum + multiplier * 111 : 1048208

/**
 * Map of Access Codes to Unique Work Unit ID's from structural mapping.
 * This is the production work unit map, which is overwritten in testing.
 */
var workunitMap: { [key: string]: { id: number } } = {
  'test': { id: 12345 },
}

var testMap: { [key: string]: { id: number } } = {
  'test': { id: 12345 }, // For testing purposes
}

// Use 'test' as the only Access Code outside of production
if (isStaging) workunitMap = testMap


var messageDiv = $('#message')

// Give inputs a random name and turn autocomplete off, to prevent unintentionally capturing saved passwords for Employee ID's
var accessCodeInput = $(document.createElement('input')).attr({
  name: 'accessCodeInput',
  type:'text',
  maxlength: 20,
  placeholder: 'e.g. abc1',
  autocomplete: 'off',
  autofocus: 'autofocus',
  tabindex: '1',
})
var submitNewBtn = $(document.createElement('button')).attr({
  id: 'autologin_first_time',
  class: 'mrNext',
  tabindex: '2',
}).text('Start Survey')
var respondentIdInput = $(document.createElement('input')).attr({
  name: 'respondentIdInput',
  type:'text',
  maxlength: 20,
  placeholder: 'e.g. 0123',
  autocomplete: 'off',
  tabindex: '3',
})
var submitBtn = $(document.createElement('button')).attr({
  id: 'submit',
  class: 'mrNext',
  tabindex: '4',
}).text('Re-Enter Survey')
// var workUnitCodeInput = $('textarea[name="_QWorkUnitPage_QWorkUnitCode"]')
// var workUnitCodeSubmitButton = $('#WorkUnitPage input[name="_NNext"]')

var respondentId: string
var accessCode: number

var mrIWebUrl: string = `https://${isStaging ? 'staging7.spsscloud' : 'esurvey.bpanz'}.com/mrIWeb/mrIWeb.dll`
var submissionUrl: string = `${mrIWebUrl}?I.Project=${projectCode}`

log(`Submission URL is ${submissionUrl}`)

/** Append this string to the submissionUrl on first time entry, so we can show the blackout modal. */
var firstTimeParameter: string = 'secure'

let getCode = (code): number => {
  // Unique Work Unit Code from Mapping
  let id: number = 0
  
  try {
    id = workunitMap[code].id
  } catch (error) {
    log(`Can't find workunit in mapping for ${code}!`, true)
  }

  return id
}

let validAccessCode = (): boolean => {
  return cleanedAccessCode() in workunitMap
}

let validRespondentId = (): boolean => {
  let enteredRespondentId: string = trimmedRespondentId()
  return enteredRespondentId.length >= 4
}

/**
 * Check if text entered in the password input matches any Access Codes.
 */
let validateAccessCode = (event?: Event): void => {
  if (validAccessCode()) {
    accessCodeInput.addClass('valid')
    submitNewBtn.disable(false)

    // workUnitCodeInput.addClass('valid')
    // workUnitCodeSubmitButton.disable(false)
  } else {
    accessCodeInput.removeClass('valid')
    submitNewBtn.disable(true)

    // workUnitCodeInput.removeClass('valid')
    // workUnitCodeSubmitButton.disable(true)
  }
}

/**
 * Ensure something has been entered in the respondent id input before enabling re-enter survey button.
 */
let validateRespondentId = (event?: Event): void => {
  if (validRespondentId()) {
    submitBtn.disable(false)
  } else {
    submitBtn.disable(true)
  }
}

/**
 * Shorthand helper function that grabs the Respondent ID and trims of whitespace at the start and end.
 */
let trimmedRespondentId = (): string => {
  return respondentIdInput.val().trim()
}

/**
 * Shorthand helper function that grabs the Access Code.
 * Only trims whitespace from the beginning and end, leaving case unchanged.
 */
let trimmedAccessCode = (): string => {
  /*if (workUnitCodeInput.length > 0) {
    return workUnitCodeInput.val().trim()
  } else {
    return accessCodeInput.val().trim()
  }*/

  return accessCodeInput.val().trim()
}

/**
 * Shorthand helper function that grabs the Access Code.
 * Also trims, sends to lower case, and removes ALL spaces inside.
 */
let cleanedAccessCode = (): string => {
  return trimmedAccessCode().toLowerCase().replace(/\s+/g,'')
}

/**
 * Tests a ParticipantID to match it to the pre-generated format for Access Code Participants.
 * Any ParticipantID with length 7 or more and the characters g-z are ignored automatically.
 * Access Code Participants appear in the format: phrase1234
 * @param {string} ParticipantID Full respondent id to test
 */
let isAccessCodeParticipant = (ParticipantID: string): boolean => {
  // Test for invalid Participant ID's before doing mathematical evaluation
  try {
    if (ParticipantID.length >= 7 || /[g-z]+/i.test(ParticipantID)) return false
  } catch {
    return false
  }

  // Convert ParticipantID into decimal from hexadecimal
  let decimalAccessCode: number = parseInt(ParticipantID, 16)

  // Test if the number is between the minimum and maximum
  return decimalAccessCode >= minimum && decimalAccessCode <= maximum
}

/**
 * Tests for the existence of the firstTimeParamater in the URL.
 */
let isFirstTime = (): boolean => {
  return new RegExp(`&${firstTimeParameter}`, 'i').test(window.location.href)
}

/** Gets the entry URL for the survey, using the user provided RespondentID and AccessCode */
function getEntryUrl(firstTime?: boolean): string {
  let enteredRespondentId: string = respondentId

  // Add phrase to RespondentID before submission
  if (isAccessCodeParticipant(enteredRespondentId))
    enteredRespondentId = `${phrase}${enteredRespondentId}`

  let paramaters: string[] = [submissionUrl, `Id=${enteredRespondentId}`]

  if (DATA_ENTRY.test(window.location.href))
    paramaters.push(`I.RoutingContext=DataEntry`)

  // Add URL paramater for first time entry to enable Blackout
  if (firstTime)
    paramaters.push(firstTimeParameter)
  
  return paramaters.join('&')
}

/**
 * Shows a message on the page, below inputs and buttons
 * @param {string} message [Description of status]
 * @param {MessageTypes} type [Optional type for status, default is none]
 */
function setMessage(message: string, type: MessageTypes = -1): void {
  switch (type) {
    case MessageTypes.error:
      messageDiv.addClass('error')
      endLoading()
      break

    case MessageTypes.warn:
      messageDiv.addClass('warn')
      endLoading()
      break

    default:
      messageDiv.removeClass('error')
      messageDiv.removeClass('warn')
  }

  // Set message text
  messageDiv.html(message)
}

/**
 * Handler for the submit button.
 * Checks to make sure that the user entered something for the `respondentIdInput`
 * @param {object} event
 */
function submitBtnHandler(event: any) {
  event.preventDefault()
  respondentId = trimmedRespondentId()

  if (respondentId.isNullorEmptyOrWhitespace()) {
    setMessage(`Please enter your ${idType}.`, MessageTypes.error)
    respondentIdInput.focus()
    return
  }

  // Reset attempt counter
  attempts = 0

  beginLoading()
  submit(false)
}

/**
 * Handler for the submit new survey button.
 * Checks to make sure that the user entered something for the `accessCodeInput`
 * @param {object} event
 */
function submitNewBtnHandler(event?: any) {
  if (event)
    event.preventDefault()

  accessCode = getCode(cleanedAccessCode())

  if (cleanedAccessCode().isNullorEmptyOrWhitespace() || accessCode === 0) {
    setMessage(`Please enter your ${idType}.`, MessageTypes.error)
    accessCodeInput.focus()
    return
  }

  respondentId = generateRandomParticipantId()

  // Reset attempt counter
  attempts = 0

  beginLoading()
  submit(true)
}

/**
 * Submit the page
 * @param {boolean = false} setPasswordForFirstTime [set to TRUE if we're setting the password for the first time]
 */
function submit(newRespondent: boolean = false) {
  let maxAttempts: number = isStaging ? 4 : 10
  
  // Update message
  if (attempts > 0) {
    log(`ID's attempted: ${attempts}`)
    
    if (attempts >= maxAttempts) {
      setMessage(`Too many attempts trying to log you in, please try again later...`, MessageTypes.warn)
      return
    }
  }

  attempts++

  setMessage('Submitting...')
  log(getEntryUrl())

  $.ajax({
    url: getEntryUrl(),
    type: 'GET',
    success: (result) => {
      let responseAsHtmlElements: HTMLElement[] = $.parseHTML(result)
      let response = $(responseAsHtmlElements)
      
      if (newRespondent && response.isWorkUnitPage()) {
        setWorkUnitToUserSpecifiedAndLogin(response)
        return
      }

      if (newRespondent) {
        // We are tying to start a fresh survey and are not on the WorkUnit Page.
        // This means the randomly generated Particpant ID we tried was invalid or already used.
        log(`${respondentId} is invalid or already used.`)
        // Try again with a new ID.
        setTimeout(() => {
          respondentId = generateRandomParticipantId()
          submit(true)
        }, waitTimeout)
        return
      }

      if (response.isSurveyPage()) {
        setMessage('Success! Logging you into your survey...')
        window.location.href = getEntryUrl()
        return
      }

      if (response.isInactivePage()) {
        // The survey state has been set to inactive after the authentication page has been loaded.
        setMessage(`The census period for this survey has ended.<br/>Thank you for your interest in participating in this survey.`, MessageTypes.error)
        submitBtn.disable(true)
        submitNewBtn.disable(true)
        return
      }

      if (response.isCompletedOrRejectedPage()) {
        setMessage(`Access Denied. The survey you are trying to access is already complete.`, MessageTypes.error)
        return
      }

      // RespondentId did not work or we are on the password page
      if (response.isAuthPage() || response.isWorkUnitPage()) {
        setMessage(`Incorrect ${idType}. Ensure it is correct and please try again.`, MessageTypes.error)
        return
      }

      setMessage(`An error occurred. Please wait a few minutes and try again,<br/>or contact <a href="mailto:survey.support@bpanz.com?Subject=${idType} login error">survey.support@bpanz.com</a>.`, MessageTypes.warn)
    }
  })
}

/**
 * When a respondent logs in for the first, time, if they have set a password, then change it from the default.
 * @param {response as HTMLElement[]} an array of elements, processed by jQuery
 */
function setWorkUnitToUserSpecifiedAndLogin(response: any) {
  log('This is the respondentId\'s first time logging in.')
  
  // Grab the session value from the base form element made by Dimensions
  let sessionValue: string = response.find('input[name$="I.Session"]').val()
  if (sessionValue.isNullorEmptyOrWhitespace())
    throw new Error(`Could not grab the 'Session' value on the WorkUnitPage! Abandon ship!`)
  
  // Set the password to whatever they chose
  let surveyWorkUnitCode = response.find('textarea')
  if (surveyWorkUnitCode.length == 0)
    throw new Error(`Could not find a textarea to set the ${idType}! Did you set the question type properly? The MDD file needs to define a text[..100] question so the HTML emits a <textarea> element!`)
  
  let lowerCaseAccessCode: number = getCode(cleanedAccessCode())

  // Do a final check before submitting
  if (lowerCaseAccessCode === 0) {
    setMessage(`Ensure ${idType} is correct and please try again.`, MessageTypes.error);
    return
  }

  surveyWorkUnitCode.val(lowerCaseAccessCode)

  // wait a bit before going to coverpage
  setTimeout(() => {
    log(`Setting WorkUnitCode to: ${lowerCaseAccessCode}`)

    setMessage(`Verifying ${idType}...`)

    let data: object = {
      'I.Engine': 'engine8',
      'I.Project': projectCode,
      'I.Session': sessionValue,
      'I.SavePoint': 'WorkUnitPage',
      'I.Renderer': 'HTMLPlayer',
      '_QWorkUnitPage_QWorkUnitCode': lowerCaseAccessCode,
      '_NNext': 'Next'
    }

    $.ajax({
      url: mrIWebUrl,
      type: 'POST',
      data: data,
      success: () => {
        setMessage('OK! Logging you into your survey...')

        emulateStop(sessionValue, 'Coverpage', () => {
          log(getEntryUrl())

          // Redirect to survey after Stop and Save
          setTimeout(() => {
            window.location.href = getEntryUrl(true)
          }, waitTimeout*3)
        })
      }
    })
  }, waitTimeout*2)
}

/**
 * Emulate the stop button
 * @param {string} sessionValue [description]
 */
function emulateStop(sessionValue: string, savepoint: string = 'Coverpage', success?: Function) {
  let data: object = {
    'I.Engine': 'engine8',
    'I.Project': projectCode,
    'I.Session': sessionValue,
    'I.SavePoint': savepoint,
    'I.Renderer': 'HTMLPlayer',
    '_NStop': 'Stop'
  }

  if (success == undefined) {
    success = () => {
      log('Stopped')
    }
  }

  setTimeout(() => {
    $.ajax({
      url: mrIWebUrl,
      type: 'POST',
      data: data,
      success: success
    } as JQueryAjaxSettings)
  }, waitTimeout*2)
}

/*** START OF PASSWORD NOTICE/MODAL ***/

var sessionID = $('.sessionID .mrQuestionText').text().trim().replace(phrase,'')
var blackout = $('#blackout')
var isAccessCodeElements = $('.isAccessCode')
var notAccessCodeElements = $('.notAccessCode')
var password_modal = $('#password_modal')
var dismiss_modal = $('.dismiss_modal')
var clearsession = $('#clearsession')
var isPasswordPage = $('#passwordAuthentication').length > 0

if (sessionID.length < 2 || sessionID == "") {
  // No ID in URL
  sessionID = getFromSessionStorage(projectCode)

  if (isAccessCodeParticipant(sessionID) && !isPasswordPage) {
    $('#password').text(sessionID)
  } else {
    // No ID in Session Storage, or cookies disabled!
    log('No password on page or in session storage.')

    $('.password.notice').hide()
  }
} else {
  // Print to screen
  if (isAccessCodeParticipant(sessionID) && !isPasswordPage)
    $('#password').text(sessionID)
  else
    $('.password.notice').hide()

  // Save in session storage
  saveToSessionStorage(projectCode, sessionID)
}

if (blackout.length > 0) {
  // Check for first time visit with this Access Code ID and show Blackout
  if (isAccessCodeParticipant(sessionID) && isFirstTime()) {
      blackout.fadeIn('fast')
      password_modal.fadeIn('fast')
      
      dismiss_modal.click(hideModalAndBlackout)
      password_modal.click(hideModalAndBlackout)
  }
}

// Show elements specific to Access Code or Password/Email participants
if (isAccessCodeElements.length > 0 || notAccessCodeElements.length > 0) {
  isAccessCodeParticipant(sessionID) ? isAccessCodeElements.show() : notAccessCodeElements.show()
}

// Clear session storage on the Stopped/Completed pages
if (clearsession.length > 0) {
  clearSessionStorage()
}

function hideModalAndBlackout() {
  $('#blackout').hide()
  $('#password_modal').hide()
}

/*** END PASSWORD ***/

// Number of retries
var attempts: number = 0

// Time to wait between AJAX requests in milliseconds
var waitTimeout: number = 500

// Get list of tried passwords from local storage
var storedPasswords: string | string[] | null = getFromLocalStorage(projectCode)
var triedPasswords: any = []

// We have tried some passwords on this computer before
if (storedPasswords != undefined && storedPasswords != null) {
    // Split stored string into an array of passwords
    triedPasswords = storedPasswords.split(',')
}

/**
 * Generates a random passphrase, joining one of the strings and a four digit number from 1000 to 9999 inclusive
 * @returns {string} Fresh passphrase that has not been tried on this browser before
 */
function generateRandomParticipantId(): string | null {
  // Floor max to ensure it's divisible by the multiplier, otherwise we may generate invalid passwords
  let max: number = Math.floor((maximum - minimum) / multiplier)
  let min: number = 0
  
  // Catch issues with small numbers of passwords
  if (triedPasswords.length >= max - min) {
    // Stop attempting to try new passwords, because we've simply run out of new ones to try
    attempts += 9999
    log(`Tired every available password, bail out here!`, true)
    return null
  }
  
  // Generate a password that does not match the current set of tried passwords
  do {
    /**
     * Auto-generated password is a random number between `min` and `max` inclusive.
     * The minimum is then added to the password to give it a floor.
     * In this way `max` is the total number of passwords to generate and;
     * `min` is the minimum number for the number.
     */
    var id: string = ((Math.floor(Math.random() * (max - min + 1)) + min) * multiplier + minimum).toString(16)
  } while (triedPasswords.indexOf(id) >= 0)

  // Save the tried password in localStorage
  triedPasswords.push(id)
  saveToLocalStorage(projectCode, triedPasswords.toString())

  return id
}

/**
 * Gets a possible Access Code from URL Paramaters and sets it to the accessCodeInput.
 * @returns {boolean} `True` if Access Code was found, otherwise `False`
 */
var getAccessCode = (): boolean => {
  try {
    let _accessCode: string = ACCESS_CODE.exec(window.location.href)[1]
    accessCodeInput.val(_accessCode)
    return true
  } catch (TypeError) {
    console.log('No Access Code in URL Paramaters')
  }
  return false
}

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

function beginLoading(): void {
  submitBtn.disable(true)
  submitNewBtn.disable(true)
}

function endLoading(): void {
  validateAccessCode()
  validateRespondentId()
}

/**
 * Shorthand console log, set warn is `true` to elevate the message status
 * @param {any} message String or Object to output in console
 * @param {boolean} warn Elevate message level to a warning
 */
function log(message: any, warn: boolean = false): void {
  warn ? console.warn(message) : console.log(message)
}

/** Entry point for the page */
$(function() {
  if ($('#passwordAuthentication').length === 0)
    return

  $('#respondentId .inputPlaceholder').replaceWith(respondentIdInput)
  $('#password .inputPlaceholder').replaceWith(accessCodeInput)
  $('.submitBtnPlaceholder').replaceWith(submitBtn)
  $('.submitNewBtnPlaceholder').replaceWith(submitNewBtn)

  // Blank out the message
  setMessage(' ')

  // Invoke our code instead of the standard form submit event
  let invokeSubmit = (event: any) => {
    if (validRespondentId()) {
      submitBtnHandler(event)
    } else if (validAccessCode()) {
      submitNewBtnHandler(event)
    }
  }
  let defaultHandler = (event: any) => {
    let keyCode = event.keyCode || event.which
    
    // Submit on enter
    if (keyCode == 13) {
      event.preventDefault()
      invokeSubmit(event)
    }
  }

  $('form').submit((event: any) => {
    defaultHandler
    event.preventDefault()
  })
  $('input').keydown((event: any) => {
    defaultHandler(event)
  })

  // Get and set Access Code from URL Paramaters, before validation
  let autoEnter: boolean = getAccessCode()

  // Validate inputs initially for setup
  validateAccessCode()
  validateRespondentId()

  // Attach event handlers
  $(accessCodeInput).keyup(validateAccessCode)
  submitNewBtn.click(submitNewBtnHandler)
  
  $(respondentIdInput).keyup(validateRespondentId)
  submitBtn.click(submitBtnHandler)

  if (autoEnter && validAccessCode()) {
    submitNewBtnHandler()
  } else {
    // Focus on the Access Code input for new participants
    if (DATA_ENTRY.test(window.location.href))
      respondentIdInput.focus()
    else
      accessCodeInput.focus()
  }
})

/**
 * Validation on the WorkUnitPage
 */
$(function() {
  if ($('#WorkUnitPage').length == 0)
    return

  $('#ReturnToAuthenticationPage').attr('href', submissionUrl)

  /*$(workUnitCodeInput).attr('autocomplete', 'off')
  $(workUnitCodeInput).attr('autofocus', 'autofocus')
  $(workUnitCodeInput).attr('spellcheck', 'false')

  validateAccessCode()

  $(workUnitCodeInput).keyup(validateAccessCode)

  $('form').submit(function(e) {
    e.preventDefault()

    if (getCode(cleanedAccessCode()) > 0) {
      // Set Unique Work Unit Code before submitting
      setWorkUnitToUserSpecifiedAndLogin()
      
      return true
    } else {
      return false
    }
  })*/
})
