import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task';

import './tasks.css';

export default function Tasks({ tasks }) {
  return (
    <h1 className="tasks">Here will be my to do list</h1>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
