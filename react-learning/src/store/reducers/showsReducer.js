import { FETCH_SCHEDULE_SHOWS, ERROR } from "../actions/types";

const initialState = {
  shows: [],
  error: null,
  loading: true
};

export default function(state = initialState, action) {
  if (action.type === FETCH_SCHEDULE_SHOWS) {
    return {
      ...state,
      shows: action.payload,
      loading: false
    };
  } else if (action.type === ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  } else {
    return state;
  }
}
