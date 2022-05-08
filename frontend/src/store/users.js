import { csrfFetch } from "./csrf";

const LOAD_USERS = 'users/LOAD';

const loadUsers = (users) => ({
    type: LOAD_USERS,
    users,
})

export const getUsers = () => async (dispatch) => {
    const response = await csrfFetch('/api/users');

    const users = await response.json();
    dispatch(loadUsers(users));
};

const initialState = {};

const usersReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_USERS:
            newState = Object.assign({}, state);
            action.users.forEach(user => {
                newState[user.id] = user;
            })
            return newState;
        default:
            return state;
    }
}

export default usersReducer;