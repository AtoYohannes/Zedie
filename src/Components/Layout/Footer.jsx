import React from "react";
import { Nav, Card, Row, Col, CardImg } from "reactstrap";
import Logo from "../../Assets/ZEDIE.svg";

const Footer = () => {
  return (
    <Card className="border-0 footer">
      <div className="footerContainer">
        <Row>
          <Col md={3} sm={12} xs={12}>
            <CardImg src={Logo} />
            <h7>
              Zedye Smart trading plc, known by its trade name as Zedie, is a
              company formed with the vision of becoming the most preferred
              online commerce service provider in Ethiopia. Foucsed on making
              beautiful, creative and interactive websites, mobile and computer
              applications.Aiming to be the number of tech solution for all your
              needs.
            </h7>
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Nav className="footerTexts" />
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Nav className="footerTexts mb-4 text-primary">Categories</Nav>
            <Nav className="footerTexts">News</Nav>
            <Nav className="footerTexts">Cinema Schedules</Nav>
            <Nav className="footerTexts">Books</Nav>
            <Nav className="footerTexts">Directories</Nav>
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Nav className="footerTexts" />
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Nav className="footerTexts mb-4 text-primary">Info</Nav>
            <Nav className="footerTexts">Contact Us</Nav>
            <Nav className="footerTexts">About Us</Nav>
            <Nav className="footerTexts">Term and Conditions</Nav>
            <Nav className="footerTexts">Privacy Policy</Nav>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default Footer;
