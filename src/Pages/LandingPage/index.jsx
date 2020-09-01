import React from "react";
// import Blogs from "./components/TopBlogs";
import Divider from "../../Components/Divider";
import { TopBlogs, TopCinemaLists, TopDirectories } from "./components";
// import TopCinemaLists from "./components/TopCinemas";

const LandingPage = () => {
  return (
    <div className="bg-background">
      <Divider title="Cinema Schedules" />
      <TopCinemaLists />
      <Divider title="Top Blogs" />
      <TopBlogs />
      <Divider title="Top Directories" />
      <TopDirectories />
    </div>
  );
};

export default LandingPage;
