import React from "react";
import { entertaiment04 } from "../../../Assets/images/index";
import { Card, CardBody, CardImg, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import routes from "../../../Config/routes";
import Translate from "react-translate-component";

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
          content="books"
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
                <CardImg src={entertaiment04} />
                <CardBody>Beginner</CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Link
              to={{
                pathname: routes.quizes,
                state: {
                  level: "Intermediate",
                  // category: { category },
                },
              }}
            >
              <Card className="moviesContainer zoom mb-5">
                <CardImg src={entertaiment04} />
                <CardBody>Intermediate</CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Link
              to={{
                pathname: routes.quizes,
                state: {
                  level: "Advanced",
                },
              }}
            >
              <Card className="moviesContainer zoom mb-5">
                <CardImg src={entertaiment04} />
                <CardBody>Advanced</CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Link
              to={{
                pathname: routes.quizes,
                state: {
                  level: "Expert",
                  // category: { category },
                },
              }}
            >
              <Card className="border-0 moviesContainer zoom mb-5">
                <CardImg src={entertaiment04} />
                <CardBody>Expert</CardBody>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Levels;
