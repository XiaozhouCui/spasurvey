import React, { Component } from 'react'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footer__section -links">
          <a href="https://bpanz.com/bpacopyright" target="_blank" rel="noopener noreferrer" className="copyright">© 2020 Best Practice Australia</a>
          <a href="https://bpanz.com/privacypolicy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://bpanz.com/disclaimer" target="_blank" rel="noopener noreferrer">Ts &amp; Cs</a>
          <a href="https://bpanz.com/intellectual-property-statement" target="_blank" rel="noopener noreferrer">Intellectual Property</a>
        </div>
        <div className="confidential">Confidential - your feedback will be anonymous</div>
        <div className="clearelement"></div>
      </div>
    )
  }
}

export default Footer
