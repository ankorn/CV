import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar({ navbarclass }) {
  return (
    <ul className={navbarclass}>
      <div><NavLink activeStyle={{ color: 'red' }} to="/cv">cv</NavLink></div>
      <div><NavLink activeStyle={{ color: 'red' }} to="/contacts">contacts</NavLink></div>
      <div><NavLink activeStyle={{ color: 'red' }} to="/tasks">tasks</NavLink></div>
    </ul>
  );
}

Navbar.propTypes = {
  navbarclass: PropTypes.string.isRequired,
};
