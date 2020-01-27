import { FETCH_SHOW, ERROR } from "../actions/types";

const initialState = {
  show: {},
  error: null,
  loading: true
};

export default function(state = initialState, action) {
  if (action.type === FETCH_SHOW) {
    return {
      ...state,
      show: action.payload,
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
