import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// import './Navigation.css'
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = async (e) => {
        e.preventDefault();
        await dispatch(sessionActions.logout());
        history.push('/');
    };

    return (
        <>
            <div id="profile-dropdown-container">
                <button onClick={openMenu} className="button" id="user-profile-button">
                    <i className="fa-solid fa-user"></i>
                    {user.username}
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
                {showMenu && (
                    <div id="profile-dropdown">
                        <button
                            onClick={logout}
                            className="button wT-oB-button"
                            id="logout-button"
                        >
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProfileButton;