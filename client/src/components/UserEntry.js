import React from 'react';

const userEntry = ({ user, deleteUser }) => {
  
  return (
    <div>
     <div>
        <div>Id: { user.id }</div>
        <div>Username: { user.username }</div>
        <div>Password: { user.password }</div>
        <div>Name: { user.surname + ', ' + user.name }</div>
        <div>Age: { user.age }</div>
      </div>
      <div>
        <button onClick={() => deleteUser(user.username)}>Delete User</button>
      </div>
      <br/>
    </div>
  );
};

export default userEntry;