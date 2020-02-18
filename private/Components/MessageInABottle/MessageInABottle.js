import React, { Component } from 'react'

class MessageInABottle extends Component {

  componentDidMount() {
    this.props.mountContent(this.props.moduleName);
    document.querySelector('.miab textarea').setAttribute('placeholder', '(1000 character limit)');
  }

  componentWillUnmount() {
    this.props.unmountContent(this.props.moduleName);
  }

  render() {
    const pageId = this.props.moduleName;
    return (
      <div>
        <div className="definitions_table -disclaimer"><p>This next question is called "Message in a Bottle". It is your chance to say something directly to the most senior leader in your <span className="definition" id="orga">organisation</span>. For the best results, this message should be constructive, descriptive and something people can realistically do something about.</p></div>
        <div className="message_in_a_bottle">
          <div className="question_title">If there was one message you would like to pass on to <strong>the most senior executive in this organisation,</strong> that would assist in making the organisation a better place to work, it would be ...</div>
          <div className="question_response miab">
            <div className={'text'+pageId}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageInABottle
