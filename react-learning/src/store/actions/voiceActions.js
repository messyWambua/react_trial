import axios from "axios";

import stripHtml from '../../utils/htmlToString';
import { CONVERT_TEXT_TO_SPEECH, ERROR } from "./types";


export const convertSpeechToText = (data) => dispatch => {
  const string = stripHtml(data).slice(0, 1400);
  axios({
    "method":"GET",
    "url":"https://voicerss-text-to-speech.p.rapidapi.com/",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"voicerss-text-to-speech.p.rapidapi.com",
    "x-rapidapi-key":"41e1d36de2msh1db6ced1952380cp10ff2ejsnaa8880e2437c"
    },"params":{
    "r":"0",
    "c":"mp3",
    "f":"8khz_8bit_mono",
    "src": string,
    "hl":"en-us",
    "key":"76d93187386d4a13b84381f81ccbd783",
    b64: true
    }
    })
    .then(res => {
      const speech = res.data;
      dispatch({
        type: CONVERT_TEXT_TO_SPEECH,
        payload: speech
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};
