import React, { Component } from 'react'

class MessageInABottle extends Component {

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
        
      </div>
    )
  }
}

export default MessageInABottle
