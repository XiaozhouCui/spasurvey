import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event) {
    let pageName = event.target.innerHTML;
    // console.log(pageName);
    this.props.onClick(pageName);
  }

  render() {

    const modules = {
      'Engaging Our People': {
        Engagement: 'Engagement',
        Expectations: 'Expectations',
        PersonalWellBeing: 'Personal Well-Being',
        WorkLifeIntegration: 'Work-Life Integration'
      },
      'Identity & Direction': {
        TrulyGreatPlaceToWork: 'Truly Great Place to Work',
        NetPromoterScore: 'Net Promoter Score',
        AttractionAndRetention: 'Attraction & Retention',
        InclusionWork: 'Inclusion@Work',
        DrivingTheFuture: 'Driving the Future',
        StrategicDirection: 'Strategic Direction',
        StrategicDirectionInvolvingAMerger: 'Strategic Direction Involving a Merger',
        StatisticalGroupings: 'Statistical Groupings',
        AcknowledgementOfDiversity: 'Acknowledgement of Diversity'
      },
      'Values': {
        StandardsOfBehaviour: 'Standards of Behaviour',
        TeamNorms: 'Team Norms',
        ValuesInAction: 'Values-In-Action',
        TheDosAndDonts: 'The Do’s and Don’ts',
        AdviceOnLivingTheValues: 'Advice on Living the Values'
      },
      'Risk@Work': {
        RespectWork: 'Respect@Work',
        CausesForConcern: 'Causes for Concern',
        SafetyWork: 'Safety@Work',
        WorkplaceSafetyCulture: 'Workplace Safety Culture',
        HarassmentAndBullying: 'Harassment and Bullying',
        OccupationalViolence: 'Occupational Violence'
      },
      'Leadership Landscape': {
        LeadershipEssentials: 'Leadership Essentials',
        LeadershipStrengths: 'Leadership Strengths',
        LeadershipPriorities: 'Leadership Priorities',
        LeadershipBehaviours: 'Leadership Behaviours',
        MessageInABottle: 'Message in a Bottle',
        MessageInABottleToDesignatedManagers: 'Message in a Bottle to Designated Managers'
      },
      'Organisational Change': {
        TheIssuesThatMatter: 'The Issues That Matter',
        OrganisationalInitiatives: 'Organisational Initiatives',
        EmbracingOurChallenges: 'Embracing Our Challenges',
        ChangeMomentum: 'Change Momentum',
        HowAreWeTravelling: 'How Are We Travelling',
        YourAdvice: 'Your Advice'
      },
      'Client Engagement': {
        ClientExpectations: 'Client Expectations',
        RiskOfClientAbuse: 'Risk of Client Abuse',
        ClientSafetyCulture: 'Client Safety Culture',
        StatementOnIntellectualProperty: 'Statement on Intellectual Property',
        StatementOnPrivacy: 'Statement on Privacy'
      }
    }

    return (
      <ul className="navBar">
        <li><a href="#">Cover</a></li>
        {Object.keys(modules).map( program => {
          return (
            <li key={program} className="dropdown">
              <a href="#" className="dropbtn">{program}</a>
              <div className="dropdown-content">
                {Object.keys(modules[program]).map( page => <a key={page} href="#" onClick={this.handlePageChange}>{modules[program][page]}</a> )}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NavBar
