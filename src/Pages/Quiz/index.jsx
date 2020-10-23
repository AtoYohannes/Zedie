import React from "react";
import { Link } from "react-router-dom";
import Translate from "react-translate-component";
import { Card, CardBody, CardImg, Col, Row } from "reactstrap";
import routes from "../../Config/routes";
import technology from "../../Assets/Gifs/technology.gif";
import maths from "../../Assets/Gifs/Maths.gif";
import english from "../../Assets/Gifs/English.gif";
import amharic from "../../Assets/Gifs/Amharic.jpg";
import algorithms from "../../Assets/Gifs/Algorithms.gif";

const QuizesCategories = () => {
  return (
    <div className="p-1 m-3">
      <CardBody className="bg-none">
        <Translate
          content="quizes"
          component="h3"
          className="divider p-2 m-3 text-uppercase"
        />
      </CardBody>
      <Row>
        <Col md={6} sm={12} xs={12}>
          <Link
            to={{
              pathname: routes.levels,
              state: {
                category: "ICT",
              },
            }}
          >
            <Card className="border-0 moviesContainer zoom mb-5">
              <CardImg src={technology} />
              <CardBody align="center">
                <h6>ICT</h6>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Link
            to={{
              pathname: routes.levels,
              state: {
                category: "Maths",
              },
            }}
          >
            <Card className="border-0 moviesContainer zoom mb-5">
              <CardImg src={maths} />
              <CardBody align="center">
                <h6>Maths</h6>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Link
            to={{
              pathname: routes.levels,
              state: {
                category: "English",
              },
            }}
          >
            <Card className="border-0 moviesContainer zoom mb-5">
              <CardImg src={english} />
              <CardBody align="center">
                <h6>English</h6>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Link
            to={{
              pathname: routes.levels,
              state: {
                category: "Amharic",
              },
            }}
          >
            <Card className="border-0 moviesContainer zoom mb-5">
              <CardImg src={amharic} />
              <CardBody align="center">
                <h6>Amharic</h6>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Link
            to={{
              pathname: routes.levels,
              state: {
                category: "History",
              },
            }}
          >
            <Card className="border-0 moviesContainer zoom mb-5">
              <CardImg src={algorithms} />
              <CardBody align="center">
                <h6>History</h6>
              </CardBody>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default QuizesCategories;
