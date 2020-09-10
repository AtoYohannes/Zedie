import React, { Component } from "react";
import { Col, CardImg, CardImgOverlay, Card, Row } from "reactstrap";
import { entertaiment21 } from "../../Assets/images";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="aboutUsContainer">
        <Col md={12} sm={12} xs={12}>
          <Card className="border-0 bg-background">
            <CardImg src={entertaiment21} />
            <CardImgOverlay className="overlay">
              <h1>About Us</h1>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md={12} sm={12} xs={12} className="threads">
          <Row className="zoom">
            <Col md={8} sm={12} xs={12}>
              <h3>Our Story</h3>
              <p>
                Zedye Smart trading plc, known by its trade name as Zedie, is a
                company formed with the vision of becoming the most preferred
                online commerce service provider in Ethiopia. Foucsed on making
                beautiful, creative and interactive websites, mobile and
                computer applications.Aiming to be the number of tech solution
                for all your needs.
              </p>
              <p>
                Any questions? Let us know in store at Merkato, 379 Hudson St,
                Addis Ababa, Ethiopia or call us on (+011) 96 716 6879
              </p>
            </Col>
            <Col sm={2} md={1} xs={2} />
            <Col align="center" md={3} sm={12} xs={12}>
              <CardImg src={entertaiment21} />
            </Col>
          </Row>
          <Row className="zoom">
            <Col align="center" md={3} sm={12} xs={12}>
              <CardImg src={entertaiment21} />
            </Col>
            <Col sm={2} md={1} xs={2} />
            <Col md={8} sm={12} xs={12}>
              <h3>Our Mission </h3>
              <p>
                "To be earth's most customer- centric company, where customers
                can find and discover anything they might want to buy online,
                and endeavors to offer it's customers the lowest possible
                prices."
              </p>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

export default AboutUs;
