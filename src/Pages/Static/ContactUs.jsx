import React from "react";
import { entertaiment18 } from "../../Assets/images";
import {
  CardImg,
  Col,
  Card,
  CardImgOverlay,
  Row,
  Input,
  Button,
} from "reactstrap";
import { MdLocalAirport, MdPhone, MdMail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <Col md={12} sm={12} xs={12}>
        <Card className="border-0 bg-background">
          <CardImg src={entertaiment18} />
          <CardImgOverlay className="overlay">
            <h1>Contact Us</h1>
          </CardImgOverlay>
        </Card>
      </Col>
      <Col md={12} sm={12} xs={12} className="threads">
        <Card className="bg-background">
          <Row>
            <Col
              align="center"
              md={6}
              sm={12}
              xs={12}
              className="p-5 formContainer"
            >
              <h3>Send Us a Message</h3>
              <Input
                className="bg-background p-4 mb-4"
                placeholder="Your Email Address"
                type="email"
              />
              <Input
                className="bg-background p-4 mt-1 mb-3"
                placeholder="Your Email Address"
                type="textarea"
              />

              <Button size="sm" block outline>
                Submit
              </Button>
            </Col>
            <Col md={6} sm={12} xs={12} className="p-5">
              <h3>
                <MdLocalAirport /> Address
              </h3>
              <p className="ml-4 mb-5">
                Merkato, Addis Ababa, Ethiopia or call us on (+011) 96 716 6879
              </p>
              <h3>
                <MdPhone /> Let's Talk
              </h3>
              <p className="ml-4 mb-5">+1 800 1236879</p>
              <h3>
                <MdMail /> Sale Support{" "}
              </h3>
              <p className="ml-4 mb-5">contact@example.com</p>
            </Col>
          </Row>
        </Card>
      </Col>
    </div>
  );
};

export default ContactUs;
