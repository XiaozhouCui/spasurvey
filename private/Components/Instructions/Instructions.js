import React, { Component } from 'react'

class Instructions extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
        <div className="notice -warning">This is your <strong><em>private</em></strong> and <strong><em>personal</em></strong> <strong>survey</strong>. Sharing your email link would allow others to view and change your responses.</div>
        <table className="esurvey_instructions" cellPadding="5">
          <tbody>
            <tr className="instructions__row">
              <td className="instructions__col">
                <p className="instructions__title">Work Unit</p>
              </td>
              <td className="instructions__col">
                <div className="instructions__content">
                <p>In order to enable us to identify where we do things well and where we could improve, the responses you provide in this electronic survey will be allocated to: <span>{this.props.workunit}</span></p>
                </div>
              </td>
            </tr>
            <tr className="instructions__row">
              <td className="instructions__col">
                <p className="instructions__title">Anonymity and Confidentiality</p>
              </td>
              <td className="instructions__col">
                <div className="instructions__content">
                  <p><strong>Your response is anonymous</strong>. Any link between your email address and any survey responses you enter is <em>automatically severed</em> before the data passes through BPA's analytical databases. For a full summary of BPA's Privacy and Confidentiality Policy you can head to <a href='https://bpanz.com/privacypolicy' target='_blank'>www.bpanz.com/privacypolicy</a> (opens in a new window).</p>
                </div>
              </td>
            </tr>
            <tr className="instructions__row">
              <td className="instructions__col">
                <p className="instructions__title">Navigation</p>
              </td>
              <td className="instructions__col">
                <div className="instructions__content">
                  <p>Use the <strong>'Next'</strong> and <strong>'Previous'</strong> buttons at the bottom of each page to navigate the survey. <strong>Do NOT use your browser's 'Back', 'Forward' or 'Refresh' buttons</strong>. Like any online secure transaction (e.g. internet banking), you cannot use the browser navigation buttons.</p>
                  <p>To stop the survey and return to it at a later time, click the <strong>'Stop &amp; Save'</strong> button located at the bottom of any page. Your progress throughout the survey will be saved up to the page where you stopped.</p>
                  <p>To make the font bigger on your screen, press and hold the <strong>CTRL</strong> key while pressing the plus <strong>(+)</strong> button to zoom in, or the minus <strong>(-)</strong> to zoom out. Press <strong>CTRL+0</strong> to reset the zoom level.</p>
                </div>
              </td>
            </tr>
            <tr className="instructions__row">
              <td className="instructions__col -no_border">
                <p className="instructions__title">No Time Limits</p>
              </td>
              <td className="instructions__col -no_border">
                <div className="instructions__content">
                  <p>The survey does not have to be completed in one session. You can save your survey response using the <strong>'Stop &amp; Save'</strong> button and return to it later via the email you received containing the link to the survey.</p>
                </div>
              </td>
            </tr>
            <tr className="instructions__row">
              <td className="instructions__col -no_border">
                <p className="instructions__title">Partially Completed Surveys</p>
              </td>
              <td className="instructions__col -no_border">
                <div className="instructions__content">
                  <p>At the end of the census period, if you've partially completed your survey, <em>your responses will be included in the overall data analysis</em>.</p>
                </div>
              </td>
            </tr>
            <tr className="instructions__row">
              <td className="instructions__col">
                <p className="instructions__title">Finalising Your Response</p>
              </td>
              <td className="instructions__col">
                <div className="instructions__content">
                  <p>Click <strong>'Finish Survey'</strong> at the end of the survey when you are happy with your response. You will NOT be able to change your answers or access the survey once you have clicked <strong>'Finish Survey'</strong>.</p>
                </div>
              </td>
            </tr>
  
            <tr className="instructions__row">
              <td className="instructions__col">
                <p className="instructions__title">Contacting Best Practice Australia</p>
              </td>
              <td className="instructions__col">
                <div className="instructions__content">
                  <p>You can contact Best Practice Australia via <a href='mailto:survey.support@bpanz.com'>email</a>. Or, for more urgent matters, contact Best Practice Australia via phone on (07) 3367 0613 during business hours (8:00am - 5:00pm, Brisbane).</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Instructions
