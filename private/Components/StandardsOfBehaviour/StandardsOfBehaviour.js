import React, { Component } from 'react'

class StandardsOfBehaviour extends Component {

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
        <div className="extent -rating_scale" id="scale_tooltips_section">
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one">
                  <div className="question_title"><strong>To what extent do you agree that the following statements accurately describe your current <span className="definition" name="workplace">workplace</span>?</strong> <em>(please select)</em></div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:0, marginBottom:'-15px'}}><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="agree ---- disagree"/>
                </td>
                <td className="question_table__header -col_three" rowSpan="10">
                  <div className="rating_scale">
                    <p className="rating_scale__heading">1 to 6 Rating Scale</p>
                    <div className="smileyFaceHappy"><img src="https://i.bpanz.com/i/eTbY9Np.png"/></div>
                    <ol>
                      <li>Strongly Agree</li>
                      <li>Agree</li>
                      <li>Somewhat Agree</li>
                      <li>Somewhat Disagree</li>
                      <li>Disagree</li>
                      <li>Strongly Disagree</li>
                    </ol>
                    <div className="smileyFaceSad"><img src="https://i.bpanz.com/i/AoTqMUE.png"/></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="question_title -no_shadow">In my workplace, I am treated with:</td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>Respect.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>Honesty.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>Fairness.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>Equality.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td className="question_title -no_shadow" style={{marginTop:'1em'}}>Everyone in my workplace, <strong>without exception</strong>, maintains:</td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>High ethical standards of behaviour.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>High quality standards of work.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>High quality standards of service to clients.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>High standards of accountability.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="issues -integrity" id="integrity_at_work">
          <table style={{width:'100%'}}>
            <tbody>
              <tr className="header__row">
                <td>
                  <p><strong>Think of each person you work with on a daily basis.</strong></p>
                  <p>How well do these people perform on the following <strong>Integrity@Work</strong> criteria?</p>
                  <p><em>(please select one circle only for each question)</em></p>
                </td>
                <td><div className="question_title -no_shadow"><strong>Everyone I work with on a daily basis performs well</strong> on this criterion (as far as I am aware)</div></td>
                <td><div className="question_title -no_shadow">There are <strong>some lapses</strong> but nothing to be concerned about</div></td>
                <td><div className="question_title -no_shadow">There is <strong>cause for concern</strong> on this criterion (even if it is only one person)</div></td>
              </tr>
              <tr>
                <td>Each person has a <strong>clear understanding</strong> about what they are accountable and responsible for.</td>
                <td colSpan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Any decisions they make are <strong>fair and equitable</strong> – they do not show favouritism or bias.</td>
                <td colSpan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>There is no inappropriate <strong>interference</strong> in recruitment, selection and promotion processes.</td>
                <td colSpan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Any decisions they make about the use of resources are <strong>prudent and economical</strong> – they are not wasteful or extravagant.</td>
                <td colSpan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Each person <strong>uses their computer</strong> for appropriate purposes. They do not download offensive material or make personal use of social media sites in work time.</td>
                <td colSpan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Each person is <strong>open and honest</strong> when reporting to senior staff.</td>
                <td colSpan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Each person <strong>considers risks</strong> and takes appropriate action.</td>
                <td colSpan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Each person makes decisions based on <strong>ethics and integrity</strong>.</td>
                <td colSpan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Any actions they take are <strong>proper and legal</strong> – they would easily withstand external scrutiny.</td>
                <td colSpan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Each person is prepared to speak up about <strong>misconduct or corrupt activity</strong> – they do not tolerate improper or unlawful behaviour.</td>
                <td colSpan="3">
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

export default StandardsOfBehaviour
