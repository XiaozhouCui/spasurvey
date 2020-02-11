import React, { Component } from "react";

class TrulyGreatPlaceToWork extends Component {

  componentDidMount() {
    this.props.mountContent(this.props.moduleName);
  }

  componentWillUnmount() {
    this.props.unmountContent(this.props.moduleName);
  }

  render() {
    return (
      <div className="truly_great">
        <table className="question_table">
          <tbody>
            <tr>
              <td colSpan="4">
                <div className="question_title"><strong>On balance, is your <span className="definition" name="orga">organisation</span> a "<em>truly great place to work</em>"?</strong> <em>(please select)</em></div>
                <div className="question_response">
                  <div className="radiosTrulyGreat"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">
                <div className="question_arrow -yes"><img src="https://i.bpanz.com/i/m5aik7A.png"/></div>
              </td>
              <td>
                <div className="question_response -text">
                  <p>If <strong>YES</strong>, what makes it a <br/> "<em>truly great place to work</em>"?</p>
                  <div className="textTrulyGreat"></div>
                </div>
              </td>
              <td rowSpan="2">
                <div className="question_arrow -no"><img src="https://i.bpanz.com/i/m5aik7A.png"/></div>
              </td>
              <td>
                <div className="question_response -text">
                  <p>If <strong>NO</strong>, what is stopping it from becoming <br/> a "<em>truly great place to work</em>"?</p>
                  <div className="textTrulyGreat"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TrulyGreatPlaceToWork;
