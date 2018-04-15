import React from 'react';
import { MyContext } from "../context/MyProvider";

const Dev = props => {
    return (
        /*Use Context.Consumer tags to use state from the provider*/
        <MyContext.Consumer>
            {context => ( /*use parentheses instead of curly braces when returning JSX*/
                /*React.Fragment allows us to group a list of children without adding extra
                nodes to the DOM*/
                <React.Fragment>
                    <p>I'm a dev</p>
                    <p>Name: {context.state.name}</p>
                    <p>Age: {context.state.age}</p>
                    <p>Gender: {context.state.gender}</p>
                </React.Fragment>
            )}
        </MyContext.Consumer>
    )
}

export default Dev;