import React, { Component } from 'react'

class AcknowledgementOfDiversity extends Component {

  componentDidMount() {
    this.props.mountContent(this.props.moduleName);
    const destination = document.getElementById('Cell.0.5');
    const target = document.getElementById('21930_Gender_Other_Specify');
    target.parentNode.removeChild(target);
    destination.appendChild(target);
  }

  componentWillUnmount() {
    const destination = document.getElementById('Specify_Slot');
    const target = document.getElementById('21930_Gender_Other_Specify');
    target.parentNode.removeChild(target);
    destination.appendChild(target);
    this.props.unmountContent(this.props.moduleName);
  }

  toggleOptions() {
    let opts = [];
    for (let i = 2; i <= 4; i++) {
      opts.push(document.getElementById('Cell.0.'+i))
    }
    opts.map(opt => {
      if (opt.style.display == 'block' || !opt.style.display) {
        opt.style.display = 'none';
      } else {
        opt.style.display = 'block';
      }
    });
  }

  render() {
    const pageId = this.props.moduleName;
    return (
      <div>
        <div className="definitions_table -disclaimer">
          <p>The answers to these diversity questions are <strong>not</strong> used to identify anyone.</p>
          <p>They will create a simple diversity profile of your <span className="definition" id="orga">organisation</span>, which can be used to show whether diversity groups are experiencing their working life differently from others.</p>
          <p>Answer as many of these questions as you feel comfortable answering.</p>
        </div>
        <div className="demographic">
          <div className="question_title"><strong>What best describes your gender identity?</strong> <em>(please select)</em></div>
          <div className="btn" onClick={this.toggleOptions}>Toggle Options</div>
          <div className="question_response single_column">
            <div className={'radios'+pageId}></div>
          </div>
        </div>
        <div id="Specify_Slot">
          <div id="21930_Gender_Other_Specify">
            <div style={{marginLeft:45}}>
              <table>
                <tbody>
                  <tr>
                    <td valign="top">
                      <img src="https://i.bpanz.com/SurveyAssets/rightAngleRightArrow.png"/>
                    </td>
                    <td className="specify">
                      <div className={'text'+pageId}></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="demographic">
          <div className="question_title"><strong>Were you born in Australia?</strong> <em>(please select)</em></div>
          <div className="question_response">
            <div className={'radios'+pageId}></div>
          </div>
        </div>
        <div className="demographic">
            <div className="question_title"><strong>Was English the first language you spoke?</strong> <em>(please select)</em></div>
            <div className="question_response">
              <div className={'radios'+pageId}></div>
            </div>
        </div>
        <div className="demographic">
          <div className="question_title"><strong>Do you identify yourself as being an Aboriginal and/or Torres Strait Islander person?</strong> <em>(please select)</em></div>
          <div className="question_response">
            <div className={'radios'+pageId}></div>
          </div>
        </div>
        <div className="demographic">
          <div className="question_title"><strong>Do you identify as a person with <span className="definition" name="disa">disability?</span></strong> <em>(please select)</em></div>
          <div className="question_response">
            <div className={'radios'+pageId}></div>
          </div>
        </div>
        <div className="demographic">
            <div className="question_title"><strong>Do you identify as part of the Lesbian, Gay, Bisexual, Transgender, Intersex, Queer (LGBTIQ+) communities?</strong> <em>(please select)</em></div>
            <div className="question_response">
              <div className={'radios'+pageId}></div>
            </div>
        </div>
      </div>
    )
  }
}

export default AcknowledgementOfDiversity
