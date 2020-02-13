import React, { Component } from 'react'

class WorkplaceSafetyCulture extends Component {

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
        <div className="fourtier">
          <div className="question_title"><strong>Please select a circle to show which one of these paired statements best describes how <span className="definition" id="work">Workplace Safety</span> is put into practice in the <span className="definition" name="orga">organisation.</span></strong></div>
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one"></td>
                <td className="question_table__header" style={{verticalAlign:'bottom', paddingBottom:'1em'}}><strong>In the organisation ...</strong></td>
                <td className="question_table__header -scale_img"><img src="https://i.bpanz.com/i/mcwfFEN.png" alt="Positive ---- Negative"/><br/>
                </td>
                <td className="question_table__header"></td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_center">
                  <strong>Commitment</strong>
                </td>
                <td className="question_table__question -align_right">Workplace Safety is a priority for Management.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Workplace Safety is not important for Management.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_center">
                  <strong>Learning</strong>
                </td>
                <td className="question_table__question -align_right">The organisation is getting better at fixing Workplace Safety problems.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">The same Workplace Safety problems keep coming up again and again.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_center">
                  <strong>Staffing</strong>
                </td>
                <td className="question_table__question -align_right">The organisation has high standards of Workplace Safety because it has enough staff doing the work.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">The organisation has Workplace Safety problems because there are not enough staff.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_center">
                  <strong>Competency</strong>
                </td>
                <td className="question_table__question -align_right">The organisation has high standards of Workplace Safety because it makes sure that staff are competent.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">The organisation has Workplace Safety problems because it doesn’t give enough attention to staff competency.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_center">
                  <strong>Training</strong>
                </td>
                <td className="question_table__question -align_right">Workplace Safety is included in the organisation’s orientation and development programs for all staff.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Workplace Safety is not included in any of the organisation’s orientation or development programs.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_center">
                  <strong>Vigilance</strong>
                </td>
                <td className="question_table__question -align_right">The organisation monitors Workplace Safety all the time.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">The organisation doesn’t do much to monitor Workplace Safety.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_center">
                  <strong>Communication</strong>
                </td>
                <td className="question_table__question -align_right">The organisation is very open about dealing with Workplace Safety problems.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">No one in the organisation talks about Workplace Safety problems.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_center">
                  <strong>Correction</strong>
                </td>
                <td className="question_table__question -align_right">The organisation fixes Workplace Safety risks quickly.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Workplace Safety risks take forever to get fixed.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_center">
                  <strong>Investigation</strong>
                </td>
                <td className="question_table__question -align_right">Internal Workplace Safety investigations focus on fixing things - not on judging people.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Internal Workplace Safety investigations usually try to find someone to blame, punish or discipline.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="definitions_table" style={{display:'none', fontSize:11, lineHeight:'1.4em'}}>
          <table className="definitions">
            <tbody>
              <tr>
                <td>
                  <span className="definition" name="work" write="true" style={{display:'block'}}></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default WorkplaceSafetyCulture
