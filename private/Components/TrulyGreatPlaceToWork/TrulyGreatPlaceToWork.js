import React, { Component } from "react";

class TrulyGreatPlaceToWork extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    this.handleSelection = this.handleSelection.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  // Update the values in state when clicking on a radio button.
  handleSelection(event) {
    let fieldId = event.target.name.match(/_Qf(.*?)(?=_C)/);
    fieldId = fieldId[1].replace(/__/g, '_');
    let targetId = event.target.id;
    let targetValue = event.target.checked === false ? 999 : Number(targetId[targetId.length -1]) + 1;
    this.props.onSelect(fieldId, targetValue);
  }

  handleText(event) {
    let fieldId = event.target.name.match(/_Qf(.*)/);
    fieldId = fieldId[1].replace(/__/g, '_');
    let targetText = event.target.value;
    this.props.onType(fieldId, targetText);
  }

  componentDidMount() {
    let radios = document.querySelectorAll("div[name='TrulyGreat'] .mrQuestionTable");
    let radioSlots = document.querySelectorAll(".trulyGreatRadios");
    if (radios.length === radioSlots.length) {
      for (let i = 0; i < radios.length; i++) {
        this.props.moveContent(radios[i], radioSlots[i]);
      }
      console.log('Good! TrulyGreat radio buttons mounted!')
    } else {
      console.log('TrulyGreat Radio Questions and field IDs do not match!')
    }
    // Update the values in state when clicking on a radio button.
    Array.from(document.querySelectorAll('.mrQuestionTable input[type="radio"]')).forEach(item => {
      item.addEventListener('click', this.handleSelection);
    });

    let textFields = document.querySelectorAll("div[name='TrulyGreat'] .mrEdit");
    let textSlots = document.querySelectorAll(".trulyGreatText");
    if (textFields.length === textSlots.length) {
      for (let i = 0; i < textFields.length; i++) {
        this.props.moveContent(textFields[i], textSlots[i]);
      }
    } else {
      console.log('TrulyGreate Text Questions and field IDs do not match!')
    }
    textFields.forEach(item => {
      item.addEventListener('change', this.handleText);
    });
  }

  render() {
    return (
      <div className="truly_great">
        <table className="question_table">
          <tbody>
            <tr>
              <td colSpan="4">
                <div className="question_title"><strong>On balance, is your <span className="definition" name="orga">organisation</span> a "<em>truly great place to work</em>"?</strong> <em>(please select)</em></div>
                <div className="question_response">
                  <div className="trulyGreatRadios"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">
                <div className="question_arrow -yes"><img src="https://i.bpanz.com/i/m5aik7A.png"/></div>
              </td>
              <td>
                <div className="question_response -text">
                  <p>If <strong>YES</strong>, what makes it a <br/> "<em>truly great place to work</em>"?</p>
                  <div className="trulyGreatText"></div>
                </div>
              </td>
              <td rowSpan="2">
                <div className="question_arrow -no"><img src="https://i.bpanz.com/i/m5aik7A.png"/></div>
              </td>
              <td>
                <div className="question_response -text">
                  <p>If <strong>NO</strong>, what is stopping it from becoming <br/> a "<em>truly great place to work</em>"?</p>
                  <div className="trulyGreatText"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TrulyGreatPlaceToWork;
