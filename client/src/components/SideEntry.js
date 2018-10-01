import React from 'react';
import style from '../styles/SideEntry.css';

const sideEntry = ({ title, selected, index }) => {
  
  return (
    <div className={style.entry} onClick={() => selected(index)}>
      { title }
    </div>
  );
};

export default sideEntry;