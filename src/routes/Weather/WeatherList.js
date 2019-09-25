import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestWeather } from "../../actions/weather";

import WeatherListItem from '../../components/WeatherListItem';

const WeatherList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestWeather({city: 'Zwolle', country: 'nl'}))
  }, [])
  const weatherList = useSelector(state => state.weatherReducer.weather);
  const error = useSelector(state => state.weatherReducer.weatherErrorMessage);

  const _getMessage = () => {
    if(error) {
      return (<p>{error}</p>);
    }
    return (<p>Here should be weather</p>);
  }

  return (
    <div>
      {_getMessage()}
      {weatherList.map((weather) => (
        <WeatherListItem key={weather.dt} weather={weather} />
      ))}
    </div>
  )
};

export default WeatherList;
