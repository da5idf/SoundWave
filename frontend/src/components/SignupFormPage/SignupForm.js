import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import './SignupForm.css';
import * as sessionActions from "../../store/session";

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            console.log("***** in component", profileImage)
            return dispatch(sessionActions.signupUser({
                email,
                username,
                firstName,
                lastName,
                profileImage,
                password,
            }))
                .then(() => {
                    setUsername("");
                    setFirstName("");
                    setlastName("");
                    setProfileImage(null);
                    setPassword("");
                    setConfirmPassword("");
                })
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) return setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setProfileImage(file);
    };

    return (
        <form onSubmit={handleSubmit} className="modal-form">
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className="modal-login-field">
                <label>
                    Email
                </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="modal-login-field">
                <label>
                    Username
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="modal-login-field">
                <label>
                    First Name
                </label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div className="modal-login-field">
                <label>
                    Last Name
                </label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    required
                />
            </div>
            <div className="modal-login-field">
                <label>
                    Profile Picture
                </label>
                <input
                    type="file"
                    onChange={updateFile}
                />
            </div>
            <div className="modal-login-field">
                <label>
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="modal-login-field">
                <label>
                    Confirm Password
                </label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="button modal-button">Continue</button>
        </form>
    );
}

export default SignupFormPage;