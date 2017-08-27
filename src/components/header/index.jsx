import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="avatar" alt="Loading..." src="https://avatars.githubusercontent.com/ankorn" />
        <ul className="navigation-bar">
          <li>Main</li>
          <li>Contacts</li>
          <li>Chat</li>
        </ul>
        <img className="github-mark" alt="Loading..." src="src/images/GitHub-Mark-64px.png" />
      </div>
    );
  }
}
