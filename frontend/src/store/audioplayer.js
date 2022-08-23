const NEW_AUDIO = 'audioplayer/NEW';
const TOGGLE_PLAY = 'audioplayer/TOGGLE/PLAY';
const AUDIO_SEEK_TO = 'audioplayer/SEEK/TO';
const CLEAR_AUDIO = "audioplayer/CLEAR";

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

export const seekAudioplayerTo = (progress) => ({
    type: AUDIO_SEEK_TO,
    progress
})

export const clearAudioPlayer = () => ({
    type: CLEAR_AUDIO
})

const initialState = {
    playing: false,
    muted: false,
    currentTrack: {},
    progress: null,
}

const audioplayerReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    let newCurrentTrack;

    switch (action.type) {
        case NEW_AUDIO:
            newCurrentTrack = action.track;
            newState.currentTrack = newCurrentTrack;
            newState.playing = true;
            return newState;
        case TOGGLE_PLAY:
            newState.playing = action.playing;
            return newState;
        case AUDIO_SEEK_TO:
            newState.progress = action.progress;
            return newState;
        case CLEAR_AUDIO:
            newState = Object.assign({}, initialState)
            return newState;
        default:
            return state;
    }
}

export default audioplayerReducer;