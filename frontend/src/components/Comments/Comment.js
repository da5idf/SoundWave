import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getComments } from "../../store/comment";
import EditComment from "./EditComment";
import EditCommentModal from "./EditCommentModal";
import ConfirmationModal from "./ConfirmationModal";
import './comments.css'

function Comment({ comment, sessionUser }) {
    const dispatch = useDispatch();

    const [confirmDeleteComment, setConfirmDeleteComment] = useState(false)
    const [canEdit, setCanEdit] = useState(false);
    const [inEdit, setInEdit] = useState(false);
    const [text, setText] = useState(comment?.text)

    const user = comment.User;

    const toggleProps = {
        comment,
        text,
        setText,
        setCanEdit,
        setConfirmDeleteComment,
        setInEdit
    }

    useEffect(() => {
        if (sessionUser) setCanEdit(sessionUser.id === comment.userId);
    }, [dispatch])

    return (
        <>
            <div id="comment-container">
                <div id="comment-profile-img-container">
                    <img src={user?.profileImageUrl} id="comment-profile-img" alt="" />
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
        </>
    )

}

export default Comment;