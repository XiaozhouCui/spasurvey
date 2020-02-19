import React, { Component } from 'react'

class ChangeMomentum extends Component {

  componentDidMount() {
    this.props.mountContent(this.props.moduleName);
  }

  componentWillUnmount() {
    this.props.unmountContent(this.props.moduleName);
  }

  render() {
    const pageId = this.props.moduleName;
    return (
      <div>
        <div className="threetier" style={{marginBottom:40}}>
          <div className="question_title">
            <strong>Please select the circle to show which one of the paired statements best describes your <span className="definition" id="orga">organisation</span>.</strong>
          </div>
          <table className="question_table" style={{marginTop:10}}>
            <tbody>
              <tr>
                <td className="question_table__header"></td>
                <td className="question_table__header -scale_img" style={{marginBottom:'-10px'}}>
                  <img src="https://i.bpanz.com/i/mcwfFEN.png" alt="Positive ---- Negative"/><br />
                </td>
                <td className="question_table__header"></td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  The organisation introduces change quickly. It is fast, focussed and flexible.
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  The organisation takes forever to do anything.
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  In the last 1 to 2 years, the organisation has made significant improvements.
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  In the last 1 to 2 years, the organisation has deteriorated significantly.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="question_title -no_shadow" style={{marginTop:50}}>What is one thing that has <strong>improved</strong> in your working environment during the past year?</div>
        <div className="question_response -text">
          <div className={'text'+pageId}></div>
        </div>
        <div className="question_title -no_shadow" style={{marginTop:50}}>What is one thing that has <strong>deteriorated</strong> in your working environment during the past year?</div>
        <div className="question_response -text">
          <div className={'text'+pageId}></div>
        </div>

        <div className="extent -rating_scale" id="scale_tooltips_section" style={{marginTop:50}}>
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one">
                  <div className="question_title">
                    <strong>To what extent do you agree that the following statements describe how things work in the organisation?</strong> <em>(please select)</em>
                  </div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:0}}>
                  <img src="https://i.bpanz.com/i/DBOuI2y.png" alt="Agree ---- Disagree"/><br />
                </td>
                <td className="question_table__header -col_three" rowSpan="7">
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
              <tr className="row">
                <td className="question_title -no_shadow">
                  The organisation wants to hear the bad news as well as the good news about itself.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  The organisation acts quickly to stop small problems becoming large problems.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  My manager wants to hear the bad news as well as the good news.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  My manager acts quickly to stop small problems becoming large problems.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td className="question_title -no_shadow" style={{marginTop:'0.5em'}}>
                  ODuring the past year, improvements been made to ...
                </td>
                <td className="question_response">
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -dashed">
                  Communication in the organisation
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -dashed">
                  Motivation in the organisation
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -dashed">
                  The organisation's services and facilities
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -dashed">
                  The organisation's client satisfaction levels
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ChangeMomentum
