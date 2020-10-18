import React from "react";
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Button,
  CardImg,
} from "reactstrap";
import firebase from "../../../Config/Firebase";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizes: [],
      isMobile: false,
    };
  }
  componentDidMount() {
    this.getFilteredQuestions();
  }

  getFilteredQuestions() {
    const db = firebase.firestore();
    const query = db
      .collection("Quizes")
      .where("level", "==", `${this.props.location.state.level}`)
      .where("category", "==", `${this.props.location.state.category}`);
    query.onSnapshot(
      (querySnapshot) => {
        const quizes = [];
        querySnapshot.forEach((doc) => {
          const {
            question,
            category,
            level,
            answer,
            choice1,
            choice2,
            choice3,
            imageURLs,
          } = doc.data();
          quizes.push({
            key: doc.id,
            doc,
            question,
            category,
            level,
            answer,
            choice1,
            choice2,
            choice3,
            imageURLs,
          });
        });
        this.setState({
          quizes,
        });
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.quizes.reverse().map((quiz, index) => (
          <Col sm={12} xs={12} md={12} key={index}>
            <Card className="border-0 quizes mb-5 mt-3">
              <CardHeader>{quiz.category}</CardHeader>
              <CardImg src={quiz.imageURLs} />
              <CardBody align="center">
                <CardTitle>
                  <h2>{quiz.question}</h2>
                </CardTitle>{" "}
              </CardBody>
              <CardFooter align="center">
                <Button className="m-2" outline size="sm">
                  {quiz.answer}
                </Button>
                <Button className="m-2" outline size="sm">
                  {quiz.choice1}
                </Button>
                <Button className="m-2" outline size="sm">
                  {quiz.choice2}
                </Button>
                <Button className="m-2" outline size="sm">
                  {quiz.choice3}
                </Button>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </div>
    );
  }
}
export default Questions;
