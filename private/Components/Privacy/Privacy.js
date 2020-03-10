import React, { Component } from 'react'

class Privacy extends Component {

  render() {
    return (
      <div style={{lineHeight:2, padding:50, textAlign:'justify', fontSize:'1.2em'}}>
        <h1 style={{textAlign:'center'}}>BPA Privacy Policy</h1>
        <p><em>Question: What is Best Practice Australia’s (BPA’s) Privacy and Confidentiality Policy?</em></p>
        <p>Answer: BPA will adhere to the Australian Privacy Principles contained within the Privacy Amendment (Enhancing Privacy Protection) Act 2012.</p>
        <p>In particular, this means that BPA will not use or disclose personal information about an individual for a purpose other than the primary purpose of collection as per the National Privacy Principles.</p>
        <ol>
          <li>No information which may allow the identification of an individual is provided to the BPA client organisation without the consent of the individual.</li>
          <li>Information gained from demographic questions is analysed to provide aggregated data to the BPA client organisation. It is not cross-matched to identify individual respondents.</li>
          <li>Information gained from qualitative free-text questions is provided verbatim to the BPA client organisation. By completing a qualitative free-text question, the individual gives consent for that piece of text data to be included in reports to the BPA client organisation.</li>
          <li>Personal information is not otherwise disclosed except as required by law.</li>
        </ol>
        <p>For a full summary of BPA's Privacy and Confidentiality Policy you can head to <a href='https://bpanz.com/privacypolicy' target='_blank'>www.bpanz.com/privacypolicy</a> (opens in a new window).</p>
        <p>For any enquiries about privacy please contact BPA’s Privacy Officer:</p>
        <p>Email: privacyofficer@bpanz.com</p>
        <p>Phone: (61 7) 3367 0613</p>
      </div>
    )
  }
}

export default Privacy
