import React, { Component } from 'react'

class FeedbackFromLastSurvey extends Component {

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
        <div id="feedback">
          <table className="feedback -rating_scale">
            <tbody>
              <tr>
                <td className="question_table__header -col_one">
              </td>
                <td className="question_table__header -col_two" style={{paddingBottom:15}}>
                <div className="question_title" style={{padding:0}}>
                  <span className="rating_scale__title"><strong>Yes</strong></span>
                  <span className="rating_scale__title"><strong>Not Sure</strong></span>
                  <span className="rating_scale__title"><strong>No</strong></span>
                  <span className="rating_scale__title"><strong>Not employed here at the time</strong></span>
                </div>
              </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">Did you complete the <span className="definition" id="orga">organisation’s</span> last employee survey?</td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td style={{paddingBottom: '2em'}} className="question_title -no_shadow">Was this a BPA employee survey?</td>
                <td style={{paddingBottom: '2em'}} className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>

              <tr>
                <td className="question_title -no_shadow">Did you receive feedback on the findings from that survey ...</td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                  <li>From the organisation?</li>
                  </ul>
                </td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td style={{paddingBottom: '2em'}} className="question_title -no_shadow">
                  <ul>
                  <li>From your manager?</li>
                  </ul>
                </td>
                <td style={{paddingBottom: '2em'}} className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>


              <tr>
                <td className="question_title -no_shadow">The survey feedback was ...</td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>Accurate (it was a truthful and balanced picture of the organisation).</li>
                  </ul>
                </td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>Timely (it was delivered within a short time after the survey).</li>
                  </ul>
                </td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td style={{paddingBottom: '2em'}} className="question_title -no_shadow">
                  <ul>
                    <li>Action oriented (it set out a clear plan of action for the future).</li>
                  </ul>
                </td>
                <td style={{paddingBottom: '2em'}} className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>


              <tr className="row">
                <td className="question_title -no_shadow">Was action taken as a result of the survey?</td>
                <td className="question_response row">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">Was there a positive impact resulting from the survey?</td>
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

export default FeedbackFromLastSurvey
