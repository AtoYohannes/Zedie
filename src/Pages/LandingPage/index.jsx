import React from "react";
import {
  WordsShuffle,
  TopBooks,
  SignInLand,
  TopChallenges,
} from "./components";
import Translate from "react-translate-component";

const LandingPage = () => {
  return (
    <div>
      <Translate
        content="CinemaS"
        component="h3"
        className="divider p-2 m-3 text-uppercase"
      />
      <WordsShuffle />
      <Translate
        content="CinemaS"
        component="h3"
        className="divider  p-2 m-3 text-uppercase"
      />
      <TopChallenges />
      <SignInLand />
      <Translate
        content="books"
        component="h3"
        className="divider p-2 m-3 text-uppercase"
      />
      <TopBooks />
    </div>
  );
};

export default LandingPage;
