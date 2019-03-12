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
          <div className="serverMessage">
            {this.props.message}
          </div>

          <div className="serverTime">
            {this.props.time}
          </div>
        </div>
      );
    }
    else
      return (
        <div className="user">
          <div className="userTime">
            {this.props.time}
          </div>
          
          <div className="userMessage">
            {this.props.message}
          </div>
        </div>
      );
  }
}
export default ChatBubble;
