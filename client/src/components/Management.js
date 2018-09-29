import React, { Component } from 'react';
import style from '../styles/Management.css';
import Logout from './Logout';
import Sidebar from './Sidebar';
import Display from './Display';

class Management extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 0
    };

    this.selectedHandler = this.selectedHandler.bind(this);
  }

  selectedHandler(index) {
    this.setState({ selectedOption: index });
  }

  render() {
    const options = ['View All', 'Create User', 'Update User'];

    return (
      <div>
        <Logout
          logout={this.props.setUsername}
        />
        <Sidebar
          options={options}
          selected={this.selectedHandler}
        />
        <Display 
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}

export default Management;