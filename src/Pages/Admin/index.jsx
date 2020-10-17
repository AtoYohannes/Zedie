import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";

class AdminPannel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="p-5">
        <Card>
          <CardHeader>Admin Pannel</CardHeader>
          <CardBody>
            <Row>
              <Col align="center" md={6} sm={12} xs={12}>
                <Link to={{ pathname: routes.addQuiz }}>
                  <Button block outline size="lg">
                    Add Quiz
                  </Button>
                </Link>
              </Col>
              <Col align="center" md={6} sm={12} xs={12}>
                <Link to={{ pathname: routes.addBooks }}>
                  <Button block outline size="lg">
                    Add Books
                  </Button>
                </Link>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AdminPannel;
