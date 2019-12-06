import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    let radios = document.querySelectorAll("div[name='ClientLogo']");
    let radioSlots = document.querySelectorAll(".clientLogoSlot");
    if (radios.length === radioSlots.length) {
      for (let i = 0; i < radios.length; i++) {
        this.props.moveContent(radios[i], radioSlots[i]);
      }
    } else {
      console.log('Questions and field IDs do not match!')
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header__logo -bpanz">
          <img
            src="https://i.bpanz.com/SurveyAssets/bpa_logo.png"
            alt="Best Practice Australia logo"
          />
        </div>
        <div className="header__logo -client">
          <div className="clientLogoSlot"></div>
        </div>
        <div className="header-bar">
          <h1>Engagement</h1>
        </div>
      </div>
    );
  }
}

export default Header;
