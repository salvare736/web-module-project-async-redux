import { FETCH_UNITS_START, FETCH_UNITS_SUCCESS, FETCH_UNITS_FAILURE } from '../actions';

const initialState = {
    isLoading: false,
    error: '',
    units: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_UNITS_START:
            return state;
        case FETCH_UNITS_SUCCESS:
            return state;
        case FETCH_UNITS_FAILURE:
            return state;
        default:
            return state;
    }
};
