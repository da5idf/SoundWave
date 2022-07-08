import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './comments.css'
import * as commentActions from '../../store/comment.js'

function CommentForm({ sessionUser }) {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const { trackId } = useParams();

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
                required
            />
        </form>
    );
}

export default CommentForm;