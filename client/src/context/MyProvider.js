import React, { Component } from 'react';


export const MyContext = React.createContext();

export default class MyProvider extends Component {

    state = {
        name: "Theo",
        age: 25,
        gender: "Male"
    }

    render() {
        return (
            /*All children get access to the state*/
            <MyContext.Provider value={{ 
                state: this.state,
                growAYearOlder: () => this.setState({age: this.state.age + 1})
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}