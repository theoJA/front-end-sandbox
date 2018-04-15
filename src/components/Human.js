import React, { Component } from 'react';
import Male from "./Male";

export default class Human extends Component {
    render() {
        return (
            /*No need to pass props!*/
            <React.Fragment>
               <p>I'm a human component</p>
               <Male/> 
            </React.Fragment>
        )
    }
}