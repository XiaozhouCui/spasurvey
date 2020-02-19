import React, { Component } from 'react'

class ClientExpectations extends Component {

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
        <div className="question_title -no_shadow"><strong>Think of the majority of your <span className="definition" id="orga">organisation's</span> clients.</strong></div>
        <div className="expectation" id="expectation_orgn">
          <table className="question_table -rating_scale">
            <tbody>
              <tr>
                <td className="question_table__header -col_one">
                  <div className="question_title"><strong>What are the three most important things that these clients expect from your organisation?</strong></div>
                </td>
                <td className="question_table__header -col_two" style={{paddingLeft:'1em', paddingRight:'1em'}}>How much do you agree that each expectation is consistently met? (please select)</td>
                <td className="question_table__header -col_three" rowSpan="5" style={{verticalAlign:'bottom'}}>
                  <div className="rating_scale">
                    <p className="rating_scale__heading">1 to 6 Rating Scale</p>
                    <div className="smileyFaceHappy"><img src="https://i.bpanz.com/eTbY9Np.png"/></div>
                    <ol>
                      <li>Strongly Agree</li>
                      <li>Agree</li>
                      <li>Somewhat Agree</li>
                      <li>Somewhat Disagree</li>
                      <li>Disagree</li>
                      <li>Strongly Disagree</li>
                    </ol>
                    <div className="smileyFaceSad"><img src="https://i.bpanz.com/AoTqMUE.png"/></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="question_table__header -col_one"><p style={{margin:'7px 12px'}}><em>Please list these expectations below and then select next to each one how much you agree (or disagree) the organisation is meeting these clients' expectations.</em></p></td>
                <td className="question_table__header -col_two"><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="Agree ---- Disagree"/>
                </td>
              </tr>
              <tr className="row satisfied-expectation">
                <td className="question_response -text">
                  <div className="message-text"></div>
                  <div className={'text'+pageId}></div>
                </td>
                <td className="question_response">
                  <div className="message-radio"></div>
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row satisfied-expectation">
                <td className="question_response -text">
                  <div className="message-text"></div>
                  <div className={'text'+pageId}></div>
                </td>
                <td className="question_response">
                  <div className="message-radio"></div>
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row satisfied-expectation">
                <td className="question_response -text">
                  <div className="message-text"></div>
                  <div className={'text'+pageId}></div>
                </td>
                <td className="question_response">
                  <div className="message-radio"></div>
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="extent -rating_scale" id="scale_tooltips_section">
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one">
                  <div className="question_title">
                    <strong>To what extent do you agree that the following statements describe how things work in your organisation?</strong> <em>(please select)</em>
                  </div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:5}}>
                <img src="https://i.bpanz.com/i/DBOuI2y.png" alt="Agree ---- Disagree"/><br />
                </td>
                <td className="question_table__header -col_three" rowspan="9"></td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  <span className="definition" id="exec">Executive Management</span> is committed to providing quality service to clients.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Executive Management wants to know feedback from clients.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr> <td colspan="2" style={{height:'0.5em'}}> </td> </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  This organisation has specifically defined what exceptional service is.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Employees understand exactly what they must do to deliver exceptional service.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr> <td colspan="2" style={{height:'0.5em'}}> </td> </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Staffing levels are adequate to meet client needs.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  Employees meet client expectations on delivering exceptional service.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr> <td colspan="2" style={{height:'0.5em'}}> </td> </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  This organisation prides itself on providing service that is “right the first time”.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  The client records completed by employees are totally error-free.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="question_title"><strong>What is one thing that currently frustrates clients the most in their experiences with the organisation?</strong></div>
        <div className="question_title -no_shadow">For the best results your answer should be constructive, descriptive and something people can realistically do something about.</div>
        <div className="question_response -text">
          <div className={'text'+pageId}></div>
        </div>
      </div>
    )
  }
}

export default ClientExpectations
