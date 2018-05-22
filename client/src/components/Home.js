import React from "react";
import { NavLink } from 'react-router-dom';
import "../css/home.css";

const Home = props => (
    <div className="home-container">
        <div className="sandbox">
            <NavLink to="/sandbox" style={{ textDecoration: 'none', color: '#1C2833' }}>
                <img src={require("../images/sandbox.svg")} alt="sandbox-pic"/>
                <h1>Sandbox</h1>
            </NavLink>
        </div>
        <div className="todo">
            <img src={require("../images/check-mark.svg")} alt="check-mark-pic"/>
            <h1>To-Do</h1>
        </div>
    </div>
)

export default Home;