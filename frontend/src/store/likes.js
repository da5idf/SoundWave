import { csrfFetch } from "./csrf";

const GET_LIKES = 'likes/GET';
const NEW_LIKE = 'likes/NEW';
const DELETE_LIKE = 'likes/DELETE';

export const getUserLikes = (userId) => async (dispatch) => {

    const response = await csrfFetch(`/api/likes/${userId}`);

    if (response.ok) {
        const likes = await response.json();
        console.log("**thunk", likes);
        dispatch(hydrateUserLikes(likes));
        return likes;
    }
}

const hydrateUserLikes = (likes) => ({
    type: GET_LIKES,
    likes
})

const initialState = {};

const likesReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case GET_LIKES:
            newState = action.likes;
            return newState
        default:
            return state;
    }
}

export default likesReducer;