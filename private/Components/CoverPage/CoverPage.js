import React, { Component } from 'react'

class CoverPage extends Component {

  render() {
    return (
      <div className="coverpage">
        <div className="cover_logo">
          <img
            src="https://i.bpanz.com/SurveyAssets/bpa_banner.jpg"
            alt="Best Practice Australia banner"
          />
        </div>
        <div className="cover_letter">
          <div className="cover_letter__content">
            <h1>THE FULL SUITE OF BPA<br/>EMPLOYEE SURVEY MODULES</h1>
            <p style={{textAlign:'center'}}>© BEST PRACTICE AUSTRALIA PTY LTD 2020</p>
            <div className="definitions_table">
              <p>Please respect the copyright of this document and questions contained herein. They are the property of Best Practice Australia Pty Ltd and may not be reproduced or published without BPA’s prior written permission.</p>
            </div>
          </div>
          <div className="cover_letter__logo">
            <img
              src="https://i.bpanz.com/SurveyAssets/bpa_logo.png"
              alt="Best Practice Australia logo"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CoverPage
