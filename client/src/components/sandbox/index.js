import React from 'react';

import MyProvider from "../../context/MyProvider";
import Human from "./Human";
import Grid from "./Grid";

const Sandbox = (props) => {
    return (
        <React.Fragment>
            <div className="provider-container">
                <MyProvider>
                  <p>PROVIDER</p>
                  <p>This is my state: {`{name: "Theo", age: 25, gender: "Male", growAYearOlder: function that increases age by 1}`}</p>
                  <Human/>
                </MyProvider>
            </div>
    
            <h1 className="section-title">Grid</h1>
            <Grid />
        </React.Fragment>
    )
}

export default Sandbox;