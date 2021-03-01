import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JoinRoom from './components/JoinRoom';
import Chat from './components/Chat';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={JoinRoom} />
        <Route exact path='/:roomId' component={Chat} />
      </Switch>
    </Router>
  );
};

export default App;
