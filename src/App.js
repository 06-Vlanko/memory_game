import React from 'react';
import ReactDOM from "react-dom";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './views/Home'
import Game from './views/Game'
import Times from './views/Times'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Game</Link>
        <Link to="/times">Times</Link>
      </div>
      <Switch>
        <Route path="/game" exact component = { Game } />
        <Route path="/times" exact component = { Times } />
        <Route path="/" exact component = { Home } />
      </Switch>
      <div>
        <p>copyrights...</p>
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
} 

export default App;
