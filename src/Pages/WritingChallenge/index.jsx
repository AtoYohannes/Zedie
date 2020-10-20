import React, { Component } from "react";
import Slider from "react-animated-slider";
import { Row, Col, Card, CardHeader, CardImg } from "reactstrap";
import firebase from "../../Config/Firebase";
import Translate from "react-translate-component";
import { entertaiment04 } from "../../Assets/images";
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
          content="up"
          component="h3"
          className="divider mt-3 mb-3 text-primary text-uppercase"
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
                <Card className="border-0 movieListContainer zoom mb-3">
                  <CardHeader>Beginner</CardHeader>
                  <CardImg src={entertaiment04} />
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
                <Card className="border-0 movieListContainer zoom mb-3">
                  <CardHeader>Intermediate</CardHeader>
                  <CardImg src={entertaiment04} />
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
                <Card className="border-0 movieListContainer zoom mb-3">
                  <CardHeader>Advanced</CardHeader>
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
                <Card className="border-0 movieListContainer zoom mb-3">
                  <CardHeader>Expert</CardHeader>
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
