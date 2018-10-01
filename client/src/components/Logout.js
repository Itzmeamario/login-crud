import React from 'react';
import style from '../styles/Logout.css';

const logout = ({ logout }) => {
  

  return (
    <div className={style.logoutContainer}>
      <button className={style.button} onClick={() => logout('')}>Log Out</button>
    </div>
  );
};

export default logout;