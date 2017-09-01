import React, { Component } from 'react';

import cvText from '../../../fixtures';

import './cv.css';

export default class CV extends Component {
  render() {
    const text = cvText.map(sentence => <div className="sentence">{sentence}</div>);

    return (
      <div className="cv">{text}</div>
    );
  }
}
