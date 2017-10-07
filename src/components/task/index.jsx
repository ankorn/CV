import React from 'react';
import PropTypes from 'prop-types';

export default function Task({ text, date = 'no date', priority = 0 }) {
  return (
    <li className="task">
      <span className="task-date">{date}</span>
      <span className="task-text">{text}</span>
      <span className="task-priority">{priority}</span>
    </li>
  );
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
  priority: PropTypes.number
}
