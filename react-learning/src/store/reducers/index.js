import { combineReducers } from "redux";
import { createForms } from "react-redux-form";
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import showsReducer from './showsReducer';
import singleShowReducer from './singleShowReducer';
import VoiceReducer from './voiceReducer';

export default combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  speech: VoiceReducer,
  ...createForms({
    shows: showsReducer,
    show: singleShowReducer,
  })
});