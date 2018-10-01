import React, { Component } from 'react';
import Register from './Register';
import UserList from './UserList';
import UpdateUser from './UpdateUser';

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    let reveal = null;

    if(this.props.selectedOption === 0) {
      reveal = (
        <div>
          <h3>
            View All
          </h3>
          <UserList />
        </div>
      );
    } else if(this.props.selectedOption === 1) {
      reveal = (
        <div>
          <h3>
            Create User
          </h3>
          <Register 
            mode={0}
          />
        </div>
      );
    } else if(this.props.selectedOption === 2) {
      reveal = (
        <div>
          <h3>
            Update User
          </h3>
          <UpdateUser />
        </div>
      );
    }

    return (
      <div>
        Display
        { reveal }
      </div>
    );
  }
}

export default Display;