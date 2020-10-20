import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Input,
  Col,
  Button,
  FormGroup,
  Label,
} from "reactstrap";
import firebase from "../../../Config/Firebase";
import routes from "../../../Config/routes";

class addWritingChallenge extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("Challenges");
    this.state = {
      keyword: "",
      level: "",
      description: "",
      timestamp: Date.now(),
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { keyword, level, description, timestamp } = this.state;
    this.ref
      .add({
        keyword,
        level,
        description,
        timestamp,
      })
      .then((docRef) => {
        this.setState({
          keyword: "",
          level: "",
          description: "",
          timestamp: Date.now(),
        });
        this.props.history.push(routes.writingChallenge);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  render() {
    return (
      <div className="directoriesContainer">
        <Card className="mt-5">
          <CardHeader>Add Challenge</CardHeader>
          <CardBody>
            <Form onSubmit={this.onSubmit}>
              <Col>
                <FormGroup>
                  <Label>Keyword</Label>
                  <Input
                    onChange={this.onChange}
                    name="keyword"
                    placeholder="Keyword"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Level</Label>
                  <Input onChange={this.onChange} name="level" type="select">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Expert</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Description about the Word</Label>
                  <Input
                    onChange={this.onChange}
                    name="description"
                    type="textarea"
                    placeholder="Description about the Word"
                  />
                </FormGroup>
              </Col>
              <Col align="center" className="mt-3">
                <Button outline>Add Challenge</Button>
              </Col>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default addWritingChallenge;
