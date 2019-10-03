import React from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron } from "react-bootstrap";

import wanderer from "../assets/undraw_wandering_mind_0mkm.svg";
import Header from "../components/Header";

const NotFoundPage = ({ history }) => {
  return (
    <>
      <Header />
      <Jumbotron>
        <Container className="d-flex justify-content-center flex-column">
            <h2>404 not found</h2>
            <p className="mb-5">It appears thou are lost...</p>

            <Link to="/">Find the way back</Link>

            <hr className="my-3" />

            <img height="200px" title="Image by undraw.co" src={wanderer} alt="Wanderering thinker illustraion" />
        </Container>
      </Jumbotron>
      
    </>
  );
};

export default NotFoundPage;
