import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from './components/Home'
import Tesoro from './components/Tesoro'
import LoginForm from './components/LoginForm'


class App extends Component {
  render() {
    return (
    <Router>
      <div>

      <nav >

        <ul className="nav nav-pills nav-fill">
          <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/tesoro">Tesoro</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
        </ul>

      </nav>
      <div>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/tesoro" component={Tesoro} />

      </div>
      </div>
    </Router>
    );
  }
}

export default App;
