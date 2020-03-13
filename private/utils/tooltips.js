let toolTips = {
  definitions: {
    'orga': 'Where you see the word <strong>organisation</strong> used throughout this survey it refers to {{ CLIENT }}.',
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
  },

  hoverText() {
    const UA = navigator.userAgent;
    const isTouchDevice = UA.match(/iPad|iPhone|iPod|Android|Blackberry/i) != null;
    let definitions = this.definitions;
    definitions['hara'] = definitions['bull'];
    for (let t in definitions) {
      let name = t.toString();
      let tooltipElement;
      let tooltipSearch = $('#' + name + ':not([write])');
      if (tooltipSearch.length) { tooltipElement = tooltipSearch }
      else { tooltipElement = $('[name="' + name + '"]:not([write])') }

      tooltipElement.each(function(i, e) {
        e.setAttribute('title', definitions[name])
        if (isTouchDevice) { e.style.cursor = 'pointer' }
      })
    }
  },

  hoverRadios() {
    let $sts = $("#scale_tooltips_section, .scale_tooltips_section");
    if ($sts.length) {
      $sts.find("[value$=_1]").attr('title', '1. Strongly Agree');
      $sts.find("[value$=_2]").attr('title', '2. Agree');
      $sts.find("[value$=_3]").attr('title', '3. Somewhat Agree');
      $sts.find("[value$=_4]").attr('title', '4. Somewhat Disagree');
      $sts.find("[value$=_5]").attr('title', '5. Disagree');
      $sts.find("[value$=_6]").attr('title', '6. Strongly Disagree');
      $sts.find("[value$=_7]").attr('title', 'Not Applicable');
    };

    let arr = ['Strongly A', 'A', 'Somewhat A', 'Somewhat Disa', 'Disa', 'Strongly Disa'];
    let val = '[value$={0}]'
    
    let el = $('#expectation_orgn');
    let str = 'I <strong>{0}gree</strong> {1} <br /> meets this expectation.';
    
    let sub = 'the organisation'
    if (!!el) {
      for (let i=0; i<arr.length; i++) {
        el.find(val.format(i+1)).attr('title', str.format(arr[i], sub));
      }
    }
    
    el = $('#expectation_exec')
    sub = 'my organisation\'s Leadership Team'
    if (!!el) {
      for (let i=0; i<arr.length; i++) {
        el.find(val.format(i+1)).attr('title', str.format(arr[i], sub));
      }
    }
    
    el = $('#expectation_mgr')
    sub = 'my manager'
    if (!!el) {
      for (let i=0; i<arr.length; i++) {
        let _val = val.format(i+1)
        let _str = str.format(arr[i], sub)
        let _el = el.find(_val)
        _el.attr('title', _str);
      }
    }
    
    el = $('#expectation_people')
    sub = ' the People I Work With'
    if (!!el) {
      for (let i=0; i<arr.length; i++) {
        el.find(val.format(i+1)).attr('title', str.format(arr[i], sub));
      }
    }
    
    el = $('#expectation_pt, #expectation_client')
    str = 'I <strong>{0}gree</strong> this expectation<br />is being met.'
    if (!!el) {
      for (let i=0; i<arr.length; i++) {
        el.find(val.format(i+1)).attr('title', str.format(arr[i]));
      }
    }
    
    el = $('#expectation_dpt')
    str = 'I <strong>{0}gree</strong> my department <br />meets this expectation.'
    if (!!el) {
      for (let i=0; i<arr.length; i++) {
        el.find(val.format(i+1)).attr('title', str.format(arr[i]));
      }
    }
    
    el = $('.coaching1')
    if (!!el) {
      arr = ['Regularly', 'Sometimes', 'Never']
      for (let i=0; i<9; i++) {
        el.find(val.format(i+1)).attr('title', arr[i]);
      }
    }
    
    el = $('.coaching2')
    if (!!el) {
      arr = ['As Appropriate', 'Sometimes', 'Never']
      for (let i=0; i<9; i++) {
        el.find(val.format(i+1)).attr('title', arr[i]);
      }
    }
    
    el = $('#values_promotion')
    if (!!el) {
      arr = ['Yes', 'Not Sure', 'No']
      for (let i=0; i<arr.length; i++) {
        el.find(val.format(i+1)).attr('title', arr[i]);
      }
    }
    
    el = $('#feedback')
    if (!!el) {
      arr = ['Yes', 'Not Sure', 'No', 'Not employed here at the time']
      for (let i=0; i<arr.length; i++) {
        el.find(val.format(i+1)).attr('title', arr[i]);
      }
    }
    
    el = $('#initiatives')
    if (!!el) {
      arr = ['Positive Impact', 'No Impact', 'Negative Impact', 'Not applicable']
      for (let i=0; i<arr.length; i++) {
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
      for (let i=0; i<arr.length; i++) {
        let _elements = el.find(val.format(i+1)).attr('title', arr[i]);
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
      for (let i=0; i<arr.length; i++) {
        let _elements = el.find(val.format(i+1)).attr('title', arr[i]);
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
      for (let i=0; i<arr.length; i++) {
        let _elements = el.find(val.format(i+1)).attr('title', arr[i]);
      }
    }
    
    el = $('#the_issues_that_matter')
    if (!!el) {
      arr = ['The organisation <strong>already does this well</strong>.','There is room for the organisation to <strong>improve on this issue</strong>.','There is <strong>cause for significant concern</strong>.<br />This needs urgent attention.'];
      for (let i = 0; i < arr.length; i++) {
        el.find(val.format(i+1)).attr('title', arr[i]);
      }
    }
    
    el = $('#integrity_at_work')
    if (!!el) {
      arr = ['<strong>Everyone I work with on a daily basis performs well</strong> on this criterion (as far as I am aware).','There are <strong>some lapses</strong> but nothing to be concerned about.','There is <strong>cause for concern</strong> on this criterion (even if it is only 1 person)'];
      for (let i = 0; i < arr.length; i++) {
        el.find(val.format(i+1)).attr('title', arr[i]);
      }
    }
    
    el = $('#client_safety')
    if (!!el) {
      arr = ['There is <strong>no cause for concern</strong> on this criterion (as far as I am aware)','There may be <strong>some potential signs</strong> but nothing to act on at this time','There is <strong>cause for concern</strong> for at least one resident'];
      for (let i = 0; i < arr.length; i++) {
        el.find(val.format(i+1)).attr('title', arr[i]);
      }
    }
    
    el = $('.nav#repl')
    if (!!el) {
      el.html('<input type="submit" name="_NStop" value="Stop &amp; Save" title="Click to save your progress and return later"/> <input type="submit" name="_NNext" class="mrNext" value="Next" title="Click to proceed to the next page"/>')
    }

    el = document.querySelector('.demo7 label[for=_Q0_C3]');
    if (!!el) {
      el.style.display='inline-block';
      el.style.width='80%';
      el.style.verticalAlign='top';
      // el.innerHTML = el.innerHTML.replace('<small>(', '<br/><small>(');
    }

  },

  write() {
    let definitions = this.definitions;
    let writeables = document.find('[write]')
    for (let i = 0; i<writeables.length;i++) {
      let el = writeables[i];
      let elName = el.getAttribute('name') || el.getAttribute('id');
      el.innerHTML = definitions[elName]
      el.className = '';
      el.removeAttribute('name');
      el.removeAttribute('title');
    }
  }
}

export default toolTips;