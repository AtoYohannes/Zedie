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
import Swal from "sweetalert2";
import firebase from "../../../Config/Firebase";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizes: [],
      isMobile: false,
      selectedQuize: "",
      score: "",
      choices: [],
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
          selectedQuize: quizes[0],
          score: quizes.length,
        });
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );
  }
  choiceButtons = [
    {
      key: "",
      content: (quiz) => (
        <Button
          className="m-2"
          outline
          size="sm"
          onClick={() => this.handleChoice(quiz, quiz.answer)}
        >
          {quiz.answer}
        </Button>
      ),
    },
    {
      key: "",
      content: (quiz) => (
        <Button
          className="m-2"
          outline
          size="sm"
          onClick={() => this.handleChoice(quiz, quiz.choice1)}
        >
          {quiz.choice1}
        </Button>
      ),
    },
    {
      key: "",
      content: (quiz) => (
        <Button
          className="m-2"
          outline
          size="sm"
          onClick={() => this.handleChoice(quiz, quiz.choice2)}
        >
          {quiz.choice2}
        </Button>
      ),
    },
    {
      key: "",
      content: (quiz) => (
        <Button
          className="m-2"
          outline
          size="sm"
          onClick={() => this.handleChoice(quiz, quiz.choice3)}
        >
          {quiz.choice3}
        </Button>
      ),
    },
  ];

  handleChoice = (quiz, choice) => {
    let { quizes, score } = this.state;

    if (choice !== quiz.answer) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `The Correct answer is ${quiz.answer} `,
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      score = score - 1;
    }
    const index = quizes.indexOf(quiz);
    let nextQuiz = quizes[index];
    if (index >= 0 && index < quizes.length - 1) {
      nextQuiz = quizes[index + 1];
      this.setState({ selectedQuize: nextQuiz, score });
    } else {
      this.setState({ selectedQuize: null, score });
    }
  };
  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {
    const { selectedQuize: quiz, quizes, score } = this.state;
    const quizNumber = quizes.indexOf(quiz) + 1;
    return (
      <div>
        {quiz ? (
          <>
            <h3>{`${quizNumber} of ${quizes.length}`}</h3>
            <Col sm={12} xs={12} md={12}>
              <Card className="border-0 quizes mb-5 mt-3">
                <CardHeader>{quiz.category}</CardHeader>
                <CardImg src={quiz.imageURLs} />
                <CardBody align="center">
                  <CardTitle>
                    <h2>{quiz.question}</h2>
                  </CardTitle>{" "}
                </CardBody>
                <CardFooter align="center">
                  {this.shuffle(this.choiceButtons).map((button) =>
                    button.content(quiz)
                  )}
                </CardFooter>
              </Card>
            </Col>
          </>
        ) : (
          score !== "" && <h3>{`Your score is ${score}/${quizes.length}`}</h3>
        )}
      </div>
    );
  }
}
export default Questions;
