import React, { Component } from 'react'

class RiskOfClientAbuse extends Component {

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
        <div className="question_title -no_shadow">Think of the clients you interact with or know about.</div>
        <div className="question_title"><strong>To what extent do you believe they may be experiencing any of the following types of abuse:</strong> <em>(please tick one circle only for each question)</em></div>
        <div className="issues four-wide" id="resident_safety" style={{marginBottom:60}}>
          <table>
            <tbody>
              <tr className="header__row">
                <td></td>
                <td className="-fixed"><div className="question_title -no_shadow">I have <strong>no cause for concern</strong> in this area</div></td>
                <td className="-fixed"><div className="question_title -no_shadow">There may be <strong>some potential signs</strong> but nothing to act on at this time</div></td>
                <td className="-fixed"><div className="question_title -no_shadow">I have <strong>cause for concern</strong> for at least one of our residents/clients</div></td>
                <td className="-fixed"><div className="question_title -no_shadow">I don’t Know</div></td>
                <td style={{minWidth:200}}><div className="question_title -no_shadow"><em>Please describe any events giving you cause for concern</em></div></td>
              </tr>
              <tr>
                <td><strong>Physical abuse or harm</strong></td>
                <td colSpan="4">
                  <div className={'radios'+pageId}></div>
                </td>
                <td>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>Sexual abuse or harm</strong></td>
                <td colSpan="4">
                  <div className={'radios'+pageId}></div>
                </td>
                <td>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>Emotional abuse or harm</strong></td>
                <td colSpan="4">
                  <div className={'radios'+pageId}></div>
                </td>
                <td>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>Financial abuse or harm</strong></td>
                <td colSpan="4">
                  <div className={'radios'+pageId}></div>
                </td>
                <td>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>Neglect</strong></td>
                <td colSpan="4">
                  <div className={'radios'+pageId}></div>
                </td>
                <td>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>Abuse or harm caused by inappropriate behaviour by staff</strong></td>
                <td colSpan="4">
                  <div className={'radios'+pageId}></div>
                </td>
                <td>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Other forms of abuse or harm</strong>
                </td>
                <td colSpan="4">
                  <div className={'radios'+pageId}></div>
                </td>
                <td>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="extent -rating_scale" id="scale_tooltips_section">
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one">
                  <div className="question_title">
                    <strong>If you observed any of these types of service user and participant abuse, would you ... ?</strong> <em>(please select)</em>
                    </div>
                  </td>
                <td className="question_table__header -col_two"><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="Agree ---- Disagree"/><br/></td>
                <td className="question_table__header -col_three" rowSpan="5" style={{verticalAlign:'bottom'}}>
                  <div className="rating_scale -point7 naScale">
                    <p className="rating_scale__heading">1 to 6 Rating Scale</p>
                    <div className="smileyFaceHappy"><img src="https://i.bpanz.com/i/eTbY9Np.png"/></div>
                    <ol>
                      <li>Strongly Agree</li>
                      <li>Agree</li>
                      <li>Somewhat Agree</li>
                      <li>Somewhat Disagree</li>
                      <li>Disagree</li>
                      <li>Strongly Disagree</li>
                      <li className="na">n/k Not Known</li>
                    </ol>
                    <div className="smileyFaceSad"><img src="https://i.bpanz.com/i/AoTqMUE.png"/></div>
                  </div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">... Report this behaviour.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">... Know how to report such behaviour.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">... Trust that, if such behaviour was reported, then it would be appropriately managed.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td className="question_table__header -col_one" style={{paddingRight:30}}>
                  <div className="question_title"><strong>To what extent do you agree that, over the past 12 months, there has been a significant improvement in:</strong> <em>(please select)</em></div>
                </td>
                <td className="question_table__header -col_two" style={{marginLeft:8}}><img src="https://i.bpanz.com/SurveyAssets/scale1to6nk_agree.png" alt="Agree ---- Disagree"/><br/></td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  Identifying and addressing client abuse.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  Training activities to address client abuse.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  Reducing client abuse.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  Your manager’s preparedness to eliminate client abuse.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  Your team’s preparedness to eliminate client abuse.
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

export default RiskOfClientAbuse
