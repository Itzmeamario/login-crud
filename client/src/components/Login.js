import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      successful: -1
    };

    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  };
  
  usernameHandler (event) {
    const username = event.target.value;
    this.setState({ username, successful: -1 });
  };

  passwordHandler (event) {
    const password = event.target.value;
    this.setState({ password, successful: -1 });
  };

  loginHandler () {
    const { password } = this.state;
    axios.get(`/api/auth/${this.state.username}`, {
      params: {
        password
      }
    })
    .then((response) => {
      // console.log(response.data);
      if(response.data !== '') {
        this.props.setUsername(this.state.username);
      } else {
        this.setState({ successful: 0 });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    let message = null;
    let bttn = null;
    if(this.state.username !== '' && this.state.password !== '') {
      bttn = (
        <button onClick={this.loginHandler}>Login</button>
      )
    }

    if(this.state.successful === 0) {
      message = (
        <h3>
          Username and Password dont match.
        </h3>
      );
    }

    return (
      <div>
        <h3>Login</h3>
        <div>
          Username:<input onChange={(event) => this.usernameHandler(event)} value={this.state.username}/>
          Password:<input onChange={(event) => this.passwordHandler(event)} value={this.state.password}/>
          { bttn }
        </div>
        <div>
          { message }
        </div>
      </div>
    );
  }
}

export default Login;
