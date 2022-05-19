import React from "react";

function EditCommentModal({ toggleProps }) {
    const { setConfirmDeleteComment, setInEdit } = toggleProps;

    const editComment = async () => {
        setInEdit(true);
    }

    const confirmDeleteComment = async () => {
        setConfirmDeleteComment(true);
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