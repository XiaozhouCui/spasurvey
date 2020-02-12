import React, { Component } from 'react'

class TheDosAndDonts extends Component {

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
        <div className="question_title"><strong>What are the three pieces of advice you would give to a new employee in your workplace about the <em>do's</em> and <em>don'ts</em> of working here – the behaviours that are acceptable and the ones that are not acceptable.</strong></div>
        <div className="text_two_col">
          <table className="question_table">
            <tbody>
              <tr>
                <td><strong><em>Do this ...</em></strong></td>
                <td><strong><em>Don't do this ...</em> </strong></td>
              </tr>
              <tr>
                <td>
                  <div className="response_field">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
                <td>
                  <div className="response_field">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="response_field">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
                <td>
                  <div className="response_field">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="response_field">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
                <td>
                  <div className="response_field">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TheDosAndDonts
