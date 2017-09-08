import React from 'react';

export default function Navbar(props) {
  return (
    <ul className={props.navbarclass}>
      <li>cv</li>
      <li>contacts</li>
      <li>tasks</li>
    </ul>
  );
}
