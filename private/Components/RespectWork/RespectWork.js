import React, { Component } from 'react'

class RespectWork extends Component {

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
        <div className="extent -rating_scale" id="scale_tooltips_section">
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header -col_one" style={{paddingBottom:0, verticalAlign:'middle'}}><div className="question_title -padding"><strong>To what extent do you agree that the following statements accurately describe your current <span className="definition" name="workplace">workplace</span>?</strong> <em>(please select)</em></div><div className="question_title -no_shadow" style={{paddingTop:20}}>My workplace is:</div></td>
                <td className="question_table__header -col_two" style={{paddingBottom:10}}><img src="https://i.bpanz.com/i/DBOuI2y.png" alt="agree ---- disagree"/><br/>
                </td>
                <td className="question_table__header -col_three" rowSpan="9">
                  <div className="rating_scale">
                    <p className="rating_scale__heading">1 to 6 Rating Scale</p>
                    <div className="smileyFaceHappy"><img src="https://i.bpanz.com/i/eTbY9Np.png"/></div>
                    <ol>
                      <li>Strongly Agree</li>
                      <li>Agree</li>
                      <li>Somewhat Agree</li>
                      <li>Somewhat Disagree</li>
                      <li>Disagree</li>
                      <li>Strongly Disagree</li>
                    </ol>
                    <div className="smileyFaceSad"><img src="https://i.bpanz.com/i/AoTqMUE.png"/></div>
                  </div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Free from <span className="definition" id="bull">bullying</span>.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Free from <span className="definition" id="hara">harassment</span>.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Free from <span className="definition" id="sexu">sexual harassment</span>.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr> <td colSpan="2" style={{height:10}} /> </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Free from <span className="definition" id="favo">favouritism</span>.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Free from <span className="definition" id="disc">discrimination</span>.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow -align_right">
                  ... Free from <span className="definition" id="gend">gender-based discrimination</span>.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="definitions_table" style={{display:'none', fontSize:11, lineHeight:'1.4em'}}>
          <table className="definitions">
            <tbody>
              <tr>
                <td style={{width:'49%', paddingRight:'1%'}}>
                  <span className="definition" name="hara" write="true" style={{display:'block', marginBottom:'1em'}}></span>
                  <span className="definition" name="sexu" write="true" style={{display:'block'}}></span>
                </td>
                <td style={{width:'49%', paddingLeft:'1%'}}>
                  <span className="definition" name="favo" write="true" style={{display:'block', marginBottom:'1em'}}></span>
                  <span className="definition" name="disc" write="true" style={{display:'block', marginBottom:'1em'}}></span>
                  <span className="definition" name="gend" write="true" style={{display:'block'}}></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}

export default RespectWork
