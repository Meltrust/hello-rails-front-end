import axios from 'axios';

// Action types
const FETCH_GREETINGS_REQUEST = 'FETCH_GREETINGS_REQUEST';
export const FETCH_GREETINGS_SUCCESS = 'FETCH_GREETINGS_SUCCESS';
const FETCH_GREETINGS_FAILURE = 'FETCH_GREETINGS_FAILURE';

// Initial state
const initialState = {
  loading: false,
  greetingsDisplay: [],
  error: '',
};

// Action creators
export const fetchGreetingsRequest = () => ({
  type: FETCH_GREETINGS_REQUEST,
});

export const fetchGreetingsSuccess = (greetings) => ({
  type: FETCH_GREETINGS_SUCCESS,
  payload: greetings,
});

export const fetchGreetingsFailure = (error) => ({
  type: FETCH_GREETINGS_FAILURE,
  payload: error,
});

// Fetch greetings function
export const fetchGreetings = () => (dispatch) => {
  dispatch(fetchGreetingsRequest());

  axios.get('http://localhost:3001/api/v1/greetings/index')

    .then((response) => {
      // response.data is the greetings
      const greetings = response.data.greeting;

      dispatch(fetchGreetingsSuccess(greetings));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchGreetingsFailure(error.message));
    });
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS_REQUEST:

      return {
        ...state,
        loading: true,
      };

    case FETCH_GREETINGS_SUCCESS:

      return {
        loading: false,
        greetingsDisplay: action.payload,
        error: '',
      };

    case FETCH_GREETINGS_FAILURE:

      return {
        loading: false,
        greetings: [],
        error: action.payload,
      };

    default: return state;
  }
};

export default greetingsReducer;
