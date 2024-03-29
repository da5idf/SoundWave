import React from "react";

function Bio({ bioProps }) {
    const {
        bio, setBio,
        step, setStep,
    } = bioProps;


    return (
        <div className="hero">
            <div className="form-container">
                <div className="form-title">Would you like to add a bio?</div>
                <div className="form-field">
                    <textarea
                        id="bio"
                        type="text"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        required
                    />
                    <label htmlFor="bio" className="true-label">
                        Bio
                    </label>
                </div>
                <div className="form-button-container">
                    <button
                        className="button form-button wT-bB-button"
                        onClick={() => setStep(step - 1)}
                    >
                        Back
                    </button>
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

export default Bio;