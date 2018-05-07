import React, { Component } from 'react';
import "../styles/Human.css";
import Male from "./Male";

export default class Human extends Component {
    render() {
        return (
            /*No need to pass props!*/
            <React.Fragment>
                <div className="human-container">
                    <p>HUMAN</p>
                    <Male/>
                </div>
            </React.Fragment>
        )
    }
}