import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import EditComment from "./EditComment";
import EditCommentModal from "./EditCommentModal";
import ConfirmationModal from "./ConfirmationModal";
import { getComments } from "../../store/comment";
import './Comments.css'

function Comment({ isLoaded, comment, sessionUser }) {
    const dispatch = useDispatch();

    const [confirmDeleteComment, setConfirmDeleteComment] = useState(false)
    const [canEdit, setCanEdit] = useState(false);
    const [inEdit, setInEdit] = useState(false);
    const [text, setText] = useState(comment.text)

    const commentUserId = comment.userId;

    const toggleProps = {
        comment,
        text,
        setText,
        setCanEdit,
        setConfirmDeleteComment,
        setInEdit
    }

    useEffect(() => {
        if (sessionUser) setCanEdit(sessionUser.id === commentUserId);
    }, [dispatch, confirmDeleteComment, canEdit, inEdit])

    return (
        <div id="comment-container">
            <div id="comment-profile-img-container">
                <img src={comment?.User.profileImageUrl} id="comment-profile-img" />
            </div>
            {inEdit ?
                <>
                    <EditComment text={text} setText={setText} />
                    <ConfirmationModal toggleProps={toggleProps} action="EDIT_COMMENT" />
                </> :
                <div className="comment-text">{text}</div>
            }
            {canEdit && (!confirmDeleteComment && !inEdit) && (
                <EditCommentModal toggleProps={toggleProps} />
            )}
            {confirmDeleteComment && (
                <ConfirmationModal toggleProps={toggleProps} action="DELETE_COMMENT" />
            )}
        </div>
    )
}

export default Comment;