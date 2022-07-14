import { csrfFetch } from "./csrf";

const ALL_FIELDS = 'search/ALL/FIELDS';
const SEARCH_RESULTS = 'search/RESULTS';

export const getAllSearchFields = () => async (dispatch) => {
    const response = await csrfFetch("/api/search");

    if (response.ok) {
        const searchFields = await response.json();
        dispatch(hydrateSearchFields(searchFields));
    }
}

const hydrateSearchFields = (searchFields) => ({
    type: ALL_FIELDS,
    searchFields,
})

export const getSearchResults = (query) => async (dispatch) => {
    const response = await csrfFetch(`/api/search/${query}`);

    if (response.ok) {
        const results = await response.json();
        dispatch(hydrateSearchResults(results));
    }
}

const hydrateSearchResults = (results) => ({
    type: SEARCH_RESULTS,
    results
})

const initialState = {
    searchFields: [],
    searchResults: {}
};

const searchReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    let newFields;
    let searchResults = {};

    switch (action.type) {
        case ALL_FIELDS:
            newFields = action.searchFields;
            newState.searchFields = newFields;
            return newState;
        case SEARCH_RESULTS:
            searchResults.artists = action.results.artists;
            searchResults.tracks = action.results.tracks;
            newState.searchResults = searchResults;
            return newState;
        default:
            return state;
    }
}

export default searchReducer;