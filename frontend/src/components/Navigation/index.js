import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import { login } from '../../store/session';


import './Navigation.css';


function Navigation({ sessionUser, loginModalProp }) {
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
        return <LoggedIn sessionLinks={sessionLinks} />
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
        return <LoggedOut sessionLinks={sessionLinks} />
    }

}

export default Navigation;