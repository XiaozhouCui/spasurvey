import React, { Component } from "react";
import Engagement from '../Engagement/Engagement';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLocalHost: false,
      isStaging: false,
      projectCode: 'TEST_20_ES',
      session: this.props.session,
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
        "01191_Optimism13": 999
      },
    }

    this.changeRadioSelection = this.changeRadioSelection.bind(this);
  }
  
  // clicking a radio button will update the corresponding data in state.
  changeRadioSelection(fieldId, selection) {
    this.setState(prevState => ({
      data: {                  // object that we want to update
        ...prevState.data,     // keep all other key-value pairs
        [fieldId]: selection   // update the value of specific key
      }
    }));
  }
  
  componentDidUpdate() {
    console.log(this.state.data);
  }

  componentDidMount() {
    console.log('Session: ' + this.state.session);

    // Prepare the data for ajax POST request
    let formData = {
      'I.Engine': 'engine2',
      'I.Project': this.state.projectCode,
      'I.Session': this.state.session,
      'I.SavePoint': 'Engagement',
      'I.Renderer': 'HTMLPlayer',
      '_QEngagement_Qf01183__Optimism01_C': '__' + this.state.data['01183_Optimism01'].toString(),
      '_QEngagement_Qf01184__Optimism02_C': '__' + this.state.data['01184_Optimism02'].toString(),
      '_QEngagement_Qf01194__Optimism02b_C': '__' + this.state.data['01194_Optimism02b'].toString(),
      '_QEngagement_Qf01185__Optimism03_C': '__' + this.state.data['01185_Optimism03'].toString(),
      '_QEngagement_Qf01186__Optimism04_C': '__' + this.state.data['01186_Optimism04'].toString(),
      '_QEngagement_Qf01187__Optimism05_C': '__' + this.state.data['01187_Optimism05'].toString(),
      '_QEngagement_Qf01188__Optimism06_C': '__' + this.state.data['01188_Optimism06'].toString(),
      '_QEngagement_Qf01189__Optimism07_C': '__' + this.state.data['01189_Optimism07'].toString(),
      '_QEngagement_Qf01190__Optimism08_C': '__' + this.state.data['01190_Optimism08'].toString(),
      '_QEngagement_Qf01191__Optimism13_C': '__' + this.state.data['01191_Optimism13'].toString(),
      '_NStop': 'Stop+%26+Save',
    }
    let parameters = [];
    for (let key in formData) {
      parameters.push(key + '=' + formData[key]);
    }
    let payLoad = parameters.join('&');

    // fetch("https://esurvey.bpanz.com/mrIWeb/mrIWeb.dll", {"credentials":"include","headers":{"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded","pragma":"no-cache","sec-fetch-mode":"navigate","sec-fetch-site":"same-origin","sec-fetch-user":"?1","upgrade-insecure-requests":"1"},"referrer":"https://esurvey.bpanz.com/mrIWeb/mrIWeb.dll","referrerPolicy":"no-referrer-when-downgrade","body":"I.Engine=engine2&I.Project=SCCWA_19_ES&I.Session=fx4kvvs4jpbe6a2lenkgidqkgbpakaaa&I.SavePoint=Engagement&I.Renderer=HTMLPlayer&_QEngagement_Qf01183__Optimism01_C=__1&_QEngagement_Qf01184__Optimism02_C=__1&_QEngagement_Qf01194__Optimism02b_C=__1&_QEngagement_Qf01185__Optimism03_C=__3&_QEngagement_Qf01186__Optimism04_C=__3&_QEngagement_Qf01187__Optimism05_C=__3&_QEngagement_Qf01188__Optimism06_C=__6&_QEngagement_Qf01189__Optimism07_C=__6&_QEngagement_Qf01190__Optimism08_C=__6&_QEngagement_Qf01191__Optimism13_C=__6&_NNext=Next","method":"POST","mode":"cors"});
  }


  render() {
    return (
      <div>
        <Engagement 
        onSelect={this.changeRadioSelection} />
      </div>
    );
  }
}

export default App;
