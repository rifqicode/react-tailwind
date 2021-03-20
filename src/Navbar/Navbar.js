import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Register from '../Register/Register';
import Homepage from '../Homepage/Homepage';
import Login from '../Login/Login';
import Component404 from '../Component/Component404';

class Navbar extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path="/register" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
                <Route exact path="/" component={Homepage}></Route>

                <Route component={Component404} />
            </Switch>
        </Router>
    );
  }
}

export default Navbar;
