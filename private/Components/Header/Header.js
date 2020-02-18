import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    let logoImg = document.querySelectorAll("div[name='ClientLogo']");
    let logoSlot = document.querySelectorAll(".clientLogoSlot");
    if (logoImg.length === logoSlot.length) {
      for (let i = 0; i < logoImg.length; i++) {
        logoImg[i].parentNode.removeChild(logoImg[i]);
        logoSlot[i].appendChild(logoImg[i]);
      }
    }
  }

  render() {

    const titles = {
      'Cover': {
        'Cover Page': '',
        'Instructions': '',
        'Definitions': '',
      },
      'Engaging Our People': {
        'Engagement': 'Measures the positive or negative MOMENTUM in the organisation and the extent to which respondents are engaged with the leadership, purposes, and direction of the organisation.',
        'Expectations': 'Identifies the Drivers of Employee Satisfaction with the organisation, measures employee satisfaction for each driver and identifies employee frustrations in their day-to-day work.',
        'Personal Well-Being': 'Measures Employee Well-Being in terms of feeling control, feeling valued, feeling included, feeling supported and doing work that is meaningful.',
        'Work-Life Integration': 'Measures the level of difficulty (if any) that employees are experiencing in maintaining a balance between their working life and their personal life.',
      },
      'Identity & Direction': {
        'Truly Great Place to Work': 'Identifies the attributes that make it a ‘Truly Great Place to Work’.',
        'Net Promoter Score': 'Identifies the attributes that influence people working in the organisation to advocate for it.',
        'Attraction & Retention': 'Measures the organisational attributes that attract people to work in the organisation, that keep them working there, and that would influence them to leave.',
        'Inclusion@Work': 'Measures the extent to which the organisation is an Inclusive Employer.',
        'Driving the Future': 'Measures the organisational strengths that will drive future growth and opportunities.',
        'Strategic Direction': 'Measures how well the organisation’s strategic priorities and direction are understood by people working in the organisation, and their level of confidence in its strategic direction.',
        'Strategic Direction Involving a Merger': 'Measures employees’ understanding of, and confidence in, the organisation’s proposed merger.',
        'Statistical Groupings': 'Information gained from this section of the survey is NOT cross-matched to identify individual respondents. It is used to provide analysis at an organisational level (and sometimes at a reporting unit level, but only if there are greater than 30 respondents.',
        'Acknowledgement of Diversity': 'Information gained from this section creates a diversity profile of your organisation. It is not cross-matched to identify individual respondents.',
      },
      'Values': {
        'Standards of Behaviour': 'Measures the extent to which appropriate standards of quality, respect, honesty, fairness, and equality are being practiced in the organisation’s workplaces.',
        'Team Norms': 'Measures how well teams throughout the organisation’s workplace are functioning, especially in addressing problems.',
        'Values-In-Action': 'Measures the extent to which employees and managers believe that the organisation’s values are being put into practice - in their workplaces but also by different levels of management.',
        'The Do’s and Don’ts': 'To establish the do’s and don’ts of acceptable (and unacceptable) behaviour being advocated in the organisation.',
        'The Do’s and Don’ts for Each Value': 'To establish the do’s and don’ts of acceptable (and unacceptable) behaviour for each of the organisation’s values being put into practice.',
        'Advice on Living the Values': 'To draw out employee feedback on better ways to put the organisation’s values into practice.',
      },
      'Risk@Work': {
        'Respect@Work': 'Measures the prevalence of harassment, bullying, favouritism, or discrimination in the organisation’s workplaces.',
        'Causes for Concern': 'Identifies examples of harassment, favouritism or discrimination in the organisation’s workplaces.',
        'Safety@Work': 'Measures the extent to which respondents feel safe in their workplace and their confidence in the organisational responses to safety problems.',
        'Workplace Safety Culture': 'Measures the extent to the organisation priorities preventative, detective, and corrective measures to ensure safety in the workplace.',
        'Harassment and Bullying': 'Measures the prevalence, potential sources, and organisational responses to harassment and bullying in the organisation’s workplaces.',
        'Occupational Violence': 'Measures the prevalence of Occupational Violence in the organisation’s workplaces.',
      },
      'Leadership Landscape': {
        'Leadership Essentials': 'Measures the prevalence of harassment, bullying, favouritism, or discrimination in the organisation’s workplaces.',
        'Leadership Strengths': 'Identifies examples of harassment, favouritism or discrimination in the organisation’s workplaces.',
        'Leadership Priorities': 'Measures the extent to which respondents feel safe in their workplace and their confidence in the organisational responses to safety problems.',
        'Leadership Behaviours': 'Measures the extent to the organisation priorities preventative, detective, and corrective measures to ensure safety in the workplace.',
        'Message in a Bottle': 'Measures the prevalence, potential sources, and organisational responses to harassment and bullying in the organisation’s workplaces.',
        'Feedback From Your Organisation’s Last Employee Survey': '',
        'Message in a Bottle to Designated Managers': 'Measures the prevalence of Occupational Violence in the organisation’s workplaces.',
      },
      'Organisational Change': {
        'The Issues That Matter': 'Measures how well the organisation addresses problems, and implements change, on a range of issues that employees commonly refer to in their Message in a Bottle to the organisation’s most senior leader.',
        'Organisational Initiatives': 'Measures the extent of progress being made on organisational initiatives.',
        'Embracing Our Challenges': 'Measures employee acceptance of how the organisation is addressing the changes and challenges it faces.',
        'Change Momentum': 'Measures the sense of momentum and direction of change during the past year.',
        'How Are We Travelling': 'Measures overall employee sentiment and resilience during recent organisational change.',
        'Your Advice': 'To draw out employee feedback on the types of things that they see as requiring change (or not requiring change) in their working environment.',
      },
      'Client Engagement': {
        'Client Expectations': 'Measures how well employees understand client expectations and frustrations and the extent to which the organisation is committed to meeting client needs.',
        'Risk of Client Abuse': 'Measures the potential prevalence of client abuse and how prepared the organisation is to address it.',
        'Client Safety Culture': 'Measures a range of practices focussed on preventing, detecting, or correcting adverse client safety events and to measure how well client safety or quality of care problems are being addressed.',
        'Statement on Intellectual Property': '',
        'Statement on Privacy': '',
      }
    }

    let subtitles = {}; // extract title-subtitle pairs
    Object.keys(titles).map(program => {
      for (key in titles[program]) {
        subtitles[key] = titles[program][key];
      }
    });

    return (
      <div className="header">
        <div className="header__logo -bpanz">
          <img
            src="https://i.bpanz.com/SurveyAssets/bpa_logo.png"
            alt="Best Practice Australia logo"
          />
        </div>
        <div className="header__logo -client">
          <div className="clientLogoSlot"></div>
        </div>
        <NavBar onClick={this.props.onPageChange} titles={titles} />
        <div className="header-bar">
          <h1>{this.props.title}</h1>
        </div>
        <div className="subtitle">
          <p>{subtitles[this.props.title]}</p>
        </div>
      </div>
    );
  }
}

export default Header;
