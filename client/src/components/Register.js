import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';
import style from '../styles/Register.css'
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);

    //successful
    //-1: Not attempting
    // 0: User is already in use
    // 1: Successful user creation
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
      // Case 0 is for internal register
      // Case 1 is for external register
      if(this.props.mode === 0) {
        this.setState({
          username: '',
          password: '',
          name: '',
          surname: '',
          age: 0,
          successful: 1
        });
      } else if(this.props.mode === 1) {
        this.props.registered();
      }
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
        <button className={style.button} onClick={this.registerHandler}>Register</button>
      )
    }

    if(this.state.successful === 0) {
      message = (
        <h3>
          Username is already in use.
        </h3>
      );
    } else if(this.state.successful === 1) {
      message = (
        <h3>
          User created!
        </h3>
      );
    }

    return (
      <div className={style.register}>
        <div className={style.fieldContainer}>
          <div>Username:</div>
          <input className={style.field} onChange={(event) => this.usernameHandler(event)} value={this.state.username}/>
          <div>Password:</div>
          <input onChange={(event) => this.passwordHandler(event)} value={this.state.password}/>
          <ValidationComponent
            length={passwordLength}
          />
          <div>Name:</div>
          <input className={style.field} onChange={(event) => this.nameHandler(event)} value={this.state.name}/>
          <div>Surname:</div>
          <input className={style.field} onChange={(event) => this.surnameHandler(event)} value={this.state.surname}/>
          <div>Age:</div>
          <input className={style.field} onChange={(event) => this.ageHandler(event)} value={this.state.age}/>
          { bttn }
        </div>
        <div className={style.message}>
          { message }
        </div>
      </div>
    );
  }
}

export default Register;
