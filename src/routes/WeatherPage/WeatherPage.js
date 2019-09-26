import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestWeather } from "../../actions/weather";

import { Container } from 'react-bootstrap';

import WeatherListItem from '../../components/WeatherListItem';
import Header from '../../components/Header';

const WeatherPage = () => {
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
      <Header />
      <Container>
        {_getMessage()}
        {weatherList.map((weather) => (
          <WeatherListItem key={weather.dt} weather={weather} />
        ))}
      </Container>
    </div>
  )
};

export default WeatherPage;
