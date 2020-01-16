import React, { Component } from 'react'

class Expectations extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
    this.handleSelection = this.handleSelection.bind(this);
  }

    // Update the values in state when clicking on a radio button.
    handleSelection(event) {
      let fieldId = event.target.name.match(/_Qf(.*?)(?=_C)/);
      fieldId = fieldId[1].replace(/__/g, '_');
      let targetId = event.target.id;
      let targetValue = event.target.checked === false ? 999 : Number(targetId[targetId.length -1]) + 1;
      this.props.onSelect(fieldId, targetValue);
    }
  
    componentDidMount() {
      let radios = document.querySelectorAll("div[name='Expectations'] .mrQuestionTable");
      let radioSlots = document.querySelectorAll(".expectationsRadios");
      if (radios.length === radioSlots.length) {
        for (let i = 0; i < radios.length; i++) {
          this.props.moveContent(radios[i], radioSlots[i]);
        }
      } else {
        console.log('Expectations Radio Questions and field IDs do not match!')
      }
      // Update the values in state when clicking on a radio button.
      Array.from(document.querySelectorAll('.mrQuestionTable input[type="radio"]')).forEach(item => {
        item.addEventListener('click', this.handleSelection);
      });
  
      let textFields = document.querySelectorAll("div[name='Expectations'] .mrEdit");
      let textSlots = document.querySelectorAll(".expectationsText");
      if (textFields.length === textSlots.length) {
        for (let i = 0; i < textFields.length; i++) {
          this.props.moveContent(textFields[i], textSlots[i]);
        }
      } else {
        console.log('Expectations Text Questions and field IDs do not match!')
      }
      
      // Update the values in state when clicking on a radio button.
      // Array.from(document.querySelectorAll('.mrQuestionTable input[type="radio"]')).forEach(item => {
      //   item.addEventListener('click', this.handleSelection);
      // });
  
    }

  render() {
    return (
      <div>
        <div className="expectation" id="expectation_orgn">
          <table className="question_table -rating_scale">
            <tbody>
              <tr>
                <td className="question_table__header -col_one">
                  <div className="question_title"><strong>What are the three most important things that you expect from the <span className="definition" id="orga">organisation</span>?</strong></div>
                </td>
                <td className="question_table__header -col_two" style={{paddingLeft:"1em", paddingRight:"1em"}}>How much do you agree that the organisation consistently meets your expectations? <em>(please select)</em></td>
                <td className="question_table__header -col_three" rowSpan="5" style={{verticalAlign:'bottom'}}>
                  <div className="rating_scale">
                    <p className="rating_scale__heading">1 to 6 Rating Scale</p>
                    <div className="smileyFaceHappy"><img src="https://i.bpanz.com/eTbY9Np.png"/></div>
                    <ol>
                      <li>Strongly Agree</li>
                      <li>Agree</li>
                      <li>Somewhat Agree</li>
                      <li>Somewhat Disagree</li>
                      <li>Disagree</li>
                      <li>Strongly Disagree</li>
                    </ol>
                    <div className="smileyFaceSad"><img src="https://i.bpanz.com/AoTqMUE.png"/></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="question_table__header -col_one"><p style={{margin:'0px 14px'}}><em>Please list your expectations below and then select next to each one how much you agree (or disagree) the organisation is meeting your expectations.</em></p></td>
                <td className="question_table__header -col_two"><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="Agree ---- Disagree"/>
                </td>
              </tr>
              <tr className="row satisfied-expectation">
                <td className="question_response -text">
                  <div className="message-text"></div>
                  <div className="expectationsText"></div>
                </td>
                <td className="question_response">
                  <div className="message-radio"></div>
                  <div className="expectationsRadios"></div>
                </td>
              </tr>
              <tr className="row satisfied-expectation">
                <td className="question_response -text">
                  <div className="message-text"></div>
                  <div className="expectationsText"></div>
                </td>
                <td className="question_response">
                  <div className="message-radio"></div>
                  <div className="expectationsRadios"></div>
                </td>
              </tr>
              <tr className="row satisfied-expectation">
                <td className="question_response -text">
                  <div className="message-text"></div>
                  <div className="expectationsText"></div>
                </td>
                <td className="question_response">
                  <div className="message-radio"></div>
                  <div className="expectationsRadios"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="extent -no_rating_scale" id="scale_tooltips_section">
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one">
                  <div className="question_title -padding"><strong>To what extent do you agree that your organisation provides you with ... ?</strong> <em>(please select)</em></div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:'5px'}}><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="Agree ---- Disagree"/><br/>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Adequate flexibility in the hours/shifts you work.</td>
                <td className="question_response row">
                  <div className="expectationsRadios"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Workloads that are fair and equitable.</td>
                <td className="question_response row">
                  <div className="expectationsRadios"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... A fair day's pay for a fair day's work.</td>
                <td className="question_response row">
                  <div className="expectationsRadios"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Appropriate remuneration for the responsibilities you have.</td>
                <td className="question_response row">
                  <div className="expectationsRadios"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="three_col_text">
          <div className="question_title"><strong>What are three things (if any) that currently frustrate you the most in your day-to-day work?</strong></div>
          <div className="question_title -no_shadow"><em>For the best results your answers should be constructive, descriptive and something people can realistically do something about.</em></div>
          <table className="question_table">
            <tbody>
              <tr>
                <td>
                  <div className="expectationsText"></div>
                </td>
                <td>
                  <div className="expectationsText"></div>
                </td>
                <td>
                  <div className="expectationsText"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Expectations
