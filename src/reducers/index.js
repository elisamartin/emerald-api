import { LOADING, GET_LISTINGS, ERROR } from '../actions';

const initState = {
  listings: [],
  loading: false,
  error: null
};

const listingReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_LISTINGS:
      return { ...state, listings: action.payload, loading: false };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default listingReducer;
