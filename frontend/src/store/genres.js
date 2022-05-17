import { csrfFetch } from "./csrf";

const LOAD_GENRES = 'genres/LOAD'

const loadGenres = (genres) => ({
    type: LOAD_GENRES,
    genres,
})

export const getGenres = () => async (dispatch) => {
    const response = await csrfFetch('/api/genres');

    const genres = await response.json();
    dispatch(loadGenres(genres));
};

const initialState = [];

const genreReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_GENRES:
            newState = Object.assign({}, state);
            action.genres.forEach(genre => {
                newState[genre.id] = genre
            })
            return newState;
        default:
            return state;
    }
}

export default genreReducer;