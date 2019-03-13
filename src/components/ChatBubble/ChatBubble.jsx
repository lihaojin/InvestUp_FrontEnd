import React, { Component } from 'react';
import './ChatBubble.css';
import FadeIn from 'react-fade-in';

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
            <FadeIn transitionDuration="300">
              <div className="serverMessage">
                {this.props.message}
              </div>
            </FadeIn>

            <div className="serverTime">
              ◦ {this.props.time}
            </div>
          </div>
      );
    }
    else
      return (
          <div className="user">
              <div className="userTime">
                {this.props.time} ◦
              </div>

            <FadeIn transitionDuration="300">
              <div className="userMessage">
                {this.props.message}
              </div>
            </FadeIn>
          </div>
      );
  }
}
export default ChatBubble;
