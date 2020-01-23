import React, { Component } from 'react'

class SurveyNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  componentDidMount() {
    let progress = document.querySelectorAll(".mrProgressText");
    let progressSlot = document.querySelectorAll(".mrProgressBar");
    if (progress.length === progressSlot.length) {
      for (let i = 0; i < progress.length; i++) {
        this.props.moveContent(progress[i], progressSlot[i]);
      }
      console.log('Good! Progress text moved.')
    } else {
      console.log('Progress bar and mrData do not match!')
    }
  }

  render() {
    return (
      <div>
        <div className="survey-nav">
          <input type="submit" name="_NPrev" value="Previous" title="Return to the previous page"/>
          <input type="submit" name="_NStop" value="Stop &amp; Save" title="Save your progress and return later"/>
          <input type="submit" name="_NNext" value="Next" title="Proceed to the next page"/>
        </div>
        <div className="pageInfoElement">
          <div className="mrProgressBar" style={{display:'none'}}></div>
        </div>
        <div id="progressBar" className="progress">
          <div className="bar"></div>
        </div>
      </div>
    )
  }
}

export default SurveyNav
