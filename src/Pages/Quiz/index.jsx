import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardImg, Col, Row } from "reactstrap";
import { entertaiment01 } from "../../Assets/images/index";
import routes from "../../Config/routes";

const QuizesCategories = () => {
  return (
    <div className="p-5">
      <Row>
        <Col md={6} sm={12} xs={12}>
          <Link to={{ pathname: routes.levels }}>
            <Card className="border-0 zoom mb-5">
              <CardImg src={entertaiment01} />
              <CardHeader>Technology</CardHeader>
            </Card>
          </Link>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Card className="border-0 zoom mb-5">
            <CardImg src={entertaiment01} />
            <CardHeader>Culture</CardHeader>
          </Card>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Card className="border-0 zoom mb-5">
            <CardImg src={entertaiment01} />
            <CardHeader>Something</CardHeader>
          </Card>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Card className="border-0 zoom mb-5">
            <CardImg src={entertaiment01} />
            <CardHeader>General Knowledge</CardHeader>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default QuizesCategories;
