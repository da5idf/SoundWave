const NEW_WAVE = "wave/New"

const changeWave = (wave, track) => ({
    type: NEW_WAVE,
    wave,
    track
})

export const uploadNewWave = (wave, track) => async (dispatch) => {
    dispatch(changeWave(wave, track));
}

const initialState = { current: {}, track: {} }

const waveReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case NEW_WAVE:
            newState = Object.assign({}, state);
            newState.current = action.wave;
            newState.track = action.track;
            return newState;
        default:
            return state;
    }
}

export default waveReducer;