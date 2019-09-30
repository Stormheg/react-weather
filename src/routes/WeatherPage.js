import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

import { requestWeather } from "../actions/weather";

import AlertDismissible from "../components/AlertDismissible";
import WeatherTable from "../components/WeatherTable";
import Header from "../components/Header";

const WeatherPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestWeather({ city: "Zwolle", country: "nl" }));
  }, []);
  const weatherList = useSelector(state => state.weatherReducer.weather);
  const error = useSelector(state => state.weatherReducer.weatherErrorMessage);

  const _getAlert = () => {
    return error ? <AlertDismissible>{error}</AlertDismissible> : null;
  };

  return (
    <div>
      <Header />
      <Container>
        {_getAlert()}

        <h2 className="my-3">Today's broadcast</h2>
        <WeatherTable entries={weatherList} />
      </Container>
    </div>
  );
};

export default WeatherPage;
