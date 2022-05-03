import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup" class="button" id="signup-button">Create Account</NavLink>
            </>
        );
    }

    return (
        <ul id="navbar">
            <div id="leftsdie-nav">
                <li>
                    <NavLink exact to="/" id="home-button">
                        Home
                    </NavLink>
                </li>
            </div>
            <div id="rightside-nav">
                {isLoaded && sessionLinks}
            </div>
        </ul>
    );
}

export default Navigation;