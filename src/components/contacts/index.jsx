import React from 'react';

import Links from '../links';

import './contacts.css';

export default function Contacts() {
  return (
    <div className="contacts">
      <img className="avatar" src="https://github.com/ankorn.png?size=240" alt="Loading" />
      <ul className="contacts-list">
        <li>+7 937 205 45 10</li>
        <li>an.korn.zasekin@gmail.com</li>
        <Links linksclass="contacts-links" />
      </ul>
    </div>
  );
}
