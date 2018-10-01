import React, { Component } from 'react';
import Register from './Register';
import UserList from './UserList';
import UpdateUser from './UpdateUser';
import style from '../styles/Display.css';

const display = ({ selectedOption }) => {
  let reveal = null;

  if(selectedOption === 0) {
    reveal = (
      <div className={style.userlist}>
        <h3 className={style.titles}>
          View All
        </h3>
        <UserList />
      </div>
    );
  } else if(selectedOption === 1) {
    reveal = (
      <div className={style.register}>
        <h3 className={style.titles}>
          Create User
        </h3>
        <Register 
          mode={0}
        />
      </div>
    );
  } else if(selectedOption === 2) {
    reveal = (
      <div className={style.update}>
        <h3 className={style.titles}>
          Update User
        </h3>
        <UpdateUser />
      </div>
    );
  }

  return (
    <div>
      { reveal }
    </div>
  );
}

export default display;