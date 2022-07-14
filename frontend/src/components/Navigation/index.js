import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import GeneralNav from './GeneralNav';
import HomeNav from './HomeNav';
import { login } from '../../store/session';

import './Navigation.css';

function Navigation({ sessionUser, loginModalProp }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [onHomepage, setOnHomepage] = useState(false);

    useEffect(() => {
        const unlisten = history.listen(() => {
            setOnHomepage(window.location.pathname === "/")
        })

        return () => unlisten();
    }, [history])

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

    let redirectPath;
    sessionUser ? redirectPath = "/discover" : redirectPath = "/";

    if (onHomepage) return (
        <HomeNav sessionLinks={sessionLinks} redirectPath={redirectPath} />
    )

    return (
        <GeneralNav sessionLinks={sessionLinks} redirectPath={redirectPath} />
    )


}

export default Navigation;