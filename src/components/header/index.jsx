import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="name">Антон Корнеев</span>
        <ul className="navigation-bar">
          <li>cv</li>
          <li>контакты</li>
          <li>задачи</li>
        </ul>
      </div>
    );
  }
}
