import { csrfFetch } from "./csrf";

const LOAD_TRACKS = 'tracks/LOAD'
const NEW_TRACK = 'tracks/NEW'
const EDIT_TRACK = 'tracks/EDIT'
const DELETE_TRACK = 'tracks/DELETE'

const loadTracks = (tracks) => ({
    type: LOAD_TRACKS,
    tracks,
})

export const getTracks = () => async (dispatch) => {
    const response = await fetch('/api/tracks');

    const tracks = await response.json();
    dispatch(loadTracks(tracks));
};

const newTrackAction = (track) => ({
    type: NEW_TRACK,
    track
});

export const uploadNewTrack = (userId, name, url, description) => async (dispatch) => {
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("url", url);

    const response = await csrfFetch('/api/tracks', {
        method: 'POST',
        headers: { "Content-Type": "multipart/form-data" },
        body: formData,
    });

    const track = await response.json();

    await dispatch(newTrackAction(track));
    return track;
}

const editTrackAction = (track) => ({
    type: EDIT_TRACK,
    track,
});

export const editTrack = (name, description, url, trackId) => async (dispatch) => {
    const formData = new FormData();
    if (name) formData.append("name", name);
    if (description) formData.append("description", description);
    if (url) formData.append("url", url);

    const response = await csrfFetch(`/api/tracks/${trackId}`, {
        method: "PUT",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData
    })

    const track = await response.json();

    await dispatch(editTrackAction(track));
    return track;
}

const deleteTrackAction = (trackId) => ({
    type: DELETE_TRACK,
    trackId,
})

export const deleteTrack = (trackId) => async (dispatch) => {
    const response = await csrfFetch(`/api/tracks/${trackId}`, {
        method: "DELETE"
    })

    await dispatch(deleteTrackAction(trackId));
    return response;
}

const initialState = {}

const trackReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_TRACKS:
            newState = Object.assign({}, state);
            action.tracks.forEach(track => {
                newState[track.id] = track;
            })
            return newState;
        case NEW_TRACK:
            newState = Object.assign({}, state);
            newState[action.track.id] = action.track
            return newState;
        case EDIT_TRACK:
            newState = Object.assign({}, state);
            newState[action.track.id] = action.track
            return newState;
        case DELETE_TRACK:
            newState = Object.assign({}, state);
            delete newState[action.trackId]
            return newState;
        default:
            return state;
    }
}

export default trackReducer;