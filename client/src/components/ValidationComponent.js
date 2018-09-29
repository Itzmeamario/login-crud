import React from 'react';

const validationComponent = ({length}) => {
  let validation = <p>Password is too short</p>

  if(length >= 5) {
    validation = <p>Password is long enough</p>
  }

  return (
    <div>
      {validation}
    </div>
  );
}

export default validationComponent;