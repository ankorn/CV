import React from 'react';

import Navbar from '../navbar';
import Links from '../links';

import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <Navbar navbarclass="footer-navbar" />
      <Links linksclass="footer-links" />
    </div>
  );
}
