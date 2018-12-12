import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ChatBubble } from '..';
import './ChatLog.css';

class ChatLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="ChatLog">
        {
          this.props.messages.map(message => (
            <ChatBubble message={message.message} origin={message.origin} />
          ))
        }

      </div>
    );
  }
}
export default ChatLog;
