import React, { Component } from 'react';
import Dev from "./Dev";
import "../styles/Male.css";

export default class Male extends Component {
    render() {
        return (
            /*No need to pass props!*/
            <React.Fragment>
                <div className="male-container">
                    <p>MALE</p>
                    <Dev/>
                </div>
            </React.Fragment>
        )
    }
}