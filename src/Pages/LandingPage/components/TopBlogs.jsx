import React from "react";
import {
  Card,
  CardImg,
  Col,
  Row,
  CardImgOverlay,
  CardText,
  CardSubtitle,
} from "reactstrap";
import {
  entertaiment01,
  entertaiment02,
  entertaiment03,
  entertaiment04,
} from "../../../Assets/images";

const Blogs = () => {
  return (
    <div className="blogsContainer">
      <Row>
        <Col md={3} sm={6} xs={12}>
          <Card className="mb-3">
            <CardImg src={entertaiment01} />
            <CardImgOverlay  className='mb-4'>
             {" "}
              <CardText className="blogOverlay">Title Goes Here</CardText>
              <CardSubtitle className="text-light">
                Description Goes Here
              </CardSubtitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="mb-3">
            <CardImg src={entertaiment02} />
            <CardImgOverlay className="mb-4">
              <CardText className="blogOverlay">Title Goes Here</CardText>
              <CardSubtitle className="text-light">
                Description Goes Here
              </CardSubtitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="mb-3">
            <CardImg src={entertaiment03} />
            <CardImgOverlay className="mb-4">
              <CardText className="blogOverlay">Title Goes Here</CardText>
              <CardSubtitle className="text-light">
                Description Goes Here
              </CardSubtitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="mb-3">
            <CardImg src={entertaiment04} />
            <CardImgOverlay className="mb-4">
              <CardText className="blogOverlay">Title Goes Here</CardText>
              <CardSubtitle className="text-light">
                Description Goes Here
              </CardSubtitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="mb-3">
            <CardImg src={entertaiment01} />
            <CardImgOverlay className="mb-4">
              <CardText className="blogOverlay">Title Goes Here</CardText>
              <CardSubtitle className="text-light">
                Description Goes Here
              </CardSubtitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="mb-3">
            <CardImg src={entertaiment02} />
            <CardImgOverlay className="mb-4">
              <CardText className="blogOverlay">Title Goes Here</CardText>
              <CardSubtitle className="text-light">
                Description Goes Here
              </CardSubtitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="mb-3">
            <CardImg src={entertaiment03} />
            <CardImgOverlay className="mb-4">
              <CardText className="blogOverlay">Title Goes Here</CardText>
              <CardSubtitle className="text-light">
                Description Goes Here
              </CardSubtitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="mb-3">
            <CardImg src={entertaiment04} />
            <CardImgOverlay className="mb-4">
              <CardText className="blogOverlay">Title Goes Here</CardText>
              <CardSubtitle className="text-light">
                Description Goes Here
              </CardSubtitle>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blogs;
