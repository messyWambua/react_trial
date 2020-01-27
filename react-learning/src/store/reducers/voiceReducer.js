import { CONVERT_TEXT_TO_SPEECH, ERROR } from "../actions/types";

const initialState = {
  speech: '',
  error: null,
  loading: true
};

export default function(state = initialState, action) {
  if (action.type === CONVERT_TEXT_TO_SPEECH) {
    // console.log(action.payload);
    
    return {
      ...state,
      speech: action.payload,
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
