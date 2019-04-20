import {
  SET_APOD_DATE_INPUT,
  GET_APOD_DATA,
  LOADING_APOD_DATA,
  LOADED_APOD_DATA,
  ERROR_APOD
} from "./types";
import axios from "axios";

export const dateApodInput = dateInputConfig => ({
  type: SET_APOD_DATE_INPUT,
  payload: dateInputConfig
});

export const getApodData = apodSearchData => {
  return {
    type: GET_APOD_DATA,
    payload: apodSearchData
  };
};

export {
  SET_APOD_DATE_INPUT,
  GET_APOD_DATA,
  LOADING_APOD_DATA,
  LOADED_APOD_DATA,
  ERROR_APOD
};
