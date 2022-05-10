import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'
import PasswordToggle from "../PasswordToggle";

function LoginForm({ setShowLoginModal }) {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isPassword, setIsPassword] = useState("password");

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .then(() => {
                setShowLoginModal(false);
            }).catch(
                async (res) => {
                    const data = await res.json();
                    console.log(data.errors);
                    if (data && data.errors) setErrors(data.errors);
                }
            );
    };

    return (
        <div className="hero">
            <div className="form-container">
                <div className="form-title">Welcome Back</div>
                <div id="login-errors">
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </div>
                <div className="form-field">
                    <input
                        id="credential"
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                    <label htmlFor="credential" className="true-label">
                        Username or Email
                    </label>
                </div>
                <div className="form-field">
                    <input
                        id="login-password"
                        type={isPassword}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="login-password" className="true-label">
                        Password
                    </label>
                    <PasswordToggle isPassword={isPassword} setIsPassword={setIsPassword} />
                </div>
                <button
                    onClick={handleSubmit}
                    className="button form-button wT-oB-button"
                >
                    Sign In
                </button>

            </div>
        </div>
    );
}

export default LoginForm;