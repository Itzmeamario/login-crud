import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';
import axios from 'axios';

class UpdateUser extends Component {
  constructor(props) {
    super(props);

    //successful
    //-1: Not attempting
    // 0: User is already in use
    // 1: Successful user update
    // 2: User doesn't exist
    this.state = {
      id: '',
      usernameLookUp: '',
      username: '',
      password: '',
      name: '',
      surname: '',
      age: 0,
      successful: -1,
      changedPass: false
    };

    this.usernameLookUpHandler = this.usernameLookUpHandler.bind(this);
    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.surnameHandler = this.surnameHandler.bind(this);
    this.ageHandler = this.ageHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  };
  
  usernameLookUpHandler (event) {
    const usernameLookUp = event.target.value;
    this.setState({ usernameLookUp, successful: -1 });
  };
  
  usernameHandler (event) {
    const username = event.target.value;
    this.setState({ username, successful: -1 });
  };

  passwordHandler (event) {
    const password = event.target.value;
    this.setState({ password, changedPass: true });
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

  searchHandler () {
    axios.get(`/api/users/${this.state.usernameLookUp}`)
    .then((res) => {
      if(res.data !== '') {
        const { id, username, password, name, surname, age } = res.data;
        this.setState({
          id,
          username,
          password,
          name,
          surname,
          age
        });
      } else {
        this.setState({ successful: 2 });
      }
    })
    .catch((error) => {
      // console.log(error);
    });
  };

  updateHandler () {
    const { username, password, name, surname, age } = this.state;
    if(this.state.changedPass) {
      axios.put(`/api/users/${this.state.id}`, {
        username,
        password,
        name,
        surname,
        age,
      })
      .then((res) => {
        this.setState({
          successful: 1
        });
      })
      .catch((error) => {
        this.setState({successful: 0});
      });
    } else {
      axios.put(`/api/users/${this.state.id}`, {
        username,
        name,
        surname,
        age,
      })
      .then((res) => {
        this.setState({
          successful: 1
        });
      })
      .catch((error) => {
        this.setState({successful: 0});
      });
    }
  }

  render() {
    const passwordLength = this.state.password.length;
    let message = null;
    let bttn = null;
    if(this.state.username !== '' && this.state.age > 0 && this.state.name !== '' && this.state.surname !== '' && passwordLength >= 5) {
      bttn = (
        <button onClick={this.updateHandler}>Update</button>
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
          User updated!
        </h3>
      );
    } else if(this.state.successful === 2) {
      message = (
        <h3>
          User doesn't exist
        </h3>
      );
    }

    return (
      <div>
        <div>
          Search Username:<input onChange={(event) => this.usernameLookUpHandler(event)} value={this.state.usernameLookUp}/>
          <button onClick={this.searchHandler}>Search</button>
        </div>
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

export default UpdateUser;
