import React from 'react';

import arrow from '../assets/arrow.svg';
import { kmhToBeafortScale } from '../utils/windSpeedConverter';

const WeatherTableItem = ({entry}) => {
  const arrowStyle = { 
    width: '36px',
    transform: `rotateZ(${entry.wind.deg}deg)`
  }

  const beafort = kmhToBeafortScale(entry.wind.speed)

  return (
    <tr>
      <td>{ entry.dt_txt }</td>
      <td className="text-right">{ Math.round(entry.main.temp - 273.15) } &deg;</td>
      <td className="text-right">{ entry.main.humidity }%</td>
      <td>{ entry.weather[0].description }</td>
      <td className="text-right">
        <p title={`${entry.wind.speed} km/h`}>{ beafort } bft</p>
        <img src={arrow} alt={ `Arrow indicating ${entry.wind.deg} degrees`} style={arrowStyle} />
      </td>
    </tr>
  );
};

export default WeatherTableItem;

