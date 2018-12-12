import React, { Component } from 'react';
import './ChatBubble.css';

class ChatBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.origin === 'server') {
      return (
        <div className="server">
          {this.props.message}
        </div>
      );
    }
    else
      return (
        <div className="user">
          {this.props.message}
        </div>
      );
  }
}
export default ChatBubble;
