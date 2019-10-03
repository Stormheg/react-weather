import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";

import { requestWeather, clearWeather } from "../actions/weather";

const CitySearch = ({ history }) => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const handleSearchInputChange = e => setSearchInput(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput) {
      dispatch(clearWeather());
      dispatch(requestWeather({ city: searchInput, country: "nl" }));
      history.push(`/forecast/${searchInput}`);
    }
  };

  return (
    <Form inline onSubmit={handleSearchSubmit}>
      <Form.Group>
        <FormControl
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Any city..."
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
