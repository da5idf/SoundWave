import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormPage';


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    const buttonText = "Create Account"
    if (sessionUser) {
        sessionLinks = (
            <>
                <div className='nav-link-container'>
                    <NavLink to="/tracks/new" id="upload-track-nav">Upload SoundWave</NavLink>
                </div>
                <ProfileButton user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal buttonText={buttonText} />
            </>
        );
    }

    return (
        <div id="navbar">
            <div id="leftsdie-nav">
                <li>
                    <NavLink exact to="/" id='home-button-container'>
                        <div id="logo-home-button">
                            <img src={require("../../images/logo.png")} id="logo-home-img" />
                        </div>
                    </NavLink>
                </li>
            </div>
            <div id="rightside-nav">
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;