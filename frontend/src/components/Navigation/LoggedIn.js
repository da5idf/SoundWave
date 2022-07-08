import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function LoggedIn({ sessionLinks }) {

    // offset top of app hero by 46px for sticky positioning
    useEffect(() => {
        document.getElementById("app-hero").style.marginTop = "46px"

        return () => document.getElementById("app-hero").style.marginTop = ""
    })

    return (
        <div id="navbar-loggedin">
            <div id="leftside-nav">
                <li>
                    <NavLink exact to="/" id='home-button-container'>
                        <div id="logo-home-button">
                            <img src={require("../../images/logo.png")} id="logo-home-img" alt="" />
                        </div>
                    </NavLink>
                </li>
            </div>
            <div id="rightside-nav">
                {sessionLinks}
            </div>
        </div>
    );
}