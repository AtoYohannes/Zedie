import React, { Component } from "react";
import Slider from "react-animated-slider";
import { Row, Col, Card, CardBody, CardImg } from "reactstrap";
import firebase from "../../Config/Firebase";
import Translate from "react-translate-component";
import { entertaiment04 } from "../../Assets/images";
import Beginner from "../../Assets/Levels/Beginner.jpg";
import Intermediate from "../../Assets/Levels/Intermediate.png";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";

class CinemaSchedule extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Challenges");
    this.unsubscribe = null;
    this.state = {
      challenges: [],
      isMobile: false,
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const challenges = [];
    querySnapshot.forEach((doc) => {
      const { keyword, description } = doc.data();
      challenges.push({
        key: doc.id,
        doc,
        keyword,
        description,
      });
    });
    this.setState({
      challenges,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render() {
    return (
      <div>
        <Translate
          content="books"
          component="h3 "
          className="divider p-2 m-3 text-uppercase"
        />
        <Slider autoplay={3000} className="slider-wrapper">
          {this.state.challenges.map((movie, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${entertaiment04}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{movie.keyword}</h1>
                <p>{movie.description}</p>
              </div>
            </div>
          ))}
        </Slider>
        <Translate
          content="books"
          component="h3"
          className="divider p-2 m-3 text-uppercase"
        />

        <div className="moviesContainer">
          <Row>
            {/* {this.state.challenges.map((movie, index) => ( */}
            <Col md={6} sm={12} xs={12}>
              <Link
                to={{
                  pathname: routes.writingChallengeQuestions,
                  state: {
                    level: "Beginner",
                  },
                }}
              >
                <Card className="border-0 moviesContainer zoom mb-3">
                  <CardBody>Beginner</CardBody>
                  <CardImg src={Beginner} />
                </Card>
              </Link>
            </Col>

            <Col md={6} sm={12} xs={12}>
              <Link
                to={{
                  pathname: routes.writingChallengeQuestions,
                  state: {
                    level: "Intermediate",
                  },
                }}
              >
                <Card className="border-0 moviesContainer zoom mb-3">
                  <CardBody>Intermediate</CardBody>
                  <CardImg src={Intermediate} />
                </Card>
              </Link>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <Link
                to={{
                  pathname: routes.writingChallengeQuestions,
                  state: {
                    level: "Advanced",
                  },
                }}
              >
                <Card className="border-0 moviesContainer zoom mb-3">
                  <CardBody>Advanced</CardBody>
                  <CardImg src={entertaiment04} />
                </Card>
              </Link>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <Link
                to={{
                  pathname: routes.writingChallengeQuestions,
                  state: {
                    level: "Expert",
                  },
                }}
              >
                <Card className="border-0 moviesContainer zoom mb-3">
                  <CardBody>Expert</CardBody>
                  <CardImg src={entertaiment04} />
                </Card>
              </Link>
            </Col>
            {/* ))} */}
          </Row>
        </div>
      </div>
    );
  }
}

export default CinemaSchedule;
