import React from "react";
import Table from "react-bootstrap/Table";

import WeatherTableItem from "./WeatherTableItem";

const WeatherTable = ({ entries = [] }) => {
  const tableEntries = entries.map(entry => (
    <WeatherTableItem entry={entry} key={entry.dt} />
  ));

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Time (your local time)</th>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>Clouds</th>
          <th>Wind</th>
        </tr>
      </thead>
      <tbody>{tableEntries}</tbody>
    </Table>
  );
};

export default WeatherTable;
