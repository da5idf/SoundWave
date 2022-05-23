import { Howl } from 'howler';

const NEW_HOWL = 'howl/NEW'
const TOGGLE_HOWL = 'toggle/HOWL'
const CLEANUP_HOWL = 'howl/CLEANUP';

const newHowlAction = (howl, track) => ({
    type: NEW_HOWL,
    howl,
    track
})

export const newHowl = (track) => async (dispatch) => {

    let howl = new Howl({
        src: [track.url]
    });
    howl.play();
    howl.once('load', () => {
        dispatch(newHowlAction(howl, track))
    })
    howl.once('end', () => {
        dispatch(howlCleanup())
    })
}

export const howlCleanup = () => ({
    type: CLEANUP_HOWL,

})

export const toggleHowl = (howl) => async (dispatch) => {
    howl.playing() ? howl.pause() : howl.play()
    dispatch(toggleHowlAction(howl))
}

const toggleHowlAction = (howl) => ({
    type: TOGGLE_HOWL,
    howl
})

const initialState = {
    current: {},
    track: {},
    playing: false,
    currentTime: 0,
    duration: null,
}

const HowlReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case NEW_HOWL:
            newState = Object.assign({}, state);
            newState.current = action.howl;
            newState.track = action.track
            newState.playing = true;
            // newState.currentTime = action.howl.seek();
            newState.duration = action.howl.duration();
            return newState;
        case TOGGLE_HOWL:
            newState = Object.assign({}, state);
            newState.playing = !state.playing;
            newState.currentTime = action.howl.seek();
            return newState;
        case CLEANUP_HOWL:
            newState = Object.assign({}, state);
            newState = initialState;
            return newState;
        default:
            return state
    }
}

export default HowlReducer;