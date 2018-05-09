import React from 'react';
import { MyContext } from "../../context/MyProvider";
import "../../css/context.css";

const Dev = props => {
    return (
        /*Use Context.Consumer tags to use state from the provider*/
        <MyContext.Consumer>
            {context => ( /*use parentheses instead of curly braces when returning JSX*/
                /*React.Fragment allows us to group a list of children without adding extra
                nodes to the DOM*/
                <React.Fragment>
                    <div className="dev-container">
                        <p>DEV</p>
                        <div>
                            <div>
                                <p>Name: {context.state.name}</p>
                                <p>Age: {context.state.age}</p>
                                <p>Gender: {context.state.gender}</p>
                            </div>
                            <button onClick={context.growAYearOlder}><span role="img" aria-label="Birthday">🎂</span> Age + 1</button>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </MyContext.Consumer>
    )
}

export default Dev;