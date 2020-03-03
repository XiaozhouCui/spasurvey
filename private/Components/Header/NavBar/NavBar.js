import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event) {
    let pageName = event.target.innerText;
    // console.log(pageName);
    this.props.onClick(pageName);
  }

  render() {
    let programs = {
      'Cover':[],
      'Engaging Our People':[],
      'Identity & Direction':[],
      'Values':[],
      'Risk@Work':[],
      'Leadership Landscape':[],
      'Organisational Change':[],
      'Client Engagement':[],
    };
    for(let i = 0; i <= this.props.links.length; i++) {
      if (i < 3) {
        programs['Cover'].push(this.props.links[i]);
      }
      else if (i >= 3 && i < 7) {
        programs['Engaging Our People'].push(this.props.links[i]);
      }
      else if (i >= 7 && i < 16) {
        programs['Identity & Direction'].push(this.props.links[i]);
      }
      else if (i >= 16 && i < 22) {
        programs['Values'].push(this.props.links[i]);
      }
      else if (i >= 22 && i < 28) {
        programs['Risk@Work'].push(this.props.links[i]);
      }
      else if (i >= 28 && i < 35) {
        programs['Leadership Landscape'].push(this.props.links[i]);
      }
      else if (i >= 35 && i < 41) {
        programs['Organisational Change'].push(this.props.links[i]);
      }
      else if (i >= 41 && i < 46) {
        programs['Client Engagement'].push(this.props.links[i]);
      }
    }

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
