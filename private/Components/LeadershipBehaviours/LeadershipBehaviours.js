import React, { Component } from 'react'

class LeadershipBehaviours extends Component {

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
        <div className="question_title -no_shadow"><strong>Keep thinking of the person you identified in the previous screen.</strong></div>
        <div className="extent -rating_scale" id="scale_tooltips_section" style={{marginTop:0}}>
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one">
                  <div className="question_title">
                    <strong>To what extent do you agree that this person demonstrates the following behaviours?</strong> <em>(please select)</em>
                  </div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:5}}>
                  <img src="https://i.bpanz.com/i/DBOuI2y.png" alt="Agree ---- Disagree"/><br/>
                </td>
                <td className="question_table__header -col_three" rowspan="8">
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
                <td className="question_title -no_shadow -align_right">
                  Has set the standards for building a great team - they will settle for nothing less.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Has an unwavering resolve to do whatever it takes to produce the best long term results - no matter how big or hard the decisions.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Has a quiet, self-effacing, modest style - they are never boastful or arrogant.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Displays a constant diligence to continually find a better way to do things.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr><td colSpan="2" style={{padding:'0.8em'}}></td></tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Is tough - but fair.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Leads the team well.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Communicates a very clear vision and direction for where they want the team to go.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Creates a strong sense of team cohesion and purpose.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr><td colSpan="2" style={{padding:'0.8em'}}></td></tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Puts an extraordinary amount of time and attention into getting the right team members in the right jobs.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Holds team members accountable for what they should be doing.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Acts decisively in moving/removing team members who are not performing.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Recognises and rewards great performance by team members.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr><td colSpan="2" style={{padding:'0.8em'}}></td></tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Communicates well on a one-to-one basis.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Listens well on a one-to-one basis.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Considers the views and opinions of others.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Knows when to say 'no' - and does so.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr><td colSpan="2" style={{padding:'0.8em'}}></td></tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Encourages robust debate amongst the team as a way of reaching the best decisions for the team.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Always wants to hear the truth - regardless of how uncomfortable it may be.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  When faced with adversity, this person will make a determined effort to expose, and face up to, the brutal facts of the situation.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Regardless of how difficult the situation, this person always exudes a sense of confidence that we will get through it.
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

export default LeadershipBehaviours
