import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      name: '',
      surname: '',
      age: 0,
      successful: -1
    };

    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.surnameHandler = this.surnameHandler.bind(this);
    this.ageHandler = this.ageHandler.bind(this);
    this.registerHandler = this.registerHandler.bind(this);
  };
  
  usernameHandler (event) {
    const username = event.target.value;
    this.setState({ username, successful: -1 });
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

  registerHandler () {
    const { password, name, surname, age } = this.state;
    
    axios.post(`/api/users/${this.state.username}`, {
      password,
      name,
      surname,
      age
    })
    .then((response) => {
      // console.log(response);
      this.props.registered();
    })
    .catch((error) => {
      console.log(error);
      this.setState({successful: 0});
    });
  }

  render() {
    const passwordLength = this.state.password.length;
    let message = null;
    let bttn = null;
    if(this.state.username !== '' && this.state.age > 0 && this.state.name !== '' && this.state.surname !== '' && passwordLength >= 5) {
      bttn = (
        <button onClick={this.registerHandler}>Register</button>
      )
    }

    if(this.state.successful === 0) {
      message = (
        <h3>
          Username is already in use.
        </h3>
      );
    }

    return (
      <div>
        <h3>Register</h3>
        <div>
          Username:<input onChange={(event) => this.usernameHandler(event)} value={this.state.username}/>
          Password:<input onChange={(event) => this.passwordHandler(event)} value={this.state.password}/>
          <ValidationComponent
            length={passwordLength}
          />
          Name:<input onChange={(event) => this.nameHandler(event)} value={this.state.name}/>
          Surname:<input onChange={(event) => this.surnameHandler(event)} value={this.state.surname}/>
          Age:<input onChange={(event) => this.ageHandler(event)} value={this.state.age}/>
          { bttn }
        </div>
        <div>
          { message }
        </div>
      </div>
    );
  }
}

export default Register;
