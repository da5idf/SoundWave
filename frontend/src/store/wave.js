const NEW_WAVE = "wave/New"

const changeWave = (wave) => ({
    type: NEW_WAVE,
    wave
})

export const dispatchNewWave = (wave) => async (dispatch) => {
    dispatch(changeWave(wave));
}

const initialState = { current: {} }

const waveReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case NEW_WAVE:
            newState = Object.assign({}, state);
            newState.current = action.wave;
            return newState;
        default:
            return state;
    }
}

export default waveReducer;