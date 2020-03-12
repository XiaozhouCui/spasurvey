let validators = {

  radiosChecked(radios) {
    let isChecked = false
    $(radios).each(function(index, radio) {
      if (radio.checked)
        isChecked = true;
    });
    return isChecked
  },

  // Checks a radio group for an expectation textarea.
  validateExpectation(text, radios, message_radio, message_text) {
    console.log('validateExpectation...')
    let expectInterval = null;
    if (validators.radiosChecked(radios)) { // Radios checked
      if ($(text).val() != "") { // Text filled
        $(message_radio).stop().text('').hide();
        $(message_text).stop().text('').hide();
        clearInterval(expectInterval);
      } else { // Text not filled
        $(message_radio).stop().text('').hide();
        $(message_text).delay('600').text('Please list your expectation').fadeIn();
      }
    } else { // Radios not checked
      if (!$(text).is(':focus') && $(text).val() != "") { // Text filled
        $(message_radio).delay('600').text('Please select your level of satisfaction').fadeIn();
        $(message_text).stop().text('').hide();
      } else { // Text not filled
        $(message_radio).stop().text('').hide();
        $(message_text).stop().text('').hide();
      }
    }
  },
  
  /** Attach events on load to expectation questions */
  validate() {
    let $expectations = $('.satisfied-expectation');
    let validateExpectation = this.validateExpectation;
    if ($expectations.length > 0) {
      $expectations.each(function(index, expectation) {
        // Get text area and radios
        let expect_text = $(expectation).find('textarea.mrEdit');
        let expect_radio = $(expectation).find('input.mrSingle');
        let expect_message_radio = $(expectation).find('div.message-radio');
        let expect_message_text = $(expectation).find('div.message-text');
      
        // Validate jQuery
        if (expect_text.length <= 0) return
        if (expect_radio.length <= 0) return
        if (expect_message_radio.length <= 0) return
        if (expect_message_text.length <= 0) return
      
        // Get expectation radio group and validate
        expect_radio = $("input[name='" + expect_radio[0].name + "']");
        if (expect_radio.length <= 0) return
      
        // Validate on page load
        validateExpectation(expect_text[0], expect_radio, expect_message_radio, expect_message_text);
      
        // Attach change event to textarea and radios, on input and focus out
        $(expect_text).bind('input propertychange blur', function() {
          window.setTimeout(function() {
            validateExpectation(expect_text[0], expect_radio, expect_message_radio, expect_message_text);
          }, 600);
        });
        $(expect_radio).each(function(index, radio) {
          // Attach click events to each radio individually, to monitor for unchecked
          $(radio).click(function() {
            // Delay validation for 2 frames on a regular 60 FPS display
            window.setTimeout(function() {
              validateExpectation(expect_text[0], expect_radio, expect_message_radio, expect_message_text);
            }, 34);
          })
        })
      })
    }
  }
}

export default validators;