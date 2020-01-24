import React, { Component } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Engagement from '../Engagement/Engagement';
import TrulyGreatPlaceToWork from '../TrulyGreatPlaceToWork/TrulyGreatPlaceToWork'
import NPS from '../NPS/NPS';
import SurveyNav from '../SurveyNav/SurveyNav';
import Expectations from "../Expectations/Expectations";
import Definitions from "../Definitions/Definitions";
import Instructions from "../Instructions/Instructions";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLocalHost: false,
      isStaging: false,
      projectCode: 'TEST_20_ES',
      session: this.props.session,
      workUnit: this.props.workunit,
      modules: [
        'Instructions',
        'Definitions',
        'Engagement',
        'TrulyGreatPlaceToWork',
        'Expectations',
        'AttractionRetention',
        'DrivingTheFuture',
        'ValuesInAction',
        'LeadershipEssentials',
        'LeadershipBehaviours',
        'TheIssuesThatMatter',
        'ChangeMomentum',
        'CommunityExpectations',
        'PersonalWellBeing',
        'MessageinaBottle',
        'FeedbackFromtheLastSurvey',
        'StatisticalGroupings',
        'AcknowledgementOfDiversity',
        'ThankYouForCompletingTheSurvey',
      ],
      currentPage: 'Engagement',
      data: {
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
        "01180_TrulyGreat": 999,
        "01181_WhyYes": '',
        "01182_WhyNo": '',
        "21833_NPSWork": 999,
        "21925_NPSWorkReason": '',
        "21834_NPSService": 999,
        "21926_NPSServiceReason": '',

      },
    }

    this.changePage = this.changePage.bind(this);
    this.changeRadioSelection = this.changeRadioSelection.bind(this);
    this.changeTextarea = this.changeTextarea.bind(this);
  }

  // clicking a radio button will update the corresponding data in state.
  changePage(page) {
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
  

  moveContent(target, destination) {
    if (!(target instanceof ($ || jQuery))) target = $(target)
    if (!(destination instanceof ($ || jQuery))) destination = $(destination)
    target.css({'visibility':'visible'}).show()
    target.detach()
    target.appendTo(destination)
  }

  // componentDidUpdate() {
  //   console.log(this.state.data);
  // }

  componentDidMount() {
    // Prepare the data for POST request
    let formData = {
      'I.Engine': 'engine2',
      'I.Project': this.state.projectCode,
      'I.Session': this.state.session,
      'I.SavePoint': 'Engagement',
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

    let page = null;
    switch ( this.state.currentPage ) {
      case ( 'Instructions' ):
        page = <Instructions workunit={this.state.workUnit} />;
        break;
      case ( 'Definitions' ):
        page = <Definitions />;
        break;
      case ( 'Engagement' ):
        page = <Engagement onSelect={this.changeRadioSelection} moveContent={this.moveContent} />;
        break;
      case ( 'Truly Great Place to Work' ):
        page = (
          <div>
            <TrulyGreatPlaceToWork onSelect={this.changeRadioSelection} onType={this.changeTextarea} moveContent={this.moveContent} />
            <NPS onSelect={this.changeRadioSelection} onType={this.changeTextarea} moveContent={this.moveContent} />
          </div>
        );
        break;
      case ( 'Expectations' ):
        page = <Expectations data={this.state.data} onSelect={this.changeRadioSelection} moveContent={this.moveContent} />;
        break;
      default:
        page = null;
    }

    return (
      <div>
        { this.state.currentPage==='Cover Page' ? null : <Header title={this.state.currentPage} moveContent={this.moveContent} onPageChange={this.changePage} />}
        <div className="contentContainer">
          {page}
        </div>
        <SurveyNav moveContent={this.moveContent} />
        <Footer moveContent={this.moveContent} />
      </div>
    );
  }
}

export default App;
