import React, { Component } from 'react';
import SideEntry from './SideEntry';

const sidebar = (props) => {
  let entries = (
    props.options.map((option, index) => {
      return (
        <SideEntry
          title={option}
          index={index}
          selected={props.selected}
          key={index+option}
        />
      );
    })
  );
  return (
    <div>
      { entries }
    </div>
  );
}

export default sidebar;
