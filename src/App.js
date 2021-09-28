import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Plants from "./Plants"; 
import Home from "./Home";
import Detail from "./Detail";

export default class App extends Component {
  render() {
  return (
      <div>
          <Router>
            <header>
              <NavLink
              exact
              activeStyle={{fontSize:'1.5rem'}}
              to='/'>Home
              </NavLink>
              <NavLink
              exact
              activeStyle={{fontSize:'1.5rem'}}
              to='/Plants'>Search
              </NavLink>
            </header>
            <Switch>
            <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
            <Route 
                            path="/Plants" 
                            exact
                            render={(routerProps) => <Plants {...routerProps} />} 
                        />
            <Route 
                            path="/Detail/:id"
                            exact
                            render={(routerProps) => <Detail {...routerProps} />} 
                        />
            </Switch>
          </Router>
      </div>
  );
}}