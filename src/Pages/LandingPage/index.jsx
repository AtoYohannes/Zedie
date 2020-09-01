import React from "react";
// import Blogs from "./components/TopBlogs";
import Divider from "../../Components/Divider";
import { TopBlogs, TopCinemaLists, TopBooks } from "./components";
import { Col, Row, Input, Button } from "reactstrap";
// import TopCinemaLists from "./components/TopCinemas";

const LandingPage = () => {
  return (
    <div className="bg-background">
      <Row>
        <Col md={6} sm={6} xs={12}>
          {/* <Divider title="Cinema Schedules" /> */}
        </Col>
        <Col md={6} sm={12} xs={12} className="searchBar">
          <Row>
            <Col md={10}>
              <Input placeholder="Search ዘዴ" />
            </Col>
            <Button outline>Search</Button>
          </Row>
        </Col>
      </Row>
      <TopCinemaLists />
      <Divider title="Top Books" />
      <TopBooks />
      <Divider title="Top News" />
      <TopBlogs />
    </div>
  );
};

export default LandingPage;
