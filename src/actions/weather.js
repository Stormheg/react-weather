import axios from 'axios'
import { createAction } from 'redux-actions'

import API_KEY from '../../api_key';

export const requestWeather = createAction('REQUEST_WEATHER', (data) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${data.city},${data.country}&mode=json&APPID=${API_KEY}`;
  return axios.get(url);
});

export const clearWeather = createAction('CLEAR_WEATHER');
