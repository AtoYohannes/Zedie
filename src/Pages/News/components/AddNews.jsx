import React, { Component } from "react";
import firebase from "../../../Config/Firebase";
import ImageUploader from "react-images-upload";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Form,
} from "reactstrap";

class PostNews extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("News");
    this.state = {
      header: "",
      body: "",
      author: "",
    };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { header, body, author } = this.state;

    this.ref
      .add({
        header,
        body,
        author,
      })
      .then((docRef) => {
        this.setState({
          header: "",
          body: "",
          author: "",
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <Form className="postBlogContainer" onSubmit={this.onSubmit}>
        <Card className="border-0 p-2">
          <Row>
            <Col>
              <div>
                <CardHeader>Write A news</CardHeader>
                <CardBody>
                  <Row>
                    <Col md={12} sm={12} xs={12}>
                      <Input
                        placeholder="News Header"
                        onChange={this.onChange}
                        name="header"
                      />
                    </Col>
                    <Col md={12} sm={12} xs={12}>
                      <Input
                        placeholder="News body"
                        type="textarea"
                        onChange={this.onChange}
                        name="body"
                      />
                    </Col>
                  </Row>
                </CardBody>
              </div>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <ImageUploader
                label={""}
                withIcon={true}
                withPreview={true}
                buttonText="Choose images"
                onChange={this.onDrop}
                imgExtension={[".jpg", ".png"]}
                maxFileSize={2242880}
              />
            </Col>
          </Row>
          <CardFooter align="center">
            <Button outline size="sm">
              POST
            </Button>
          </CardFooter>
        </Card>
      </Form>
    );
  }
}

export default PostNews;
