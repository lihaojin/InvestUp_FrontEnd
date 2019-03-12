import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ChatBubble } from '..';
import './ChatLog.css';

class ChatLog extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

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
            <ChatBubble message={message.message} origin={message.origin} time={message.time} />
          ))
        }

        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    );
  }
}
export default ChatLog;
