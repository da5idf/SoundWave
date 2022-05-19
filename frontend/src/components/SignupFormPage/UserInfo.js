import React, { useState } from "react";
import { useSelector } from "react-redux";
import PasswordToggle from "../PasswordToggle";

function UserInfo({ userProps }) {
    const {
        email, setEmail,
        username, setUsername,
        firstName, setFirstName,
        lastName, setLastName,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        step, setStep,
        errors,
    } = userProps

    const usersObjs = useSelector((state) => state.users);
    const users = Object.values(usersObjs);

    let usernames = [];
    let emails = [];
    for (let user of users) {
        usernames.push(user.username)
        emails.push(user.email)
    };

    // const [emailErr, setEmailErr] = useState("")
    const [usernameErr, setUsernameErr] = useState("")

    const validateUsername = (e) => {
        const current = e.target.value;
        setUsername(current);
        if (current.length < 4) {
            setUsernameErr("username must be at least 4 characters")
        } else if (usernames.includes(current)) {
            setUsernameErr("This username is taken");
        } else {
            setUsernameErr("");
        }
    }

    const [isPassword, setIsPassword] = useState("password")

    return (
        <div className="hero">
            <div className="form-container">
                <div className="form-title">Please enter your user information</div>
                <div id="login-errors">
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </div>
                <div className="form-field">
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="email" className="true-label">
                        Email
                    </label>
                    <label htmlFor="email" className="label-error">
                        {/* {emailErr} */}
                    </label>
                </div>
                <div className="form-field">
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={validateUsername}
                        required
                    />
                    <label htmlFor="username" className="true-label">
                        Username
                    </label>
                    <label htmlFor="username" className="label-error">
                        {usernameErr}
                    </label>
                </div>
                <div className="multi-part-line">
                    <div className="form-field">
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <label htmlFor="firstName" className="true-label">
                            First Name
                        </label>
                    </div>
                    <div className="form-field">
                        <input
                            id="lastName"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <label htmlFor="lastName" className="true-label">
                            Last Name
                        </label>
                    </div>
                </div>
                <div className="multi-part-line">
                    <div className="form-field">
                        <input
                            id="password"
                            type={isPassword}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password" className="true-label">
                            Password
                        </label>
                        <PasswordToggle isPassword={isPassword} setIsPassword={setIsPassword} />
                    </div>
                    <div className="form-field" >
                        <input
                            id="confirmPassword"
                            type={isPassword}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="confirmPassword" className="true-label">
                            Confirm Password
                        </label>
                    </div>
                </div>
                <div className="progress-buttons-container">
                    <button
                        className="button form-button wT-oB-button"
                        onClick={() => setStep(step + 1)}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserInfo