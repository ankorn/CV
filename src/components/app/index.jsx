import React, { Component } from 'react';
import Header from '../header';
import CVText from '../CVText';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CVText />
      </div>
    );
  }
}
