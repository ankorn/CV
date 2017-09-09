import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header';
import CV from '../cv';
import Footer from '../footer';

import './app.css';

export default function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/contacts" component={() => (<div>Here will be my contacts</div>)} />
          <Route path="/tasks" component={() => (<div>Here will be my to do list</div>)} />
          <Route path="/cv" component={CV} />
          <Redirect from="/" to="/cv" />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}
