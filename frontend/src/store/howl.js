import { Howl } from 'howler';

const UPDATE_HOWL = 'howl/UPDATE';
const TOGGLE_HOWL = 'toggle/HOWL'
const CLEANUP_HOWL = 'howl/CLEANUP';

const updateHowlAction = (howl, newTrack) => ({
    type: UPDATE_HOWL,
    howl,
    newTrack
})

export const updateHowl = (newTrack, curTrack, curHowl) => (dispatch) => {
    let howl;

    // logic if the incoming track is not the playing track
    if (newTrack.id !== curTrack.id) {
        howl = new Howl({
            src: [newTrack.url]
        })

        // stop the current howl if it exists
        if (Object.keys(curHowl).length) curHowl.stop();

        // start the new howl and re-set the state after it ends
        howl.play();
        howl.once("load", () => {
            dispatch(updateHowlAction(howl, newTrack));
        })

        howl.once('end', () => dispatch(howlCleanup()))
    } else {
        // update howl for dispatch, otherwise undefined
        howl = curHowl;
        curHowl.playing() ? curHowl.pause() : curHowl.play()
        dispatch(updateHowlAction(howl, newTrack));
    }

}

const howlCleanup = () => ({
    type: CLEANUP_HOWL,

})

export const toggleHowl = (howl) => (dispatch) => {
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
    currentTime: null,
    duration: null,
}

const HowlReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case UPDATE_HOWL:
            newState = Object.assign({}, state);
            newState.current = action.howl;
            newState.track = action.newTrack
            newState.playing = !state.playing;
            newState.currentTime = action.howl.seek();
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