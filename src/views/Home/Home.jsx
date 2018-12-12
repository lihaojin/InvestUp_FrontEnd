import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to the BOA app</h1>
        <Link to="chat">Lets Chat</Link>
      </div>
    );
  }
}
export default Home;
