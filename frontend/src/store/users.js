import { csrfFetch } from "./csrf";

const LOAD_USERS = 'users/LOAD';
const PROFILE_USER = 'user/PROFILE';

const loadUsers = (users) => ({
    type: LOAD_USERS,
    users,
})

export const getUsers = () => async (dispatch) => {
    const response = await csrfFetch('/api/users');

    const users = await response.json();
    dispatch(loadUsers(users));
};

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}`);

    const user = await response.json();
    dispatch(loadUserProfile(user));
    return user;
}

const loadUserProfile = (user) => ({
    type: PROFILE_USER,
    user
})

const initialState = {
    all: {},
    userProfile: {}
};

const usersReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    let newAll = Object.assign({}, state.all);
    let newProfile = Object.assign({}, state.userProfile);

    switch (action.type) {
        case LOAD_USERS:
            action.users.forEach(user => {
                newAll[user.id] = user;
            })
            newState.all = newAll;
            return newState;
        case PROFILE_USER:
            newProfile = action.user;
            newState.userProfile = newProfile;
            return newState;
        default:
            return state;
    }
}

export default usersReducer;