import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = 'comments/GET';
const NEW_COMMENT = 'comment/NEW';
const EDIT_COMMENT = 'comment/EDIT';
const DELETE = 'comment/DELETE';

const loadComments = (comments) => ({
    type: LOAD_COMMENTS,
    comments,
})

export const getComments = () => async (dispatch) => {
    const response = await fetch('/api/comments');

    const comments = await response.json();
    dispatch(loadComments(comments));
}

const newCommentAction = ({ text, userId, trackId }) => ({
    type: NEW_COMMENT,
    data: {
        text,
        userId,
        trackId,
    }
});

export const createComment = (text, userId, trackId) => async (dispatch) => {
    const response = await csrfFetch(
        '/api/comments',
        {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text,
                userId,
                trackId,
            }),
        },
    );

    const data = await response.json();
    dispatch(newCommentAction(data.comment));
    return response;
}

const initialState = {};

const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_COMMENTS:
            newState = Object.assign({}, state);
            action.comments.forEach(comment => {
                newState[comment.id] = comment;
            });
            return newState;
        case NEW_COMMENT:
            newState = Object.assign({}, state);
            newState[action.id] = {
                text: action.text,
                userId: action.userId,
                trackId: action.trackId,
            };
            return newState;
        default:
            return state;
    }
}

export default commentReducer;