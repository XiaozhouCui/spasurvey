import React, { Component } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CoverPage from "../CoverPage/CoverPage";
import Definitions from "../Definitions/Definitions";
import Instructions from "../Instructions/Instructions";
import Engagement from '../Engagement/Engagement';
import TrulyGreatPlaceToWork from '../TrulyGreatPlaceToWork/TrulyGreatPlaceToWork'
import NPS from '../NPS/NPS';
import SurveyNav from '../SurveyNav/SurveyNav';
import Expectations from "../Expectations/Expectations";
import PersonalWellBeing from "../PersonalWellBeing/PersonalWellBeing";
import WorkLifeIntegration from "../WorkLifeIntegration/WorkLifeIntegration";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLocalHost: false,
      isStaging: false,
      projectCode: 'TEST_20_ES',
      session: this.props.session,
      workUnit: this.props.workunit,
      currentPage: 'Cover Page',
      pages: [
        'Cover Page',
        'Instructions',
        'Definitions',
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
      ],
      data: {
        // Engagement
        "01183_Optimism01": 999,
        "01184_Optimism02": 999,
        "01194_Optimism02b": 999,
        "01185_Optimism03": 999,
        "01186_Optimism04": 999,
        "01187_Optimism05": 999,
        "01188_Optimism06": 999,
        "01189_Optimism07": 999,
        "01190_Optimism08": 999,
        "01191_Optimism13": 999,
        // Truly Great
        "01180_TrulyGreat": 999,
        "01181_WhyYes": '',
        "01182_WhyNo": '',
        // NPS
        "21833_NPSWork": 999,
        "21925_NPSWorkReason": '',
        "21834_NPSService": 999,
        "21926_NPSServiceReason": '',
        // Expectations
        "00546_ExpectationOrgn01": '',
        "00547_ExpectationOrgn02": '',
        "00548_ExpectationOrgn03": '',
        "00549_RatingOrgn01": 999,
        "00550_RatingOrgn02": 999,
        "00551_RatingOrgn03": 999,
        "00748_M27FlexibleHours": 999,
        "00749_M28Workloads": 999,
        "00734_M13FairPay": 999,
        "00747_M26Remuneration": 999,
        "00741_M20Recognition": 999,
        "00738_M17FriendlyEnvironment": 999,
        "00737_M16CareerOpportunities": 999,
        "00736_M15DevelopmentOpportunities": 999,
        "00739_M18ClearCommunication": 999,
        "00740_M19Support": 999,
        "00732_M11_PhysicalConditions": 999,
        "00733_M12SafeEnvironment": 999,
        "00735_M14JobSecurity": 999,
        "04936_DailyFrustration01": '',
        "04937_DailyFrustration02": '',
        "04938_DailyFrustration03": '',
        // Personal Well-Being
        "21588_WellBeing01InControl": 999,
        "21589_WellBeing02Competent": 999,
        "21590_WellBeing03Optimistic": 999,
        "21591_WellBeing04Useful": 999,
        "21592_WellBeing05MakingADifference": 999,
        "21593_WellBeing06Valued": 999,
        "21594_WellBeing07TeamMember": 999,
        "37155_WellBeing24Respect": 999,
        "37156_WellBeing25Individual": 999,
        "37566_WellBeing26Included": 999,
        "37783_WellBeing35Decisions": 999,
        "36900_WellBeing31_FeelSafe": 999,
        "37784_WellBeing36SpeakUp": 999,
        "21595_WellBeing08MyBest": 999,
        "21596_WellBeing09MyLearning": 999,
        "21597_WellBeing10MyGoals": 999,
        "36808_WellBeing21LookAfterMyself": 999,
        "36810_WellBeing23AddressConflict": 999,
        "21713_WorkMeaningful": 999,
        "21714_WorkPurposeful": 999,
        "21715_WorkStimulating": 999,
        "21711_WorkEnergizing": 999,
        "37332_WorkProudOf": 999,
        "37815_ProudOfPersonal": '',

      },
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

  moveContent(target, destination) {
    target.parentNode.removeChild(target);
    destination.appendChild(target);
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
      console.log(page + ' Radio Questions and field IDs do not match!')
    }
    let textFields = document.querySelectorAll("div[name='" + page + "'] .mrEdit");
    let textSlots = document.querySelectorAll(".text" + page);
    if (textFields.length === textSlots.length) {
      for (let j = 0; j < textFields.length; j++) {
        textFields[j].parentNode.parentNode.removeChild(textFields[j].parentNode);
        textSlots[j].appendChild(textFields[j].parentNode);
      }
    } else {
      console.log(page + ' Text Questions and field IDs do not match!')
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

    Array.from(document.querySelectorAll('.mrQuestionTable input[type="radio"]')).forEach(item => {
      item.addEventListener('click', this.handleSelection);
    })
    Array.from(document.querySelectorAll(".mrEdit")).forEach(item => {
      item.addEventListener('change', this.handleText);
    });

    // Prepare the data for POST request
    let formData = {
      'I.Engine': 'engine2',
      'I.Project': this.state.projectCode,
      'I.Session': this.state.session,
      'I.SavePoint': 'Survey',
      'I.Renderer': 'HTMLPlayer',
      '_QSurvey_Qf01183__Optimism01_C': '__' + this.state.data['01183_Optimism01'].toString(),
      '_QSurvey_Qf01184__Optimism02_C': '__' + this.state.data['01184_Optimism02'].toString(),
      '_QSurvey_Qf01194__Optimism02b_C': '__' + this.state.data['01194_Optimism02b'].toString(),
      '_QSurvey_Qf01185__Optimism03_C': '__' + this.state.data['01185_Optimism03'].toString(),
      '_QSurvey_Qf01186__Optimism04_C': '__' + this.state.data['01186_Optimism04'].toString(),
      '_QSurvey_Qf01187__Optimism05_C': '__' + this.state.data['01187_Optimism05'].toString(),
      '_QSurvey_Qf01188__Optimism06_C': '__' + this.state.data['01188_Optimism06'].toString(),
      '_QSurvey_Qf01189__Optimism07_C': '__' + this.state.data['01189_Optimism07'].toString(),
      '_QSurvey_Qf01190__Optimism08_C': '__' + this.state.data['01190_Optimism08'].toString(),
      '_QSurvey_Qf01191__Optimism13_C': '__' + this.state.data['01191_Optimism13'].toString(),
      '_QSurvey_Qf01180__TrulyGreat_C': '__' + this.state.data['01180_TrulyGreat'].toString(),
      '_QSurvey_Qf01181__WhyYes': this.state.data['01181_WhyYes'],
      '_QSurvey_Qf01182__WhyNo': this.state.data['01182_WhyNo'],
      '_QSurvey_Qf21833__NPSWork_C': '__' + this.state.data['21833_NPSWork'].toString(),
      '_QSurvey_Qf21925__NPSWorkReason': this.state.data['21925_NPSWorkReason'],
      '_QSurvey_Qf21834__NPSService_C': '__' + this.state.data['21834_NPSService'].toString(),
      '_QSurvey_Qf21926__NPSServiceReason': this.state.data['21926_NPSServiceReason'],
      '_NStop': 'Stop+%26+Save',
    }
    let parameters = [];
    for (let key in formData) {
      parameters.push(key + '=' + formData[key]);
    }
    let payLoadString = parameters.join('&');
    // fetch("https://esurvey.bpanz.com/mrIWeb/mrIWeb.dll", {"credentials":"include","headers":{"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded","pragma":"no-cache","sec-fetch-mode":"navigate","sec-fetch-site":"same-origin","sec-fetch-user":"?1","upgrade-insecure-requests":"1"},"referrer":"https://esurvey.bpanz.com/mrIWeb/mrIWeb.dll","referrerPolicy":"no-referrer-when-downgrade","body":"I.Engine=engine2&I.Project=WELLWAYS_19_ES&I.Session=myjtaosbt2yulcn2ric4rnakrrwqcaaa&I.SavePoint=TrulyGreatPlaceToWork&I.Renderer=HTMLPlayer&_QTrulyGreatPlaceToWork_Qf01180__TrulyGreat_C=__1&_QTrulyGreatPlaceToWork_Qf01181__WhyYes=goqwihjwndcrbzwbbjxymcsuzkuepknsczhfyshwhaeelraiwxsykjimmzysgfolacyhbvduugrivexjbivkunfcvkxzmfhmlvsm&_QTrulyGreatPlaceToWork_Qf01182__WhyNo=gqpannneoshpawgctioaikrjbilyealjscwrnlymsjytfgwhptrcsyvlgnbwyxaxwdsjsaucwoldahjvccwnwhcreflonkjbzpqz&_QTrulyGreatPlaceToWork_Qf21833__NPSWork_C=__3&_QTrulyGreatPlaceToWork_Qf21925__NPSWorkReason=ykyymkcktwbgfaqjhsrisblhjupehiyandvjiowojmkxsnquwrnvmgruknlntbqhsqvtumsnoseiruhxerdudtcqdxexhljuxdno&_QTrulyGreatPlaceToWork_Qf21834__NPSService_C=__7&_QTrulyGreatPlaceToWork_Qf21926__NPSServiceReason=qypvhbxslfujfnaemsetowivtoglxpdghxpcacohoawqenbybhygsxkrajnnocndnrhtfahyrfwzmoxfyjjstxzftpgsrsjeghag&_NNext=Next","method":"POST","mode":"cors"});

    // fetch("https://esurvey.bpanz.com/mrIWeb/mrIWeb.dll", {"credentials":"include","headers":{"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded","pragma":"no-cache","sec-fetch-mode":"navigate","sec-fetch-site":"same-origin","sec-fetch-user":"?1","upgrade-insecure-requests":"1"},"referrer":"https://esurvey.bpanz.com/mrIWeb/mrIWeb.dll","referrerPolicy":"no-referrer-when-downgrade","body":"I.Engine=engine2&I.Project=SCCWA_19_ES&I.Session=fx4kvvs4jpbe6a2lenkgidqkgbpakaaa&I.SavePoint=Engagement&I.Renderer=HTMLPlayer&_QEngagement_Qf01183__Optimism01_C=__1&_QEngagement_Qf01184__Optimism02_C=__1&_QEngagement_Qf01194__Optimism02b_C=__1&_QEngagement_Qf01185__Optimism03_C=__3&_QEngagement_Qf01186__Optimism04_C=__3&_QEngagement_Qf01187__Optimism05_C=__3&_QEngagement_Qf01188__Optimism06_C=__6&_QEngagement_Qf01189__Optimism07_C=__6&_QEngagement_Qf01190__Optimism08_C=__6&_QEngagement_Qf01191__Optimism13_C=__6&_NNext=Next","method":"POST","mode":"cors"});
  }


  render() {
    const commonProps = {
      mountContent: this.mountContent,
      unmountContent: this.unmountContent
    }
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
      case ( 'Truly Great Place to Work' ):
        page = <TrulyGreatPlaceToWork {...commonProps} />;
        break;
      case ( 'Net Promoter Score' ):
        page = <NPS {...commonProps} />;
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
      default:
        page = null;
    }

    return (
      <div>
        { isCoverPage ? null : <Header title={this.state.currentPage} onPageChange={this.handlePageChange} />}
        <div className="contentContainer" style={isCoverPage ? {padding: 0} : null}>
          {page}
        </div>
        <SurveyNav page={this.state.currentPage} pages={this.state.pages} onBrowse={this.handlePageNav} />
        { isCoverPage ? <div><br/><br/></div> : null}
        <Footer moveContent={this.moveContent} />
      </div>
    );
  }
}

export default App;
