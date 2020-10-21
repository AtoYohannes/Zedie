import React, { Component } from "react";
import firebase from "../../../Config/Firebase";
import FileUploader from "react-firebase-file-uploader";
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
  Progress,
  CardImg,
  FormGroup,
  Label,
} from "reactstrap";

class AddQuiz extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("Quizes");
    this.state = {
      category: "",
      level: "",
      question: "",
      answer: "",
      choice1: "",
      choice2: "",
      choice3: "",
      timestamp: Date.now(),
      isUploading: false,
      images: [],
      imageURLs: [],
      progress: 0,
      uploadProgress: 0,
    };
  }
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = (progress) => this.setState({ progress });
  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = async (filename) => {
    const downloadURL = await firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL();

    this.setState((oldState) => ({
      images: [...oldState.images, filename],
      imageURLs: [...oldState.imageURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false,
    }));
  };
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      category,
      level,
      question,
      answer,
      choice1,
      choice2,
      choice3,
      imageURLs,
      images,
      timestamp,
    } = this.state;
    this.ref
      .add({
        category,
        level,
        question,
        answer,
        choice1,
        choice2,
        choice3,
        imageURLs,
        images,
        timestamp,
      })
      .then((docRef) => {
        this.setState({
          category: "",
          level: "",
          question: "",
          answer: "",
          choice1: "",
          choice2: "",
          choice3: "",
          timestamp: Date.now(),
          images: [],
          imageURLs: [],
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
          {this.state.isUploading && (
            <Progress animated value={this.state.progress} />
          )}
          <Row>
            <Col>
              <div>
                <CardHeader>Submit A Quiz</CardHeader>
                <CardBody>
                  <Row>
                    <Col md={12} sm={12} xs={12}>
                      <FormGroup>
                        <Label>Select a Category</Label>
                        <Input
                          placeholder="Category"
                          onChange={this.onChange}
                          name="category"
                          type="select"
                        >
                          <option>Select From the ones Below</option>
                          <option>Technology</option>
                          <option>Maths</option>
                          <option>English</option>
                          <option>Amharic</option>
                          <option>Algorithms</option>
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={12} sm={12} xs={12}>
                      <FormGroup>
                        <Label>Select a Level</Label>
                        <Input
                          placeholder="Level"
                          onChange={this.onChange}
                          name="level"
                          type="select"
                        >
                          <option>Select From the ones Below</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Extreme</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12} xs={12}>
                      <FormGroup>
                        <Label>The Question</Label>
                        <Input
                          placeholder="The Question"
                          onChange={this.onChange}
                          name="question"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12} xs={12}>
                      <FormGroup>
                        <Label>The Answer</Label>

                        <Input
                          placeholder="The Answer"
                          onChange={this.onChange}
                          name="answer"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label>Multiple Options</Label>
                        <Row>
                          <Col md={4} sm={12} xs={12}>
                            <Input
                              placeholder="Choice 1"
                              onChange={this.onChange}
                              name="choice1"
                            />
                          </Col>
                          <Col md={4} sm={12} xs={12}>
                            <Input
                              placeholder="Choice 2"
                              onChange={this.onChange}
                              name="choice2"
                            />
                          </Col>
                          <Col md={4} sm={12} xs={12}>
                            <Input
                              placeholder="Choice 3"
                              onChange={this.onChange}
                              name="choice3"
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </div>
            </Col>
            <Col className="m-5" md={12} sm={12} xs={12}>
              <FileUploader
                accept="image/*"
                name="image"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
                multiple
              />
              <p>images: {this.state.images.join(", ")}</p>
              <Row>
                {this.state.imageURLs.map((downloadURL, i) => {
                  return (
                    <Col
                      md={12}
                      sm={12}
                      xs={12}
                      className="addNews mr-1 mb-2 mt-2"
                    >
                      <CardImg key={i} src={downloadURL} />
                    </Col>
                  );
                })}
              </Row>
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

export default AddQuiz;
