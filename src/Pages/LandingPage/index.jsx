import React from "react";
import Blogs from "./components/TopBlogs";
import Divider from "../../Components/Divider";
import TopCinemaLists from "./components/TopCinemas";

const LandingPage = () => {
  return (
    <div className="bg-background">
      <Divider title="Cinema Schedules" />
      <TopCinemaLists />
      <Divider title="Top Blogs" />
      <Blogs />
    </div>
  );
};

export default LandingPage;
