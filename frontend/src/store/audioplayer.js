const NEW_AUDIO = 'audioplayer/NEW';
const TOGGLE_PLAY = 'audioplayer/TOGGLE/PLAY';
const AUDIO_SEEK_TO = 'audioplayer/SEEK/TO';

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

const initialState = {
    playing: false,
    muted: false,
    queue: [],
    currentTrack: {},
    progress: null,
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
            return newState;
        case AUDIO_SEEK_TO:
            newState.progress = action.progress;
            return newState;
        default:
            return state;
    }
}

export default audioplayerReducer;