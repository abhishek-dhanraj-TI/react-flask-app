import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as http from 'http';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    
    // axios.get('https://api1:5000/time').then(res => {
    //   // console.log(res);
    //   setCurrentTime(res.data.time);
    // })
    // fetch('/time').then(res => res.json()).then(data => {
    //   setCurrentTime(data.time);
    // });
    const options = {
      hostname: 'api1',
      port: 5000,
      path: '/time',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    const req = http.request(options, (res) => {
      console.log(`STATUS: ${res.statusCode}`);
      console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
      });
      res.on('end', () => {
        console.log('No more data in response.');
      });
    });
    
    req.on('error', (e) => {
      console.error(`problem with request: ${e.message}`);
    });
    // fetch('https://https://5000-indigo-albatross-68skv17a.ws.trilogy.devspaces.com/time').then(res => res.json()).then(data => {
    //   console.log('Printing data:', data)
    //   setCurrentTime(data.time);
    // });
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
