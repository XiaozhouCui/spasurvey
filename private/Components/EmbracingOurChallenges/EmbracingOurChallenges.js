import React, { Component } from 'react'

class EmbracingOurChallenges extends Component {

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
        <div className="extent -rating_scale">
          <table className="question_table" id="scale_tooltips_section">
            <tbody>
              <tr>
                <td className="question_table__header -col_one">
                  <div className="question_title"><strong>To what extent do you agree with the following statements?</strong> <em>(please select)</em></div>
                </td>
                <td className="question_table__header -col_two" style={{paddingBottom:0}}>
                  <img src="https://i.bpanz.com/i/DBOuI2y.png" alt="Agree ---- Disagree"/><br/>
                </td>
                <td className="question_table__header -col_three" rowSpan="7">
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
                <td className="question_title -no_shadow">
                  I broadly understand the challenges that the <span className="definition" id="orga">organisation</span> will experience over the next 12-18 months.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  I am confident that the changes the organisation introduces will be well planned, well thought-out and client focused.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  I have a good understanding of how these changes will affect me in my work area.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  I am confident that these changes will be well communicated to me when information is at hand.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td className="question_title -no_shadow">
                  Overall, I am confident and optimistic that these changes will have a positive impact on:
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul><li>Me personally.</li></ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul><li>My work area.</li></ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul><li>The organisation's clients.</li></ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul><li>The organisation itself.</li></ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  <ul><li>The community in general.</li></ul>
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  I am confident that if these changes produce any unintended consequences, the organisation will be fast and flexible in making any necessary modifications.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr className="row">
                <td className="question_title -no_shadow">
                  I am confident in my own ability to respond well to this environment of constant change.
                </td>
                <td className="question_response">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="question_table__header -col_one">
          <div className="question_title"><strong>Looking ahead over the next year, to the potential challenges facing the organisation, and everyone who works in it, what is...</strong></div>
        </div>
        <div className="question_title -no_shadow">... the one thing you are <strong>most excited</strong> about?</div>
        <div className="question_response -text">
          <div className={'text'+pageId}></div>
        </div>
        <div className="question_title -no_shadow">... the one thing you are <strong>most concerned</strong> about?</div>
        <div className="question_response -text" style={{marginBottom: 20}}>
          <div className={'text'+pageId}></div>
        </div>
      </div>
    )
  }
}

export default EmbracingOurChallenges
