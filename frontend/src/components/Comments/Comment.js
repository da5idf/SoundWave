import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";
import { getComments } from "../../store/comment";
import './comments.css'

function Comment({ comment, sessionUser }) {
    const dispatch = useDispatch();

    const [confirmDeleteComment, setConfirmDeleteComment] = useState(false)
    const [canEdit, setCanEdit] = useState(false);

    const commentUserId = comment.userId;

    const toggleProps = {
        commentId: comment.id,
        setCanEdit,
        setConfirmDeleteComment
    }

    useEffect(() => {
        dispatch(getComments())
            .then(() => {
                if (sessionUser) setCanEdit(sessionUser.id === commentUserId);
            })
    }, [dispatch, confirmDeleteComment, canEdit])

    return (
        <div id="comment-container">
            <div id="comment-profile-img-container">
                <img src={comment?.User.profileImageUrl} id="comment-profile-img" />
            </div>
            <div className="comment-text">{comment?.text}</div>
            {canEdit && !confirmDeleteComment && (
                <EditComment toggleProps={toggleProps} />
            )}
            {confirmDeleteComment && (
                <DeleteComment toggleProps={toggleProps} />
            )}
        </div>
    )
}

export default Comment;