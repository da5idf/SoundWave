import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore, useDispatch } from 'react-redux';

import './comments.css'
import * as commentActions from '../../store/comment.js'

function CommentForm() {
    const [text, setText] = useState("");

    // const handleComment = (field) => {
    //     console.log("**** field, fieldValue:", field, field.value);
    //     setComment(field.value);

    //     if (e.keyup)
    // } 
    const dispatch = useDispatch();
    const { trackId } = useParams();
    const state = useStore().getState();

    const submitComment = async (e) => {
        e.preventDefault();

        const userId = state.session.user.id;

        const response = await dispatch(commentActions.createComment(text, userId, trackId));
    }

    return (
        <form id="comment-container" onSubmit={submitComment}>
            {/* <img /> need to change this to a user profile image */}
            <div id="user-profile-img">Test</div>
            <div id="comment-field-padding">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
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