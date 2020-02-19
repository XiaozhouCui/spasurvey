import React, { Component } from 'react'

class ClientSafetyCulture extends Component {

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
        <div className="fourtier">
          <div className="question_title">
            <strong>Please select the circle to show which one of these paired statements best describes how patient/consumer safety is put into practice in your work unit.</strong>
          </div>
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one"></td>
                <td className="question_table__header -col_two"></td>
                <td className="question_table__header -scale_img" style={{marginBottom:'-10px'}}>
                  <img src="https://i.bpanz.com/mcwfFEN.png" alt="Positive &#171;---&#187; Negative"/>
                  <br />
                </td>
                <td className="question_table__header -col_four"></td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -col_one -align_center">
                  <strong>Commitment</strong>
                </td>
                <td className="question_table__question -col_two -align_right">
                  <div>People in my work unit are highly conscious of the potential for adverse patient/consumer safety events.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -col_four -align_left">
                  <div>People in my work unit never think about the patient/consumer safety risks.</div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -col_one -align_center">
                  <strong>Vigilance</strong>
                </td>
                <td className="question_table__question -col_two -align_right">
                  <div>People in my work unit report adverse patient/consumer safety events and complaints quickly and openly.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -col_four -align_left">
                  <div>It is common in my work unit for adverse patient/consumer safety events and complaints to be deliberately ignored or hidden.</div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -col_one -align_center">
                  <strong>Learning</strong>
                </td>
                <td className="question_table__question -col_two -align_right">
                  <div>People in my work unit treat patient/consumer safety events as learning opportunities.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -col_four -align_left">
                  <div>The same patient/consumer safety events constantly pop up in my work unit - we just don’t learn from our past mistakes.</div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -col_one -align_center">
                  <strong>Reliability</strong>
                </td>
                <td className="question_table__question -col_two -align_right">
                  <div>People in my work unit always follow evidence, guidelines, standards, procedures, and pathways no matter how difficult this might be.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -col_four -align_left">
                  <div>People in my work unit never follow evidence, guidelines, standards, procedures and pathways when it’s not convenient for them.</div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -col_one -align_center">
                  <strong>Escalation</strong>
                </td>
                <td className="question_table__question -col_two -align_right">
                  <div>People in my work unit exercise good judgement about when to escalate a deterioration in a patient's condition.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -col_four -align_left">
                  <div>People in my work unit will risk leaving it too long to escalate a deterioration in a patient's condition because they are reluctant to call for help.</div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -col_one -align_center">
                  <strong>Perseverance</strong>
                </td>
                <td className="question_table__question -col_two -align_right">
                  <div>People in my work unit will persevere in escalating concerns when they believe it's clinically appropriate.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -col_four -align_left">
                  <div>People in my work unit will back down from escalating concerns because it's too hard.</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="threetier">
          <div className="question_title"><strong>In my work unit, employees are actively encouraged to ...</strong></div>
          <table className="question_table">
            <tbody>
              <tr className="question_table__question_row">
                <td className="question_table__header"></td>
                <td className="question_table__question -align_center" style={{padding:0, marginBottom:'10px'}}>
                  <img src="https://i.bpanz.com/mcwfFEN.png" alt="Positive &#171;---&#187; Negative"/>
                  <br />
                </td>
                <td className="question_table__header"></td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  <div>... Press hard for better answers to long term patient/consumer safety or quality of care problems.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  <div>... Adopt quick-fixes around patient/consumer safety or quality of care (if they can get away with it).</div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  <div>... Seek innovative solutions to recurring patient/consumer safety or quality of care problems.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  <div>... Give up if solutions are not readily available.</div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  <div>... Learn from the experience of others outside the work unit to improve patient/consumer safety or quality of care.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  <div>... Stop looking outside for solutions to patient/consumer safety or quality of care problems if the answer isn’t found internally.</div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  <div>... Look for new and better ways of managing patient/consumer safety or quality of care.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  <div>... Approach patient/consumer safety or quality of care the way it has always been done.</div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  <div>... Speak up if they see a patient/consumer safety or quality of care problem.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  <div>... Let someone else take responsibility for raising patient/consumer safety or quality of care problems.</div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  <div>... Implement solutions to any patient/consumer safety or quality of care problems identified.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  <div>... Do nothing and wait for someone else to sort it out.</div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  <div>... Close the loop by checking that solutions implemented fixed the problem for the patient.</div>
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  <div>... Move onto the next thing, and don’t come back to check that the solution is working properly.</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ClientSafetyCulture
