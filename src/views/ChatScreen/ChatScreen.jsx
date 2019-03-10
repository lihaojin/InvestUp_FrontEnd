import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { ChatLog } from '../../components';
import './ChatScreen.css';

var AssistantV1 = require('watson-developer-cloud/assistant/v1');
var assistant = new AssistantV1({
  version: '2018-11-08',
  iam_apikey: 'C2U_iHW-Rj--bcflZNmx8SAJ9vJy9T1o6xgv4rUY2LUS',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

//var session_id;

class ChatScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messageValue: '',
      messages: []
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleKeyPress(event) {
    var code = event.keyCode || event.which;
    if(code === 13 && code !== 16) {
        this.handleSubmit(event);
        event.preventDefault();
    }
  }

  handleChange(event) {
    this.setState({messageValue: event.target.value});
  }

  handleSubmit(event) {
    let messages = this.state.messages;
    let messageValue = this.state.messageValue;

    if(messageValue !== '') {
      var newMessage = {
        message: messageValue,
        origin: 'user'
      };
      messages.push(newMessage);
      this.setState({messages: messages});

      //Post to Watson API and receive a response message
      assistant.message({
        workspace_id: '2e2def76-690a-4062-8161-e4432083c20d',
        // session_id: session_id,
          input: {'text': this.state.messageValue}
        },  function(err, response) {
          var newMessage;
          if (err) {
            console.log('error:', err);
            newMessage = {
              message: 'Error, Please try again.',
              origin: 'server'
            };
            messages.push(newMessage);
            this.setState({messages: messages});
          }
          else
            for (var i=0; i<response.output.generic.length; i++) {
              newMessage = {
                message: response.output.generic[i].text,
                origin: 'server'
              };
              messages.push(newMessage);
              console.log(messages);
              this.setState({messages: messages});
            }
      }.bind(this));

      this.setState({messageValue: ''});
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="ChatScreen">
          <div className="ChatHeader">
            <p id="Recipient">InvestoBot</p>
          </div>

          <div>
            <ChatLog messages={this.state.messages}/>
          </div>

          <div className="ChatForm">
            <div>
            <textarea
                placeholder="Type a message..."
                value={this.state.messageValue}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}>
            </textarea>
            </div>

            <div>
            <button onClick={this.handleSubmit}>
            <img src={require("./Icons/sendMessageIcon.png")} height="23" width="23" />
            </button>
            </div>
          </div>
      </div>
    );
  }
}
export default ChatScreen;
