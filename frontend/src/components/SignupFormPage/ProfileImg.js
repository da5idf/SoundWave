import React from "react";

function ProfileImg({ pfpProps }) {
    const {
        profileImage, setProfileImage,
        step, setStep,
    } = pfpProps

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setProfileImage(file);
    };

    return (

        <div className="hero">
            <div className="form-container">
                <div className="form-title">How about a PfP?</div>
                < div className="form-field" >
                    <input
                        id="pfp"
                        className="custom-file-input"
                        type="file"
                        accept="image/*"
                        onChange={updateFile}
                    />
                </div >
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
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileImg