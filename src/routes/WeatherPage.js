import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

import { requestWeather } from "../actions/weather";

import CitySearch from "../components/CitySearch";
import AlertDismissible from "../components/AlertDismissible";
import WeatherTable from "../components/WeatherTable";
import Header from "../components/Header";

const WeatherPage = ({ match, history }) => {
  const dispatch = useDispatch();
  const weatherList = useSelector(state => state.weatherReducer.weather);
  const error = useSelector(state => state.weatherReducer.weatherErrorMessage);

  // Get city or redirect to default city
  const city = match.params.city ? match.params.city : history.push("/forecast/Zwolle");

  useEffect(() => {
    // Only get the weather if there is nothing in state and there was no error
    if (!weatherList.length > 0 && !error) {
      dispatch(requestWeather({ city, country: "nl" }));
    }
  }, []);

  const _getAlert = () => {
    return error ? <AlertDismissible>{error}</AlertDismissible> : null;
  };

  return (
    <>
      <Header />
      <Container>
        <Link to="/">&#x2190;Back home</Link>
        <h2 className="my-3">This week's forecast for {city}</h2>
        <div className="my-2">
          <CitySearch />
        </div>
        {(() => {
          if (weatherList.length > 0) {
            return <WeatherTable entries={weatherList} />
          }
          else if (error) {
            return _getAlert()
          }
          return <p>Loading weather information...</p>
        })()}
      </Container>
    </>
  );
};

export default withRouter(WeatherPage);
