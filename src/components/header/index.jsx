import React from 'react';
import './header.css';

import Navbar from '../navbar';

export default function Header() {
  return (
    <div className="header">
      <div className="name">Ant<span className="name-part">on</span> Korneyev</div>
      <Navbar navbarclass="navigation-bar" />
    </div>
  );
}
