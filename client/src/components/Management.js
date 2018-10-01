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
      <div className={style.container}>
        <div className={style.logout}>
          <Logout
            logout={this.props.setUsername}
          />
        </div>
        <div className={style.sidebar}>
          <Sidebar
            options={options}
            selected={this.selectedHandler}
          />
        </div>
        <div className={style.display}>
          <Display 
            selectedOption={this.state.selectedOption}
          />
        </div>
      </div>
    );
  }
}

export default Management;