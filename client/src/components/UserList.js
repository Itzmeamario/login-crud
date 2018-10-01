import React, { Component } from 'react';
import UserEntry from './UserEntry';
import axios from 'axios';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      username: ''
    };

    this.searchHandler = this.searchHandler.bind(this);
    this.deleteUserHandler = this.deleteUserHandler.bind(this);
  };

  componentDidMount() {
    this.searchHandler();
  }

  searchHandler () {
    axios.get(`/api/userslist`)
    .then((res) => {
      const users = res.data.slice();
      this.setState({ users });
    })
    .catch((error) => {
      // console.log(error);
    });
  };

  deleteUserHandler(username) {
    axios.delete(`/api/users/${username}`)
    .then((res) => {
      this.searchHandler();
    })
    .catch((error) => {
      // console.log(error);
    });
  }

  render() {
    let userList = null;
    if(this.state.users.length !== 0) {
      userList = (
        this.state.users.map((user, index) => {
          return (
            <UserEntry
              user={user}
              index={index}
              key={index+user}
              deleteUser={this.deleteUserHandler}
            />
          );
        })
      );
    }

    return (
      <div>
        {userList === null ? <div>loading...</div> : userList }
      </div>
    );
  }
}

export default UserList;
