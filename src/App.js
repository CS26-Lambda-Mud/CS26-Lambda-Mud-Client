import React from 'react';
import {Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
      <Route path ="/register" component={Register}/>
      <Route path ="/game" component={Game}/>
    </div>
  );
}

export default App;
