import React, { Component } from 'react'

class DrivingTheFuture extends Component {

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
        <div className="expectation">
          <table className="question_table -rating_scale" id="scale_tooltips_section">
            <tbody>
              <tr>
                <td className="question_table__header -col_one" style={{paddingBottom:0}}>
                  <div className="question_title"><strong>To what extent do you agree (or disagree) that the following statements accurately describe your <span className="definition" id="orga">organisation</span> at this point in time?</strong> <em>(please select)</em></div>
                  <div className="question_title -no_shadow" style={{padding:'1em 0 0 1em'}}>My organisation...</div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:0, verticalAlign:'top'}}><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="agree ---- disagree"/>
                </td>
                <td className="question_table__header -col_three" rowSpan="10">
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
                <td className="question_title -no_shadow -align_right">... Has a strong, clear sense of vision and future direction.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Is innovative, progressive, pro-active and dynamic.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Is focussed on performance, results, and achieving its goals.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Is striving to create change.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Is focussed on meeting the needs of the clients it serves.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr><td colSpan="3" style={{height:15}}></td></tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Has strong, effective teamwork.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Has good, effective internal communication.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Is flexible, adaptable and embraces change.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Has people who are competent and knowledgeable with good skill levels.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Is very effective at creating strong partnerships with other groups and organisations.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr><td colSpan="3" style={{height:15}}></td></tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Has appropriate and effective internal processes, systems and procedures.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Has strong, effective collaboration across teams within the organisation.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Has a supportive internal environment.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Provides effective support services to its client-base.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Has an environment where staff feel valued, encouraged and appreciated.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text_one_col">
          <div className="question_title"><strong>What is one thing that your organisation does well that you are especially proud of?</strong></div>
          <div className="question_response">
            <div className="response_field">
              <div className={'text'+pageId}></div>
            </div>
          </div> 
        </div>
      </div>
    )
  }
}

export default DrivingTheFuture
