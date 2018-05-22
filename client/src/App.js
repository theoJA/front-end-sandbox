import React, { Component } from 'react';
import './css/App.css';
import './css/context.css';

import Sandbox from './components/sandbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Front-End Sandbox</h1>
        </header>
        <div className="content-container">
          <h1 className="section-title">React Context</h1>
          
          <Sandbox />
        </div>
      </div>
    );
  }
}

export default App;
