import React from "react";
import { useDispatch } from "react-redux";

import * as commentActions from '../../store/comment';

function DeleteComment({ toggleProps: { commentId, setConfirmDeleteComment } }) {
    const dispatch = useDispatch();

    const cancelDelete = async () => {
        setConfirmDeleteComment(false)
    }

    const deleteComment = async () => {
        await dispatch(commentActions.deleteComment(commentId))
    }

    return (
        <div className="comment-update-container">
            <div className="comment-update-button-container">
                <button
                    className="button comment-update-buttons"
                    id="edit-song-button"
                    onClick={cancelDelete}
                >
                    <i className="fa-solid fa-rectangle-xmark"></i>
                </button>
            </div>
            <div className="comment-update-button-container">
                <button
                    className="button comment-update-buttons"
                    id="edit-song-button"
                    onClick={deleteComment}
                >
                    <i className="fa-solid fa-square-check"></i>
                </button>
            </div>
        </div>
    )
}

export default DeleteComment;