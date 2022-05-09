import React from "react";
import { useSelector } from "react-redux";

function UserInfo({ userProps }) {
    const {
        email, setEmail,
        username, setUsername,
        firstName, setFirstName,
        lastName, setLastName,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        step, setStep
    } = userProps

    const users = useSelector((state) => state.users);

    return (
        <div className="hero">
            <div className="form-container">
                <div className="form-title">Please enter your user information</div>
                <div className="modal-login-field">
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="email">
                        Email
                    </label>
                </div>
                <div className="modal-login-field">
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="username">
                        Username
                    </label>
                </div>
                <div className="multi-part-line">
                    <div className="modal-login-field">
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <label htmlFor="firstName">
                            First Name
                        </label>
                    </div>
                    <div className="modal-login-field">
                        <input
                            id="lastName"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <label htmlFor="lastName">
                            Last Name
                        </label>
                    </div>
                </div>
                <div className="multi-part-line">
                    <div className="modal-login-field">
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div className="modal-login-field">
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                    </div>
                </div>
                <div className="progress-buttons-container">
                    <button
                        className="button modal-button wT-oB-button"
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