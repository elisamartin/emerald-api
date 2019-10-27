import axios from 'axios';

export const LOADING = 'LOADING';
export const GET_LISTINGS = 'GET_LISTINGS';
export const ERROR = 'ERROR';

export const getlistings = () => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get('https://api.emerald-stay.fr/api/properties?country=1&adults=1&children=0&page=1')
    .then((response) => {
      dispatch({ type: GET_LISTINGS, payload: response.data.data.properties });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err.errorMessage });
    });
};
