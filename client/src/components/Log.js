import React, { Component } from 'react';
import style from '../styles/Log.css';
import Login from '../components/Login';
import Register from '../components/Register';

class Log extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      register: false
    };

    this.setLogin = this.setLogin.bind(this);
    this.setRegister = this.setRegister.bind(this);
  }

  setLogin () {
    this.setState({
      login: true,
      register: false
    });
  }

  setRegister () {
    this.setState({
      login: false,
      register: true
    });
  }

  render() {
    let display = null;
    if(!this.state.login && !this.state.register) {
      display = (
        <div>
          <button onClick={this.setLogin}>Log in</button>
          <button onClick={this.setRegister}>Register</button>
        </div>
      );
    } else if(this.state.login && !this.state.register) {
      display = (
        <Login
          setUsername={this.props.setUsername}
        />
      );
    } else if(!this.state.login && this.state.register) {
      display = (
        <div>
          <h3>Register</h3>
          <Register
            registered={this.setLogin}
            mode={1}
            />
        </div>
      );
    }

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default Log;