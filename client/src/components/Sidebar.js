import React, { Component } from 'react';
import SideEntry from './SideEntry';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  };

  render() {
    // const options = ['View All', 'Create User', 'View One User'];
    let entries = (
      this.props.options.map((option, index) => {
        return (
          <SideEntry
            title={option}
            index={index}
            selected={this.props.selectedHandler}
            key={index+option}
          />
        );
      })
    );
    return (
      <div>
        { entries }
      </div>
    );
  }
}

export default Sidebar;
