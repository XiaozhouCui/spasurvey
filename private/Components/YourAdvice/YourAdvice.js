import React, { Component } from 'react'

class YourAdvice extends Component {

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
        <div className="question_title -no_shadow" style={{marginBottom:10}}>In this section, we are seeking your advice and your feedback.</div>
        <div className="question_table__header -col_one">
          <div className="question_title"><strong>When you think about your working environment ...</strong></div>
        </div>
        <div className="question_title -no_shadow">... What is one thing that we should <strong>NOT</strong> change?</div>
        <div className="question_response -text">
          <div className={'text'+pageId}></div>
        </div>
        <div className="question_title -no_shadow">... What is one thing that we should do <strong>LESS</strong> of?</div>
        <div className="question_response -text">
          <div className={'text'+pageId}></div>
        </div>
        <div className="question_title -no_shadow">... What is one thing that we should do <strong>MORE</strong> of?</div>
        <div className="question_response -text">
          <div className={'text'+pageId}></div>
        </div>
      </div>
    )
  }
}

export default YourAdvice
