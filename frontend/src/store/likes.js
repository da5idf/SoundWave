import { csrfFetch } from "./csrf";

const GET_LIKES = 'likes/GET';
const NEW_LIKE = 'likes/NEW';
const DELETE_LIKE = 'likes/DELETE';

export const getUserLikes = (userId) => async (dispatch) => {

    const response = await csrfFetch(`/api/likes/${userId}`);

    if (response.ok) {
        const likes = await response.json();
        dispatch(hydrateUserLikes(likes));
        return likes;
    }
}

const hydrateUserLikes = (likes) => ({
    type: GET_LIKES,
    likes
})

export const newUserLike = (userId, trackId) => async (dispatch) => {

    const response = await csrfFetch(`/api/likes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, trackId })
    })

    if (response.ok) {
        const newLike = await response.json();
        dispatch(hydrateNewUserLike(newLike));
        return newLike;
    }
}

const hydrateNewUserLike = (like) => ({
    type: NEW_LIKE,
    like
})

export const deleteUserLike = (userId, trackId) => async (dispatch) => {

    const response = await csrfFetch(`api/likes`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, trackId })
    })

    if (response.ok) {
        const deletedLike = await response.json();
        dispatch(hydrateDeletedLike(deletedLike));
        return deletedLike;
    }
}

const hydrateDeletedLike = (like) => ({
    type: DELETE_LIKE,
    like
})

const initialState = {};

const likesReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case GET_LIKES:
            action.likes.forEach(like => {
                newState[like.trackId] = like
            });
            return newState;
        case NEW_LIKE:
            newState[action.like.trackId] = action.like;
            return newState;
        case DELETE_LIKE:
            delete newState[action.like.trackId];
            return newState;
        default:
            return state;
    }
}

export default likesReducer;