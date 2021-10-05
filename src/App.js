import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Plants from "./Plants"; 
import Home from "./Home";
import Edit from "./Edit";
import Create from './Create';

export default class App extends Component {
  render() {
  return (
      <div>
          <Router>
            <header>
              <NavLink
              exact className='links'
              activeStyle={{fontSize:'1.5rem'}}
              to='/'>Home
              </NavLink>
              <NavLink
              exact className='links'
              activeStyle={{fontSize:'1.5rem'}}
              to='/Plants'>List
              </NavLink>
              <NavLink
              exact className='links'
              activeStyle={{fontSize:'1.5rem'}}
              to='/Create'>Add Item
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
                            path="/Edit/:id"
                            exact
                            render={(routerProps) => <Edit {...routerProps} />} 
                        />
            <Route 
                            path="/Create/"
                            exact
                            render={(routerProps) => <Create {...routerProps} />} 
                        />
            </Switch>
          </Router>
      </div>
  );
}}