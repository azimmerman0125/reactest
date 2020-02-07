import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRoute,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="menu"></div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - Adam Said So
        </a>
      </header>
    </div>
  );
}

export default App;
