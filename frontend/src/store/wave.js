const NEW_WAVE = "wave/New"
const AUDIO_PLAYING = "audio/PLAYING"

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
    type: AUDIO_PLAYING,
    playing
})

export const toggleSong = (audio) => async (dispatch) => {
    // pause the audio then update the state to reflect that
    audio.playPause();
    dispatch(isAudioPlaying(audio.isPlaying()))
}

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
        case AUDIO_PLAYING:
            newState = Object.assign({}, state);
            console.log("**** in reducer action.playing", action.playing)
            newState.playing = action.playing;
            return newState
        default:
            return state;
    }
}

export default waveReducer;