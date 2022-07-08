import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LoggedOut({ sessionLinks }) {

    return (
        <>
            <div id='top-orange-border'></div>
            <div id="navbar-loggedout">
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
        </>

    );
}