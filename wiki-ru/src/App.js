import React from 'react';
import './App.css';
import NavBar from './componesnts/NavBar';
import { Route, Switch } from 'react-router-dom';
import About from './componesnts/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/about' component={ About } />
        <Route path='/' component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
