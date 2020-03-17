import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event) {
    const pageId = event.target.getAttribute('href').replace(/^\#\//g, '');
    this.props.onClick(pageId);
  }

  render() {
    // divide the pages into programs
    let titlePairs = this.props.titlePairs;
    const programs = {
      'Cover':titlePairs.slice(0, 3),
      'Engaging Our People':titlePairs.slice(3, 7),
      'Identity & Direction':titlePairs.slice(7, 16),
      'Values':titlePairs.slice(16, 22),
      'Risk@Work':titlePairs.slice(22, 28),
      'Leadership Landscape':titlePairs.slice(28, 35),
      'Organisational Change':titlePairs.slice(35, 41),
      'Client Engagement':titlePairs.slice(41, 46),
    };

    return (
      <ul className="navBar">
        {Object.keys(programs).map( program => {
          return (
            <li key={program} className="dropdown">
              <a href="#" className="dropbtn">{program}</a>
              <div className="dropdown-content">
                {programs[program].map( page => <Link key={page[0]} to={page[0]} onClick={this.handlePageChange} >{page[1]}</Link> )}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NavBar
