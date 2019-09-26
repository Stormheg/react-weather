import React from 'react';

const WeatherListItem = ({weather}) => {
  return (
    <p>{ weather.weather[0].description }</p>
  )
};

export default WeatherListItem;

