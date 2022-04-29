const SET_USER = "session/setUser"
const REMOVE_USER = "session/removeUser"

const setUserSession = (user) => {
    type: VALID_USER,
        user
};

const removeUserSession = (user) => ({
    type: REMOVE_USER,
    user: null
})

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case VALID_USER:
            if (action.user) {
                return {
                    ...state, user: {
                        id: action.user.id,
                        email: action.user.email,
                        username: action.user.username,
                        createdAt: action.user.createdAt,
                        updatedAt: action.user.updatedAt,
                    }
                }
            } else return state

    }
}