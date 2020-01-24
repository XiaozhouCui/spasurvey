import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event) {
    let pageName = event.target.innerHTML;
    console.log(pageName);
    this.props.onClick(pageName);
  }

  render() {
    return (
      <ul className="navBar">
        <li><a href="#">Cover</a></li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Engaging Our People</a>
          <div className="dropdown-content">
            <a href="#" onClick={this.handlePageChange}>Engagement</a>
            <a href="#" onClick={this.handlePageChange}>Expectations</a>
            <a href="#" onClick={this.handlePageChange}>Personal Well-Being</a>
            <a href="#" onClick={this.handlePageChange}>Work-Life Integration</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Identity &amp; Direction</a>
          <div className="dropdown-content">
            <a href="#" onClick={this.handlePageChange}>Truly Great Place to Work</a>
            <a href="#">Net Promoter Score</a>
            <a href="#">Attraction &amp; Retention</a>
            <a href="#">Inclusion@Work</a>
            <a href="#">Driving the Future</a>
            <a href="#">Strategic Direction</a>
            <a href="#">Strategic Direction Involving a Merger</a>
            <a href="#">Statistical Groupings</a>
            <a href="#">Acknowledgement of Diversity</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Values</a>
          <div className="dropdown-content">
            <a href="#">Standards of Behaviour</a>
            <a href="#">Team Norms</a>
            <a href="#">Values-In-Action</a>
            <a href="#">The Do’s and Don’ts</a>
            <a href="#">Advice on Living the Values</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Risk@Work</a>
          <div className="dropdown-content">
            <a href="#">Respect@Work</a>
            <a href="#">Causes for Concern</a>
            <a href="#">Safety@Work</a>
            <a href="#">Workplace Safety Culture</a>
            <a href="#">Harassment and Bullying</a>
            <a href="#">Occupational Violence</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Leadership Landscape</a>
          <div className="dropdown-content">
            <a href="#">Leadership Essentials</a>
            <a href="#">Leadership Strengths</a>
            <a href="#">Leadership Priorities</a>
            <a href="#">Leadership Behaviours</a>
            <a href="#">Message in a Bottle</a>
            <a href="#">Message in a Bottle to Designated Managers</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Organisational Change</a>
          <div className="dropdown-content">
            <a href="#">The Issues That Matter</a>
            <a href="#">Organisational Initiatives</a>
            <a href="#">Embracing Our Challenges</a>
            <a href="#">Change Momentum</a>
            <a href="#">How Are We Travelling</a>
            <a href="#">Your Advice</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Client Engagement</a>
          <div className="dropdown-content">
            <a href="#">Client Expectations</a>
            <a href="#">Risk of Client Abuse</a>
            <a href="#">Client Safety Culture</a>
            <a href="#">Statement on Intellectual Property</a>
            <a href="#">Statement on Privacy</a>
          </div>
        </li>
      </ul>
    )
  }
}

export default NavBar
