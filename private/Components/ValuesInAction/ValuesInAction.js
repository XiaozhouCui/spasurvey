import React, { Component } from 'react'

class ValuesInAction extends Component {

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
        <div className="question_title"><strong>Please rate the extent to which you agree that each of your <span className="definition" id="orga">organisation's</span> Values are being put into practice by each of the following groups of employees.</strong></div>
        <div className="values_in_action">
          <table className="question_table">
            <tbody>
              <tr>
                <th className="empty"></th>
                <th className="question_table__header"><strong>My organisation's <br/><span className="definition" id="exec">Executive Management</span></strong><br/>put this value into practice.</th>
                <th className="question_table__header"><strong>My Manager/ Supervisor (the person I report to)</strong> puts this value into practice.</th>
                <th className="question_table__header"><strong>The People I Work With</strong><br/>put this value into practice.</th>
              </tr>
              <tr>
                <td className="empty"></td>
                <td className="question_table__scale"><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="positive ---- negative"/></td>
                <td className="question_table__scale"><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="positive ---- negative"/></td>
                <td className="question_table__scale"><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="positive ---- negative"/></td>
              </tr>
              <tr className="value row">
                <td className="value-heading">
                  <h3><em>Value 1</em></h3>
                  <p style={{marginLeft:'3pt'}}>value description 1</p>
                </td>
                <td className="ValueExec"><div className={'radios'+pageId}></div></td>
                <td className="ValueManager"><div className={'radios'+pageId}></div></td>
                <td className="ValuePrac"><div className={'radios'+pageId}></div></td>
              </tr>
              <tr className="value row">
                <td className="value-heading">
                  <h3><em>Value 2</em></h3>
                  <p style={{marginLeft:'3pt'}}>value description 2</p>
                </td>
                <td className="ValueExec"><div className={'radios'+pageId}></div></td>
                <td className="ValueManager"><div className={'radios'+pageId}></div></td>
                <td className="ValuePrac"><div className={'radios'+pageId}></div></td>
              </tr>
              <tr className="value row">
                <td className="value-heading">
                  <h3><em>Value 3</em></h3>
                  <p style={{marginLeft:'3pt'}}>value description 3</p>
                </td>
                <td className="ValueExec"><div className={'radios'+pageId}></div></td>
                <td className="ValueManager"><div className={'radios'+pageId}></div></td>
                <td className="ValuePrac"><div className={'radios'+pageId}></div></td>
              </tr>
              <tr className="value row">
                <td className="value-heading">
                  <h3><em>Value 4</em></h3>
                  <p style={{marginLeft:'3pt'}}>value description 4</p>
                </td>
                <td className="ValueExec"><div className={'radios'+pageId}></div></td>
                <td className="ValueManager"><div className={'radios'+pageId}></div></td>
                <td className="ValuePrac"><div className={'radios'+pageId}></div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="question_yes_ns_no" id="values_promotion">
          <div className="question_title"><strong>If you observed that an employee was not demonstrating your organisation's Values, would you...?</strong> <em>(please select)</em></div>
          <table className="question_table">
            <tbody>
              <tr>
                <td></td>
                <td className="observation_options"><span>Yes</span><span>Not Sure</span><span>No</span></td>
              </tr>
              <tr className="row">
                <td style={{textAlign: 'right'}}><span style={{padding:'5px 25px', display:'inline-block'}}>... At an appropriate time or place, discuss with the employee the behaviour you saw and how it was inconsistent with your organisation's Values.</span></td>
                <td className="question_response yes_no_radio_btn">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td style={{textAlign: 'right'}}><span style={{padding:'5px 25px', display:'inline-block'}}>... Report this behaviour to the employee's supervisor.</span></td>
                <td className="question_response yes_no_radio_btn">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td style={{textAlign: 'right'}}><span style={{padding:'5px 25px', display:'inline-block'}}>... Trust that, if such behaviour was reported, then it would be appropriately managed.</span></td>
                <td className="question_response yes_no_radio_btn">
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

export default ValuesInAction
