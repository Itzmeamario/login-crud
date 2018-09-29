import React from 'react';
import style from '../styles/Cockpit.css';
import Aux from '../hoc/Auxiliary';

const cockpit = (props) => {
  return (
    <div className={style.title}>
      <h1>Welcome {props.username}</h1>
    </div>
  );
}

export default cockpit;