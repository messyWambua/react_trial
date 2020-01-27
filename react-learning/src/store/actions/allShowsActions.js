import axios from "axios";

import { FETCH_SCHEDULE_SHOWS, ERROR } from "./types";

export const fetchShows = () => dispatch => {
  axios
    .get('https://tvjan-tvmaze-v1.p.rapidapi.com/schedule', {
       headers: {
        "x-rapidapi-host": "tvjan-tvmaze-v1.p.rapidapi.com",
        "x-rapidapi-key": "41e1d36de2msh1db6ced1952380cp10ff2ejsnaa8880e2437c"
       },
    })
    .then(res => {
      const shows = res.data;
      dispatch({
        type: FETCH_SCHEDULE_SHOWS,
        payload: shows
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};
