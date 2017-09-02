import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul className="navigation-bar">
          <li><span className="name">Ant<span className="name-part">on</span> Korneyev</span></li>
          <li>cv</li>
          <li>contacts</li>
          <li>tasks</li>
        </ul>
      </div>
    );
  }
}
