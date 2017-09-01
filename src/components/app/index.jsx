import React, { Component } from 'react';
import Header from '../header';
import CV from '../cv';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CV />
      </div>
    );
  }
}
