import React from "react";
import { useHistory } from "react-router-dom";

function CanEditFields({ setDeleteField, canEdit, trackId }) {

    const history = useHistory();

    const confirmDelete = () => {
        setDeleteField(true);
        canEdit = false;
    }

    const redirectToEdit = () => {
        history.push(`/tracks/${trackId}/edit`);
    }

    return (
        <div className="update-container">
            <div className="track-update-button-container">
                <button
                    className="button track-update-buttons"
                    id="edit-song-button"
                    onClick={redirectToEdit}
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