import React from 'react';

const WeatherTableItem = ({entry}) => {
  return (
    <tr>
      <td>{ entry.dt_txt }</td>
      <td className="text-right">{ Math.round(entry.main.temp - 273.15) } &deg;</td>
      <td className="text-right">{ entry.main.humidity }%</td>
      <td>{ entry.weather[0].description }</td>
      <td className="text-right">{ entry.wind.speed } km/h</td>
    </tr>
  );
};

export default WeatherTableItem;

