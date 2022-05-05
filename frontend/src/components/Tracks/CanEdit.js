import React from "react";

function CanEditFields({ setDeleteField, canEdit }) {

    const confirmDelete = () => {
        setDeleteField(true);
        canEdit = false;
    }

    return (
        <div className="update-container">
            <div className="track-update-button-container">
                <button
                    className="button track-update-buttons"
                    id="edit-song-button"
                >
                    Edit your song
                </button>
            </div>
            <div className="track-update-button-container">
                <button
                    className="button track-update-buttons"
                    id="edit-song-button"
                    onClick={confirmDelete}
                >
                    Delete your song
                </button>
            </div>
        </div>
    )
};

export default CanEditFields;