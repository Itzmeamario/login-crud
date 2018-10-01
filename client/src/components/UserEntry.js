import React from 'react';
import style from '../styles/userEntry.css';

const userEntry = ({ user, deleteUser }) => {
  
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.line}>
          <div className={style.tags}>Id:</div>
          <div className={style.space}>{ user.id }</div>
        </div>
        <div className={style.line}>
          <div className={style.tags}>Username:</div>
          <div className={style.space}>{ user.username }</div>
        </div>
        <div className={style.line}>
          <div className={style.tags}>Password:</div>
          <div className={style.pass}>{ user.password }</div>
        </div>
        <div className={style.line}>
          <div className={style.tags}>Name:</div>
          <div className={style.space}>{ user.surname + ', ' + user.name }</div>
        </div>
        <div className={style.line}>
          <div className={style.tags}>Age:</div>
          <div className={style.space}>{ user.age }</div>
        </div>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={() => deleteUser(user.username)}>Delete User</button>
      </div>
      <br/>
    </div>
  );
};

export default userEntry;