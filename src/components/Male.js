import React, { Component } from 'react';
import Dev from "./Dev";

export default class Male extends Component {
    render() {
        return (
            /*No need to pass props!*/
            <React.Fragment>
                <p>I'm a male component</p>
                <Dev/>
            </React.Fragment>
        )
    }
}