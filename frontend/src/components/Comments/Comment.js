import React, { useState } from "react";

import EditComment from "./EditComment";
import EditCommentModal from "./EditCommentModal";
import ConfirmationModal from "./ConfirmationModal";
import './comments.css'

function Comment({ comment, sessionUser }) {

    const [confirmDeleteComment, setConfirmDeleteComment] = useState(false)
    const [inEdit, setInEdit] = useState(false);
    const [text, setText] = useState(comment?.text)

    const user = comment.User;

    const toggleProps = {
        comment,
        text,
        setText,
        setConfirmDeleteComment,
        setInEdit
    }

    let canEdit = sessionUser?.id === comment?.userId;

    return (
        <>
            <div id="comment-container">
                <div id="comment-profile-img-container">
                    {user.profileImageUrl &&
                        <img src={user.profileImageUrl} id="comment-profile-img" alt="" />}
                </div>
                {inEdit ?
                    <>
                        <EditComment text={text} setText={setText} />
                        <ConfirmationModal toggleProps={toggleProps} action="EDIT_COMMENT" />
                    </> :
                    <div className="comment-text-name">
                        <div className="comment-name">{`${comment.User.firstName} ${comment.User.lastName}`}</div>
                        <div className="comment-text">{text}</div>
                    </div>
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