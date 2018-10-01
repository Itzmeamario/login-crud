import React, { Component } from 'react';
import Register from './Register';
import UserList from './UserList';
import UpdateUser from './UpdateUser';

const display = ({ selectedOption }) => {
  let reveal = null;

  if(selectedOption === 0) {
    reveal = (
      <div>
        <h3>
          View All
        </h3>
        <UserList />
      </div>
    );
  } else if(selectedOption === 1) {
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
  } else if(selectedOption === 2) {
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

export default display;