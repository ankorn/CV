import React from 'react';

import Task from '../task';

import './tasks.css';

export default function Tasks({ tasks }) {
  tasks = tasks.map(task => (
    <Task key={task.id}/>
  ));

  return (
    <h1 className="tasks">Here will be my to do list</h1>
  );
}
