import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      name: '',
      surname: '',
      age: ''
    };

    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.surnameHandler = this.surnameHandler.bind(this);
    this.ageHandler = this.ageHandler.bind(this);
  };
  
  usernameHandler (event) {
    const username = event.target.value;
    this.setState({ username });
  };

  passwordHandler (event) {
    const password = event.target.value;
    this.setState({ password });
  };

  nameHandler (event) {
    const name = event.target.value;
    this.setState({ name });
  };

  surnameHandler (event) {
    const surname = event.target.value;
    this.setState({ surname });
  };

  ageHandler (event) {
    const age = event.target.value;
    this.setState({ age });
  };

  render() {
    const passwordLength = this.state.password.length;

    return (
      <div>
        Username:<input onChange={(event) => this.usernameHandler(event)} value={this.state.username}/>
        Password:<input onChange={(event) => this.passwordHandler(event)} value={this.state.password}/>
        <ValidationComponent length={passwordLength}/>
        Name:<input onChange={(event) => this.nameHandler(event)} value={this.state.name}/>
        Surname:<input onChange={(event) => this.surnameHandler(event)} value={this.state.surname}/>
        Age:<input onChange={(event) => this.ageHandler(event)} value={this.state.age}/>
        <button >Register</button>
      </div>
    );
  }
}

export default Register;
