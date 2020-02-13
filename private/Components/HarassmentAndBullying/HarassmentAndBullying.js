import React, { Component } from 'react'

class HarassmentAndBullying extends Component {

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
        <div className="extent -rating_scale -scale7" id="scale_tooltips_section">
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one" style={{paddingRight:'1em'}}>
                  <div className="question_title">
                    <strong>To what extent do you agree that the <span className="definition" id="orga">organisation</span> provides you with:</strong> <em>(please select)</em>
                  </div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:10}}>
                  <img src="https://i.bpanz.com/i/UZ9xPez.png" alt="Agree ---- Disagree" style={{marginLeft:'-15px'}} />
                </td>
                <td className="question_table__header -col_three" rowSpan="9" style={{verticalAlign:'bottom'}}>
                  <div className="rating_scale -point7 .naScale">
                    <p className="rating_scale__heading">1 to 6 Rating Scale</p>
                    <div className="smileyFaceHappy"><img src="https://i.bpanz.com/eTbY9Np.png"/></div>
                    <ol>
                      <li>Strongly Agree</li>
                      <li>Agree</li>
                      <li>Somewhat Agree</li>
                      <li>Somewhat Disagree</li>
                      <li>Disagree</li>
                      <li>Strongly Disagree</li>
                      <li className="na">n/a Not Applicable</li>
                    </ol>
                    <div className="smileyFaceSad"><img src="https://i.bpanz.com/AoTqMUE.png"/></div>
                  </div>
                </td>
              </tr>
              <tr><td className="question_title -no_shadow">A workplace that is free from <span className="definition" name="hara">harassment and bullying</span> from:</td></tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Clients.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Friends and relatives of clients.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Your supervisor/manager.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Staff under your supervision.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Co-workers in your immediate team.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Senior managers (other than your supervisor/manager).</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Co-workers outside your immediate team.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Suppliers and other service providers.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="extent -rating_scale -no_rating_scale" id="scale_tooltips_section">
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one">
                  <div className="question_title">
                    <strong>If you observed or experienced harassment or bullying, would you ... ?</strong>
                  </div>
                </td>
                <td className="question_table__header -col_two">
                  <img src="https://i.bpanz.com/i/DBOuI2y.png" alt="agree ---- disagree"/>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Report this behaviour.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Know how to report such behaviour.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Trust that, if such behaviour was reported, then it would be appropriately managed.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td className="question_table__header -col_one" colSpan="2" style={{paddingTop:15}}>
                  <div className="question_title">
                    <strong>To what extent do you agree that, over the past 12 months, there has been a significant improvement in ...</strong>
                  </div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Identifying and addressing harassing and bullying behaviour.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Training activities to address harassment and bullying.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Reducing harassment and bullying in the workplace.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Your manager’s preparedness to eliminate harassment and bullying.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Your team’s preparedness to eliminate harassment and bullying.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="definitions_table" style={{display:'none', fontSize:11, lineHeight:'1.4em'}}>
          <table className="definitions">
            <tbody>
              <tr>
                <td>
                  <span className="definition" name="hara" write="true" style={{display:'block'}}></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default HarassmentAndBullying
