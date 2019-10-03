import React from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

import wanderer from "../assets/undraw_wandering_mind_0mkm.svg";
import Header from "../components/Header";

const NotFoundPage = ({ history }) => {
  return (
    <>
      <Header />
      <Jumbotron>
        <Container>
          <Row>
            <Col lg>
              <h2>404 not found</h2>
              <p className="mb-3">It appears thou are lost...</p>

              <Link to="/">Find the way back</Link>

              <hr className="my-5" />
            </Col>
            <Col xs>
              <img height="200px" title="Image by undraw.co" src={wanderer} alt="Wanderering thinker illustraion" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      
    </>
  );
};

export default NotFoundPage;
