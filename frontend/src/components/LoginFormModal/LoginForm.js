import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'

function LoginForm({ setShowLoginModal }) {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .then(() => {
                setShowLoginModal(false);
            }).catch(
                async (res) => {
                    const data = await res.json();
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
                <div className="modal-login-field">
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
                <div className="modal-login-field">
                    <input
                        id="login-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="login-password" className="true-label">
                        Password
                    </label>
                </div>
                <button
                    onClick={handleSubmit}
                    className="button modal-button wT-oB-button"
                    id="modal-button"
                >
                    Continue
                </button>

            </div>
        </div>
    );
}

export default LoginForm;