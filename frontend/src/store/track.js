import { csrfFetch } from "./csrf";

const LOAD_TRACKS = 'tracks/LOAD';
const ONE_TRACK = 'tracks/ONE';
const NEW_TRACK = 'tracks/NEW';
const EDIT_TRACK = 'tracks/EDIT';
const DELETE_TRACK = 'tracks/DELETE';

const loadTracks = (tracks) => ({
    type: LOAD_TRACKS,
    tracks
})

export const getTracks = () => async (dispatch) => {
    const response = await csrfFetch('/api/tracks');

    const tracks = await response.json();
    dispatch(loadTracks(tracks));
};

const loadOneTrack = (track) => ({
    type: ONE_TRACK,
    track
})

export const getOneTrack = (trackId) => async (dispatch) => {
    const response = await csrfFetch(`/api/tracks/${trackId}`)

    const track = await response.json();
    dispatch(loadOneTrack(track))
}

const newTrackAction = (track) => ({
    type: NEW_TRACK,
    track
});

export const uploadNewTrack = (userId, name, genre, url, description, files) => async (dispatch) => {
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("name", name);
    formData.append("genre", genre);
    formData.append("description", description);

    // if files has length 2, art is included, and will be at index 1.
    if (files.length === 2) {
        formData.append("files", files[0]);
        formData.append("files", files[1]);
    } else {
        formData.append("url", url);
    }

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

const initialState = {
    allTracks: {},
    thisTrack: {}
};

const trackReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_TRACKS:
            newState = Object.assign({}, state);
            action.tracks.forEach(track => {
                newState.allTracks[track.id] = track;
            })
            action.tracks.thisTrack = {};
            return newState;
        case ONE_TRACK:
            newState = Object.assign({}, state);
            newState.thisTrack = action.track;
            return newState
        case NEW_TRACK:
            newState = Object.assign({}, state);
            newState.allTracks[action.track.id] = action.track;
            return newState;
        case EDIT_TRACK:
            newState = Object.assign({}, state);
            newState.allTracks[action.track.id] = action.track;
            return newState;
        case DELETE_TRACK:
            newState = Object.assign({}, state);
            delete newState.allTracks[action.trackId]
            return newState;
        default:
            return state;
    }
}

export default trackReducer;