import React from "react";
import { useSelector } from "react-redux";

function Comment({ comment }) {
    const userId = useSelector(state => state.session.user.id)

    return (
        <div>{comment.text}</div>
    )
}

export default Comment;