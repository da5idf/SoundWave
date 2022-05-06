import React from "react";

import * as commentActions from '../../store/comment';

function EditCommentModal({ toggleProps }) {
    const { setCanEdit, setConfirmDeleteComment, setInEdit } = toggleProps;

    const editComment = async () => {
        setInEdit(true);
        setCanEdit(false);
    }

    const confirmDeleteComment = async () => {
        setConfirmDeleteComment(true);
        setCanEdit(false);
    }

    return (
        <div className="comment-update-container">
            <div className="comment-update-button-container">
                <button
                    className="button fa-button fa-button-edit"
                    onClick={editComment}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
            </div>
            <div className="comment-update-button-container">
                <button
                    className="button fa-button fa-button-trash"
                    onClick={confirmDeleteComment}
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    )
}

export default EditCommentModal;