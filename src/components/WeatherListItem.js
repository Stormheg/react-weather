import React from 'react';

const WeatherListItem = ({weather}) => {
  return (
    <p>{ weather.dt_txt }</p>
  )
};

export default WeatherListItem;

