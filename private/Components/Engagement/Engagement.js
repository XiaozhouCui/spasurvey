import React, { Component } from "react";

class Engagement extends Component {

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
        <div className="question_title -no_shadow">
          Below are sets of paired statements that describe what it may be like to work in your <span className="definition" name="orga">organisation</span>.
        </div>
        <div className="threetier">
          <div className="question_title">
            <strong>
              Please select the circle that best represents your views on each
              of these paired statements.
            </strong>
          </div>
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header">
                  In the organisation ...
                </td>
                <td
                  className="question_table__header -scale_img"
                  style={{ height: 74 }}
                >
                  <div className="pos_neg_fixed">
                    <img
                      id="pos_neg_scale"
                      src="https://i.bpanz.com/i/mcwfFEN.png"
                      alt="Positive ---- Negative"
                    />
                  </div>
                  <br />
                </td>
                <td className="question_table__header"></td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  People are very optimistic about the organisation's future.
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  People are very pessimistic about the organisation's future.
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  There is high trust in <span className="definition" name="exec">Executive Management</span>.
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  There is low trust in Executive Management.
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  There is high trust in <span className="definition" name="midd">Middle Management</span>.
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  There is low trust in Middle Management.
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  There is a strong sense of success and achievement -
                  <em>'Things are getting better all the time'</em>.
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  There is a strong sense of the organisation having
                  <em>'Lost its way'</em>.
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  People are very positive about tackling problems. There is a
                  <em>'Can do'</em> mentality.
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  People are very negative about tackling problems. There is a
                  <em>'Things are too hard'</em> mentality.
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  Change in the organisation = Better things to come for me.
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  Change in the organisation = I will be much worse off.
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  There is a strong sense of purpose and direction.
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  It is common to hear <em>'Communication is poor'</em> or
                  <em>'There is no leadership'</em>.
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  People want to improve the way things work in the
                  organisation.
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  People treat their work as <em>'Just a job'</em>.
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  There is a climate of <em>'Trust and Respect'</em> throughout
                  the organisation.
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  There is a climate of <em>'Fear'</em> throughout the
                  organisation.
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">
                  People are proud of the successes and achievements of the
                  organisation.
                </td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">
                  People focus on the negatives and the failures of the
                  organisation.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Engagement;
