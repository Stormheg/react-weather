import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

import Header from "../components/Header";
import CitySearch from "../components/CitySearch";

const HomePage = props => {
  return (
    <>
      <Header />
      <Jumbotron>
        <Container>
          <h2>WeatherApp</h2>
          <p>
            You can use this app to find the weather forecast for your city of
            choice.
          </p>
          <CitySearch />
        </Container>
      </Jumbotron>
    </>
  );
};

export default HomePage;
