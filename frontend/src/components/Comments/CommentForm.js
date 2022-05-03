import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from 'react-redux';

import './comments.css'
import * as commentActions from '../../store/comment.js'

function CommentForm() {
    const [comment, setComment] = useState("");

    // const handleComment = (field) => {
    //     console.log("**** field, fieldValue:", field, field.value);
    //     setComment(field.value);

    //     if (e.keyup)
    // } 
    const { trackId } = useParams();
    const state = useStore().getState();

    const submitComment = async (e) => {
        e.preventDefault();

        const userId = state.session.user.id;
        console.log(userId);
    }

    return (
        <form id="comment-container" onSubmit={submitComment}>
            {/* <img /> need to change this to a user profile image */}
            <div id="user-profile-img">Test</div>
            <div id="comment-field-padding">
                <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    type="text"
                    placeholder="Write a comment"
                    id="comment-content-field"
                />
            </div>
            <button type="submit" id="comment-submit-button">Comment</button>
        </form>
    );
}

export default CommentForm;