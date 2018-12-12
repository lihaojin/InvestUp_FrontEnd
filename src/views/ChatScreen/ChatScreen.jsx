import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ChatLog } from '../../components';
import './ChatScreen.css';
var watson = require('watson-developer-cloud');
var assistant = new watson.AssistantV2({
  version: '2018-11-08',
  iam_apikey: '{apikey}',
});
var session_id;

class ChatScreen extends Component {
  componentDidMount() {
    //Define session_id when component is mounted to the DOM
    assistant.createSession({
      assistant_id: '{assistant_id}',
    }, function(err, response) {
      if (err) {
        console.error(err);
      } else{
          session_id = response.session_id;
          console.log(session_id);
      }
    });
  }

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

    if(this.state.messageValue !== '') {
      var newMessage = {
        message: this.state.messageValue,
        origin: 'user'
      };
      messages.push(newMessage);

      //Post to Watson API and receive a response message
      assistant.message({
        assistant_id: '{assistant_id}',
        session_id: session_id,
          input: {'text': this.state.messageValue}
        },  function(err, response) {
          var newMessage;
          if (err) {
            console.log('error:', err);
            newMessage = {
              message: 'Error, Please try again.',
              origin: 'server'
            };
          }
          else
            for (var i=0; i<response.output.generic.length; i++) {
              newMessage = {
                message: response.output.generic[i].text,
                origin: 'server'
              };
              messages.push(newMessage);
              console.log(messages);
            }
      });
      this.setState({messages: messages,
                     messageValue: ''});
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
            <ChatLog messages={this.state.messages} />
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
