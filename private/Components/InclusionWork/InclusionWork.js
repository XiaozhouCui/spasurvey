import React, { Component } from 'react'

class InclusionWork extends Component {

  componentDidMount() {
    this.props.mountContent('InclusionWork');
  }

  componentWillUnmount() { //before unmount component, return the radio buttons to where they belong
    this.props.unmountContent('InclusionWork');
  }

  render() {
    return (
      <div>
        <div className="question_title"><strong>To what extent do you agree (or disagree) with the following statements?</strong> <em>(please select)</em></div>
        <div className="extent -rating_scale -scale7" id="scale_tooltips_section">
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one" style={{paddingBottom:0}}>
                  <div className="question_title -no_shadow">In respect of Diversity and Inclusion:</div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:0}}><img src="https://i.bpanz.com/i/UZ9xPez.png" alt="Agree ---- Disagree" style={{marginLeft:'-15px'}} /><br/></td>
                <td className="question_table__header -col_three" rowSpan="7" style={{verticalAlign:'bottom'}}>
                  <div className="rating_scale -point7 naScale">
                    <p className="rating_scale__heading">1 to 6 Rating Scale</p>
                    <div className="smileyFaceHappy"><img src="https://i.bpanz.com/i/eTbY9Np.png"/></div>
                    <ol>
                      <li>Strongly Agree</li>
                      <li>Agree</li>
                      <li>Somewhat Agree</li>
                      <li>Somewhat Disagree</li>
                      <li>Disagree</li>
                      <li>Strongly Disagree</li>
                      <li className="na">n/a Not Applicable</li>
                    </ol>
                    <div className="smileyFaceSad"><img src="https://i.bpanz.com/i/AoTqMUE.png"/></div>
                  </div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>The organisation is committed to real action on Diversity and Inclusion.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>All employees are treated equally and fairly, regardless of:</li>
                  </ul>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Their cultural and/or linguistic background.</td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Their gender.</td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Their sexuality.</td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Their age.</td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Their faith or religion.</td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Identifying as an Aboriginal and/or Torres Strait Islander person.</td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">... Identifying as a person with disability.</td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>

              <tr>
                <td className="question_title -no_shadow" style={{paddingTop:50}}>In respect of <span className="definition" name="cult">Cultural Safety</span>:</td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>The organisation is a culturally inclusive employer.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>In my workplace, other employees would be accepting and supportive of any employee who identified themselves as being an Aboriginal or Torres Strait Islander person.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>In my workplace, other employees would be accepting and supportive of any employee who identified themselves as being of Non-English speaking heritage/background.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>The organisation provides a culturally safe workplace for staff of diverse cultural backgrounds.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>

              <tr>
                <td className="question_title -no_shadow" style={{paddingTop:50}}>In respect to Gender Equality:</td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>My immediate supervisor/manager genuinely supports equality between genders.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>I have the flexibility I need to manage work and other commitments.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>In my organisation gender-based harassment and sexual harassment are not tolerated.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul>
                    <li>In my organisation, women are provided with equal opportunity to work in management positions.</li>
                  </ul>
                </td>
                <td className="question_response">
                  <div className="radiosInclusionWork"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default InclusionWork
