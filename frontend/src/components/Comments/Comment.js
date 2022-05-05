import React from "react";
import { useSelector } from "react-redux";

import './comments.css'

function Comment({ comment, sessionUser }) {

    console.log("^^^^^ sessionUser", sessionUser);

    const sessionUserId = sessionUser.userId;
    const profileImg = sessionUser.profileImageUrl; // need to change this

    console.log("****** comment.js", comment);

    const commentUserId = comment.userId;
    // const commentUser = useSelector((state) => state.users[commentUserId]);
    // console.log("commentUser", commentUser);

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