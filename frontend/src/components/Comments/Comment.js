import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import EditComment from "./EditComment";
import EditCommentModal from "./EditCommentModal";
import ConfirmationModal from "./ConfirmationModal";
import './comments.css'

function Comment({ isLoaded, comment, sessionUser }) {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)

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

    const user = users[comment.userId];

    useEffect(() => {
        if (sessionUser) setCanEdit(sessionUser.id === commentUserId);
    }, [dispatch, confirmDeleteComment, canEdit, inEdit, commentUserId, sessionUser])

    return (
        <div id="comment-container">
            <div id="comment-profile-img-container">
                <img src={user.profileImageUrl} id="comment-profile-img" alt="" />
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