import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";

import { requestWeather, clearWeather } from "../actions/weather";

const CitySearch = ({ history }) => {
  const [cityInput, setCityInput] = useState("");
  const [countryInput, setCountryInput] = useState("nl");

  const dispatch = useDispatch();

  const handleCityInputChange = e => setCityInput(e.target.value);
  const handleCountryInputChange = e => setCountryInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityInput) {
      dispatch(clearWeather());
      dispatch(requestWeather({ city: cityInput, country: countryInput }));
      history.push(`/forecast/${cityInput}?country=${countryInput}`);
    }
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <Form.Group>
        <FormControl
          type="text"
          value={cityInput}
          onChange={handleCityInputChange}
          placeholder="Any city..."
          className="mr-sm-2"
        />
        <FormControl
          type="text"
          value={countryInput}
          onChange={handleCountryInputChange}
          placeholder="Country shortcode (e.g. us)"
          className="mr-sm-2"
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default withRouter(CitySearch);
