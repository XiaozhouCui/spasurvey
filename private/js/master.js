if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
	if (typeof this !== 'function') {
		// closest thing possible to the ECMAScript 5
		// internal IsCallable function
		throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	}

	var aArgs   = Array.prototype.slice.call(arguments, 1),
		fToBind = this,
		fNOP    = function() {},
		fBound  = function() {
			return fToBind.apply(this instanceof fNOP
				 ? this
				 : oThis,
				 aArgs.concat(Array.prototype.slice.call(arguments)));
		};

	if (this.prototype) {
		// Function.prototype doesn't have a prototype property
		fNOP.prototype = this.prototype; 
	}
	fBound.prototype = new fNOP();

	return fBound;
	};
}

/**
 * Generates a random string of a given length
 * @param  {Number} length [generates a random string of  given length
 * ]
 * @return {[type]}        [description]
 */
function randomString(length) {
	var text = ""
	var possible = "abcdefghijklmnopqrstuvwxyz"

	for (var i = 0; i < length; i++) {
		var randomChar = possible.charAt(Math.floor(Math.random() * possible.length))
		text += randomChar 
	}

	return text.toLowerCase()
}

/**
 * Generates a random number in between a minimum and maximum value
 * @param  {Number} first [description]
 * @param  {Number} last  [description]
 * @return {Number}       [description]
 */
function randomNumber(min, max) {
	return Math.floor(Math.random() * max) + min
}


/**
 * Loads a javascript file dynamically, by appending a <script> tag to the head
 */
function load_script(url, onload, optional_attrs) {
	var isIE78 = /\bMSIE 7/.test(navigator.userAgent) || /\bMSIE 8/.test(navigator.userAgent)
	var script = document.createElement('script')
	script.type = 'text/javascript'
	script.src = url
	if (optional_attrs != null) {
		for (var attr in optional_attrs) {
			script.setAttribute(attr, optional_attrs[attr])
		}
	}
	var head = document.getElementsByTagName('head')[0] 
	head.appendChild(script)

	if (typeof onload === 'function') {
		// console.log('attaching onload function')
		if (isIE78) {
			script.onreadystatechange = function() {
				var readystate = script.readyState
				// console.log(readystate)
				if (readystate == 'loaded' || readystate == 'complete') {
					// console.log(this)
					onload()
				}
			}
			// console.log('this is ie7')
		} else {
			script.onload = onload
		}
	}

	return script
}

load_script('https://cdnjs.cloudflare.com/ajax/libs/keymaster/1.6.1/keymaster.min.js', function() {
	console.log('alt+c - to go forward')
	console.log('alt+x - to stop')
	console.log('alt+z - to go back')

	var goForward = function() {
		console.log('going forward a page')
		if ($('input[type="submit"][value*="Finish Survey"]').length) return;
		$('#mrForm input[type="submit"][name="_NNext"]').click()
	}
	var stop = function() {
		console.log('stopping')
		$('#mrForm input[type="submit"][name="_NStop"]').click()
	}
	var goBackward = function() {
		console.log('going back a page')
		$('#mrForm input[type="submit"][name="_NPrev"]').click()
	}
	key('alt+c', goForward)

	key('alt+x', stop)

	key('alt+z', goBackward)

	/**
	 * Randomly input strings in every text area
	 */
	var textareas = $('textarea')
	var genRandomStrInTextareas = function() {
		console.info('Generating random strings...')
		if (textareas.length == 0) { 
			console.log('No textareas...')
			return
		}
		textareas.each(function(i, e) {
			$(e).val(randomString(100))
		})
	}

	/** 
	 * Randomly select a bunch of inputs
	 */
	var nameMap = {}
	var allRadios = $('input[type="radio"]')
	var randomCheckRadios = function() {
		console.info('Selecting random inputs...')
		// map them all by name first
		allRadios.each(function(i, e) {
			e = $(e)
			var name = e.attr('name')
			if (nameMap[name] == null) {
				nameMap[name] = [e]
			} else {
				for (var savedName in nameMap) {
					if (name == savedName) {
						nameMap[name].push(e)
					}
				}
			}
		})
		// console.log('Mapped inputs: ', nameMap)
		// then go through each name mapping and randomly check one
		for (var name in nameMap) {
			var array = nameMap[name]
			var randomIndex = randomNumber(0, array.length - 1)

			var randomEl = array[randomIndex]
			randomEl.prop('checked', true)
		}
	}

	// localhost or staging we can use alt+u
	var keyStrokes = 'alt+u'
	// otherwise, lets randomise to prevent respondents from accidentally doing it
	if (/esurvey\.bpanz/.test(window.location.href)) {
		var randomKey1 = randomString(1)
		// can't use the letter 'o', as having it as the first key in a ctrl+alt key combo hides the window in Chrome!
		while (randomKey1 === 'o') randomKey1 = randomString(1)
		var randomKey2 = randomString(1)
		while (randomKey2 === randomKey1) randomKey2 = randomString(1)
		keyStrokes = 'ctrl+alt+' + randomKey1 + '+' + randomKey2        
		console.info('Debug code: ' + randomKey1 + randomKey2)
	} else {
		// Add classification text, except on Internet Explorer.
		// Causes an issue when setting `position` to `relative`.
		if (!detectIE()) {
			classifyPage();
		}

		// Enter random inputs
		key('alt+i', function() {
			genRandomStrInTextareas()
			randomCheckRadios()
		})

		// Print classified version
		key('ctrl+p', function(e) {
			e.preventDefault();
			var title = document.title;
			document.title = getPageTitle();
			window.print()
			document.title = title;
		})
		// Print classified version
		key('alt+p', function(e) {
			e.preventDefault();
			$('.classification.-radio, .classification.-text, .classification.-fsm').show()
			var title = document.title;
			document.title = getPageTitle();
			window.print()
			document.title = title;
			$('.classification.-radio, .classification.-text, .classification.-fsm').hide()
		})

		// Toggle question text
		key('alt+q', function() {
			toggleClassification('.classification.-radio, .classification.-text', '-c')
		})

		// Toggle analysis values
		key('alt+a', function() {
			toggleClassification('.classification.-analysis', '-a')
		})

		// Toggle FSM
		key('alt+w', function() {
			toggleClassification('.classification.-fsm', '-f')
		})
	}
	key(keyStrokes, function() {
		genRandomStrInTextareas()
		randomCheckRadios()
		setTimeout(function() { goForward() }, 500)
		$("html, body").animate({ scrollTop: $(document).height() }, 500)
	})
})

window.moveContent = function moveContent(target, destination) {
	if (!(target instanceof ($ || jQuery))) target = $(target)
	if (!(destination instanceof ($ || jQuery))) destination = $(destination)

	target.css({'visibility':'visible'}).show()
	target.detach()
	
	target.appendTo(destination)
}

if (!String.prototype.format) {
	String.prototype.format = function() {
	var args = arguments;
	return this.replace(/{(\d+)}/g, function(match, number) {
		return typeof args[number] != 'undefined'
		? args[number]
		: match
		;
	});
	};
}

if (!document.querySelectorAll) {
	document.find = function (selectors) {
		var style = document.createElement('style'), els = [], el;
		document.documentElement.firstChild.appendChild(style);
		document._qsa = [];

		style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
		window.scrollBy(0, 0);
		style.parentNode.removeChild(style);

		while (document._qsa.length) {
			el = document._qsa.shift();
			el.style.removeAttribute('x-qsa');
			els.push(el);
		}
		document._qsa = null;
		return els;
	}
} else {
	document.find = document.querySelectorAll
}

var UA = navigator.userAgent;
var isTouchDevice = UA.match(/iPad|iPhone|iPod|Android|Blackberry/i) != null;

var radioStatus = new Object();
function checkRadio(obj) {
	if (radioStatus[obj.name] == null) {
		radioStatus[obj.name] = obj.value;
	} else {
		if (radioStatus[obj.name] == obj.value) {
			obj.checked = false
			// dispatch change events
			if (typeof window.CustomEvent !== 'function') { // this is ie 9,10,11
				var event = document.createEvent('HTMLEvents')
				event.initEvent('change', true, true)
				obj.dispatchEvent(event)
			} else {
				var event = new Event('change', { bubbles: true })
				obj.dispatchEvent(event)
			}
			radioStatus[obj.name] = null
		} else {
			radioStatus[obj.name] = obj.value;
		}
	}
}
function setProperty () {
	if (document.mrForm != null) {
		var inputs = document.find('[type=radio]')
		for (var i=0; i<inputs.length; i++) {
			var el = inputs[i];
			el.onclick = function() { checkRadio(this); }
			if (el.checked) {
				radioStatus[el.name] = el.value
			}
		}
	}
}

/**
 * Gets the page title and number.
 */
function getPageTitle() {
	var title = '';
	var coverpage = 'coverpage';
	var definitions = 'definitions';

	// Check for some known pages
	var page_classes = $('.page').attr('class');

	if (page_classes) {
		if (page_classes.indexOf(coverpage) >= 0) {
			title = '01 Coverpage';
			} else if (page_classes.indexOf(definitions) >= 0) {
				title = '02 Definitions';
			} else {
				// Try and find the page number
				var num = $('.pageInfoElement span:first-child').text().split(/\//, 1);
				title = $('.header-bar > h1').text().replace(/[<>:"\/\\|?*]+/g, '');
				
				// Prepend page number to title
				try {
					num = Number(num[0]) + 2;
	
					if (num < 10) {
						num = '0' + num;
					}
				} catch (error) {
					console.log('Error getting page number.');
				}
	
			title = num + ' ' + title;
		}
	} else {
		title = document.title;
	}

	return title
}

/**
 * Control the display of an element, based upon a demographic selection
 *
 * @param {string} selector jQuery ID selector of parent
 * @param {number} response Array ID of demographic response (i.e. Yes = 1 would be ID 0)
 */
function controlDisplay(selector, response) {
	if ($(selector).length > 0) {
		var questionRadios = $(selector + ' input[type="radio"]');
	
		// Check if radios are set already
		if (questionRadios[response].checked) {
			$(selector + '_hidden').show();
		}
	
		// Attach on change events
		$(questionRadios).change(function () {
			if (questionRadios[response].checked) {
				$(selector + '_hidden').fadeIn('fast');
			} else {
				$(selector + '_hidden').fadeOut('fast');
			}
		});
	}
}

setProperty()

var orgn_name = "BPA";
var orgn_name_short = ".";
var survey_title = "Test Survey";
var M = 'Manager ', E = 'Executive ', S = 'Supervisor ', G = 'General ', C = 'Chief ', O = 'Officer ', l = '</li><li>', le = '</em>'+l;
var D = 'Director ', sd = 'State Director, ', n = ' - <em>';
var toolTips = {
	'orga': 'Where you see the word <strong>organisation</strong> used throughout this survey it refers to ' + orgn_name + '.',
	'exec': '<strong>Executive Management</strong> is defined as: <ul><li></li></ul>',
	'seni': '<strong>Senior Management</strong> is defined as: <ul><li></li></ul>',
	'midd': '<strong>Middle Management</strong> is defined as: <ul><li></li></ul>',
	'bull': '<strong>Harassment or bullying is ...</strong><br />A repetitive pattern of intimidating or dehumanising behaviour towards an individual or group. This includes behaviour intended to be belittling, humiliating, aggressive, threatening, or deliberately insulting.<br /><br /><strong>Harassment or bullying is NOT ...</strong><br />To be confused with legitimate and appropriate decisions, directions or advice from managers regarding delegation of tasks, work performance, or work related behaviour.',
	'sexu': '<strong>Sexual harassment is ...</strong><br />Unwelcome sexual advances, sexual innuendo or any other unwelcome conduct of a sexual nature by which a reasonable person would be offended, humiliated, or intimidated.',
	'disc': '<strong>Discrimination is ...</strong><br />Treating a person with an identified attribute or personal characteristic less favourably than a person who does not have the attribute e.g. based on race, colour, ethnicity, and/or pregnancy.',
	'gend': '<strong>Gender-based discrimination is ...</strong><br />Discrimination based on gender.',
	'viol': '<strong>Occupational violence is ...</strong><br/>Any incident where an employee is abused, harassed, threatened, or assaulted <strong>by patients and consumers, their relatives and friends or members of the public,</strong> in circumstances arising out of, or in the course of, their employment, irrespective of the intent for harm.',
	'favo': '<strong>Favouritism is ...</strong><br />Unfair or inequitable decision making in respect to:<ul><li>task or job allocation.</li><li>shifts/roster allocation.</li><li>development opportunities.</li><li>higher duty and promotional opportunities.</li><li>selection processes.</li></ul>',
	'work': '<strong>Workplace safety</strong> means addressing problems caused by:<ul><li>Inadequate workplace design, outdated infrastructure, lack of, or inappropriate use of workplace equipment; or</li><li>Nature of the work or types of clients; or</li><li>Poor physical security, exposure to violent or aggressive people, or exposure to people undertaking illegal activity; or</li><li>Contact risk (e.g. poor hygiene, chemicals, bacteria, asbestos, smoking, or any work requiring protective clothing); or</li><li>Inadequate staffing, training or support; or</li><li>Failure to follow protocols or to address known safety problems.</li></ul>',
	'fair': '<strong>Fairness includes:</strong> treating people in a balanced and reasonable manner.',
	'equa': '<strong>Equality includes:</strong> treating people justly and without favouritism and discrimination.',
	'unde': 'This is an example of a definition!',
	'disa': 'For the purposes of this survey, disability is considered to be one or more impairments that impact on daily life and last (or could be expected to last) for six months or longer.',
	'workplace': 'This includes people you come in contact with as you go about your daily work, and they may be outside your work team.',
	'team': 'The people you work with on a day-to-day basis.',
}
toolTips['hara'] = toolTips['bull']
var writeables = document.find('[write]')
for (var i = 0; i<writeables.length;i++) {
	var el = writeables[i]
	var elName = el.getAttribute('name') || el.getAttribute('id')
	el.innerHTML = toolTips[elName]
	el.className = ''
	el.removeAttribute('name')
	el.removeAttribute('title')
}
for (var t in toolTips) {
	var name = t.toString();
	var tooltipElement
	var tooltipSearch = $('#' + name + ':not([write])')
	if (tooltipSearch.length) { tooltipElement = tooltipSearch }
	else { tooltipElement = $('[name="' + name + '"]:not([write])') }

	tooltipElement.each(function(i, e) {
		e.setAttribute('title', toolTips[name])
		if (isTouchDevice) { e.style.cursor = 'pointer' }
	})
	// var tooltipElement = $(name).length
	// var els = document.getElementById(name) || document.getElementsByName(name)
	// if (els.length) {
	//     for (var _eli = 0; _eli < els.length; _eli++) {
	//         var _element = els[_eli]
	//         _element.setAttribute('title', toolTips[name])
	//         if (isTouchDevice) {
	//             el.style.cursor = "pointer"
	//         }
	//     }
	// }
}
// var toolTipKeys = ['unde','orga','seni','bull','hara','favo']
// for (var i = 0; i < toolTipKeys.length; i++) {
//     name = toolTipKeys[i]

// }

var $sts = $("#scale_tooltips_section, .scale_tooltips_section");

/* Change the Title of HTML file for Analytics purposes. */
document.title = "eSurvey - Best Practice Australia | " + orgn_name;

/**
 * Automatic progress bar calculation
 */
(function() {
	var estimated_progress_calculation = $('.pageInfoElement span:first-child').text()
	var estimated_progress = Math.round(eval(estimated_progress_calculation) * 100)
	var progress_bar = $('#progressBar')
	var progress_bar_width = (estimated_progress / 100) * progress_bar.width()
	progress_bar.children().first().animate({ width: progress_bar_width }, 500).html(estimated_progress + '%')
	$(".label").html(estimated_progress + "%" + " completed");
})();


/**
 * Hack for IE6-8 to have first-child and last-child
 */
if (/\bMSIE/.test(UA)) {
	var f = 'first-child', l = 'last-child'
	$("body *:"+f).addClass(f);
	$("body *:"+l).addClass(l);
}

// Question text in name attribute
var questionRegex = /^[\w]+?_Q(?:f)?([\w]+?)(?:_C[_\d]*)?$/
// Message in a Bottle Regex
var messageRegex = /__MessageinaBottle/i

// Big list of 'middle length' text id's
var midlength = ['21832','21925','21835','21926','11559','22311','37318','22312','37319','36972','12199','22183','01181','01182','21690','10275','19110','22253','36942','22254','37215','36848','21727','21726','21725','21748','21749','21750','07544','07543','07545','11574','11573','11575','04938','04937','04936','10548','04724','36928','36929','36930','36931','36932','36934','36935','04450'];

// Updates the character warning message for text inputs
function getBoxMessage (box) {
	// Standard text limit is 250 characters
	var textinputlimit = 250;
	
	// Set Message in a Bottle to 1000
	if (messageRegex.test(box.name)) { textinputlimit = 1000; }

	// Set selected fields to 500 characters
	var fieldid = box.name.match(questionRegex)
	if (fieldid !== null) { fieldid = fieldid[1].substring(0,5); }
	if (midlength.indexOf(fieldid) >= 0) { textinputlimit = 500; }

	var max = box.getAttribute('maxlength') ? box.getAttribute('maxlength') : textinputlimit;
	var count = box.value.length;
	count = max - count;
	var s = count != 1 && count != -1 ? 's' : '';
	var c = count >= 0 ? 'black' : 'red';
	var t = count >= 0 ? 'remaining' : 'over limit';
	var message =  count < 200 ? "<div style='margin-left:1em;color:{3}'><strong>&#187; {0} character{1} {2}</strong></div>".format(Math.abs(count), s, t, c) : '';
	return message
}
var boxes = document.find('textarea');
if (boxes.length > 0) {
	for (var i = 0; i < boxes.length; i++) {
		var box = boxes[i];
		var counter = document.createElement('div');
		counter.id = '{0}_counter'.format(box.name);
		counter.className  = 'character-counter';
		counter.innerHTML = getBoxMessage(box);
		counter.style.display = "none"
		box.parentElement.appendChild(counter);
		if (!!counter.innerHTML) {
			counter.style.display = "block"
		}
		box.onkeyup = function () {
			var counter = document.getElementById('{0}_counter'.format(this.name));
			counter.innerHTML = getBoxMessage(this);
			if (!!counter.innerHTML) {
				counter.style.display = "block"
			} else {
				counter.style.display = "none"
			}
		}
	}
}

var arr = ['Strongly A', 'A', 'Somewhat A', 'Somewhat Disa', 'Disa', 'Strongly Disa'];
var val = '[value$={0}]'

var el = $('#expectation_orgn');
var str = 'I <strong>{0}gree</strong> {1} <br /> meets this expectation.';

var sub = 'the organisation'
if (!!el) {
	for (var i=0; i<arr.length; i++) {
		el.find(val.format(i+1)).attr('title', str.format(arr[i], sub));
	}
}

el = $('#expectation_exec')
sub = 'my organisation\'s Leadership Team'
if (!!el) {
	for (var i=0; i<arr.length; i++) {
		el.find(val.format(i+1)).attr('title', str.format(arr[i], sub));
	}
}

el = $('#expectation_mgr')
sub = 'my manager'
if (!!el) {
	for (var i=0; i<arr.length; i++) {
		var _val = val.format(i+1)
		var _str = str.format(arr[i], sub)
		var _el = el.find(_val)
		_el.attr('title', _str);
	}
}

el = $('#expectation_people')
sub = ' the People I Work With'
if (!!el) {
	for (var i=0; i<arr.length; i++) {
		el.find(val.format(i+1)).attr('title', str.format(arr[i], sub));
	}
}

el = $('#expectation_pt, #expectation_client')
str = 'I <strong>{0}gree</strong> this expectation<br />is being met.'
if (!!el) {
	for (var i=0; i<arr.length; i++) {
		el.find(val.format(i+1)).attr('title', str.format(arr[i]));
	}
}

el = $('#expectation_dpt')
str = 'I <strong>{0}gree</strong> my department <br />meets this expectation.'
if (!!el) {
	for (var i=0; i<arr.length; i++) {
		el.find(val.format(i+1)).attr('title', str.format(arr[i]));
	}
}

el = $('.coaching1')
if (!!el) {
	arr = ['Regularly', 'Sometimes', 'Never']
	for (var i=0; i<9; i++) {
		el.find(val.format(i+1)).attr('title', arr[i]);
	}
}

el = $('.coaching2')
if (!!el) {
	arr = ['As Appropriate', 'Sometimes', 'Never']
	for (var i=0; i<9; i++) {
		el.find(val.format(i+1)).attr('title', arr[i]);
	}
}

el = $('#values_promotion')
if (!!el) {
	arr = ['Yes', 'Not Sure', 'No']
	for (var i=0; i<arr.length; i++) {
		el.find(val.format(i+1)).attr('title', arr[i]);
	}
}

el = $('#feedback')
if (!!el) {
	arr = ['Yes', 'Not Sure', 'No', 'Not employed here at the time']
	for (var i=0; i<arr.length; i++) {
		el.find(val.format(i+1)).attr('title', arr[i]);
	}
}

el = $('#initiatives')
if (!!el) {
	arr = ['Positive Impact', 'No Impact', 'Negative Impact', 'Not applicable']
	for (var i=0; i<arr.length; i++) {
		el.find(val.format(i+1)).attr('title', arr[i]);
	}
}

el = $('.ValueExec')
if (!!el) {
	arr = [
		'I strongly agree my organisation\'s <strong>Senior Leadership Team</strong> put this value into practice.',
		'I agree my organisation\'s <strong>Senior Leadership Team</strong> put this value into practice.',
		'I somewhat agree my organisation\'s <strong>Senior Leadership Team</strong> put this value into practice.',
		'I somewhat disagree  my organisation\'s <strong>Senior Leadership Team</strong> put this value into practice.',
		'I disagree my organisation\'s <strong>Senior Leadership Team</strong> put this value into practice.',
		'I strongly disagree my organisation\'s <strong>Senior Leadership Team</strong> put this value into practice.'
	]
	for (var i=0; i<arr.length; i++) {
		var _elements = el.find(val.format(i+1)).attr('title', arr[i]);
	}
}

el = $('.ValueManager')
if (!!el) {
	arr = [
		'I strongly agree <strong>my Manager/Supervisor</strong> puts this value into practice.',
		'I agree <strong>my Manager/Supervisor</strong> puts this value into practice.',
		'I somewhat agree <strong>my Manager/Supervisor</strong> puts this value into practice.',
		'I somewhat disagree  <strong>my Manager/Supervisor</strong> puts this value into practice.',
		'I disagree <strong>my Manager/Supervisor</strong> puts this value into practice.',
		'I strongly disagree <strong>my Manager/Supervisor</strong> puts this value into practice.'
	]
	for (var i=0; i<arr.length; i++) {
		var _elements = el.find(val.format(i+1)).attr('title', arr[i]);
	}
}

el = $('.ValuePrac')
if (!!el) {
	arr = [
		'I strongly agree <strong>the People I Work With</strong> put this value into practice.',
		'I agree <strong>the People I Work With</strong> put this value into practice.',
		'I somewhat agree <strong>the People I Work With</strong> put this value into practice.',
		'I somewhat disagree  <strong>the People I Work With</strong> put this value into practice.',
		'I disagree <strong>the People I Work With</strong> put this value into practice.',
		'I strongly disagree <strong>the People I Work With</strong> put this value into practice.'
	]
	for (var i=0; i<arr.length; i++) {
		var _elements = el.find(val.format(i+1)).attr('title', arr[i]);
	}
}

el = $('#the_issues_that_matter')
if (!!el) {
	arr = ['The organisation <strong>already does this well</strong>.','There is room for the organisation to <strong>improve on this issue</strong>.','There is <strong>cause for significant concern</strong>.<br />This needs urgent attention.'];
	for (var i = 0; i < arr.length; i++) {
		el.find(val.format(i+1)).attr('title', arr[i]);
	}
}

el = $('#integrity_at_work')
if (!!el) {
	arr = ['<strong>Everyone I work with on a daily basis performs well</strong> on this criterion (as far as I am aware).','There are <strong>some lapses</strong> but nothing to be concerned about.','There is <strong>cause for concern</strong> on this criterion (even if it is only 1 person)'];
	for (var i = 0; i < arr.length; i++) {
		el.find(val.format(i+1)).attr('title', arr[i]);
	}
}

el = $('#client_safety')
if (!!el) {
	arr = ['There is <strong>no cause for concern</strong> on this criterion (as far as I am aware)','There may be <strong>some potential signs</strong> but nothing to act on at this time','There is <strong>cause for concern</strong> for at least one resident'];
	for (var i = 0; i < arr.length; i++) {
		el.find(val.format(i+1)).attr('title', arr[i]);
	}
}

el = $('.nav#repl')
if (!!el) {
	el.html('<input type="submit" name="_NStop" value="Stop &amp; Save" title="Click to save your progress and return later"/> <input type="submit" name="_NNext" class="mrNext" value="Next" title="Click to proceed to the next page"/>')
}

el = $('.survey-nav#repl')
if (!!el) {
	el.html('<input type="submit" name="_NStop" value="Stop &amp; Save" title="Click to save your progress and return later"/> <input type="submit" name="_NNext" class="mrNext" value="Next" title="Click to proceed to the next page"/>')
}

if ($sts.length) {
	$sts.find("[value$=_1]").attr('title', '1. Strongly Agree');
	$sts.find("[value$=_2]").attr('title', '2. Agree');
	$sts.find("[value$=_3]").attr('title', '3. Somewhat Agree');
	$sts.find("[value$=_4]").attr('title', '4. Somewhat Disagree');
	$sts.find("[value$=_5]").attr('title', '5. Disagree');
	$sts.find("[value$=_6]").attr('title', '6. Strongly Disagree');
	$sts.find("[value$=_7]").attr('title', 'Not Applicable');
};


el = document.querySelector('.demo7 label[for=_Q0_C3]');
if (!!el) {
	el.style.display='inline-block';
	el.style.width='80%';
	el.style.verticalAlign='top';
	// el.innerHTML = el.innerHTML.replace('<small>(', '<br/><small>(');
}

$(document).tooltip({
	content: function () {
		var title = this.getAttribute('title')
		if (isTouchDevice) {
			if (this.type == 'submit') {
				return false
			} else if (this.type == 'radio') {
				return title
			} else if (title != null ) {
				return title
			} else {
				return false
			}
		} else if (title != null) {
			return title
		}
	},
	open: function (event, ui) {
		if(isTouchDevice) {
			setTimeout(function() {
				$('.ui-tooltip').fadeOut('fast')
			}, 3000);
		}
	},
	position: {
		my: "left-10 bottom-25"
	}
})

// Automatically focus the password input on authentication pages
$('input[name=_QSMAuth_QId]').focus();

/*
 * 'Floats' a DOM element, immitating the sticky CSS3 position attribute
 * A simplified version of jimmiw's jquery floating menu plugin
 */
$.fn.floatelement = function(topPadding) {
	// Get element to float
	var obj = $(this);

	// Get current position
	var position = $(obj).offset(),
	cssPosition = $(obj).css('position');

	// Sets default position if not set
	if(cssPosition == '') cssPosition = 'static';

	// Watch for scrolling events
	$(window).scroll(function(e) {
		// Toggle element to float (fixed) or remain stationary (static)
		if($(window).scrollTop() > (position.top - Number(topPadding))) {
			$(obj).css('position','fixed').css('top', topPadding);
		} else {
			$(obj).css('position', cssPosition);
		}
	});
};

function validateMultipleSelection(selector) {
	var MultipleRadios = $(selector + ' input[type="checkbox"]');

	if (MultipleRadios.length > 0) {
		// Attach on change events
		$(MultipleRadios).change(function (e) {
			$(MultipleRadios).each(function(i, radio) {
				if (radio.id !== e.target.id) {
					$(radio).prop('checked', false);
				}
			})
		});
	}
}

validateMultipleSelection('#feedback_goldilocks');

/** Add classification text to question radios and textareas */
function classifyPage() {
	/** Store question text to only show a value once for each radio */
	var questions = []
	
	var radioinputs = $('input[type="radio"].mrSingle, input[type="checkbox"].mrMultiple')
	var textinputs = $('textarea.mrEdit')

	var classifyInput = function(input, type) {
		var name = $(input).attr('name')
		var value = $(input).attr('value')
			
			// Classify question
			if (name !== null) {
				name = name.match(questionRegex)
				
				if (name !== null) {
					name = name[1].replace(/__/g, '_')
	
				if (questions.indexOf(name) < 0) {
					questions.push(name)

					$(input).parent().css('position','relative').append($('<div>', { class: 'classification ' + type, text: name }))

					calculateFSM(name, type)
				}
			}

			// Add analysis values
			if (value !== undefined) {
				value = value.replace(/__/g, '')

				$(input).parent().css('position','relative').append($('<div>', { class: 'classification -analysis', text: value }))
			}
		}
	}
	
	// Add classifieds
	$(radioinputs).each(function(index, radio) { classifyInput(radio, '-radio') })
	$(textinputs).each(function(index, textarea) { classifyInput(textarea, '-text') })

	// Add FSM
	if (FSM > 0) {
		$('.header-bar').append($('<div>', { class: 'classification -fsm', text: 'FSM = ' + FSM }))
	}

	// Show classification if cached for this session
	var i_session = $('input[name="I.Session"]').val();
	if (i_session) {
		var cache = ['-c','-a','-f'].map(function(v) { return getStorage(i_session + v) });
		for (var i = 0; i < cache.length; i++) {
			if (cache[i] !== null) {
				$(cache[i]).show();
			}
		}
	}
}

/**
 * Checks cache for this survey session, to see if a classification types
 * has been toggled on or off. Handles no session and cookies disabled by
 * reverting to toggle functionality only.
 *
 * Types:
 * - '-c' Question classifications
 * - '-a' Analysis values
 * - '-f' Fair Survey Measure
 *
 * @param {string} name jQuery selector for the elements to show or hide
 * @param {string} type Code for the cache type
 */
function toggleClassification(name, type) {
	var i_session = $('input[name="I.Session"]').val();
	if (i_session) {
		var cache = getStorage(i_session + type);
		if (cache === '' || cache === null) {
			$(name).show();
			setStorage(i_session + type, name);
			return
		} else if (cache !== null && cache !== undefined) {
			$(cache).hide();
			setStorage(i_session + type, '');
			return
		}
	}
	$(name).toggle()
}

/** Fair Survey Measure */
var FSM = 0;

/** ID's of Polarised questions (i.e. any `Scale1to6Positive` question) and NPS */
var polarised = ['21833','21834','01183','01184','01200','01192','01201','01194','01195','01197','01198','01199','10146','10147','10148','01185','01186','01187','01188','01189','01190','01191','05574','05575','05576','05577','05578','05579','05580','05581','05582','01269','01270','01271','01272','01273','01274','01247','01248','01249','01250','01251','05396','05397','05399','05400','01255','04459','06116','06117','06120','11224','11225','11226','11219','11220','11221','11222','11223','14764','14763'];

/**
 * Calculates the FSM for a given question and increments the global FSM counter.
 * - Quantitative: 0.5
 * - NPS/Polarised: 1
 * - Truly Great Text: 1
 * - Text: 2
 * - Message: 5
 *
 * @param {string} name Question name (e.g 01183_Optimism01)
 * @param {string} type Question type (e.g. -radio, -text)
 */
function calculateFSM(name, type) {
	if (type === '-radio') {
		if (polarised.indexOf(name.substring(0,5)) >= 0) {
			FSM += 1; // NPS and Polarised questions have an FSM of 1 each
		} else if (/^(?:ph_)?D[\w]+/i.test(name)) {
			FSM += 0; // Demographics are 0.3 FSM per option, but ignored for most calculations
		} else {
			FSM += 0.5; // Quantatative questions have an FSM of 0.5 each
		}
	} else if (type === '-text') {
		if (/MessageinaBottle/i.test(name)) {
			FSM += 5; // Message in a Bottle has an FSM of 5
		} else if (/^(01181|01182)/i.test(name)) {
			FSM += 1; // Truly Great text questions have an FSM of 1 each
		} else {
			FSM += 2; // Text questions have an FSM of 0.5 each
		}
	} else {
		console.log(type + ' is not a type calculated in FSM.')
	}
}


/** START DATA ENTRY */

// Validate keystrokes, only numbers and general keys like TAB, Enter, Arrows, etc
var a = [0,8,9,13,27,37,38,39,40,48,49,50,51,52,53,54,55,56,57,58];

var input_by = $('.input_by');
if (input_by.length > 0) {
	var employee_id = $('#_Q0');
	setEmployeeIdText(employee_id);

	$(input_by).keypress(function(e) {
		if (!(a.indexOf(e.which)>=0))
			e.preventDefault();
	});
	
	employee_id.bind('input propertychange', function () {
		setEmployeeIdText(employee_id);
	});
}

function setEmployeeIdText(employee_id) {
	// Disable 'Next' button
	$('input[name="_NNext"]').attr('disabled', true);
	var text = 'Enter valid Employee ID';
	$('.employee_id').removeClass('-valid');

	$.each(employee_ids, function(key, value) {
		if (employee_id.val() === '57') {
			text = '57 is a reserved employee ID.';
		} else if (employee_id.val() === key) {
			// Valid Employee ID
			text = 'Survey input by: ' + value;
			$('.employee_id').addClass('-valid');
			$('input[name="_NNext"]').removeAttr('disabled');
		}
	});

	$('.employee_id').text(text);
}


/** END DATA ENTRY */

// Stop tooltip from showing hack
var preventTooltip = false;

// Map of valid number keys
var codemap = {
	'ZERO': 48,
	'ONE': 49,
	'TWO': 50,
	'THREE': 51,
	'FOUR': 52,
	'FIVE': 53,
	'SIX': 54,
	'SEVEN': 55,
	'EIGHT': 56,
	'NINE': 57,
	'NUM_ZERO': 96,
	'NUM_ONE': 97,
	'NUM_TWO': 98,
	'NUM_THREE': 99,
	'NUM_FOUR': 100,
	'NUM_FIVE': 101,
	'NUM_SIX': 102,
	'NUM_SEVEN': 103,
	'NUM_EIGHT': 104,
	'NUM_NINE': 105,
};


/** Select and classify each input on the page */
var $radios = $(':radio.mrSingle');
var $groups = {};
$radios.each(function() {
	var match = this.name.match(questionRegex);
	var name = '';
	try {
		name = match[0];
		// Exclude demographics
		if (/^(?:ph_)?Demo[\w]+/i.test(match[1]))
			return
	} catch (e) {
		return
	}
	var value = this.value.replace(/__/g, '');

	// Add question to dict
	if ($groups[name] === undefined) {
		$groups[name] = {
			index: Object.keys($groups).length,
			values: [value]
		}
	} else {
		$groups[name].values.push(value);
	}
})

/** Attach key events to each radio */
Object.keys($groups).forEach(function(key, index) {
	// Get the next control group
	var next = undefined;
	Object.keys($groups).forEach(function(a, b) {
		if (b === index + 1) {
			next = a;
			return;
		}
	})
	
	// Go through each radio control and attach keyup event
	$('input[name*=' + key + ']').each(function(i, e) {
		$(e).each(function(k, v) {
			$(v).keyup(function(event) {
				switch (event.which) {
					case codemap['ZERO']:
					case codemap['NUM_ZERO']:
						focusRadio(key, 0, next);
						break;
					case codemap['ONE']:
					case codemap['NUM_ONE']:
						focusRadio(key, 1, next);
						break;
					case codemap['TWO']:
					case codemap['NUM_TWO']:
						focusRadio(key, 2, next);
						break;
					case codemap['THREE']:
					case codemap['NUM_THREE']:
						focusRadio(key, 3, next);
						break;
					case codemap['FOUR']:
					case codemap['NUM_FOUR']:
						focusRadio(key, 4, next);
						break;
					case codemap['FIVE']:
					case codemap['NUM_FIVE']:
						focusRadio(key, 5, next);
						break;
					case codemap['SIX']:
					case codemap['NUM_SIX']:
						focusRadio(key, 6, next);
						break;
					case codemap['SEVEN']:
					case codemap['NUM_SEVEN']:
						focusRadio(key, 7, next);
						break;
					case codemap['EIGHT']:
					case codemap['NUM_EIGHT']:
						focusRadio(key, 8, next);
						break;
					case codemap['NINE']:
					case codemap['NUM_NINE']:
						focusRadio(key, 9, next);
						break;
				}
			})
		})
	})
})

/**
 * Focuses and selects a radio input before focusing the next control group.
 * @param {string} name Input's name attribute
 * @param {number} key Number pressed
 */
function focusRadio(name, key, next) {
	try {
		var $radio = $('input[name=' + name + '][value=__' + key + ']');
		if ($radio.length === 0)
			return
		
		preventTooltip = true;
		$($radio).focus().click();
		$('input[name=' + next + ']').first().focus();
		preventTooltip = false;
	} catch (e) {
		return
	}
}


/**
 * Gets data from the browsers Local Storage.
 * @param {string} key Key for data in storage
 * @returns {string | null} Data as a `string` or `null` if data has not been set
 */
function getStorage(key) {
	try {
		return window.sessionStorage.getItem(key)
	} catch (e) {
		return null
	}
}

/**
 * Sets or Updates data in the browsers Local Storage.
 * @param {string} key Key to save item in storage
 * @param {string} data Data as a `string`
 */
function setStorage(key, data) {
	try {
		window.sessionStorage.setItem(key, data)
	} catch (e) {
		return
	}
}

/**
 * Detects if the browser is Internet Explorer, otherwise returns false.
 * @returns {boolean} `true` if IE strings are detected in the browser useragent 
 */
function detectIE() {
	var ua = window.navigator.userAgent;

	// IE 10 or older
	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	// IE 11
	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	// Another browser
	return false;
}

/**
 * In position options, use RegEx to change the text between brackets to smaller Italics.
 */
$(".posdemo1 [id^='Cell.0.'] span").each(function() {
	var text = $(this).text().replace(/\((.*?)\)/,"<em style='font-size: 0.8em;'>($1)</em>");
	$(this).html(text);
});


/* Move radios into 3 columns*/
// $(".three_col_pos [id^='Cell.0.']").each(function(i, element) {
// 	i++;
// 	if (i >= 1 && i <= 17) {
// 		moveContent(element, '#hospital');
// 	} else if (i >= 18 && i <= 21) {
// 		moveContent(element, '#pharmacy');
// 	} else {
// 		moveContent(element, '#prefernottosay');
// 	}
// });

function radiosChecked(radios) {
	var isChecked = false

	$(radios).each(function(index, radio) {
		if (radio.checked)
			isChecked = true;
	});

	return isChecked
}

/**
 * Checks a radio group for an expectation textarea.
 */
function validateExpectation(text, radios, message_radio, message_text) {
	console.log('validateExpectation...')
	var expectInterval = null;
	if (radiosChecked(radios)) { // Radios checked
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
}

/** Attach events on load to expectation questions */
var $expectations = $('.satisfied-expectation');
if ($expectations.length > 0) {
	$expectations.each(function(index, expectation) {
		// Get text area and radios
		var expect_text = $(expectation).find('textarea.mrEdit');
		var expect_radio = $(expectation).find('input.mrSingle');
		var expect_message_radio = $(expectation).find('div.message-radio');
		var expect_message_text = $(expectation).find('div.message-text');
	
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


// Thank you for completing the survey
// if ($('#YesCasual').length > 0) {
// 	var YesCasual = $('#YesCasual input[type="radio"]');
	
// 	// Check if radios are set already
// 	if (YesCasual[0].checked) {
// 		$('#PaidFor').show();
// 	}

// 	// Attach on change events
// 	$(YesCasual).change(function () {
// 		if (YesCasual[0].checked) {
// 			$('#PaidFor').fadeIn('fast');
// 		} else {
// 			$('#PaidFor').fadeOut('fast');
// 		}
// 	});
// }



/* work units key value store: key is the keyword contained in work unit name while value is the HTML class name*/
var workUnits = {
	'School Crossing Supervisors (Cardinia)' : 'SCS',
}

// Finished loading, remove icon and store work unit
var selected_unit_text = $('.selected-workunit .mrQuestionText').text().trim();

//DEBUG
// selected_unit_text = "School Crossing Supervisors (Cardinia)";
console.log(selected_unit_text);

if (selected_unit_text.indexOf('School Crossing Supervisors (Cardinia)') >= 0) {
	$('.SCS').show();
} else {
	$('.SCS').hide();
}
