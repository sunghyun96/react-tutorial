import React from 'react';
import logo from './logo.svg';
import './App.css';
import OurButton from './OurButton.js';  // The .js part is implied by React, so actually don't need it.
// The ./ means that OurButton is in the same directory as the App.js file
import TryingLifecycle from './TryingLifecycle';

function App() {
  if (1 == 1) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <OurButton/> {/* Render the OurButton in App.js */}
          <TryingLifecycle/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  else {
    return <h1>this is false</h1>
  }
}

export default App;
