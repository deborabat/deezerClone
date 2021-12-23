import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import App from '../Pages/App';
import HomePage from '../Pages/Home';


class Routes extends Component {
  render() {
    return (
      <App>
        <BrowserRouter>
          <Switch>
            <Route path={"/"} component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </App >
    )
  }
}

export default Routes;