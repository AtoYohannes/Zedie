import React from "react";
import { Card, CardBody, CardImg, Row, Col } from "reactstrap";

const RelatedBlogs = ({ image, image2, image3 }) => {
  return (
    <div className="relatedBlogs flex-column mt-5">
      <Row>
        <Col sm={12} xs={12} md={4} className="mt-2 mb-2 zoom">
          <Card>
            <CardImg src={image} />
            <CardBody align="center" className="bg-background">
              Blog Title Goes Here
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} xs={12} md={4} className="mt-2 mb-2 zoom">
          <Card>
            <CardImg src={image2} />
            <CardBody align="center" className="bg-background">
              Blog Title Goes Here
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} xs={12} md={4} className="mt-2 mb-2 zoom">
          <Card>
            <CardImg src={image3} />
            <CardBody align="center" className="bg-background">
              Blog Title Goes Here
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default RelatedBlogs;
