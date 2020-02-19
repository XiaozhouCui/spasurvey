import React, { Component } from 'react'

class TheIssuesThatMatter extends Component {

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
        <div className="issues" id="the_issues_that_matter">
          <div id="spacer" style={{display:'none'}}></div>
          <table style={{width:'100%'}}>
            <tbody>
              <tr className="header__row" id="fixedHeader">
                <td>
                  <p><strong>How well does the <span className="definition" id="orga">organisation</span> perform on each of the following issues?</strong></p>
                  <p><em>(please select <strong>one circle</strong> only for each issue)</em></p>
                </td>
                <td><div className="question_title -no_shadow">The organisation <strong>already does this well.</strong></div></td>
                <td><div className="question_title -no_shadow">There is room for the organisation to <strong>improve on this issue.</strong></div></td>
                <td><div className="question_title -no_shadow" style={{padding:5}}>There is <strong>cause for significant concern.</strong><br/> This needs urgent attention.</div></td>
              </tr>
              <tr className="row__title"><td colspan="4"><strong>PROFESSIONAL DEVELOPMENT</strong></td></tr>
              <tr>
                <td>Provides good <strong>development</strong> and <strong>career</strong> opportunities</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Addresses <strong>training</strong> and <strong>skills</strong> issues</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Addresses manager <strong>competency</strong> issues</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row__title"><td colspan="4"><strong>LEADERSHIP ENGAGEMENT</strong></td></tr>
              <tr>
                <td>Provides a climate of <strong>honesty</strong> and <strong>trust</strong></td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Ensures management <strong>get to know</strong> staff</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Addresses <strong>communication</strong> issues</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Ensures management <strong>listen</strong> to staff</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Addresses <strong>change management</strong> issues</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Ensures high standards of <strong>leadership</strong></td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Puts its <strong>values</strong> into practice</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Addresses <strong>morale</strong> issues</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Provides a <strong>supportive</strong> work environment</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Provides a <strong>flexible</strong> and <strong>innovative</strong> work environment</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row__title"><td colspan="4"><strong>TEAMWORK</strong></td></tr>
              <tr>
                <td>Provides a <strong>team-oriented</strong> environment</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Provides a climate of mutual <strong>respect</strong></td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Promotes <strong>multidisciplinary collaboration</strong></td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row__title"><td colspan="4"><strong>SERVICE STANDARDS</strong></td></tr>
              <tr>
                <td><strong>Recruits</strong> quality staff</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td><strong>Retains</strong> quality staff</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Addresses professional <strong>quality standards</strong></td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Provides adequate <strong>professional autonomy</strong> in the workplace</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Addresses any potential for adverse <strong>client safety</strong> events</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Ensures high <strong>quality service</strong> is delivered to clients</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row__title"><td colspan="4"><strong>RESOURCES &amp; STAFFING</strong></td></tr>
              <tr>
                <td>Addresses <strong>staffing</strong> issues</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Provides a good <strong>physical working environment</strong></td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Addresses <strong>equipment</strong> issues</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Addresses <strong>funding</strong> and <strong>resources</strong> issues</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Addresses <strong>employee safety</strong> issues</td>
                <td colspan="3">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>Addresses <strong>working hours</strong> issues</td>
                <td colspan="3">
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

export default TheIssuesThatMatter
