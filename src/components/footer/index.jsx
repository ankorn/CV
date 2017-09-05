import React from 'react';

import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <ul className="nav">
        <li>cv</li>
        <li>contacts</li>
        <li>tasks</li>
      </ul>
      <ul className="links">
        <li><a href="https://github.com/ankorn"><img src="./src/images/gh-mark.png" alt="Loading..." /></a></li>
        <li><a href="https://vk.com/spit_vidit"><img src="./src/images/vk-mark.png" alt="Loading..." /></a></li>
      </ul>
    </div>
  );
}
