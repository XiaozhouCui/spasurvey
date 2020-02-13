import React, { Component } from 'react'

class SafetyWork extends Component {

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
        <div className="if_text -no">
          <div className="question_title"><strong>Is your workplace a safe place for you to work?</strong></div>
          <div className="question_response">
            <div className={'radios'+pageId}></div>
          </div>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td valign="top">
                  <div className="arrow" style={{paddingLeft:100}}><img src="https://i.bpanz.com/m5aik7A.png"/>
                  </div>
                </td>
                <td>
                  <div className="question_title -no_shadow -why_question">If <strong>NO</strong>, what are the things that make it unsafe for you personally?</div>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="question_title"><strong>The following questions focus on the way in which <span className="definition" id="work">workplace safety</span> problems are addressed in your <span className="definition" id="orga">organisation</span>.</strong></div>
        <div className="extent -rating_scale -scale7" id="scale_tooltips_section">
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one" style={{paddingBottom:0}}>
                  <div className="question_title -no_shadow">If you observed a safety problem in your workplace, would you feel comfortable in raising it with the following people ... ?</div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:0}}><img src="https://i.bpanz.com/i/UZ9xPez.png" alt="Agree ---- Disagree" style={{marginLeft:'-15px'}} /><br/></td>
                <td className="question_table__header -col_three" rowSpan="7" style={{verticalAlign:'bottom'}}>
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
                      <li className="na">n/a Not Applicable</li>
                    </ol>
                    <div className="smileyFaceSad"><img src="https://i.bpanz.com/i/AoTqMUE.png"/></div>
                  </div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... 	Your co-workers.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... 	Your manager.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Your workplace's safety representative.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Your organisation's <span className="definition" id="exec">Executive Management</span>.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Your professional colleagues.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td className="question_title -no_shadow" style={{paddingTop:20}}>Would you then ...</td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Report this safety problem.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Know how to go about reporting this safety problem.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Trust that, if this safety problem was reported, then it would be appropriately addressed.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td className="question_title -no_shadow" style={{paddingTop:20}}>To what extent do you agree that the organisation has a good system for ...</td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Reporting workplace safety problems.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Addressing workplace safety problems.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Consulting staff prior to making changes that could affect workplace safety.
                </td>
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
                  <span className="definition" name="work" write="true" style={{display:'block'}}></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default SafetyWork
