import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyProvider from "./context/MyProvider";
import Human from "./components/Human";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Front-End Sandbox</h1>
        </header>
        <div className="provider-container">
          <MyProvider>
            <p>PROVIDER</p>
            <p>This is my state: {`{name: "Theo", age: 25, gender: "Male", growAYearOlder: function that increases age by 1}`}</p>
            <Human/>
          </MyProvider>
        </div>
      </div>
    );
  }
}

export default App;
