import React, { Component } from 'react';
import style from '../styles/Management.css';
import Logout from './Logout';
import Sidebar from './Sidebar';

class Management extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.selectedHandler = this.selectedHandler.bind(this);
  }

  selectedHandler(index) {
    console.log(index, 'selected');
  }

  render() {
    const options = ['View All', 'Create User', 'View One User'];

    return (
      <div>
        <Logout
          logout={this.props.setUsername}
        />
        <Sidebar
          options={options}
          selected={this.selectedHandler}
        />
      </div>
    );
  }
}

export default Management;