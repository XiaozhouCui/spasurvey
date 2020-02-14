import React, { Component } from 'react'

class TheDosAndDontsForEachValue extends Component {

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
        <div className="question_title">
          <strong>Imagine you are speaking to a new employee in the <span className="definition" name="orga">organisation</span>. What would you tell the employee about the do’s and don’ts of working here, the behaviours that are acceptable and the ones that are not acceptable for each of our values?</strong>
        </div>
        <div className="text_three_col">
          <table className="question_table" style={{margin:'20px auto'}}>
            <tbody>
              <tr>
                <td><strong><em>Value</em></strong></td>
                <td style={{textAlign:'center'}}><strong><em>Do this ...</em></strong></td>
                <td style={{textAlign:'center'}}><strong><em>Don't do this ...</em> </strong></td>
              </tr>
              <tr>
                <td>Value 1</td>
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
                <td>Value 2</td>
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
                <td>Value 3</td>
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
                <td>Value 4</td>
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

export default TheDosAndDontsForEachValue
