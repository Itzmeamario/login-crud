import React, { Component } from 'react';
import style from '../styles/App.css';
import Cockpit from '../components/Cockpit';
import Log from '../components/Log';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.setUsernameHandler = this.setUsernameHandler.bind(this);
  };

  setUsernameHandler (event) {
    console.log('Hi from setusernameHandler')
  };

  render() {
    let log = null;

    if(this.state.username === '') {
      log = (
        <Log 
          click={this.setUsernameHandler}
        />
      );
    }
    // } else {

    // }

    return (
      <div>
        <Cockpit 
          username={this.state.username}
        />
        { log === null ? <div>loading...</div> : log }
      </div>
    );
  }
}

export default App;