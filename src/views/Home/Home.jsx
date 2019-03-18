import React, { PureComponent } from 'react';
import ChatScreen from '../ChatScreen/ChatScreen.jsx';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // screenVisible: true
    };
    // this.chatToggle = this.chatToggle.bind(this);
    // this.delayDisplay = this.delayDisplay.bind(this);
  }

  // chatToggle(){
  //   alert("Button pressed")
  //   const screenState = this.state.screenVisible;
  //   this.setState({
  //     screenVisible: !screenState
  //   });
  //   // event.preventDefault();
  // };
  //
  // delayDisplay(){
  //   return setTimeout(
  //     function(){return "none"}.bind(this), 1000
  //   )
  // }

  render() {
    return (
      <div>
        <div id="ChatScreen" className="animated slideInUp">
          <ChatScreen />
        </div>
      </div>
    );
  }
}
export default Home;
