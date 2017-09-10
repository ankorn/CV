import React from 'react';
import PropTypes from 'prop-types';

export default function Links({ linksclass }) {
  return (
    <ul className={linksclass}>
      <li><a href="https://github.com/ankorn"><img src="./src/images/gh-mark.png" alt="Loading..." /></a></li>
      <li><a href="https://vk.com/spit_vidit"><img src="./src/images/vk-mark.png" alt="Loading..." /></a></li>
    </ul>
  );
}

Links.propTypes = {
  linksclass: PropTypes.string.isRequired,
};
