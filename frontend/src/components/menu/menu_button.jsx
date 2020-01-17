import React from 'react';
import './menu.css'

function MenuButton (props) {
  return (
    <div className="menu-button" onClick={() => props.handleClick}>
      <div className={props.open ? "bar change1" : "bar"}></div>
      <div className={props.open ? "bar change2" : "bar"}></div>
      <div className={props.open ? "bar change3" : "bar"}></div>
    </div>
  );
}

export default MenuButton;