import React from 'react';

import Navbar from '../navbar';

import './footer.css';

export default class Footer extends React.Component {
  render() {
    const clientHeight = document.documentElement.clientHeight;

    return (
      <div className="footer">
        <Navbar navbarclass="footer-navbar" />
        <ul className="links">
          <li><a href="https://github.com/ankorn"><img src="./src/images/gh-mark.png" alt="Loading..." /></a></li>
          <li><a href="https://vk.com/spit_vidit"><img src="./src/images/vk-mark.png" alt="Loading..." /></a></li>
        </ul>
      </div>
    );
  }
}
