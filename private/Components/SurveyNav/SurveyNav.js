import React, { Component } from 'react'

class SurveyNav extends Component {
  constructor(props) {
    super(props)
    this.navigate = this.navigate.bind(this);
  }

  navigate(event) {
    event.preventDefault();
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
    let totalPages = this.props.pages.length - 3; // Page counter starts from the Engagement module
    let pageCounter = this.props.pages.indexOf(this.props.page) - 2;
    let estimatedProgress = Math.round(pageCounter/totalPages * 100);
    let progressBar = $('#progressBar');
    let progressBarWidth = (estimatedProgress / 100) * progressBar.width();
    let hideProgress = ['Cover Page', 'Instructions', 'Definitions'].includes(this.props.page); // Hide the progress bar on certain pages
    return (
      <div>
        <div className="survey-nav">
          {this.props.page === 'Cover Page' ? null : <input type="submit" name="_NPrev" value="Previous" onClick={this.navigate} title="Return to the previous page"/>}
          <input type="submit" name="_NStop" value="Stop &amp; Save" title="Save your progress and return later"/>
          {estimatedProgress === 100 ? <input type="submit" name="_NNext" value="Finish Survey" title="Finish and submit your response" onClick={() => confirm('Finished with your survey? Select OK to submit responses or Cancel to continue answering.')}/> : <input type="submit" name="_NNext" value="Next" onClick={this.navigate} title="Proceed to the next page"/>}
        </div>
        {hideProgress ? null : <div id="progressBar" className="progress"><div className="bar" style={{width: progressBarWidth}}>{estimatedProgress + '%'}</div></div>}
      </div>
    )
  }
}

export default SurveyNav
