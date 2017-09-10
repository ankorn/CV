import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar({ navbarclass }) {
  return (
    <ul className={navbarclass}>
      <li><NavLink activeStyle={{ color: '#be0000', fontweight: 'bold' }} to="/cv">cv</NavLink></li>
      <li><NavLink activeStyle={{ color: '#be0000' }} to="/contacts">contacts</NavLink></li>
      <li><NavLink activeStyle={{ color: '#be0000' }} to="/tasks">tasks</NavLink></li>
    </ul>
  );
}

Navbar.propTypes = {
  navbarclass: PropTypes.string.isRequired,
};
