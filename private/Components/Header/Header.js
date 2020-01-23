import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    let logoImg = document.querySelectorAll("div[name='ClientLogo']");
    let logoSlot = document.querySelectorAll(".clientLogoSlot");
    if (logoImg.length === logoSlot.length) {
      for (let i = 0; i < logoImg.length; i++) {
        this.props.moveContent(logoImg[i], logoSlot[i]);
      }
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
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

export default Header;
