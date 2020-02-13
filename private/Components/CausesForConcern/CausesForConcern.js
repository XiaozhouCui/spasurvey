import React, { Component } from 'react'

class CausesForConcern extends Component {

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
        <div id="values_promotion">
          <div className="threetier">
            <table className="question_table -favouritism_table">
              <tbody>
                <tr className="header_row" style={{marginBottom:'0.5em'}}>
                  <td className="question_table__header -col_one">
                    <div className="question_title -no_shadow">
                      <strong>Do you have concern about anyone in your workplace, within the last year, displaying behaviours such<br/>as ...</strong>
                    </div>
                  </td>
                  <td className="question_table__header -col_two">
                    <table>
                      <tbody>
                        <tr>
                          <td><strong>Yes</strong></td>
                          <td><strong>Not Sure</strong></td>
                          <td><strong>No</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="question_table__header -col_three" style={{textAlign:'center'}}><em>If <strong>yes</strong>, please describe an example of this behaviour, but do not name individuals.</em></td>
                </tr>
                <tr className="question_table__question_row row">
                  <td className="question_table__question" style={{paddingLeft:'1em'}}><strong>Harassment or Bullying</strong></td>
                  <td className="question_table__question -radio_buttons">
                    <div className={'radios'+pageId}></div>
                  </td>
                  <td className="question_table__question -radio_buttons">
                    <div className="question_response -respect">
                      <div className={'text'+pageId}></div>
                    </div>
                  </td>
                </tr>
                <tr className="question_table__question_row row">
                  <td className="question_table__question" style={{paddingLeft:'1em'}}><strong>Favouritism</strong> (in favour of someone)</td>
                  <td className="question_table__question -radio_buttons">
                    <div className={'radios'+pageId}></div>
                  </td>
                  <td className="question_table__question -radio_buttons">
                    <div className="question_response -respect">
                      <div className={'text'+pageId}></div>
                    </div>
                  </td>
                </tr>
                <tr className="question_table__question_row row">
                  <td className="question_table__question" style={{paddingLeft:'1em'}}><strong>Discrimination</strong> (against someone)</td>
                  <td className="question_table__question -radio_buttons">
                    <div className={'radios'+pageId}></div>
                  </td>
                  <td className="question_table__question -radio_buttons">
                    <div className="question_response -respect">
                      <div className={'text'+pageId}></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default CausesForConcern
