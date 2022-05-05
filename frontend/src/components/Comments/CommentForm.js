import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore, useDispatch, useSelector } from 'react-redux';

import './comments.css'
import * as commentActions from '../../store/comment.js'

function CommentForm({ sessionUser }) {
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

        if (response) {
            setText("");
            // commentObjs = useSelector(state => state.comment);
            // setComments(Object.values(commentObjs));
        }
    }

    return (
        <form id="new-comment-form" onSubmit={submitComment}>
            {/* <img /> need to change this to a user profile image */}
            <div id="form-profile-img-container">
                <img src={sessionUser.profileImageUrl} id="form-profile-img" />
            </div>
            <div id="form-comment-field-padding">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="Write a comment"
                    id="form-comment-content-field"
                />
            </div>
            <button type="submit" id="comment-submit-button">Comment</button>
        </form>
    );
}

export default CommentForm;