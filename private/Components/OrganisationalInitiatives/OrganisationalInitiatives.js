import React, { Component } from 'react'

class OrganisationalInitiatives extends Component {

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
          <strong>In the last year, the <span className="definition" id="orga">organisation</span> has implemented a number of new initiatives, some of which you may be familiar with, some of which you might not be. The list appears below.</strong>
        </div>
        <div className="issues -initiatives">
          <table style={{width:'100%'}}>
            <tbody>
              <tr className="empty" style={{background:'transparent'}}>
                <td colSpan="2" className="empty"></td>
                <td colSpan="3" className="progress_level">Level of Progress</td>
              </tr>
              <tr className="header__row">
                <td className="initiative_title"><p>In your opinion, how well is the organisation performing on each of these initiatives?</p> <p>(please select for each commitment)</p></td>
                <td>Are you aware of what this initiative?</td>
                <td colSpan="3">
                  <div className="question_title -no_shadow" style={{width:'32%', verticalAlign:'middle'}}>The organisation is making <strong>good progress</strong> on this.</div>
                  <div className="question_title -no_shadow" style={{width:'32%', verticalAlign:'middle'}}>The organisation is giving attention to this, but there is <strong>still room for improvement</strong>.</div>
                  <div className="question_title -no_shadow" style={{width:'32%', verticalAlign:'middle'}}>The organisation is <strong>not making enough progress</strong> on this.</div>
                </td>
              </tr>
              <tr>
                <td>
                  <h3><em>Initiative 1</em></h3>
                  <p><em>Insert brief description of the initiative.</em></p>
                </td>
                <td className="vertical_radios">
                  <div className={'radios'+pageId}></div>
                </td>
                <td colSpan="3" className="initiative_commitment">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h3><em>Initiative 2</em></h3>
                  <p><em>Insert brief description of the initiative.</em></p>
                </td>
                <td className="vertical_radios">
                  <div className={'radios'+pageId}></div>
                </td>
                <td colSpan="3" className="initiative_commitment">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h3><em>Initiative 3</em></h3>
                  <p><em>Insert brief description of the initiative.</em></p>
                </td>
                <td className="vertical_radios">
                  <div className={'radios'+pageId}></div>
                </td>
                <td colSpan="3" className="initiative_commitment">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h3><em>Initiative 4</em></h3>
                  <p><em>Insert brief description of the initiative.</em></p>
                </td>
                <td className="vertical_radios">
                  <div className={'radios'+pageId}></div>
                </td>
                <td colSpan="3" className="initiative_commitment">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h3><em>Initiative 5</em></h3>
                  <p><em>Insert brief description of the initiative.</em></p>
                </td>
                <td className="vertical_radios">
                  <div className={'radios'+pageId}></div>
                </td>
                <td colSpan="3" className="initiative_commitment">
                  <div className={'radios'+pageId}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default OrganisationalInitiatives
