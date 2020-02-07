import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Notfound from './components/pages/Notfound';

import Githubstate from './context/github/GithubState';
import Alertstate from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <Githubstate>
      <Alertstate>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Alertstate>
    </Githubstate>
  );
};

export default App;
