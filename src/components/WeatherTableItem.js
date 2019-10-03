import React from 'react';
import arrow from '../assets/arrow.svg';

const WeatherTableItem = ({entry}) => {
  const arrowStyle = { 
    width: '36px',
    transform: `rotateZ(${entry.wind.deg}deg)`
  }

  return (
    <tr>
      <td>{ entry.dt_txt }</td>
      <td className="text-right">{ Math.round(entry.main.temp - 273.15) } &deg;</td>
      <td className="text-right">{ entry.main.humidity }%</td>
      <td>{ entry.weather[0].description }</td>
      <td className="text-right">
        { entry.wind.speed } km/h <br/>
        <img src={arrow} alt={ `Arrow indicating ${entry.wind.deg} degrees`} style={arrowStyle} />
      </td>
    </tr>
  );
};

export default WeatherTableItem;

