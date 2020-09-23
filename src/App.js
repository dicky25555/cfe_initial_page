import React from 'react';
import logo from './CFE_logo_clear.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The demo is gonna be available soon
        </p>
        <a
          className="App-link"
          href="http://www.cfe.cuhk.edu.hk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
  );
}

export default App;
