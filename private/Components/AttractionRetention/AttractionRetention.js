import React, { Component } from 'react'

class AttractionRetention extends Component {

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
        <div className="text_one_col">
          <div className="question_title"><strong>What initially attracted you to work in this <span className="definition" name="orga">organisation</span>?</strong></div>
          <div className="question_response">
            <div className="response_field">
              <div className={'text'+pageId}></div>
            </div>
          </div> 
        </div>
        <div className="text_one_col">
          <div className="question_title"><strong>Why do you continue to work here?</strong></div>
          <div className="question_response">
            <div className="response_field">
              <div className={'text'+pageId}></div>
            </div>
          </div>
        </div>
        <div className="demographic">
          <div className="question_title">
            <strong>Do you <em>OFTEN</em> think of leaving this organisation?</strong>
          </div>
          <div className="question_response">
            <div className={'radios'+pageId}></div>
          </div>
        </div>

        <div className="demographic">
          <div className="question_title">
            <strong>What are the reasons affecting your decision ... </strong>
          </div>
          <table className="question_table" style={{margin: '30px auto'}}>
            <tbody>
              <tr>
                <td style={{paddingLeft:'1.5em'}}>... to want to <strong>STAY</strong> working here?</td>
                <td style={{paddingLeft:'1.5em'}}>... to want to <strong>LEAVE</strong> the organisation?</td>
              </tr>
              <tr>
                <td>
                  <div className="response_field smallheight">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
                <td>
                  <div className="response_field smallheight">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="response_field smallheight">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
                <td>
                  <div className="response_field smallheight">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="response_field smallheight">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
                <td>
                  <div className="response_field smallheight">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="if_text -yes">
          <div className="question_title">
            <strong>Have you formed a specific intention to leave the organisation?</strong>
          </div>
          <div className="question_response">
            <div className={'radios'+pageId}></div>
          </div>
          <table>
            <tbody>
              <tr>
                <td valign="top">
                  <div className="arrow">
                    <img src="https://i.bpanz.com/SurveyAssets/rightAngleRightArrow.png"></img>
                  </div>
                </td>
                <td>
                  <div className="question_title -no_shadow -why_question">
                    If <strong>YES</strong>, what was the deciding factor in your decision to leave the organisation?
                  </div>
                  <div className="question_response">
                    <div className={'text'+pageId}></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="demographic">
          <div className="question_title"><strong>Overall, how long do you intend to stay working for the organisation in the future?</strong></div>
          <div className="question_response -pfix">
            <div className={'radios'+pageId}></div>
          </div>
        </div>

      </div>
    )
  }
}

export default AttractionRetention
