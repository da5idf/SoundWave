import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import { login } from '../../store/session'
import './Navigation.css';


function Navigation({ isLoaded, loginModalProp }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const signInDemoUser = () => {
        return dispatch(login({ credential: 'DemoUser', password: "demoUserPass" }));
    }

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
                <LoginFormModal loginModalProp={loginModalProp} />
                <button
                    id="demo-login-button"
                    onClick={signInDemoUser}
                >
                    Demo User
                </button>
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