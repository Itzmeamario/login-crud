import React from 'react';

const login = ({length}) => {
  let validation = <p>Text too short</p>

  if(length >= 5) {
    validation = <p>Text long enough</p>
  }

  return (
    <div>
      {validation}
    </div>
  );
}

export default login;