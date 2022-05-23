const NEW_WAVE = "wave/New";
const WAVE_PLAYING = "wave/PLAYING";
const CLEANUP_WAVE = 'wave/CLEANUP'

const changeWave = (wave, track) => ({
    type: NEW_WAVE,
    wave,
    track
})

export const uploadNewWave = (wave, track) => async (dispatch) => {
    dispatch(changeWave(wave, track));
}

// State for if song is currently playing or not
const isAudioPlaying = (playing) => ({
    type: WAVE_PLAYING,
    playing
})

export const toggleWave = (audio) => async (dispatch) => {
    // pause the audio then update the state to reflect that
    audio.playPause();
    dispatch(isAudioPlaying(audio.isPlaying()))
}

export const waveCleanup = () => ({
    type: CLEANUP_WAVE
})

const initialState = {
    current: {},
    track: {},
    playing: false,
    currentTime: null,
}

const waveReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case NEW_WAVE:
            newState = Object.assign({}, state);
            newState.current = action.wave;
            newState.track = action.track;
            return newState;
        case WAVE_PLAYING:
            newState = Object.assign({}, state);
            newState.playing = action.playing;
            return newState
        case CLEANUP_WAVE:
            newState = Object.assign({}, state);
            newState = initialState;
            return initialState;
        default:
            return state;
    }
}

export default waveReducer;