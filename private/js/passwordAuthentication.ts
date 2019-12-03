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

  /** Check that the response content contains an element specific to the Password Page. */
  isPasswordPage(): boolean

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
  isPasswordPage: function(): boolean {
    var response = this
    return response.find('textarea[name="_QPasswordPage_QPassword"]').length > 0
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


/** See if we're on localhost */
var isLocalhost: boolean = new RegExp("localhost|file").test(window.location.href)

var isStaging: boolean = (/staging7/.test(window.location.href) && !(/esurvey\.bpanz/.test(window.location.href))) || isLocalhost

/** Project code for survey on Dimenions. */
var projectCode: string = 'REGIS_19_ES'

/** Type of employee identifier and secret question. */
var idType: string = 'Employee ID'
var secretQuestion: string = 'favourite colour'

var messageDiv = $('#message')

// Give inputs a random name and turn autocomplete off, to prevent unintentionally capturing saved passwords for Employee ID's
var respondentIdInput = $(document.createElement('input')).attr({
  name: 'respondentIdInput',
  type:'text',
  maxlength: 32,
  placeholder: 'e.g. 1234567',
  autocomplete: 'off',
  autofocus: 'autofocus',
})
var passwordInput = $(document.createElement('input')).attr({
  name: 'secretQuestionInput',
  type:'password',
  maxlength: 32,
  placeholder: 'e.g. blue',
  autocomplete: 'off',
})
var showPasswordCheckbox = $(document.createElement('input')).attr({
  id: 'showPasswordCheckbox',
  type: 'checkbox',
  value: 'showPassword',
})
var submitBtn = $(document.createElement('button')).attr({
  id: 'submit',
  class: 'mrNext',
}).text('Start Survey')

var respondentId: string;
var password: string;

var mrIWebUrl = `https://${isStaging ? 'staging7.spsscloud' : 'esurvey.bpanz'}.com/mrIWeb/mrIWeb.dll`
var submissionUrl: string = `${mrIWebUrl}?I.Project=${projectCode}`

console.log(`Submission URL is ${submissionUrl}`)

/**
 * Shorthand helper function that grabs the Respondent ID and trims of whitespace at the start and end. It also trims off zeros at the start.
 */
let trimmedRespondentId = (): string => {
  return respondentIdInput.val().trim().replace(/^[0]+/,'')
}

/**
 * Shorthand helper function that grabs the Password.
 * Only trims whitespace from the beginning and end, leaving case unchanged.
 */
let trimmedPassword = (): string => {
  return passwordInput.val().trim()
}

/**
 * Shorthand helper function that grabs the Password.
 * Also trims, sends to lower case, and removes ALL spaces inside.
 */
let cleanedPassword = (): string => {
  return trimmedPassword().toLowerCase().replace(/\s+/g,'')
}

/** Gets the entry URL for the survey, using the user provided ID and password */
function getEntryUrl(enteredPassword?: string): string {
  if (enteredPassword == undefined)
    enteredPassword = cleanedPassword()
  
  return [submissionUrl, `Id=${trimmedRespondentId()}`, `Password=${enteredPassword}`].join('&')
}

/**
 * Shows a message below the password input and above the submit button
 * @param {string} message [Description of status]
 * @param {MessageTypes} type [Optional type for status, default is none]
 */
function setMessage(message: string, type: MessageTypes = -1): void {
  switch (type) {
    case MessageTypes.error:
      messageDiv.addClass('error')
      submitBtn.disable(false)
      break

    case MessageTypes.warn:
      messageDiv.addClass('warn')
      submitBtn.disable(false)
      break

    default:
      messageDiv.removeClass('error')
      messageDiv.removeClass('warn')
      submitBtn.disable(false)
  }

  // Set message text
  messageDiv.html(message)
}

/**
 * Handler for the submit button. Checks to make sure that the user entered something for the respondentId field and favourite colour
 * @param {object} event
 */
function submitBtnHandler(event: any) {
  event.preventDefault()
  respondentId = trimmedRespondentId()
  password = cleanedPassword()

  if (respondentId.isNullorEmptyOrWhitespace()) {
    setMessage(`Please enter your ${idType}.`, MessageTypes.error)
    return
  }

  if (password.isNullorEmptyOrWhitespace()) {
    setMessage(`Please enter your ${secretQuestion}.`, MessageTypes.error)
    return
  }

  submitBtn.disable(true)
  submit(true)
}

/**
 * Submit the page
 * @param {boolean = false} setPasswordForFirstTime [set to TRUE if we're setting the password for the first time]
 */
function submit(setPasswordForFirstTime: boolean = false) {
  respondentId = trimmedRespondentId()
  password = setPasswordForFirstTime ? 'default' : cleanedPassword()

  // Test to see if they've input a valid password
  if (/[#?&]+/.test(cleanedPassword())) {
    setMessage(`Your ${secretQuestion} has invalid characters. Must not contain any: # ? &`, MessageTypes.warn);
    return
  }

  let entryUrl: string = getEntryUrl(password)
  setMessage('Submitting....')
  $.ajax({
    url: entryUrl,
    type: 'GET',
    success: (result) => {
      let responseAsHtmlElements: HTMLElement[] = $.parseHTML(result)
      let response = $(responseAsHtmlElements)
      
      if (response.isPasswordPage()) {
        setPasswordFromDefaultToUserSpecifiedAndLogin(response)
        return
      } else if (response.isSurveyPage()) {
        setMessage('Success!')
        window.location.href = getEntryUrl()
        return
      } else if (response.isInactivePage()) {
        // The survey state has been set to inactive after the authentication page has been loaded...
        setMessage(`The census period for this survey has ended.<br/>Thank you for your interest in participating in this survey.`, MessageTypes.error)
        return
      } else if (response.isAuthPage()) {
        // If we fail at this point, then there's only one possibility: 
        // The default password has been changed already (it isnt default), so lets try authenticating using the user provided password
        if (setPasswordForFirstTime) {
          loadSurvey(result)
          return
        }
        setMessage(`Incorrect ${idType} or ${secretQuestion}. Ensure they are correct and please try again.`, MessageTypes.error)
      } else {
        setMessage(`An error occurred. Please try contacting <a href="mailto:survey.support@bpanz.com?Subject=${idType} login error">survey.support@bpanz.com</a> or wait a few minutes and try again.`, MessageTypes.warn)
      }
    }
  })
}

/**
 * When a respondent logs in for the first, time, if they have set a password, then change it from the default.
 * @param {response as HTMLElement[]} an array of elements, processed by jQuery
 */
function setPasswordFromDefaultToUserSpecifiedAndLogin(response: any) {
  console.log('This is the respondentId\'s first time logging in.')
  
  // Grab the session value from the base form element made by Dimensions
  let sessionValue: string = response.find('input[name$="I.Session"]').val()
  if (sessionValue.isNullorEmptyOrWhitespace())
    throw new Error("Could not grab the 'Session' value on the PasswordPage! Abandon ship!")
  
  // Set the password to whatever they chose
  let surveyPassword = response.find('textarea')
  if (surveyPassword.length == 0)
    throw new Error('Could not find a textarea to set the password! Did you set the question type properly? The MDD file needs to define a text[..100] question so the HTML emits a <textarea> element!')
  
  let lowerCasePassword = cleanedPassword()
  surveyPassword.val(lowerCasePassword)

  // Check with the user one final time that their Password is correct
  let proceed: boolean = confirm(`Your ${secretQuestion} will be: ${trimmedPassword()}. Are you fine with this? Please remember it if you stop and need to go back into your survey`)
  if (!proceed) {
    setMessage(`Enter a ${secretQuestion} to continue.`)
    emulateStop(sessionValue, 'PasswordPage')
    return
  }

  // wait a bit before going to coverpage
  setTimeout(() => {
    console.log(`Setting password to: ${trimmedPassword()}`)
    let data: object = {
      'I.Engine': 'engine8',
      'I.Project': projectCode,
      'I.Session': sessionValue,
      'I.SavePoint': 'PasswordPage',
      'I.Renderer': 'HTMLPlayer',
      '_QPasswordPage_QPassword': lowerCasePassword,
      '_NNext': 'Next'
    }

    $.ajax({
      url: mrIWebUrl,
      type: 'POST',
      data: data,
      success: () => {
        setMessage('OK! Logging you into your survey...')
        emulateStop(sessionValue, 'Coverpage', () => {
          console.log(getEntryUrl())
          setTimeout(() => {
            window.location.href = getEntryUrl()
          }, 500)
        })
      }
    })
  }, 500)
}

/**
 * Submit with the whatever the user provided.
 * @param {Function} success [description]
 */
function submitWithRespondentIdAndUserSuppliedPassword(success: Function = null) {
  let entryUrl: string = getEntryUrl()
  
  if (success == undefined) {
    success = (response: any) => {
      console.info('ID was: ', trimmedRespondentId())
      console.info('Password was: ', trimmedPassword())
      console.log(response)
    }
  }

  $.ajax({
    url: entryUrl,
    type: 'GET',
    success: success
  } as JQueryAjaxSettings)
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
      console.log('Stopped')
    }
  }

  setTimeout(() => {
    $.ajax({
      url: mrIWebUrl,
      type: 'POST',
      data: data,
      success: success
    } as JQueryAjaxSettings)
  }, 500)
}

/**
 * Loads the survey for the user's ID and password
 */
function loadSurvey(htmlResponseString: string) {
  setTimeout(() => {
    submitWithRespondentIdAndUserSuppliedPassword((htmlResponseString) => {
      let responseAsHtmlElements: HTMLElement[] = $.parseHTML(htmlResponseString)
      let response = $(responseAsHtmlElements)
      
      if (response.isSurveyPage()) {
        window.location.href = getEntryUrl()
        setMessage('Success!')
      } else if (response.isCompletedOrRejectedPage()) {
        setMessage(`Access Denied. The survey you are trying to access is already complete.`, MessageTypes.error)
      } else if (response.isInactivePage()) {
        setMessage(`The census period for this survey has ended.<br/>Thank you for your interest in participating in this survey.`, MessageTypes.error)
      } else {
        setMessage(`Incorrect ${idType} or ${secretQuestion}. Please try again.`, MessageTypes.error)
      }
    })
  }, 500)
}

/**
 * Entry point for the page
 */
$(function() {
  if ($('#passwordAuthentication').length == 0)
    return

  $('#respondentId .inputPlaceholder').replaceWith(respondentIdInput)
  $('#password .inputPlaceholder').replaceWith(passwordInput)
  $('#password .showPasswordCheckboxPlaceholder').replaceWith(showPasswordCheckbox)
  $('.submitBtnPlaceholder').replaceWith(submitBtn)

  // show the user's password
  showPasswordCheckbox.click(() => {
    if (passwordInput.attr('type') == 'password') {
      passwordInput.attr('type', 'text')
    } else if (passwordInput.attr('type') == 'text') {
      passwordInput.attr('type', 'password')
    }
  })

  // Take control of the Submit button and prevent default form submission
  let invokeSubmitBtnHandlerIfEnterPressed = (event: any) => {
    let keyCode = event.keyCode || event.which
    // submit on enter
    if (keyCode == 13) {
      event.preventDefault()
      submitBtnHandler(event)
    }
  }

  // Catch form submission, to handle it in our own way
  let defaultHandler = (event: any) => {
    invokeSubmitBtnHandlerIfEnterPressed(event)
    event.preventDefault()
  }

  $('form').submit(defaultHandler)
  $('input').keydown((event: any) => {
    invokeSubmitBtnHandlerIfEnterPressed(event)
  })

  submitBtn.click(submitBtnHandler)
  // blank out the message
  setMessage(' ')

  // focus on the respondentId input
  respondentIdInput.focus()
})
