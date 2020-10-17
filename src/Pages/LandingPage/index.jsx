import React from "react";
import { TopCinemaLists, TopBooks, SignInLand } from "./components";
import Translate from "react-translate-component";

const LandingPage = () => {
  return (
    <div>
      <Translate
        content="CinemaS"
        component="h3"
        className="divider bg-light mt-3 mb-3  text-primary text-uppercase"
      />
      <TopCinemaLists />

      <Translate
        content="books"
        component="h3"
        className="divider bg-light mt-3 mb-3  text-primary text-uppercase"
      />
      <TopBooks />
      <SignInLand />
    </div>
  );
};

export default LandingPage;
