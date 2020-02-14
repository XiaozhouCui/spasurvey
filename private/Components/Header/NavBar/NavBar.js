import React, { Component } from 'react';

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

    return (
      <ul className="navBar">
        {Object.keys(this.props.titles).map( program => {
          return (
            <li key={program} className="dropdown">
              <a href="#" className="dropbtn">{program}</a>
              <div className="dropdown-content">
                {Object.keys(this.props.titles[program]).map( title => <a key={title} href="#" onClick={this.handlePageChange}>{title}</a> )}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NavBar
