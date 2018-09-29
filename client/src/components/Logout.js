import React from 'react';

const logout = ({ logout }) => {
  

  return (
    <div>
      <button onClick={() => logout('')}>Log Out</button>
    </div>
  );
};

export default logout;