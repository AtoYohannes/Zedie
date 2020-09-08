import React, { Component } from "react";
import {
  Card,
  CardImg,
  Col,
  Row,
  CardImgOverlay,
  CardText,
  CardSubtitle,
  CardHeader,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import firebase from "../../Config/Firebase";
import AsyncSelect from "react-select/async";

const db = firebase.firestore();

class Books extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Books");
    this.unsubscribe = null;
    this.state = {
      books: [],
      isMobile: false,
      selectedBook: [],
    };
  }

  loadOptions = async (inputValue) => {
    inputValue = inputValue.toLowerCase().replace(/\W/g, "");
    return new Promise((resolve) => {
      db.collection("Books")
        .orderBy("title")
        .startAt(inputValue)
        .endAt(inputValue + "\uf8ff")
        .get()
        .then((docs) => {
          if (!docs.empty) {
            let recommendedBooks = [];
            docs.forEach(function (doc) {
              // const { title, description, author, imageURL, bookURL } = doc.data();
              //         books.push({
              //     key: doc.id,
              //     doc, // DocumentSnapshot
              //     title,
              //     description,
              //     author,
              //     imageURL,
              //     bookURL,
              //   });
              // });
              // this.setState({
              //   books,
              // });

              const tag = {
                value: doc.id,
                label: doc.data().title,
                author: doc.data().author,
                imageURL: doc.data().imageURL,
                bookURL: doc.data().bookURL,
              };
              recommendedBooks.push(tag);
            });
            return resolve(recommendedBooks);
          } else {
            return resolve([]);
          }
        });
    });
  };

  handleOnChange = (tags) => {
    this.setState({
      selectedBook: [tags],
    });
  };

  onCollectionUpdate = (querySnapshot) => {
    const books = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author, imageURL, bookURL } = doc.data();
      books.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
        imageURL,
        bookURL,
      });
    });
    this.setState({
      books,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render() {
    return (
      <div className="booksContainer">
        <Row>
          <Col md={6} sm={12} xs={12}>
            <h1 className="mt-4 mb-3 text-primary">BOOKS</h1>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <div>
              <AsyncSelect
                loadOptions={this.loadOptions}
                onChange={this.handleOnChange}
              />
              <Row>
                {this.state.selectedBook.map((book) => {
                  return (
                    <Col md={6} sm={12} xs={12} key={book.value}>
                      <Link to={`/singleBook/${book.key}`}>
                        <Card className="mb-3 zoom searchedBooks">
                          <CardImg src={book.imageURL} />{" "}
                          <CardBody>
                            <CardHeader>{book.label}</CardHeader>
                          </CardBody>
                        </Card>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>

        <hr />
        <Row>
          {this.state.books.map((book, index) => (
            <Col md={3} sm={6} xs={12} key={index}>
              <Link to={`/singleBook/${book.key}`}>
                <Card className="mb-3 zoom books">
                  <CardImg src={book.imageURL} />
                  <CardImgOverlay className="mb-4">
                    {" "}
                    <CardText className="bookOverlay">{book.title}</CardText>
                    <CardSubtitle className="text-light">
                      {book.description}
                    </CardSubtitle>
                  </CardImgOverlay>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Books;
