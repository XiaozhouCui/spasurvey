import React, { Component } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CoverPage from "../CoverPage/CoverPage";
import Definitions from "../Definitions/Definitions";
import Instructions from "../Instructions/Instructions";
import Engagement from '../Engagement/Engagement';
import SurveyNav from '../SurveyNav/SurveyNav';
import Expectations from "../Expectations/Expectations";
import PersonalWellBeing from "../PersonalWellBeing/PersonalWellBeing";
import WorkLifeIntegration from "../WorkLifeIntegration/WorkLifeIntegration";
import TrulyGreatPlaceToWork from '../TrulyGreatPlaceToWork/TrulyGreatPlaceToWork'
import NPS from '../NPS/NPS';
import AttractionRetention from "../AttractionRetention/AttractionRetention";
import InclusionWork from "../InclusionWork/InclusionWork";
import DrivingTheFuture from "../DrivingTheFuture/DrivingTheFuture";
import StrategicDirection from "../StrategicDirection/StrategicDirection";
import StrategicDirectionIAM from "../StrategicDirectionIAM/StrategicDirectionIAM";
import StatisticalGroupings from "../StatisticalGroupings/StatisticalGroupings";
import AcknowledgementOfDiversity from "../AcknowledgementOfDiversity/AcknowledgementOfDiversity";
import StandardsOfBehaviour from "../StandardsOfBehaviour/StandardsOfBehaviour";
import TeamNorms from "../TeamNorms/TeamNorms";
import ValuesInAction from "../ValuesInAction/ValuesInAction";
import TheDosAndDonts from "../TheDosAndDonts/TheDosAndDonts";
import TheDosAndDontsForEachValue from "../TheDosAndDontsForEachValue/TheDosAndDontsForEachValue";
import AdviceOnLivingTheValues from "../AdviceOnLivingTheValues/AdviceOnLivingTheValues";
import RespectWork from "../RespectWork/RespectWork";
import CausesForConcern from "../CausesForConcern/CausesForConcern";
import SafetyWork from "../SafetyWork/SafetyWork";
import WorkplaceSafetyCulture from "../WorkplaceSafetyCulture/WorkplaceSafetyCulture";
import HarassmentAndBullying from "../HarassmentAndBullying/HarassmentAndBullying";
import OccupationalViolence from "../OccupationalViolence/OccupationalViolence";
import LeadershipEssentials from "../LeadershipEssentials/LeadershipEssentials";
import LeadershipStrengths from "../LeadershipStrengths/LeadershipStrengths";
import LeadershipPriorities from "../LeadershipPriorities/LeadershipPriorities";
import LeadershipBehaviours from "../LeadershipBehaviours/LeadershipBehaviours";
import MessageInABottle from "../MessageInABottle/MessageInABottle";
import FeedbackFromLastSurvey from "../FeedbackFromLastSurvey/FeedbackFromLastSurvey";
import MessageInABottleTDM from "../MessageInABottleTDM/MessageInABottleTDM";
import TheIssuesThatMatter from "../TheIssuesThatMatter/TheIssuesThatMatter";
import OrganisationalInitiatives from "../OrganisationalInitiatives/OrganisationalInitiatives";
import EmbracingOurChallenges from "../EmbracingOurChallenges/EmbracingOurChallenges";
import ChangeMomentum from "../ChangeMomentum/ChangeMomentum";
import HowAreWeTravelling from "../HowAreWeTravelling/HowAreWeTravelling";
import YourAdvice from "../YourAdvice/YourAdvice";
import ClientExpectations from "../ClientExpectations/ClientExpectations";
import RiskOfClientAbuse from "../RiskOfClientAbuse/RiskOfClientAbuse";
import ClientSafetyCulture from "../ClientSafetyCulture/ClientSafetyCulture";
import IntellectualProperty from "../IntellectualProperty/IntellectualProperty";
import Privacy from "../Privacy/Privacy";








class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLocalHost: true,
      isStaging: false,
      projectCode: 'TEST_20_ES',
      session: this.props.session,
      workUnit: this.props.workunit,
      currentPage: 'Cover Page',
      modules: {
        CoverPage: 'Cover Page',
        Instructions: 'Instructions',
        Definitions: 'Definitions',
        Engagement: 'Engagement',
        Expectations: 'Expectations',
        PersonalWellBeing: 'Personal Well-Being',
        WorkLifeIntegration: 'Work-Life Integration',
        TrulyGreat: 'Truly Great Place to Work',
        NPS: 'Net Promoter Score',
        AttractionRetention: 'Attraction & Retention',
        InclusionWork: 'Inclusion@Work',
        DrivingTheFuture: 'Driving the Future',
        StrategicDirection: 'Strategic Direction',
        StrategicDirectionIAM: 'Strategic Direction Involving a Merger',
        StatisticalGroupings: 'Statistical Groupings',
        AcknowledgementOfDiversity: 'Acknowledgement of Diversity',
        StandardsOfBehaviour: 'Standards of Behaviour',
        TeamNorms: 'Team Norms',
        ValuesInAction: 'Values-In-Action',
        TheDosAndDonts: 'The Do’s and Don’ts',
        TheDosAndDontsForEachValue: 'The Do’s and Don’ts for Each Value',
        AdviceOnLivingTheValues: 'Advice on Living the Values',
        RespectWork: 'Respect@Work',
        CausesForConcern: 'Causes for Concern',
        SafetyWork: 'Safety@Work',
        WorkplaceSafetyCulture: 'Workplace Safety Culture',
        HarassmentAndBullying: 'Harassment and Bullying',
        OccupationalViolence: 'Occupational Violence',
        LeadershipEssentials: 'Leadership Essentials',
        LeadershipStrengths: 'Leadership Strengths',
        LeadershipPriorities: 'Leadership Priorities',
        LeadershipBehaviours: 'Leadership Behaviours',
        MessageInABottle: 'Message in a Bottle',
        FeedbackFromLastSurvey: 'Feedback From Your Organisation’s Last Employee Survey',
        MessageInABottleTDM: 'Message in a Bottle to Designated Managers',
        TheIssuesThatMatter: 'The Issues That Matter',
        OrganisationalInitiatives: 'Organisational Initiatives',
        EmbracingOurChallenges: 'Embracing Our Challenges',
        ChangeMomentum: 'Change Momentum',
        HowAreWeTravelling: 'How Are We Travelling',
        YourAdvice: 'Your Advice',
        ClientExpectations: 'Client Expectations',
        RiskOfClientAbuse: 'Risk of Client Abuse',
        ClientSafetyCulture: 'Client Safety Culture',
        IntellectualProperty: 'Statement on Intellectual Property',
        Privacy: 'Statement on Privacy'
      },
      data: {},
    }

    this.handlePageChange = this.handlePageChange.bind(this);
    this.changeRadioSelection = this.changeRadioSelection.bind(this);
    this.changeTextarea = this.changeTextarea.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handlePageNav = this.handlePageNav.bind(this);
  }

  // clicking a radio button will update the corresponding data in state.
  handlePageChange(page) {
    this.setState({currentPage: page});
  }

  // clicking a radio button will update the corresponding data in state.
  changeRadioSelection(fieldId, value) {
    this.setState(prevState => ({
      data: {                  // object that we want to update
        ...prevState.data,     // keep all other key-value pairs
        [fieldId]: value   // update the value of specific key
      }
    }));
  }
  
  changeTextarea(fieldId, newText) {
    this.setState(prevState => ({
      data: {                  // object that we want to update
        ...prevState.data,     // keep all other key-value pairs
        [fieldId]: newText   // update the value of specific key
      }
    }));
  }

  // Update the values in state when clicking on a radio button.
  handleSelection(event) {
    let fieldId = event.target.name.match(/_Qf(.*?)(?=_C)/);
    fieldId = fieldId[1].replace(/__/g, '_');
    let targetId = event.target.id;
    let targetValue = event.target.checked === false ? 999 : Number(targetId[targetId.length -1]) + 1;
    this.changeRadioSelection(fieldId, targetValue);
  }

  handleText(event) {
    let fieldId = event.target.name.match(/_Qf(.*)/);
    fieldId = fieldId[1].replace(/__/g, '_');
    let targetText = event.target.value;
    this.changeTextarea(fieldId, targetText);
  }

  handlePageNav(newPage) {
    this.setState({currentPage: newPage})
  }

  // Move Dimension-rendered form inputs into React-rendered questions after the component is mounted
  mountContent ( page ) {
    let radios = document.querySelectorAll("div[name='" + page + "'] .mrQuestionTable");
    let radioSlots = document.querySelectorAll(".radios" + page);
    if (radios.length === radioSlots.length) {
      for (let i = 0; i < radios.length; i++) {
        radios[i].parentNode.removeChild(radios[i]);
        radioSlots[i].appendChild(radios[i]);
      }
    } else {
      console.log(page + ' Radio Questions and field IDs do not match')
    }
    let textFields = document.querySelectorAll("div[name='" + page + "'] .mrEdit");
    let textSlots = document.querySelectorAll(".text" + page);
    if (textFields.length === textSlots.length) {
      for (let j = 0; j < textFields.length; j++) {
        textFields[j].parentNode.parentNode.removeChild(textFields[j].parentNode);
        textSlots[j].appendChild(textFields[j].parentNode);
      }
    } else {
      console.log(page + ' Text Questions and field IDs do not match')
    }
  }

  // Clean up the content before the component is unmounted
  unmountContent ( page ) {
    let radios = document.querySelectorAll(".radios" + page + " .mrQuestionTable");
    let radioSlot = document.querySelector("div[name='" + page + "']");
    for (let i = 0; i < radios.length; i++) {
      radios[i].parentNode.removeChild(radios[i]);
      radioSlot.appendChild(radios[i]);
    }
    let textFields = document.querySelectorAll(".text" + page + " .mrEdit");
    let textSlot = document.querySelector("div[name='" + page + "']");
    for (let j = 0; j < textFields.length; j++) {
      textFields[j].parentNode.parentNode.removeChild(textFields[j].parentNode);
      textSlot.appendChild(textFields[j].parentNode);
    }
  }

  componentDidMount() {
    console.log('App component mounted')
    Array.from(document.querySelectorAll('.mrQuestionTable input[type="radio"]')).forEach(item => {
      item.addEventListener('click', this.handleSelection);
    })
    Array.from(document.querySelectorAll(".mrEdit")).forEach(item => {
      item.addEventListener('change', this.handleText);
    });

    // Prepare the data for POST request
    // let formData = {
    //   'I.Engine': 'engine2',
    //   'I.Project': this.state.projectCode,
    //   'I.Session': this.state.session,
    //   'I.SavePoint': 'Survey',
    //   'I.Renderer': 'HTMLPlayer',
    //   '_QSurvey_Qf01183__Optimism01_C': '__' + this.state.data['01183_Optimism01'].toString(),
    //   '_QSurvey_Qf01184__Optimism02_C': '__' + this.state.data['01184_Optimism02'].toString(),
    //   '_QSurvey_Qf01194__Optimism02b_C': '__' + this.state.data['01194_Optimism02b'].toString(),
    //   '_QSurvey_Qf01185__Optimism03_C': '__' + this.state.data['01185_Optimism03'].toString(),
    //   '_QSurvey_Qf01186__Optimism04_C': '__' + this.state.data['01186_Optimism04'].toString(),
    //   '_QSurvey_Qf01187__Optimism05_C': '__' + this.state.data['01187_Optimism05'].toString(),
    //   '_QSurvey_Qf01188__Optimism06_C': '__' + this.state.data['01188_Optimism06'].toString(),
    //   '_QSurvey_Qf01189__Optimism07_C': '__' + this.state.data['01189_Optimism07'].toString(),
    //   '_QSurvey_Qf01190__Optimism08_C': '__' + this.state.data['01190_Optimism08'].toString(),
    //   '_QSurvey_Qf01191__Optimism13_C': '__' + this.state.data['01191_Optimism13'].toString(),
    //   '_QSurvey_Qf01180__TrulyGreat_C': '__' + this.state.data['01180_TrulyGreat'].toString(),
    //   '_QSurvey_Qf01181__WhyYes': this.state.data['01181_WhyYes'],
    //   '_QSurvey_Qf01182__WhyNo': this.state.data['01182_WhyNo'],
    //   '_QSurvey_Qf21833__NPSWork_C': '__' + this.state.data['21833_NPSWork'].toString(),
    //   '_QSurvey_Qf21925__NPSWorkReason': this.state.data['21925_NPSWorkReason'],
    //   '_QSurvey_Qf21834__NPSService_C': '__' + this.state.data['21834_NPSService'].toString(),
    //   '_QSurvey_Qf21926__NPSServiceReason': this.state.data['21926_NPSServiceReason'],
    //   '_NStop': 'Stop+%26+Save',
    // }
    // let parameters = [];
    // for (let key in formData) {
    //   parameters.push(key + '=' + formData[key]);
    // }
    // let payLoadString = parameters.join('&');
    // fetch("https://esurvey.bpanz.com/mrIWeb/mrIWeb.dll", {"credentials":"include","headers":{"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded","pragma":"no-cache","sec-fetch-mode":"navigate","sec-fetch-site":"same-origin","sec-fetch-user":"?1","upgrade-insecure-requests":"1"},"referrer":"https://esurvey.bpanz.com/mrIWeb/mrIWeb.dll","referrerPolicy":"no-referrer-when-downgrade","body":"I.Engine=engine2&I.Project=WELLWAYS_19_ES&I.Session=myjtaosbt2yulcn2ric4rnakrrwqcaaa&I.SavePoint=TrulyGreatPlaceToWork&I.Renderer=HTMLPlayer&_QTrulyGreatPlaceToWork_Qf01180__TrulyGreat_C=__1&_QTrulyGreatPlaceToWork_Qf01181__WhyYes=goqwihjwndcrbzwbbjxymcsuzkuepknsczhfyshwhaeelraiwxsykjimmzysgfolacyhbvduugrivexjbivkunfcvkxzmfhmlvsm&_QTrulyGreatPlaceToWork_Qf01182__WhyNo=gqpannneoshpawgctioaikrjbilyealjscwrnlymsjytfgwhptrcsyvlgnbwyxaxwdsjsaucwoldahjvccwnwhcreflonkjbzpqz&_QTrulyGreatPlaceToWork_Qf21833__NPSWork_C=__3&_QTrulyGreatPlaceToWork_Qf21925__NPSWorkReason=ykyymkcktwbgfaqjhsrisblhjupehiyandvjiowojmkxsnquwrnvmgruknlntbqhsqvtumsnoseiruhxerdudtcqdxexhljuxdno&_QTrulyGreatPlaceToWork_Qf21834__NPSService_C=__7&_QTrulyGreatPlaceToWork_Qf21926__NPSServiceReason=qypvhbxslfujfnaemsetowivtoglxpdghxpcacohoawqenbybhygsxkrajnnocndnrhtfahyrfwzmoxfyjjstxzftpgsrsjeghag&_NNext=Next","method":"POST","mode":"cors"});

    // fetch("https://esurvey.bpanz.com/mrIWeb/mrIWeb.dll", {"credentials":"include","headers":{"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded","pragma":"no-cache","sec-fetch-mode":"navigate","sec-fetch-site":"same-origin","sec-fetch-user":"?1","upgrade-insecure-requests":"1"},"referrer":"https://esurvey.bpanz.com/mrIWeb/mrIWeb.dll","referrerPolicy":"no-referrer-when-downgrade","body":"I.Engine=engine2&I.Project=SCCWA_19_ES&I.Session=fx4kvvs4jpbe6a2lenkgidqkgbpakaaa&I.SavePoint=Engagement&I.Renderer=HTMLPlayer&_QEngagement_Qf01183__Optimism01_C=__1&_QEngagement_Qf01184__Optimism02_C=__1&_QEngagement_Qf01194__Optimism02b_C=__1&_QEngagement_Qf01185__Optimism03_C=__3&_QEngagement_Qf01186__Optimism04_C=__3&_QEngagement_Qf01187__Optimism05_C=__3&_QEngagement_Qf01188__Optimism06_C=__6&_QEngagement_Qf01189__Optimism07_C=__6&_QEngagement_Qf01190__Optimism08_C=__6&_QEngagement_Qf01191__Optimism13_C=__6&_NNext=Next","method":"POST","mode":"cors"});
  }


  render() {
    const commonProps = {
      mountContent: this.mountContent,
      unmountContent: this.unmountContent,
      moduleName: Object.keys(this.state.modules).find(key => this.state.modules[key] === this.state.currentPage)
    }
    const pageTitles = Object.keys(this.state.modules).map(key => this.state.modules[key]);
    const isCoverPage = this.state.currentPage === "Cover Page";
    let page = null;
    switch ( this.state.currentPage ) {
      case ( 'Cover Page' ):
        page = <CoverPage />;
        break;
      case ( 'Instructions' ):
        page = <Instructions workunit={this.state.workUnit} />;
        break;
      case ( 'Definitions' ):
        page = <Definitions />;
        break;
      case ( 'Engagement' ):
        page = <Engagement {...commonProps} />;
        break;
      case ( 'Expectations' ):
        page = <Expectations {...commonProps} />;
        break;
      case ( 'Personal Well-Being' ):
        page = <PersonalWellBeing {...commonProps} />;
        break;
      case ( 'Work-Life Integration' ):
        page = <WorkLifeIntegration {...commonProps} />;
        break;
      case ( 'Truly Great Place to Work' ):
        page = <TrulyGreatPlaceToWork {...commonProps} />;
        break;
      case ( 'Net Promoter Score' ):
        page = <NPS {...commonProps} />;
        break;
      case ( 'Attraction & Retention' ):
        page = <AttractionRetention {...commonProps} />;
        break;
      case ( 'Inclusion@Work' ):
        page = <InclusionWork {...commonProps} />;
        break;
      case ( 'Driving the Future' ):
        page = <DrivingTheFuture {...commonProps} />;
        break;
      case ( 'Strategic Direction' ):
        page = <StrategicDirection {...commonProps} />;
        break;
      case ( 'Strategic Direction Involving a Merger' ):
        page = <StrategicDirectionIAM {...commonProps} />;
        break;
      case ( 'Statistical Groupings' ):
        page = <StatisticalGroupings {...commonProps} />;
        break;
      case ( 'Acknowledgement of Diversity' ):
        page = <AcknowledgementOfDiversity {...commonProps} />;
        break;
      case ( 'Standards of Behaviour' ):
        page = <StandardsOfBehaviour {...commonProps} />;
        break;
      case ( 'Team Norms' ):
        page = <TeamNorms {...commonProps} />;
        break;
      case ( 'Values-In-Action' ):
        page = <ValuesInAction {...commonProps} />;
        break;
      case ( 'The Do’s and Don’ts' ):
        page = <TheDosAndDonts {...commonProps} />;
        break;
      case ( 'The Do’s and Don’ts for Each Value' ):
        page = <TheDosAndDontsForEachValue {...commonProps} />;
        break;
      case ( 'Advice on Living the Values' ):
        page = <AdviceOnLivingTheValues {...commonProps} />;
        break;
      case ( 'Respect@Work' ):
        page = <RespectWork {...commonProps} />;
        break;
      case ( 'Causes for Concern' ):
        page = <CausesForConcern {...commonProps} />;
        break;
      case ( 'Safety@Work' ):
        page = <SafetyWork {...commonProps} />;
        break;
      case ( 'Workplace Safety Culture' ):
        page = <WorkplaceSafetyCulture {...commonProps} />;
        break;
      case ( 'Harassment and Bullying' ):
        page = <HarassmentAndBullying {...commonProps} />;
        break;
      case ( 'Occupational Violence' ):
        page = <OccupationalViolence {...commonProps} />;
        break;
      case ( 'Leadership Essentials' ):
        page = <LeadershipEssentials {...commonProps} />;
        break;
      case ( 'Leadership Strengths' ):
        page = <LeadershipStrengths {...commonProps} />;
        break;
      case ( 'Leadership Priorities' ):
        page = <LeadershipPriorities {...commonProps} />;
        break;
      case ( 'Leadership Behaviours' ):
        page = <LeadershipBehaviours {...commonProps} />;
        break;
      case ( 'Message in a Bottle' ):
        page = <MessageInABottle {...commonProps} />;
        break;
      case ( 'Feedback From Your Organisation’s Last Employee Survey' ):
        page = <FeedbackFromLastSurvey {...commonProps} />;
        break;
      case ( 'Message in a Bottle to Designated Managers' ):
        page = <MessageInABottleTDM {...commonProps} />;
        break;
      case ( 'The Issues That Matter' ):
        page = <TheIssuesThatMatter {...commonProps} />;
        break;
      case ( 'Organisational Initiatives' ):
        page = <OrganisationalInitiatives {...commonProps} />;
        break;
      case ( 'Embracing Our Challenges' ):
        page = <EmbracingOurChallenges {...commonProps} />;
        break;
      case ( 'Change Momentum' ):
        page = <ChangeMomentum {...commonProps} />;
        break;
      case ( 'How Are We Travelling' ):
        page = <HowAreWeTravelling {...commonProps} />;
        break;
      case ( 'Your Advice' ):
        page = <YourAdvice {...commonProps} />;
        break;
      case ( 'Client Expectations' ):
        page = <ClientExpectations {...commonProps} />;
        break;
      case ( 'Risk of Client Abuse' ):
        page = <RiskOfClientAbuse {...commonProps} />;
        break;
      case ( 'Client Safety Culture' ):
        page = <ClientSafetyCulture {...commonProps} />;
        break;
      case ( 'Statement on Intellectual Property' ):
        page = <IntellectualProperty {...commonProps} />;
        break;
      case ( 'Statement on Privacy' ):
        page = <Privacy {...commonProps} />;
        break;
      default:
        page = null;
    }

    return (
      <div>
        { isCoverPage ? null : <Header title={this.state.currentPage} onPageChange={this.handlePageChange} />}
        <div className="contentContainer" style={isCoverPage ? {padding: 0} : null}>
          {page}
        </div>
        <SurveyNav page={this.state.currentPage} pages={pageTitles} onBrowse={this.handlePageNav} />
        { isCoverPage ? <div><br/><br/></div> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
