import React from "react";

function EditComment({ text, setText }) {
    return (
        <textarea
            id="in-edit-textarea"
            onChange={(e) => setText(e.target.value)}
            defaultValue={text}
        >
        </textarea>
    )
}

export default EditComment;