import React, { Component } from 'react'

class PersonalWellBeing extends Component {

componentDidMount() {
  this.props.mountContent('PersonalWellBeing');
}

componentWillUnmount() { //before unmount component, return the radio buttons to where they belong
  this.props.unmountContent('PersonalWellBeing');
}


  render() {
    return (
      <div>
        <div className="definitions_table -disclaimer">
          <p>This screen of questions is focused on <strong>you</strong>. The questions are asked as “I” statements.</p>
          <p>They look at how the working environment you have described throughout all the earlier questions comes together to form a workplace where you feel in control, valued, supported, and doing something you can feel proud of.</p>
        </div>
        <div className="expectation">
          <table className="question_table -rating_scale" id="scale_tooltips_section">
            <tbody>
              <tr>
                <td className="question_table__header -col_one" style={{paddingBottom: '0'}}>
                  <div className="question_title"><strong>To what extent do you agree with the following statements?</strong> <em>(please select)</em></div>
                  <div className="question_title -no_shadow" style={{marginTop:'10', padding:'7 14'}}>I have a strong sense of...</div>
                </td>
                <td className="question_table__header -col_two" style={{padding:'0', marginBottom:'1em'}}><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="agree ---- disagree"/>
                </td>
                <td className="question_table__header -col_three" rowSpan="10">
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
                <td className="question_title -no_shadow -align_right">... Being in control of many of my work choices.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being competent to do my role.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being optimistic about my future.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being useful to others.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Making a difference in my chosen field.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr> <td style={{height:'1em'}}> </td> </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being valued by others.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being a valued member of a team.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being treated with respect.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being treated as an individual, not just a number.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr> <td style={{height:'1em'}}> </td> </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being included by others around me.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being included in decisions and discussions that affect me.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Feeling safe at work to be the person I am.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Feeling safe at work to “speak up” when required.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr> <td style={{height:'1em'}}> </td> </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being supported to do my best.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being supported in learning from my mistakes.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being supported to achieve my personal and professional goals.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being supported to look after myself.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Being supported if I needed to address any workplace conflict.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr>
                <td className="question_title -no_shadow" colSpan="2" style={{paddingBottom:'0'}}>The work I do is ...</td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Meaningful.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Purposeful.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Stimulating.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Energising.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Something I am proud of.</td>
                <td className="question_response">
                  <div className="radiosPersonalWellBeing"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text_one_col">
          <div className="question_title"><strong>What is one thing that you have done well at work during the last 12 months that you are especially proud of?</strong></div>
          <div className="question_response">
            <div className="response_field">
              <div className="textPersonalWellBeing"></div>
            </div>
          </div> 
        </div>

      </div>
    )
  }
}

export default PersonalWellBeing
