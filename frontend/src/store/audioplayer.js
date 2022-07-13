const NEW_AUDIO = 'audioplayer/NEW';
const TOGGLE_PLAY = 'audioplayer/TOGGLE/PLAY'

export const newAudioTrack = (track) => (dispatch) => {
    dispatch(hydrateAudioTrack(track))
}

const hydrateAudioTrack = (track) => ({
    type: NEW_AUDIO,
    track
})

export const toggleAudioPlay = (playing) => ({
    type: TOGGLE_PLAY,
    playing
})

const initialState = {
    playing: false,
    muted: false,
    queue: [],
    currentTrack: {}
}

const audioplayerReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    let newQueue = [...state.queue];
    let newCurrentTrack;

    switch (action.type) {
        case NEW_AUDIO:
            newCurrentTrack = action.track;
            newState.currentTrack = newCurrentTrack;
            newState.playing = true;
            return newState;
        case TOGGLE_PLAY:
            newState.playing = action.playing;
            return newState
        default:
            return state;
    }
}

export default audioplayerReducer;