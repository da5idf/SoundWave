import React from "react";

import * as commentActions from '../../store/comment';

function EditComment({ toggleProps }) {
    const { setCanEdit, setConfirmDeleteComment } = toggleProps;

    const editComment = async () => {

    }

    const confirmDeleteComment = async () => {
        console.log("are we here?")
        setConfirmDeleteComment(true);
        setCanEdit(false);
    }

    return (
        <div className="comment-update-container">
            <div className="comment-update-button-container">
                <button
                    className="button comment-update-buttons"
                    id="edit-song-button"
                    onClick={editComment}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
            </div>
            <div className="comment-update-button-container">
                <button
                    className="button comment-update-buttons"
                    id="edit-song-button"
                    onClick={confirmDeleteComment}
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    )
}

export default EditComment;