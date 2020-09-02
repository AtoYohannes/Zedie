import React from "react";
import { Card, Col, Row, CardHeader, CardBody } from "reactstrap";

const directories = [
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
  {
    title: "Company Name Goes Here",
    contact: "+251 9 21258848",
    contactPerson: "Yohannes",
  },
];


const Directories = () => {
  return (
    <div className="p-5">
      <h1 className=" mb-3 text-primary">DIRECTORIES</h1>
      <hr />
      <Row>
        {directories.map((directory, index) => (
          <Col md={4} sm={12} xs={12} key={index} className="mb-3">
            <Card>
              <CardHeader>{directory.title}</CardHeader>
              <CardBody>
                <Col>{directory.contact}</Col>
                <Col>{directory.contact}</Col>

                <Col>{directory.contactPerson}</Col>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Directories;
