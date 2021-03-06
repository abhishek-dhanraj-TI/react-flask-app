import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    fetch(API_URL).then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <p>The current time is {currentTime}.</p>
          Learn React
      </header>
    </div>
  );
}

export default App;
