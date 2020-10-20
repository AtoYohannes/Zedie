import React from "react";
import { Nav, Card, Row, Col, CardImg } from "reactstrap";
import Logo from "../../Assets/ZEDIE.svg";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";
import Translate from "react-translate-component";

const Footer = () => {
  return (
    <Card className="border-0 footer">
      <div className="footerContainer">
        <Row>
          <Col md={3} sm={12} xs={12}>
            <CardImg src={Logo} />
            <h7>
              <Translate className="translate" content="copy.p1" />
            </h7>
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Nav className="footerTexts" />
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Nav className="footerTexts mb-4 text-primary">
              {" "}
              <Translate className="translate" content="Categories" />
            </Nav>
            <Link to={{ pathname: routes.news }}>
              <Nav className="footerTexts">
                {" "}
                <Translate className="translate" content="news" />
              </Nav>
            </Link>
            <Link to={{ pathname: routes.writingChallenge }}>
              <Nav className="footerTexts">
                <Translate className="translate" content="CinemaS" />
              </Nav>
            </Link>
            <Link to={{ pathname: routes.books }}>
              <Nav className="footerTexts">
                {" "}
                <Translate className="translate" content="books" />
              </Nav>
            </Link>
            <Link to={{ pathname: routes.directories }}>
              <Nav className="footerTexts">
                <Translate className="translate" content="directories" />
              </Nav>
            </Link>
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Nav className="footerTexts" />
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Nav className="footerTexts mb-4 text-primary">
              <Translate className="translate" content="Info" />
            </Nav>
            <Link to={{ pathname: routes.contactUs }}>
              <Nav className="footerTexts">
                <Translate className="translate" content="ContactUs" />
              </Nav>
            </Link>
            <Link to={{ pathname: routes.aboutUs }}>
              <Nav className="footerTexts">
                <Translate className="translate" content="AboutUs" />
              </Nav>
            </Link>
            <Link to={{ pathname: routes.termsAndConditions }}>
              <Nav className="footerTexts">
                <Translate className="translate" content="Term" />
              </Nav>
            </Link>
            <Link to={{ pathname: routes.privacyPolicy }}>
              <Nav className="footerTexts">
                <Translate className="translate" content="Privacy" />
              </Nav>
            </Link>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default Footer;
