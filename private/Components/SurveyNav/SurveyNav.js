import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SurveyNav extends Component {
  constructor(props) {
    super(props)
    this.navigate = this.navigate.bind(this);
  }

  navigate(event) {
    // event.preventDefault();
    let newPage = '';
    const pageIndex = this.props.pages.indexOf(this.props.page);
    if (event.target.name === "_NNext") {
      newPage = this.props.pages[pageIndex + 1];
      this.props.onBrowse(newPage);
    } else if (event.target.name === "_NPrev") {
      newPage = this.props.pages[(pageIndex - 1)];
      this.props.onBrowse(newPage);
    }
  }
  
  render() {
    // Nav button variables
    let pageIndex = this.props.pages.indexOf(this.props.page);
    let nextPage = this.props.page === 'Privacy' ? 'Privacy' : this.props.pages[pageIndex + 1];
    let previousPage = this.props.page === 'CoverPage' ? 'CoverPage' : this.props.pages[pageIndex - 1];
    // Progress bar variables
    let totalPages = this.props.pages.length - 3; // Page counter starts from the Engagement module
    let pageCounter = this.props.pages.indexOf(this.props.page) - 2;
    let estimatedProgress = Math.round(pageCounter/totalPages * 100);
    let progressBar = $('#progressBar');
    let progressBarWidth = (estimatedProgress / 100) * progressBar.width();
    let hideProgress = ['CoverPage', 'Instructions', 'Definitions'].includes(this.props.page); // Hide the progress bar on certain pages
    return (
      <div>
        <div className="survey-nav">
          {this.props.page === 'CoverPage' ? null : <NavLink to={`/${previousPage}`} title="Return to the previous page" name="_NPrev" onClick={this.navigate}>Previous</NavLink>}
          <input type="submit" name="_NStop" value="Stop &amp; Save" title="Save your progress and return later"/>
          {estimatedProgress === 100 ? <input type="submit" name="_NNext" value="Finish Survey" title="Finish and submit your response" onClick={() => confirm('Finished with your survey? Select OK to submit responses or Cancel to continue answering.')}/> : <NavLink to={`/${nextPage}`} title="Proceed to the next page" name="_NNext" onClick={this.navigate}>Next</NavLink>}
        </div>
        {hideProgress ? null : <div id="progressBar" className="progress"><div className="bar" style={{width: progressBarWidth}}>{estimatedProgress + '%'}</div></div>}
        {/* <input type="submit" name="_NPrev" value="Previous" onClick={this.navigate} title="Return to the previous page"/> */}
        {/* <input type="submit" name="_NNext" value="Next" onClick={this.navigate} title="Proceed to the next page"/> */}
      </div>
    )
  }
}

export default SurveyNav
