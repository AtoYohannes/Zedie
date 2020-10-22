import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  Input,
  Row,
  Button,
} from "reactstrap";
import Swal from "sweetalert2";
import firebase from "../../../Config/Firebase";
import routes from "../../../Config/routes";

class WritingChallenges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
      isMobile: false,
      userAnswer: "",
      currentChallenge: "",
      score: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getFilteredQuestions() {
    const db = firebase.firestore();
    const query = db
      .collection("Challenges")
      .where("level", "==", `${this.props.location.state.level}`);
    query.onSnapshot(
      (querySnapshot) => {
        const challenges = [];
        querySnapshot.forEach((doc) => {
          const { keyword, description, level } = doc.data();
          challenges.push({
            key: doc.id,
            doc,
            keyword,
            description,
            level,
          });
        });
        this.setState({
          challenges,
          currentChallenge: challenges[0],
          score: challenges.length,
        });
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );
  }
  componentDidMount() {
    this.getFilteredQuestions();
  }
  SuccessMessage({ score, challenges }) {
    Swal.fire({
      icon: "success",
      title: "Good job!",
      text: `Your score is ${score}/${challenges.length}`,
      timer: 2000,
      showConfirmButton: false,
    });
    window.location.reload(false);
  }
  handleChange(event) {
    this.setState({ userAnswer: event.target.value });
  }
  handleSubmit(event) {
    const { userAnswer, currentChallenge } = this.state;
    let { challenges, score } = this.state;

    if (userAnswer.toLowerCase() !== currentChallenge.keyword.toLowerCase()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Incorrect Answer`,
        timer: 2000,
        showConfirmButton: false,
      });
      score = score - 1;
    }
    const index = challenges.indexOf(currentChallenge);
    let nextChallenge = challenges[index];
    if (index >= 0 && index < challenges.length - 1) {
      nextChallenge = challenges[index + 1];
      this.setState({ currentChallenge: nextChallenge, score, userAnswer: "" });
    } else {
      this.setState({ currentChallenge: null, score, userAnswer: "" });
    }
    event.preventDefault();
  }
  render() {
    const { currentChallenge: challenge, challenges, score } = this.state;
    const challengeNumber = challenges.indexOf(challenge) + 1;
    return (
      <div className="m-5">
        {challenge ? (
          <>
            <CardHeader className="divider cardHeader" align="center">
              <h3>{`${challengeNumber} of ${challenges.length}`}</h3>
            </CardHeader>
            <Card>
              <CardHeader>
                <Row className="ml-3">
                  <div>Level :</div>{" "}
                  <div className="text-primary">{challenge.level}</div>
                </Row>
              </CardHeader>
              <CardHeader align="center" className="pt-5 pb-5">
                <small className="text-primary">Keyword</small>
                <h2>{challenge.keyword}</h2>
              </CardHeader>
              <CardBody align="center">
                <small className="text-primary">Description</small>
                <h6>{challenge.description}</h6>
              </CardBody>
              <CardFooter>
                <Form onSubmit={this.handleSubmit}>
                  <Input
                    placeholder="Type Your Answer Here"
                    size="sm"
                    value={this.state.userAnswer}
                    onChange={this.handleChange}
                  />
                  <Input
                    className="bg-primary text-light"
                    color="primary"
                    type="submit"
                    value="Submit"
                  />
                </Form>
              </CardFooter>
            </Card>
          </>
        ) : (
          score !== "" && (
            <Card className="mt-5">
              <CardHeader>Your Score</CardHeader>
              <CardBody align="center">
                <h3>
                  Your score is{" "}
                  <div className="text-primary">
                    {score} / {challenges.length}
                  </div>
                </h3>
              </CardBody>
              <CardFooter align="center">
                <Link to={{ pathname: routes.writingChallenge }}>
                  <Button outline block>
                    BACK TO HOME
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    );
  }
}
export default WritingChallenges;
