import React, { Component } from "react";
import {
  Card,
  CardImg,
  Col,
  Row,
  CardImgOverlay,
  CardText,
  CardSubtitle,
} from "reactstrap";
// import {
//   entertaiment01,
//   entertaiment02,
//   entertaiment12,
//   entertaiment20,
//   entertaiment21,
//   entertaiment18,
// } from "../../Assets/images";
import { Link } from "react-router-dom";
// import routes from "../../Config/routes";
import firebase from "../../Config/Firebase";

class Books extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Books");
    this.unsubscribe = null;
    this.state = {
      books: [],
      isMobile: false,
    };
  }

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
    // console.log("All datas "+books);
  }
  render() {
    return (
      <div className="booksContainer">
        <h1 className="mt-4 mb-3 text-primary">KIDS' BOOKS</h1>
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
