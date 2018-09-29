import React, { Component } from 'react';
import style from '../styles/App.css';
import Cockpit from '../components/Cockpit';
import Log from '../components/Log';
import Management from '../components/Management';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.setUsernameHandler = this.setUsernameHandler.bind(this);
  };

  setUsernameHandler (username) {
    this.setState({ username });
  };

  render() {
    let front = null;

    if(this.state.username === '') {
      front = (
        <Log 
          setUsername={this.setUsernameHandler}
        />
      );
    } else {
      front = (
        <Management 
          setUsername={this.setUsernameHandler}
        />
      );
    }

    return (
      <div>
        <Cockpit 
          username={this.state.username}
        />
        { front === null ? <div>loading...</div> : front }
      </div>
    );
  }
}

export default App;