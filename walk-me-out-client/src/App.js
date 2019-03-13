import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/containers/Home";
import About from "./components/containers/About";
import Services from "./components/containers/Services";
import Contact from "./components/containers/Contact";

import Login from "./components/forms/Login"
import Register from "./components/forms/Register"

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main-app">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
