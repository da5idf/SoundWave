const ADD_TO_QUEUE = "nextup/ADD";
const REMOVE_FROM_QUEUE = "nextup/REMOVE";
const CLEAR_QUEUE = "nextup/CLEAR";

export const addToQueue = (track) => (dispatch) => {
    dispatch(addToQueueAction(track));
}

const addToQueueAction = (track) => ({
    type: ADD_TO_QUEUE,
    track
})

export const removeFromQueue = (track) => (dispatch) => {
    dispatch(removeFromQueueAction(track));
}

const removeFromQueueAction = (track) => ({
    type: REMOVE_FROM_QUEUE,
    track
})

export const clearTheQueue = () => (dispatch) => {
    dispatch(clearTheQueueAction());
}

const clearTheQueueAction = (track) => ({
    type: CLEAR_QUEUE,
})

const initialState = [];

const nextupReducer = (state = initialState, action) => {
    let newState = [...state];

    switch (action.type) {
        case ADD_TO_QUEUE:
            newState.push(action.track);
            return newState
        case REMOVE_FROM_QUEUE:
            // does not work if one song is appears more than once
            // always removes the first appearance by nature of .findIndex
            console.log(action.track.id);
            const idx = newState.findIndex(track => {
                console.log(track.id);
                return track.id === action.track.id
            })
            console.log(idx);
            newState.splice(idx, 1);
            return newState;
        case CLEAR_QUEUE:
            newState = [];
            return newState;
        default:
            return state;
    }
}

export default nextupReducer;