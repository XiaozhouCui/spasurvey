import React, { Component } from 'react'

class NPS extends Component {

  componentDidMount() {
    this.props.mountContent(this.props.moduleName);
  }

  componentWillUnmount() {
    this.props.unmountContent(this.props.moduleName);
  }

  render() {
    const pageId = this.props.moduleName;
    return (
      <div>
        <div className="question_title -no_shadow" style={{ margin:10 }}><em>(Please note the rating scale is reversed for this next question.)</em></div>
        <div className="question_title" style={{marginTop:0}}>
          <strong>On a scale of 0-10 (where 10 = Absolutely Yes, and 0 = Absolutely No), how likely are you to recommend your organisation (where appropriate) as ...</strong>
        </div>
        <table className="styled_inputs">
          <tbody>
            <tr>
              <td className="question_title -no_shadow" colSpan="3"><strong>... a good place to work</strong> <em>(please select below)</em></td>
            </tr>
            <tr>
              <td className="absolnotrecom">
                <p>I would absolutely <strong>NOT</strong> recommend the organisation.</p><img src="https://i.bpanz.com/i/p0y9ejL.png" alt="sad face"/>
              </td>
              <td className="question_response">
                <div className={'radios'+pageId}></div>
                <div className="numbers_fallback">
                  <span className="red">0</span>
                  <span className="red">1</span>
                  <span className="yellow">2</span>
                  <span className="yellow">3</span>
                  <span className="yellow">4</span>
                  <span className="yellow">5</span>
                  <span className="yellow">6</span>
                  <span className="yellow">7</span>
                  <span className="yellow">8</span>
                  <span className="green">9</span>
                  <span className="green">10</span>
                </div>
                <div className="bracket -reason"></div>
                <div className="small_vertical_line -reason"></div>
              </td>
              <td className="absolrecom"><img src="https://i.bpanz.com/i/OqKIIBq.png" alt="happy face"/>
                <p>I would absolutely recommend the organisation.</p>
              </td>
            </tr>
            <tr>
              <td className="reason" colSpan="3" style={{paddingBottom:30}}>
                <div className="question_title -no_shadow"><strong>Why did you give this score?</strong></div>
                <div className="question_response">
                  <div className={'text'+pageId}></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="question_title -no_shadow" colSpan="3"><strong>... the best choice if they required the type of service we provide</strong> <em>(please select below)</em></td>
            </tr>
            <tr>
              <td className="absolnotrecom">
                <p>I would absolutely <strong>NOT</strong> recommend the organisation.</p><img src="https://i.bpanz.com/i/p0y9ejL.png" alt="sad face"/>
              </td>
              <td className="question_response">
                <div className={'radios'+pageId}></div>
                <div className="numbers_fallback">
                  <span className="red">0</span>
                  <span className="red">1</span>
                  <span className="yellow">2</span>
                  <span className="yellow">3</span>
                  <span className="yellow">4</span>
                  <span className="yellow">5</span>
                  <span className="yellow">6</span>
                  <span className="yellow">7</span>
                  <span className="yellow">8</span>
                  <span className="green">9</span>
                  <span className="green">10</span>
                </div>
                <div className="bracket -reason"></div>
                <div className="small_vertical_line -reason"></div>
              </td>
              <td className="absolrecom"><img src="https://i.bpanz.com/i/OqKIIBq.png" alt="happy face"/>
                <p>I would absolutely recommend the organisation.</p>
              </td>
            </tr>
            <tr>
              <td className="reason" colSpan="3">
                <div className="question_title -no_shadow"><strong>Why did you give this score?</strong></div>
                <div className="question_response">
                  <div className={'text'+pageId}></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default NPS
