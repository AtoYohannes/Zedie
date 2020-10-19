import React, { Component } from "react";
import Slider from "react-animated-slider";
import { entertaiment20 } from "../../../Assets/images";
import firebase from "../../../Config/Firebase";

class WordsShuffle extends Component {
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
                background: `url('${entertaiment20}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{movie.keyword}</h1>
                <p>{movie.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default WordsShuffle;
