import React, { Component } from 'react'

class WorkLifeIntegration extends Component {

  componentDidMount() {
    this.props.mountContent('WorkLifeIntegration');
  }
  
  componentWillUnmount() { //before unmount component, return the radio buttons to where they belong
    this.props.unmountContent('WorkLifeIntegration');
  }

  render() {
    return (
      <div>
        <div className="demographic">
          <div className="question_title"><strong>Is it DIFFICULT to maintain a balance between the demands of your working life and the demands of your personal life?</strong> <em>(please select)</em></div>
          <div className="question_response">
            <div className="radiosWorkLifeIntegration"></div>
          </div>
        </div>
        <div className="demographic">
          <div className="question_title">
            <strong>What is one thing that tends to make balancing work and home ...</strong>
          </div>
          <table className="question_table" style={{margin: '30px auto'}}>
            <tbody>
              <tr>
                <td style={{textAlign: "center"}}> ... EASIER?</td>
                <td style={{textAlign: "center"}}> ... MORE DIFFICULT?</td>
              </tr>
              <tr>
                <td>
                  <div className="response_field smallheight">
                    <div className="textWorkLifeIntegration"></div>
                  </div>
                </td>
                <td>
                  <div className="response_field smallheight">
                    <div className="textWorkLifeIntegration"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="demographic">
          <div className="question_title">
            <strong>Are you able to access flexible work practices in your workplace?</strong>
          </div>
          <div className="question_response">
            <div className="radiosWorkLifeIntegration"></div>
          </div>
        </div>
        <div className="extent -no_rating_scale" id="scale_tooltips_section">
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one" style={{paddingRight:'1em'}}>
                  <div className="question_title -padding"><strong>To what extent do you agree with the following statements?</strong></div>
                </td>
                <td className="question_table__header -col_two"><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="Agree ---- Disagree"/><br/>
                </td>
                <td className="question_table__header -col_three" rowSpan="5" style={{verticalAlign:'bottom', paddingBottom:'30px'}}>
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
              <tr className="row">
                <td className="question_title -no_shadow -align_right">My manager is aware of and accommodates work/life balance issues.</td>
                <td className="question_response row">
                  <div className="radiosWorkLifeIntegration"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">My colleagues are flexible and supportive in helping me attend to work/life balance issues.</td>
                <td className="question_response row">
                  <div className="radiosWorkLifeIntegration"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">The <span className="definition" id="orga">organisation</span> actively accommodates the work/life balance needs of employees.</td>
                <td className="question_response row">
                  <div className="radiosWorkLifeIntegration"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">Employees are able to access alternative working arrangements to accommodate work/life balance issues (such as child care or working from home).</td>
                <td className="question_response row">
                  <div className="radiosWorkLifeIntegration"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default WorkLifeIntegration
