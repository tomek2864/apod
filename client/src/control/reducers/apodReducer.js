import {
  SET_APOD_DATE_INPUT,
  LOADING_APOD_DATA,
  LOADED_APOD_DATA,
  ERROR_APOD
} from "../actions/apodAction";

const defaultState = {
  dateApod: "",
  loading: true,
  loaded: false,
  error: false
};

const rootReducer = function(state = defaultState, action) {
  const { payload } = action;

  switch (action.type) {
    case SET_APOD_DATE_INPUT: {
      return { ...state, dateApod: payload.dateApod };
    }
    case LOADING_APOD_DATA: {
      return { ...state, loading: true, loaded: false, error: false };
    }
    case LOADED_APOD_DATA: {
      const {
        date,
        explanation,
        url,
        title,
        hdurl,
        copyright,
        media_type,
        service_version
      } = payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        date: date,
        explanation: explanation,
        url: url,
        title: title,
        hdurl: hdurl,
        copyright: copyright,
        media_type: media_type,
        service_version: service_version
      };
    }
    case ERROR_APOD: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return { ...state };
    }
  }
};

export default rootReducer;
