import React from "react";

function SubmitForm({ submitFormProps }) {
    const {
        step, setStep,
        handleSubmit
    } = submitFormProps;

    return (
        <div className="hero">
            <div className="form-container">
                <div className="form-title">Submit and hop on a wave!</div>
                <div className="submission-button-container">
                    <button
                        className="button modal-button wT-bB-button"
                        onClick={() => setStep(step - 1)}
                    >
                        Back
                    </button>
                    <button
                        className="button modal-button wT-oB-button"
                        onClick={handleSubmit}
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SubmitForm;