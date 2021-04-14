import axios from 'axios';

export const FETCH_UNITS_START = 'FETCH_UNITS_START';
export const FETCH_UNITS_SUCCESS = 'FETCH_UNITS_SUCCESS';
export const FETCH_UNITS_FAILURE = 'FETCH_UNITS_FAILURE';
export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_UNITS_START });
        axios
            .get('https://age-of-empires-2-api.herokuapp.com/api/v1/units')
            .then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.log(err);
            });
    };
}
