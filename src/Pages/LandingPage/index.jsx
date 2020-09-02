import React from "react";
import Divider from "../../Components/Divider";
import { TopBlogs, TopCinemaLists, TopBooks } from "./components";

const LandingPage = () => {
  return (
    <div className="bg-background">
      <Divider title="Kid Books" />
      <TopBooks />
      <Divider title="Cinema Schedules" />
      <TopCinemaLists />
      <Divider title="Top News" />
      <TopBlogs />
    </div>
  );
};

export default LandingPage;
