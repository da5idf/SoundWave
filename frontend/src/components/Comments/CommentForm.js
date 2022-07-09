import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './comments.css'
import * as commentActions from '../../store/comment.js'

function CommentForm({ sessionUser, trackId }) {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    let height;
    window.location.pathname.includes("tracks") ?
        height = 37.31 : height = 28.44

    const submitComment = async (e) => {
        e.preventDefault();

        await dispatch(commentActions.createComment(text, sessionUser.id, trackId))

        setText("");
    }

    return (
        <form id="new-comment-form" onSubmit={submitComment}>
            <div
                id="new-comment-form-img"
                style={{ backgroundImage: `url(${sessionUser.profileImageUrl})` }}
            />

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What do you think?"
                id="new-comment-form-input"
                style={{ height }}
                required
            />
        </form>
    );
}

export default CommentForm;