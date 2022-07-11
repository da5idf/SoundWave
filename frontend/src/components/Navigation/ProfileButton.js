import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, Link } from "react-router-dom";

import * as sessionActions from '../../store/session';
import { closeOnClickOut } from "../../utils";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        // add event listener to close on a click outside of the profile dropdown.
        const closeDropDownOnClickOut = closeOnClickOut("profile-dropdown", setShowMenu)
        document.body.addEventListener("click", closeDropDownOnClickOut)

        return () => {
            document.body.removeEventListener("click", closeOnClickOut);
        }
    }, [])

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
                        <Link to={`/artists/${user.id}`} className="profile-dropdown-link">Your Profile</Link>
                        <Link to="tracks/new" className="profile-dropdown-link">Upload new track</Link>
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