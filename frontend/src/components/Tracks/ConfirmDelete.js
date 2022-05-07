import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import * as trackActions from '../../store/track'

function ConfirmDelete({ trackId, setDeleteField, setIsLoaded }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const deleteTrack = async () => {
        setIsLoaded(false);
        await dispatch(trackActions.deleteTrack(trackId));
        history.push('/');
    }

    const cancelDelete = () => {
        setDeleteField(false);
    }

    return (
        <div className="update-container">
            <div className="track-update-button-container">
                <button
                    onClick={deleteTrack}
                    className="button track-update-buttons"
                >
                    Confirm Delete
                </button>
            </div>
            <div className="track-update-button-container">
                <button
                    onClick={cancelDelete}
                    className="button track-update-buttons"
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default ConfirmDelete;