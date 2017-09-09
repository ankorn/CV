import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Navbar extends React.Component {
  static propTypes = {
    navbarclass: PropTypes.string.isRequired,
  };

  render() {
    return (
      <ul className={this.props.navbarclass}>
        <li><NavLink activeStyle={{ color: '#be0000', fontweight: 'bold' }} to="/cv">cv</NavLink></li>
        <li><NavLink activeStyle={{ color: '#be0000' }} to="/contacts">contacts</NavLink></li>
        <li><NavLink activeStyle={{ color: '#be0000' }} to="/tasks">tasks</NavLink></li>
      </ul>
    );
  }
}
