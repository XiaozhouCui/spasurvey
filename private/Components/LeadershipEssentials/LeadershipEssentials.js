import React, { Component } from 'react'

class LeadershipEssentials extends Component {

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
        <div className="demographic">
          <div className="question_title"><strong>Think of your manager, the person you primarily report to, who is responsible for conducting your performance review. What is their position?</strong> <em>(please select)</em></div>
          <div className="question_response single_column">
            <div className={'radios'+pageId}></div>
          </div>
        </div>
        <div className="three_col_text">
          <div className="question_title"><strong>What are the three words or phrases you would use to describe the leadership style of this person?</strong></div>
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
      </div>
    )
  }
}

export default LeadershipEssentials
