import React from 'react';
import './header.css';

import Navbar from '../navbar';

export default function Header() {
  return (
    <div className="header">
      <div className="name">ant<span className="name-part">on</span> korneyev</div>
      <Navbar navbarclass="header-navbar" />
    </div>
  );
}
