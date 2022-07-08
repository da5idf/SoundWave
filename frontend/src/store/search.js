import { csrfFetch } from "./csrf";

const ALL_FIELDS = 'search/ALL/FIELDS';

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

const initialState = [];

const searchReducer = (state = initialState, action) => {
    let newState = [...state];

    switch (action.type) {
        case ALL_FIELDS:
            newState = action.searchFields;
            return newState
        default:
            return state;
    }
}

export default searchReducer;