import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, ChatScreen } from './views';
import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div style={{ height: '100%' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/chat" component={ChatScreen} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
