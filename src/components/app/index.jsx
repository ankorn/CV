import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../header';
import CV from '../cv';
import Footer from '../footer';
import Contacts from '../contacts';
import Tasks from '../tasks';

import './app.css';

export default function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <Header />
        <Switch>
          <Route path="/contacts" component={Contacts} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/cv" component={CV} />
          <Redirect from="/" to="/cv" />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}
