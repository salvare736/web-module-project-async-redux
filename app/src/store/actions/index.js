import axios from 'axios';

export const FETCH_UNITS_START = 'FETCH_UNITS_START';
export const FETCH_UNITS_SUCCESS = 'FETCH_UNITS_SUCCESS';
export const FETCH_UNITS_FAILURE = 'FETCH_UNITS_FAILURE';
export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_UNITS_START });
        axios
            // In order for the API request below to work, the CORS Anywhere demo has to be activated client-side by going to the url, "https://cors-anywhere.herokuapp.com/corsdemo", and clicking on the "Request temporary access to the demo server" button. After doing so, the API request below will succeed.
            .get('https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/units')
            .then(resp => {
                // console.log(resp.data.units);
                dispatch({ type: FETCH_UNITS_SUCCESS, payload: resp.data.units });
            })
            .catch(err => {
                // console.log(err);
                dispatch({ type: FETCH_UNITS_FAILURE, payload: err.message });
            });
    };
}
