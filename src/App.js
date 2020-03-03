import React from 'react';
import {Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
    </div>
  );
}

export default App;
