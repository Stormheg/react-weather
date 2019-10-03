import { handleActions } from 'redux-actions';

import { requestWeather, clearWeather } from '../actions/weather';

const weatherReducer = handleActions({
  [requestWeather]: (state, action) => {
    if (!action.error) {
      return {
        ...state,
        weather: action.payload.data.list,
        weatherErrorMessage: null,
      }
    }
    else {
      return {
        ...state,
        weather: [],
        weatherErrorMessage: "🚨🤖 Sorry! The weather could not be fetched! 🤖🚨",
      }
    }
    // Default
    return state
  },

  [clearWeather]: (state, action) => {
    return {
      ...state,
      weather: [],
      weatherErrorMessage: null,
    }
  },
}, {
  weather: [],
  weatherErrorMessage: null,
})

export default weatherReducer
