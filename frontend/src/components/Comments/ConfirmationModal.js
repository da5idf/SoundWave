import React from "react";
import { useDispatch } from "react-redux";

import * as commentActions from '../../store/comment';

function ConfirmationModal({ toggleProps, action }) {
    const { comment, text, setText, setConfirmDeleteComment, setInEdit } = toggleProps;
    const dispatch = useDispatch();

    const cancelAction = async () => {
        switch (action) {
            case 'DELETE_COMMENT':
                setConfirmDeleteComment(false);
                return;
            case 'EDIT_COMMENT':
                setInEdit(false);
                setText(comment.text);
                return;
        }
    }

    const confirmAction = async () => {
        switch (action) {
            case 'DELETE_COMMENT':
                await dispatch(commentActions.deleteComment(comment.id));
                return;
            case 'EDIT_COMMENT':
                setInEdit(false);
                await dispatch(commentActions.editComment(text, comment.id));
                return;

        }
    }

    return (
        <div className="comment-update-container">
            <div className="comment-update-button-container">
                <button
                    className="button cancel-action-button fa-button"
                    onClick={cancelAction}
                >
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <div className="comment-update-button-container">
                <button
                    className="button confirm-action-button fa-button"
                    onClick={confirmAction}
                >
                    <i class="fa-solid fa-check"></i>
                </button>
            </div>
        </div>
    )
}

export default ConfirmationModal;