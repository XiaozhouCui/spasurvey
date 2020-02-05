import React, { Component } from 'react'

class SurveyNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    const modules = [
      'Engagement',
      'Expectations',
      'Personal Well-Being',
      'Work-Life Integration',
      'Truly Great Place to Work',
      'Net Promoter Score',
      'Attraction & Retention',
      'Inclusion@Work',
      'Driving the Future',
      'Strategic Direction',
      'Strategic Direction Involving a Merger',
      'Statistical Groupings',
      'Acknowledgement of Diversity',
      'Standards of Behaviour',
      'Team Norms',
      'Values-In-Action',
      'The Do’s and Don’ts',
      'Advice on Living the Values',
      'Respect@Work',
      'Causes for Concern',
      'Safety@Work',
      'Workplace Safety Culture',
      'Harassment and Bullying',
      'Occupational Violence',
      'Leadership Essentials',
      'Leadership Strengths',
      'Leadership Priorities',
      'Leadership Behaviours',
      'Message in a Bottle',
      'Message in a Bottle to Designated Managers',
      'The Issues That Matter',
      'Organisational Initiatives',
      'Embracing Our Challenges',
      'Change Momentum',
      'How Are We Travelling',
      'Your Advice',
      'Client Expectations',
      'Risk of Client Abuse',
      'Client Safety Culture',
      'Statement on Intellectual Property',
      'Statement on Privacy'
    ];
    const pageNumber = modules.indexOf(this.props.page) + 1;
    const totalPages = modules.length;
    const estimated_progress = Math.round(pageNumber/totalPages * 100);
    const progress_bar = $('#progressBar');
    const progress_bar_width = (estimated_progress / 100) * progress_bar.width();
    return (
      <div>
        <div className="survey-nav">
          <input type="submit" name="_NPrev" value="Previous" title="Return to the previous page"/>
          <input type="submit" name="_NStop" value="Stop &amp; Save" title="Save your progress and return later"/>
          {estimated_progress === 100 ? <input type="submit" name="_NNext" value="Finish Survey" title="Finish and submit your response" onClick={() => confirm('Finished with your survey? Select OK to submit responses or Cancel to continue answering.')}/> : <input type="submit" name="_NNext" value="Next" title="Proceed to the next page"/>}
        </div>
        <div className="pageInfoElement">
          <div className="mrProgressBar" style={{display:'block'}}></div>
        </div>
        <div id="progressBar" className="progress">
          <div className="bar" style={{width: progress_bar_width}}>{estimated_progress + '%'}</div>
        </div>
      </div>
    )
  }
}

export default SurveyNav
