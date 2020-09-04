import React from "react";
import { Card, Button, Row, Col } from "reactstrap";
import { MdPhone, MdList, MdBook, MdTv } from "react-icons/md";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";

const SubHeader = () => {
  return (
    <Card align="center" className="bg-primary">
      <div className="subHeaderContainer">
        <Row>
          <Col align="center">
            <Link to={{ pathname: routes.news }}>
              <Button outline size="lg" color="light">
                <MdList /> News
              </Button>
            </Link>
          </Col>
          <Col align="center">
            <Link to={{ pathname: routes.books }}>
              <Button outline size="lg" color="light">
                <MdBook /> Books
              </Button>
            </Link>
          </Col>
          <Col align="center">
            <Link to={{ pathname: routes.directories }}>
              <Button outline size="lg" color="light">
                <MdPhone /> Directories
              </Button>
            </Link>
          </Col>
          <Col align="center">
            <Link to={{ pathname: routes.cinemaSchedules }}>
              <Button outline size="lg" color="light">
                <MdTv /> Cinema Schedule
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default SubHeader;
