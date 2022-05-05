import React from "react";
import { useSelector } from "react-redux";

import './comments.css'

function Comment({ comment, sessionUser }) {

    const sessionUserId = sessionUser.userId;
    const profileImg = sessionUser.profileImageUrl; // need to change this

    const commentUserId = comment.userId;

    return (
        <div id="comment-container">
            <div id="comment-profile-img-container">
                <img src={profileImg} id="comment-profile-img" />
            </div>
            <div>{comment.text}</div>
        </div>
    )
}

export default Comment;