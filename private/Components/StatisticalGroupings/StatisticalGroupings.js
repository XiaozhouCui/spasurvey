import React, { Component } from 'react'

class StatisticalGroupings extends Component {

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
        <div className="definitions_table -disclaimer">
          <p>Information gained from this section of the survey is <strong>NOT</strong> cross-matched to identify individual respondents. It is used to provide analysis at an organisational level (and sometimes at a reporting unit level, but <strong>ONLY</strong> if there are greater than 30 respondents).<span className="web-only"> If you would like to view BPA's Privacy and Confidentiality Policy <a href="https://bpanz.com/privacypolicy" target="_blank" rel="noopener noreferrer">click here</a> (opens in a new window).</span></p>
        </div>
        <div className="demographic">
          <div className="question_title"><strong>How long have you worked for this <span className="definition" id="orga">organisation</span>?</strong> <em>(please select)</em></div>
          <div className="question_response">
            <div className={'radios'+pageId}></div>
          </div>
        </div>
        <div className="demographic">
          <div className="question_title"><strong>What is your age group?</strong> <em>(please select)</em></div>
          <div className="question_response">
            <div className={'radios'+pageId}></div>
          </div>
        </div>
        <div className="demographic">
          <div className="question_title"><strong>What is your employment status?</strong> <em>(please select)</em></div>
          <div className="question_response">
            <div className={'radios'+pageId}></div>
          </div>
        </div>
        <div className="demographic">
          <div className="question_title"><strong>What is your position?</strong> <em>(please select)</em></div>
          <div className="question_response single_column">
            <div className={'radios'+pageId}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default StatisticalGroupings
