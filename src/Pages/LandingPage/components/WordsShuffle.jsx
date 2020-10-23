import React, { Component } from "react";
import Slider from "react-animated-slider";
import {
  coverimage1,
  coverimage2,
  coverimage3,
  coverimage4,
} from "../../../Assets/coverImages";
import firebase from "../../../Config/Firebase";

const backgroundImages = [
  {
    backgroundimage: coverimage1,
  },
  {
    backgroundimage: coverimage2,
  },
  {
    backgroundimage: coverimage3,
  },
  {
    backgroundimage: coverimage4,
  },
];

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
          {backgroundImages.map((movie, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${movie.backgroundimage}') no-repeat center center`,
              }}
            ></div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default WordsShuffle;
