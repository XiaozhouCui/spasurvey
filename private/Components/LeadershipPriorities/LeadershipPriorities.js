import React, { Component } from 'react';
import validators from '../../utils/validators';

class LeadershipPriorities extends Component {

  componentDidMount() {
    this.props.mountContent(this.props.moduleName);
    validators.validate();
  }

  componentWillUnmount() {
    this.props.unmountContent(this.props.moduleName);
  }

  render() {
    const pageId = this.props.moduleName;
    return (
      <div>
        <div className="question_title -no_shadow"><strong>Think of your manager, the person you primarily report to, who is responsible for conducting your performance review.</strong></div>
        <div className="expectation" id="expectation_mgr">
          <table className="question_table -rating_scale">
            <tbody>
              <tr>
                <td className="question_table__header -col_one">
                <div className="question_title"><strong>What are the three most important things that you expect from this person?</strong></div>
                </td>
                <td className="question_table__header -col_two" style={{paddingLeft:'1em', paddingRight:'1em'}}><em>How much do you agree that your manager consistently meets your expectations? (please select)</em></td>
                <td className="question_table__header -col_three" rowSpan="6" style={{verticalAlign:'bottom'}}>
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
              <tr>
                <td className="question_table__header -col_one" style={{padding:'0 12px'}}><em>Please list your expectations below and then select next to each one how much you agree (or disagree) that your manager is meeting your expectations.</em></td>
                <td className="question_table__header -col_two"><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="Agree ---- Disagree"/><br/>
                </td>
              </tr>
              <tr className="row">
                <td className="question_response -text">
                  <div className={'text'+pageId}></div>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_response -text">
                  <div className={'text'+pageId}></div>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_response -text">
                  <div className={'text'+pageId}></div>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="three_col_text">
          <div className="question_title"><strong>What are the three most important things that this person expects from you?</strong></div>
          <table className="question_table">
            <tbody>
              <tr>
                <td>
                  <div className={'text'+pageId}></div>
                </td>
                <td>
                  <div className={'text'+pageId}></div>
                </td>
                <td>
                  <div className={'text'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="coaching">
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one" style={{paddingRight:30}}>
                  <div className="question_title"><strong>Please select the extent to which this person ...</strong></div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:9}}>
                  <table>
                    <tr>
                      <td><strong>Regularly</strong></td>
                      <td><strong>Sometimes</strong></td>
                      <td><strong>Never</strong></td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr className="row coaching1">
                <td className="question_title -no_shadow -align_right">Clearly communicates to you what they expect from you.</td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row coaching1">
                <td className="question_title -no_shadow -align_right">Measures how well you perform against these expectations.</td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row coaching1">
                <td style={{paddingBottom: '2em'}} className="question_title -no_shadow -align_right">Gives you constructive feedback on your performance.</td>
                <td style={{paddingBottom: '2em'}} className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>

              <tr className="row coaching1">
                <td className="question_title -no_shadow -align_right">Helps you to set realistic performance objectives.</td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row coaching1">
                <td className="question_title -no_shadow -align_right">Helps you to plan how to improve your performance.</td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row coaching1">
                <td style={{paddingBottom: '2em'}} className="question_title -no_shadow -align_right">Helps you to plan your personal/professional development.</td>
                <td style={{paddingBottom: '2em'}} className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>

              <tr className="row coaching1">
                <td className="question_title -no_shadow -align_right">Reviews your progress in achieving your objectives.</td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row coaching1">
                <td className="question_title -no_shadow -align_right">Conducts annual performance reviews with you.</td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row coaching1">
                <td style={{paddingBottom: '2em'}} className="question_title -no_shadow -align_right">Is a role model you look up to and learn from.</td>
                <td style={{paddingBottom: '2em'}} className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>

              <tr>
                <td className="question_table__header -col_one" style={{paddingRight:30}}>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:9}}>
                  <table>
                    <tbody>
                      <tr>
                        <td><strong>As Appropriate</strong></td>
                        <td><strong>Sometimes</strong></td>
                        <td><strong>Never</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="row coaching2">
                <td className="question_title -no_shadow -align_right">Provides reward and recognition for outstanding performance.</td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row coaching2">
                <td className="question_title -no_shadow -align_right">Provides appreciation for good performance.</td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row coaching2">
                <td className="question_title -no_shadow -align_right">Provides support and guidance to help overcome any performance shortfalls.</td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row coaching2">
                <td className="question_title -no_shadow -align_right">Is prepared to address poor performance in a constructive manner.</td>
                <td className="question_response row">
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

export default LeadershipPriorities
