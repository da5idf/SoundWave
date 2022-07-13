import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from './session';
import commentReducer from './comment';
import trackReducer from './track';
import usersReducer from './users';
import waveReducer from './wave';
import HowlReducer from './howl';
import genreReducer from './genres';
import searchReducer from './search';
import audioplayerReducer from './audioplayer';

const rootReducer = combineReducers({
    session: sessionReducer,
    comments: commentReducer,
    tracks: trackReducer,
    users: usersReducer,
    wave: waveReducer,
    howl: HowlReducer,
    genres: genreReducer,
    search: searchReducer,
    audioplayer: audioplayerReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;