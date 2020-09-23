import React from "react";
import { Col, Row } from "reactstrap";
import SignIn from "../../SignIn";
import Translate from "react-translate-component";

const SignInLanding = () => {
  return (
    <div className="landingSignInContainer">
      <Row>
        <Col md={6} sm={12} xs={12}>
          <SignIn />
        </Col>
        <Col md={6} sm={12} xs={12} className='mt-5 text-dark'>
          <h4>
            <Translate content="in" />
          </h4>
        </Col>
      </Row>
    </div>
  );
};
export default SignInLanding;
