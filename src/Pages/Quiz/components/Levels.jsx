import React from "react";
import { entertaiment04 } from "../../../Assets/images/index";
import { Card, CardHeader, CardImg, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import routes from "../../../Config/routes";

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
      <div className="p-5 levelContainers">
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
              <Card className="border-0 zoom mb-5">
                <CardImg src={entertaiment04} />
                <CardHeader>Beginner</CardHeader>
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
              <Card className="border-0 zoom mb-5">
                <CardImg src={entertaiment04} />
                <CardHeader>Intermediate</CardHeader>
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
              <Card className="border-0 zoom mb-5">
                <CardImg src={entertaiment04} />
                <CardHeader>Advanced</CardHeader>
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
              <Card className="border-0 zoom mb-5">
                <CardImg src={entertaiment04} />
                <CardHeader>Expert</CardHeader>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Levels;
