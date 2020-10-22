import React from "react";
import { Button, CardImg, CardText, Col, Row } from "reactstrap";
import Background from "../../../Assets/Background.png";

const TopChallenges = () => {
  return (
    <div className="topChallenges">
      <div>
        <Row className="p-5">
          <Col md={7} sm={12} xs={12}>
            <CardImg src={Background} />
          </Col>
          <Col md={5} sm={12} xs={12}>
            <CardText className="text-primary">
              <h7>
                Write…now! Choose from hundreds of lessons, quizzes, and writing
                prompts for all ages, or take our monthly Challenge.
              </h7>
            </CardText>
            <CardText className="text-dark">
              <h3>Ready for a Challenge?</h3>
            </CardText>

            <CardText className="text-dark">
              <h6>
                Boost your writing skills with 700+ Challenges created by
                professional educators and expert authors.
              </h6>
            </CardText>
            <Button size="sm" outline>
              MORE
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default TopChallenges;
