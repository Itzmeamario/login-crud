import React, { Component } from 'react';
import Register from './Register';

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
          View All
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
          Update User
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