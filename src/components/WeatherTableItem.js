import React from 'react';
import { formatRelative } from "date-fns";

import arrow from '../assets/arrow.svg';
import { kmhToBeafortScale } from '../utils/windSpeedConverter';

const WeatherTableItem = ({entry}) => {
  const arrowStyle = { 
    width: '36px',
    transform: `rotateZ(${entry.wind.deg}deg)`
  }

  const timeString = formatRelative(new Date(entry.dt*1000), new Date())
  
  const beafort = kmhToBeafortScale(entry.wind.speed)

  return (
    <tr>
      <td>{ timeString }</td>
      <td className="text-right">{ Math.round(entry.main.temp - 273.15) } &deg;</td>
      <td className="text-right">{ entry.main.humidity }%</td>
      <td>
      <p>{ entry.weather[0].description }</p>
      <img src={`http://openweathermap.org/img/w/${entry.weather[0].icon}.png`} alt={entry.weather[0].description} />

      </td>
      <td className="text-right">
        <p title={`${entry.wind.speed} km/h`}>{ beafort } bft</p>
        <img src={arrow} alt={ `Arrow indicating ${entry.wind.deg} degrees`} style={arrowStyle} />
      </td>
    </tr>
  );
};

export default WeatherTableItem;

