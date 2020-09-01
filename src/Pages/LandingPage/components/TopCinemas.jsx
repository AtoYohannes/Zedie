import React from "react";
import Slider from "react-animated-slider";
import { Button } from "reactstrap";
import {
  entertaiment01,
  entertaiment03,
  entertaiment04,
  entertaiment07,
} from "../../../Assets/images";

const movies = [
  {
    title: "Movie Name",
    description: "Schedule Goes Here",
    button: "Discover More",
    image: entertaiment01,
  },
  {
    title: "Movie Name",
    description: "Schedule Goes Here",
    button: "Discover More",
    image: entertaiment03,
  },
  {
    title: "Movie Name",
    description: "Schedule Goes Here",
    button: "Discover More",
    image: entertaiment04,
  },
  {
    title: "Movie Name",
    description: "Schedule Goes Here",
    button: "Discover More",
    image: entertaiment07,
  },
];

const TopCinemaLists = () => (
  <div>
    <Slider autoplay={4000} className="slider-wrapper">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="slider-content"
          style={{
            background: `url('${movie.image}') no-repeat center center`,
          }}
        >
          <div className="inner">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <Button outline color="light">
              {movie.button}
            </Button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default TopCinemaLists;
