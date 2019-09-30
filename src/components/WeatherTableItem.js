import React from 'react';

const WeatherTableItem = ({entry}) => {
  return (
    <tr>
      <td>{ entry.dt_txt }</td>
      <td>{ Math.round(entry.main.temp - 273.15) } &deg;</td>
      <td>{ entry.main.humidity }%</td>
      <td>{ entry.weather[0].description }</td>
      <td>{ entry.wind.speed } km/h</td>
    </tr>
  );
};

export default WeatherTableItem;

