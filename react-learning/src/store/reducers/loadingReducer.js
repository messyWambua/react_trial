import { LOADING } from "../actions/types";

const initialState = {
  loading: false
};

export default function(state = false, action) {
  if (action.type === LOADING) {
    return {
      loading: !state
    };
  } else {
    return state;
  }
}