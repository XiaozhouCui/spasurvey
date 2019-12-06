import React, { Component } from 'react'

class SurveyNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  componentDidMount() {
    let radios = document.querySelectorAll(".mrProgressText");
    let radioSlots = document.querySelectorAll(".mrProgressBar");
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
      <div>
        <div className="survey-nav">
          <input type="submit" name="_NPrev" value="Previous" title="Return to the previous page"/>
          <input type="submit" name="_NStop" value="Stop &amp; Save" title="Save your progress and return later"/>
          <input type="submit" name="_NNext" value="Next" title="Proceed to the next page"/>
        </div>
        <div className="pageInfoElement">
          <div className="mrProgressBar"></div>
        </div>
        <div id="progressBar" className="progress">
          <div className="bar"></div>
        </div>
      </div>
    )
  }
}

export default SurveyNav
