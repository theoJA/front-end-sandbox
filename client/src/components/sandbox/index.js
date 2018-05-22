import React from 'react';

import '../../css/App.css';
import '../../css/context.css';

import MyProvider from "../../context/MyProvider";
import Human from "./Human";
import Grid from "./Grid";

const Sandbox = (props) => {
    return (

        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Front-End Sandbox</h1>
            </header>
            <div className="content-container">
                <h1 className="section-title">React Context</h1>   
                <div className="provider-container">
                    <MyProvider>
                    <p>PROVIDER</p>
                    <p>This is my state: {`{name: "Theo", age: 25, gender: "Male", growAYearOlder: function that increases age by 1}`}</p>
                    <Human/>
                    </MyProvider>
                </div>

                <h1 className="section-title">Grid</h1>
                <Grid />
            </div>
        </div>
    )
}

export default Sandbox;