import React from "react";
import { entertaiment04 } from "../../../Assets/images/index";
import { Card, CardHeader, CardImg, Col, Row } from "reactstrap";

const Levels = () => {
  return (
    <div className="p-5">
      <Row>
        <Col md={6} sm={12} xs={12}>
          <Card className="border-0 zoom mb-5">
            <CardImg src={entertaiment04} />
            <CardHeader>Beginner</CardHeader>
          </Card>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Card className="border-0 zoom mb-5">
            <CardImg src={entertaiment04} />
            <CardHeader>Intermediate</CardHeader>
          </Card>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Card className="border-0 zoom mb-5">
            <CardImg src={entertaiment04} />
            <CardHeader>Advanced</CardHeader>
          </Card>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Card className="border-0 zoom mb-5">
            <CardImg src={entertaiment04} />
            <CardHeader>Expert</CardHeader>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Levels;
