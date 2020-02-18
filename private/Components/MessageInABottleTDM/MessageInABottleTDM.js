import React, { Component } from 'react'

class MessageInABottleTDM extends Component {

  componentDidMount() {
    this.props.mountContent(this.props.moduleName);
    document.querySelector('.message_in_a_bottle textarea').setAttribute('placeholder', '(1000 character limit)');
  }

  componentWillUnmount() {
    this.props.unmountContent(this.props.moduleName);
  }

  render() {
    const pageId = this.props.moduleName;
    return (
      <div>
        <div className="demographic">
          <div className="question_title">If there was one message you would like to pass on to <strong>one of the senior managers listed below</strong> that would assist in making the <span className="definition" id="orga">organisation</span> a better place to work it would be ...</div>
          <div className="question_response -miab">
            <div className={'radios'+pageId}></div>
          </div>
        </div>
        <div className="message_in_a_bottle">
          <div className="question_response" style={{marginTop: '-20px'}}>
            <div className={'text'+pageId}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageInABottleTDM
