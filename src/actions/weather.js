import axios from "axios";
import { createAction } from "redux-actions";

const API_KEY = "0ed9678f1a8e8aba822086a296312050" // I'm an exposed api key! Do not steal me though.

export const requestWeather = createAction("REQUEST_WEATHER", data => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${data.city},${data.country}&mode=json&APPID=${API_KEY}`;
  return axios.get(url);
});

export const clearWeather = createAction("CLEAR_WEATHER");
