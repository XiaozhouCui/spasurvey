import React, { Component } from 'react'

class StrategicDirection extends Component {

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
        <div className="text_one_col">
          <div className="question_title">
            <strong>Please finish this sentence:</strong>
          </div>
          <div className="question_title -no_shadow" style={{overflow:'auto', margin:'10px auto 0 auto', width:600}}>
            <div style={{float:'left', paddingTop:10}}>
              <em>The one thing that this <span className="definition" id="orga">organisation</span> <br /> values above everything else, is <strong>TO</strong> ... </em>
            </div>
            <div style={{float:'left'}} className="response_values_above_all">
              <div className={'text'+pageId}></div>
            </div>
          </div>
        </div>
        <div className="extent -rating_scale -scale7" id="scale_tooltips_section">
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one" style={{paddingRight:'1em'}}>
                  <div className="question_title"><strong>To what extent do you agree with the following statements?</strong> <em>(please select)</em></div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:0}}><img src="https://i.bpanz.com/i/UZ9xPez.png" alt="Agree ---- Disagree" style={{marginLeft:'-15px'}} /><br /></td>
                <td className="question_table__header -col_three" rowSpan="8">
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
              <tr className="row">
                <td className="question_title -no_shadow -align_right" style={{padding:'0.5em 1em'}}><span className="definition" id="exec">Executive Management</span> has clearly communicated the organisation’s strategic direction and priorities to all employees.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right" style={{padding:'0.5em 1em'}}>The decisions and policies of the Executive Management are consistently focused on achieving the organisation's strategic direction and priorities.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right" style={{padding:'0.5em 1em'}}>Employees are very clear about the organisation's strategic direction and priorities.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right" style={{padding:'0.5em 1em'}}>I understand what the current Strategic Plan means for my work.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right" style={{padding:'0.5em 1em'}}>I know where I can get more information about the current Strategic Plan.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td className="question_title -no_shadow" style={{padding:'0.5em 1em', marginTop:'0.5em'}} colSpan="2">I am confident that the current Strategic Plan ...</td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Is achievable.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Is going in the right direction.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Will provide good opportunities for me.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="question_title" style={{margin:0}}><strong>What are three words or phrases that would best describe ...</strong></div>
        <div className="three_col_text">
          <table className="question_table" style={{margin:'20px auto'}}>
            <tbody>
              <tr>
                <td colSpan="4" className="question_title -no_shadow" style={{padding:'0 2em', textAlign:'left'}}>
                  ... What it’s like to work in the organisation right now?
                </td>
              </tr>
              <tr>
                <td>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
                <td>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
                <td>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="4" className="question_title -no_shadow" style={{padding:'2em 2em 0 2em', textAlign:'left'}}>
                  ... Your views of what the organisation <strong>needs to become in the future</strong> in order to survive and grow?
                </td>
              </tr>
              <tr>
                <td>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
                <td>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
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
      </div>
    )
  }
}

export default StrategicDirection
