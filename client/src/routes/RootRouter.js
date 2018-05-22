import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const RootRouter = props => (
    <Router>
        <React.Fragment>
            <Route exact path="/" component={props.Home} />
            <Route exact path="/sandbox" component={props.Sandbox} />
        </React.Fragment>
    </Router>
)

export default RootRouter;