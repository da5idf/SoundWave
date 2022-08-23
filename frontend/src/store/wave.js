const NEW_WAVE = "wave/New";
const SET_TRACK = 'wave/SET/Track';
const WAVE_PLAYING = "wave/PLAYING";
const CLEANUP_WAVE = 'wave/CLEANUP';
const WAVE_SEEK_TO = 'wave/SEEK/TO';

const addWave = (wave, track) => ({
    type: NEW_WAVE,
    wave,
    track
})

export const uploadNewWave = (wave, track) => async (dispatch) => {
    dispatch(addWave(wave, track));
}

export const setWaveTrack = (track) => ({
    type: SET_TRACK,
    track
})

// State for if song is currently playing or not
const isAudioPlaying = (playing) => ({
    type: WAVE_PLAYING,
    playing
})

export const toggleWave = (wave) => async (dispatch) => {
    // pause the wave then update the state to reflect that
    if (wave) {
        await wave.playPause();
        dispatch(isAudioPlaying(wave.isPlaying()))
    }
}

export const waveCleanup = () => ({
    type: CLEANUP_WAVE
})

export const seekWaveTo = (progress) => ({
    type: WAVE_SEEK_TO,
    progress
})

const initialState = {
    allWaves: {},
    track: {},
    playing: false,
    progress: null,
}

const waveReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    let newAll = Object.assign({}, state.allWaves)

    switch (action.type) {
        case NEW_WAVE:
            newAll[action.track.id] = action.wave;
            newState.allWaves = newAll;
            return newState;
        case SET_TRACK:
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