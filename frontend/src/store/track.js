import { csrfFetch } from "./csrf";

const LOAD_TRACKS = 'tracks/LOAD';
const NEW_TRACK = 'tracks/NEW';
const ADD_ART = 'tracks/albumArt'
const EDIT_TRACK = 'tracks/EDIT';
const DELETE_TRACK = 'tracks/DELETE';

const loadTracks = (tracks) => ({
    type: LOAD_TRACKS,
    tracks,
})

export const getTracks = () => async (dispatch) => {
    const response = await fetch('/api/tracks');

    const tracks = await response.json();
    dispatch(loadTracks(tracks));
};

const newTrackAction = ({ id, name, url, description }) => ({
    type: NEW_TRACK,
    data: {
        name,
        url,
        description
    }
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

    const data = await response.json();
    await dispatch(newTrackAction(data.track));
    return data.track;
};

const addAlbumArtAction = (track) => ({
    type: ADD_ART,
    track,
})

export const addTrackArt = ({ trackId, albumArt }) => async (dispatch) => {
    console.log("$$$$$$$$$$ THUNK before FETCH", trackId)
    const formData = new FormData();
    formData.append("albumArt", albumArt);

    const response = await csrfFetch(`api/tracks/${trackId}/albumArt`, {
        method: "PUT",
        headers: { "Contenet-Type": "multipart/form-data" },
        body: formData,
    });

    console.log("$$$$$$$$$$ THUNK after FETCH")
    const data = await response.json()
    await dispatch(addAlbumArtAction(data.track));
};

const editTrackAction = (track) => ({
    type: EDIT_TRACK,
    track,
});

export const editTrack = (name, description, trackId) => async (dispatch) => {
    let payload = {};
    if (name) payload.name = name;
    if (description) payload.description = description;

    const response = await csrfFetch(`/api/tracks/${trackId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
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
        case NEW_TRACK || ADD_ART:
            newState = Object.assign({}, state);
            newState[action.data.id] = action.data;
            return newState;
        case ADD_ART:
            newState = Object.assign({}, state);

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