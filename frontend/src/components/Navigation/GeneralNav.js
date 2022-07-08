import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Search from "../Search"

export default function GeneralNav({ sessionLinks }) {

    // offset top of app hero by 46px for sticky positioning
    useEffect(() => {
        const appHero = document.getElementById("app-hero");

        if (appHero) {
            appHero.style.marginTop = "46px"
        }

        return () => {
            // const appHero = document.getElementById("app-hero");
            if (appHero) {
                appHero.style.marginTop = ""
            }
        }
    })

    return (
        <div id="nav-container">
            <div id="navbar-general">
                <div id="leftside-nav">
                    <li>
                        <NavLink exact to="/" id='home-button-container'>
                            <div id="logo-home-button">
                                <img src={require("../../images/logo.png")} id="logo-home-img" alt="" />
                            </div>
                        </NavLink>
                    </li>
                </div>
                <Search />
                <div id="rightside-nav">
                    {sessionLinks}
                </div>
            </div>
        </div>
    );
}