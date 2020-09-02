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
} from "reactstrap";

class PostNews extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("News");
    this.state = {
      header: "",
      body: "",
      author: "",
      isUploading: false,
      imageURL: "",
      image: "",
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

  handleUploadSuccess = (filename) => {
    this.setState({ image: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then((url) => this.setState({ imageURL: url }));
  };
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { header, body, author, imageURL, image } = this.state;
    this.ref
      .add({
        header,
        body,
        author,
        imageURL,
        image
      })
      .then((docRef) => {
        this.setState({
          header: "",
          body: "",
          author: "",
          image: "",
          imageURL: "",
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
              <FileUploader
                accept="image/*"
                name="image"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />

              {this.state.imageURL && <img src={this.state.imageURL} alt="" />}
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
