import axios from "axios";

import { FETCH_SHOW, ERROR } from "./types";

export const fetchShow = (id) => dispatch => {
  axios
    .get(`https://tvjan-tvmaze-v1.p.rapidapi.com/shows/${ id }`, {
       headers: {
        "x-rapidapi-host": "tvjan-tvmaze-v1.p.rapidapi.com",
        "x-rapidapi-key": "41e1d36de2msh1db6ced1952380cp10ff2ejsnaa8880e2437c"
       },
    })
    .then(res => {
      const show = res.data;
      dispatch({
        type: FETCH_SHOW,
        payload: show
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};
