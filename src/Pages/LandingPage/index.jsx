import React from "react";
import Divider from "../../Components/Divider";
import { TopBlogs, TopCinemaLists, TopBooks } from "./components";

const LandingPage = () => {
  return (
    <div className="bg-background">
      <Divider title="Cinema Schedules" />
      <TopCinemaLists />
      <Divider title="Books" />
      <TopBooks />
      <Divider title="Top News" />
      <TopBlogs />
    </div>
  );
};

export default LandingPage;
