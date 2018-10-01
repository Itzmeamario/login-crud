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
        <div className={style.buttonContainer}>
          <button className={style.buttonLogIn} onClick={this.setLogin}>Log in</button>
          <br/>
          <button className={style.buttonRegister} onClick={this.setRegister}>Register</button>
        </div>
      );
    } else if(this.state.login && !this.state.register) {
      display = (
        <div className={style.login}>
          <h3 className={style.titles}>Log in</h3>
          <Login
            setUsername={this.props.setUsername}
          />
        </div>
      );
    } else if(!this.state.login && this.state.register) {
      display = (
        <div className={style.register}>
          <h3 className={style.titles}>Register</h3>
          <Register
            registered={this.setLogin}
            mode={1}
            />
        </div>
      );
    }

    return (
      <div className={style.display}>
        {display}
      </div>
    );
  }
}

export default Log;