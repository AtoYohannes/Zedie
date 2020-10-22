import React from "react";
import { Card, CardBody, CardImg, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import routes from "../../../Config/routes";
import Translate from "react-translate-component";
import Beginner from "../../../Assets/Levels/Beginner.jpg";
import Intermediate from "../../../Assets/Levels/Intermediate.png";
import Advanced from "../../../Assets/Levels/Advanced.jpg";
import Expert from "../../../Assets/Levels/Expert.png";

class Levels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizes: [],
      isMobile: false,
    };
  }
  render() {
    return (
      <div className="p-5">
        <Translate
          content="level"
          component="h3"
          className="divider p-2 m-3 text-uppercase"
        />
        <Row>
          <Col md={6} sm={12} xs={12}>
            <Link
              to={{
                pathname: routes.quizes,
                state: {
                  level: "Beginner",
                  category: `${this.props.location.state.category}`,
                },
              }}
            >
              <Card className="moviesContainer zoom mb-5">
                <CardImg src={Beginner} />
                <CardBody align="center">
                  <h6>Beginner</h6>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Link
              to={{
                pathname: routes.quizes,
                state: {
                  level: "Intermediate",
                  category: `${this.props.location.state.category}`,
                },
              }}
            >
              <Card className="moviesContainer zoom mb-5">
                <CardImg src={Intermediate} />
                <CardBody align="center">
                  <h6>Intermediate</h6>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Link
              to={{
                pathname: routes.quizes,
                state: {
                  level: "Advanced",
                  category: `${this.props.location.state.category}`,
                },
              }}
            >
              <Card className="moviesContainer zoom mb-5">
                <CardImg src={Advanced} />
                <CardBody align="center">
                  <h6>Advanced</h6>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Link
              to={{
                pathname: routes.quizes,
                state: {
                  level: "Expert",
                  category: `${this.props.location.state.category}`,
                },
              }}
            >
              <Card className="border-0 moviesContainer zoom mb-5">
                <CardImg src={Expert} />
                <CardBody align="center">
                  <h6>Expert</h6>
                </CardBody>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Levels;
