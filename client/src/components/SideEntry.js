import React from 'react';

const sideEntry = ({ title, selected, index }) => {
  

  return (
    <div onClick={() => selected(index)}>
      { title }
    </div>
  );
};

export default sideEntry;