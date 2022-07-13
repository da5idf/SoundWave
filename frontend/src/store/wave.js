const NEW_WAVE = "wave/New";
const WAVE_PLAYING = "wave/PLAYING";
const CLEANUP_WAVE = 'wave/CLEANUP';
const WAVE_SEEK_TO = 'wave/SEEK/TO';

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

export const toggleWave = (wave) => async (dispatch) => {
    // pause the wave then update the state to reflect that
    await wave.playPause();
    dispatch(isAudioPlaying(wave.isPlaying()))
}

export const waveCleanup = () => ({
    type: CLEANUP_WAVE
})

export const seekWaveTo = (progress) => ({
    type: WAVE_SEEK_TO,
    progress
})

const initialState = {
    current: {},
    track: {},
    playing: false,
    progress: null,
}

const waveReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case NEW_WAVE:
            newState.current = action.wave;
            newState.track = action.track;
            return newState;
        case WAVE_PLAYING:
            newState.playing = action.playing;
            return newState;
        case WAVE_SEEK_TO:
            newState.progress = action.progress;
            return newState;
        case CLEANUP_WAVE:
            newState = initialState;
            return initialState;
        default:
            return state;
    }
}

export default waveReducer;