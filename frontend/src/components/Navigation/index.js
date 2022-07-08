import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import { login } from '../../store/session'
import './Navigation.css';


function Navigation({ sessionUser, loginModalProp }) {

    const [navType, setNavType] = useState("none");

    useEffect(() => {
        if (sessionUser?.id) {
            setNavType("general")
        }
    }, [sessionUser?.id])


    const dispatch = useDispatch();
    const signInDemoUser = () => {
        return dispatch(login({ credential: 'DemoUser', password: "demoUserPass" }));
    }

    let sessionLinks;
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
                    className='button wT-bB-button'
                    onClick={signInDemoUser}
                >
                    Demo User
                </button>
                <SignupFormModal buttonText={"Create Account"} />
            </>
        );
    }

    return (
        <>
            <div id="nav-container">
                {navType === "none" && <div id='top-orange-border'></div>}
                <div id={`navbar-${navType}`}>
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
            </div>
        </>
    );
}

export default Navigation;