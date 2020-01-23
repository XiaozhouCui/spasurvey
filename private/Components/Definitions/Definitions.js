import React, { Component } from 'react'

class Definitions extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="response_label">
          <p>The survey has been designed to capture your perceptions of your working life at BPA.</p>
          <p>In order to gain an understanding of these perceptions, questions are asked throughout this survey at different levels, including:</p>
          <p style={{ marginBottom: 10 }}>Your working life ...</p>
          <ul style={{ marginTop: 10 }}>
            <li>In your <strong>Organisation</strong>.</li>
            <li>With your <strong>Manager/Supervisor</strong> (the person you primarily report to, who is responsible for conducting your Performance Development Review (PDR))</li>
            <li>In your <strong>Workplace</strong> (this includes people you come in contact with as you go about your daily work, and they may be outside your work team).</li>
            <li>In your <strong>Work Team</strong> (the people you work with on a day-to-day basis).</li>
          </ul>
          <p>Key definitions that appear in this survey are explained below. It is important that you familiarise yourself with the definitions, so that you know how to answer the questions asked at these levels.</p>
          <p>Any definition will appear as <span className="definition" name="unde">underlined text</span>. Position your mouse over the underlined text to reveal extra information or definitions that relate to a question.
          </p>
        </div>
        <div className="definitions_table">
          <table className="definitions">
            <tbody>
              <tr><td><strong>(1)</strong> <span className="definition" name="orga" write="true"></span></td></tr>
              <tr><td><strong>(2)</strong> <span className="definition" name="exec" write="true"></span></td></tr>
              <tr><td><strong>(3)</strong> <span className="definition" name="midd" write="true"></span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Definitions
