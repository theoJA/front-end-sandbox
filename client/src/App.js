import React, { Component } from "react";

import Sandbox from "./components/sandbox";
import Home from "./components/Home";
import RootRouter from "./routes/RootRouter";

class App extends Component {
  render() {
    return (
      <RootRouter 
        Sandbox={Sandbox} 
        Home={Home}
      />   
    );
  }
}

export default App;
