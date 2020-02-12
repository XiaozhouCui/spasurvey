import React, { Component } from 'react'

class TeamNorms extends Component {

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
        <div className="threetier">
          <div className="question_title"><strong>Please select the circle to show which one of these paired statements best describes your <span className="definition" name="team">work team</span>.</strong></div>
          <table className="question_table">
            <tbody>
              <tr>
                <td className="question_table__header" style={{verticalAlign:'bottom'}}><div className="question_title -no_shadow"><strong>In my work team, most of the team members ...</strong></div></td>
                <td className="question_table__header -scale_img"><img src="https://i.bpanz.com/i/mcwfFEN.png" alt="Positive ---- Negative"/><br/>
                </td>
                <td className="question_table__header"></td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">Know each other well.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Don’t know who else is in the team.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">Are quick to step in and help each other.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Complain about other team members behind their backs.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">Are clear about what other team members expect from them.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Are not sure about what other team members expect from them.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">Have confidence and trust in the team leader.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Are reluctant to do what the team leader says without a good reason.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">Never leave the job half done.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Think it is OK to leave a job half done ...<br/>if you can get away with it.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">Work to fix any mistakes - rather than cover them up.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Think it is OK to hide your mistakes ...<br/>if you can get away with it.</td>
              </tr>
              <tr>
                <td style={{padding: '12px 0 7px 12px'}}>
                  <div className="question_title -no_shadow">
                    <strong>In my work team...</strong>
                  </div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">I feel safe in discussing work problems with other team members.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">I would be laughed at if I raised work problems with other team members.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">I feel safe in discussing work problems with my team leader.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">I would be victimised if I raised work problems with my team leader.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">My team leader encourages me to find new ways of doing my job better.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">My team leader doesn't want me to look for new ways of doing my job better.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">I feel that any new ideas or changes I make are appreciated.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">I feel that making changes will only get me into trouble.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">I feel a sense of pride when the changes I make in my job have good results.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">I feel frustrated that I'm not allowed to implement simple changes that would be good for everyone.</td>
              </tr>
              <tr>
                <td style={{padding: '12px 0 7px 12px'}}>
                  <div className="question_title -no_shadow">
                    <strong>In my work team, employees are actively encouraged to...</strong>
                  </div>
                </td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">Press hard for better answers to long term problems.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Adopt quick-fixes ... <br />If they can get away with it.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">Seek innovative solutions to tough problems.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Give up if solutions are not readily available.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">Look for new and better ways of doing things.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Do it the way it has always been done.</td>
              </tr>
              <tr className="question_table__question_row row">
                <td className="question_table__question -align_right">Speak up if they see a problem.</td>
                <td className="question_table__question -align_center">
                  <div className={'radios'+pageId}></div>
                </td>
                <td className="question_table__question -align_left">Let someone else take responsibility for raising problems.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TeamNorms
