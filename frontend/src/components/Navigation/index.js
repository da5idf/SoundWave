import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import { login } from '../../store/session'
import './Navigation.css';


function Navigation({ isLoaded, loginModalProp }) {
    const sessionUser = useSelector(state => state.session.user);

    const history = useHistory();
    const [navType, setNavType] = useState("none");
    const [path, setPath] = useState(history.location.pathname)

    // TODO, not updating correctly
    useEffect(() => {
        path === "/" ? setNavType("none") : setNavType("general")
    }, [path])

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
            {navType === "none" && <div id='top-orange-border'></div>}
            <div id="nav-container">
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
                        {isLoaded && sessionLinks}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;