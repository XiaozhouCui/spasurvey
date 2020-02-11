import React, { Component } from 'react'

class StrategicDirectionIAM extends Component {

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
                <td className="question_table__header -col_one" style={{paddingBottom:'1em', paddingRight:'1em'}}>
                  <div className="question_title"><strong>To what extent do you agree that the following statements describe your understanding of the Merger.</strong></div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:10}}><img src="https://i.bpanz.com/SurveyAssets/scale1to6nk_agree.png" alt="Agree ---- Disagree" style={{marginLeft:'-15px'}} /><br/></td>
                <td className="question_table__header -col_three" rowSpan="7" style={{verticalAlign:'bottom'}}>
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
                      <li className="na">n/k Not Known</li>
                    </ol>
                    <div className="smileyFaceSad"><img src="https://i.bpanz.com/AoTqMUE.png"/></div>
                  </div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">I understand why the Merger is/was required.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">I know where I can get more information about what is happening.</td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td className="question_title -no_shadow">I am confident that the Merger...</td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -dashed">
                  Is going in the right direction
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -dashed">
                  Will provide good opportunities for me
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -dashed">
                  Will improve services for our clients
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="question_title" style={{marginTop:0}}><strong>When you think about this Merger, what are...</strong></div>
        <div className="question_title -no_shadow">... you currently most excited about?</div>
        <div className="question_response -text">
          <div className={'text'+pageId}></div>
        </div>
        <div className="question_title -no_shadow">... you currently most concerned about?</div>
        <div className="question_response -text">
          <div className={'text'+pageId}></div>
        </div>
        <div className="question_title -no_shadow">What does the <span className="definition" name="orga">organisation</span> currently do well that we should endeavour to retain in this Merger?</div>
        <div className="question_response -text" style={{marginBottom: 20}}>
          <div className={'text'+pageId}></div>
        </div>
      </div>
    )
  }
}

export default StrategicDirectionIAM
