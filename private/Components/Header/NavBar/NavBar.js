import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event) {
    const pageId = event.target.getAttribute('href').replace(/^\//g, '');
    this.props.onClick(pageId);
  }

  render() {
    // divide the pages into programs
    const links = [...this.props.links];
    const programs = {
      'Cover':links.slice(0, 3),
      'Engaging Our People':links.slice(3, 7),
      'Identity & Direction':links.slice(7, 16),
      'Values':links.slice(16, 22),
      'Risk@Work':links.slice(22, 28),
      'Leadership Landscape':links.slice(28, 35),
      'Organisational Change':links.slice(35, 41),
      'Client Engagement':links.slice(41, 46),
    };

    return (
      <ul className="navBar">
        {Object.keys(programs).map( program => {
          return (
            <li key={program} className="dropdown">
              <a href="#" className="dropbtn">{program}</a>
              <div className="dropdown-content">
                {programs[program].map( page => <Link key={page[0]} to={`/${page[0]}`} onClick={this.handlePageChange} >{page[1]}</Link> )}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NavBar
