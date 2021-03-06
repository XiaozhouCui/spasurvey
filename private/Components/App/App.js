import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import SwitchedPages from '../SwitchedPages/SwitchedPages';
import Header from '../Header/Header';
import SurveyNav from '../SurveyNav/SurveyNav';
import Footer from '../Footer/Footer';
import toolTips from '../../utils/tooltips';
import CoverPage from "../CoverPage/CoverPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLocalHost: true,
      isStaging: false,
      projectCode: 'FULL_MODULE_SUIT',
      session: this.props.session,
      workUnit: this.props.workunit,
      currentPage: this.props.currentPage,
      modules: [
        'CoverPage',
        'Instructions',
        'Definitions',
        'Engagement',
        'Expectations',
        'PersonalWellBeing',
        'WorkLifeIntegration',
        'TrulyGreatPlaceToWork',
        'NPS',
        'AttractionRetention',
        'InclusionWork',
        'DrivingTheFuture',
        'StrategicDirection',
        'StrategicDirectionIAM',
        'StatisticalGroupings',
        'AcknowledgementOfDiversity',
        'StandardsOfBehaviour',
        'TeamNorms',
        'ValuesInAction',
        'TheDosAndDonts',
        'TheDosAndDontsForEachValue',
        'AdviceOnLivingTheValues',
        'RespectWork',
        'CausesForConcern',
        'SafetyWork',
        'WorkplaceSafetyCulture',
        'HarassmentAndBullying',
        'OccupationalViolence',
        'LeadershipEssentials',
        'LeadershipStrengths',
        'LeadershipPriorities',
        'LeadershipBehaviours',
        'MessageInABottle',
        'FeedbackFromLastSurvey',
        'MessageInABottleTDM',
        'TheIssuesThatMatter',
        'OrganisationalInitiatives',
        'EmbracingOurChallenges',
        'ChangeMomentum',
        'HowAreWeTravelling',
        'YourAdvice',
        'ClientExpectations',
        'RiskOfClientAbuse',
        'ClientSafetyCulture',
        'IntellectualProperty',
        'Privacy'
      ],
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
  mountContent (page) {
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
  unmountContent (page) {
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
  // add tooltip contents (title attributes) whenever a new page is rendered
  componentDidUpdate() {
    toolTips.hoverText();
    toolTips.hoverRadios();
    toolTips.write();
  }

  render() {
    const commonProps = {
      mountContent: this.mountContent,
      unmountContent: this.unmountContent,
    }
    const pageIds = this.state.modules;
    const isCoverPage = this.state.currentPage === "CoverPage";
    //https://staging7.spsscloud.com/mrIWeb/mrIWeb.dll
    return (
      <div>
        { isCoverPage ? null : <Header currentPage={this.state.currentPage} onPageChange={this.handlePageChange} links={this.state.modules} />}
        <div className="contentContainer" style={isCoverPage ? {padding: 0} : null}>
          <Switch>
            <Route exact path="/" component={CoverPage} />
            {pageIds.map( pageId => { return (
              <Route
                key={pageId}
                path={`/${pageId}`}
                render={(props) => <SwitchedPages {...props} {...commonProps} type={pageId} moduleName={pageId} />}
              />
            )})}
          </Switch>
        </div>
        <SurveyNav page={this.state.currentPage} pages={pageIds} onBrowse={this.handlePageNav} />
        { isCoverPage ? <div><br/><br/></div> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
