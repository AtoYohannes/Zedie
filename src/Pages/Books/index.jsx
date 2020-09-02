import React from "react";
import {
  Card,
  CardImg,
  Col,
  Row,
  CardImgOverlay,
  CardText,
  CardSubtitle,
} from "reactstrap";
import {
  entertaiment01,
  entertaiment02,
  entertaiment12,
  entertaiment20,
  entertaiment21,
  entertaiment18,
} from "../../Assets/images";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";

const books = [
  {
    title: "News Title Goes Here",
    bookCoverImage: entertaiment01,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, perferendis sequi. Delectus, nulla repellat. Voluptatum delectus nihil dolorum consequatur minus exercitationem aspernatur praesentium illo at vitae adipisci rerum, ullam ipsum.",
  },
  {
    title: "News Title Goes Here",
    bookCoverImage: entertaiment18,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, perferendis sequi. Delectus, nulla repellat. Voluptatum delectus nihil dolorum consequatur minus exercitationem aspernatur praesentium illo at vitae adipisci rerum, ullam ipsum.",
  },
  {
    title: "News Title Goes Here",
    bookCoverImage: entertaiment20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, perferendis sequi. Delectus, nulla repellat. Voluptatum delectus nihil dolorum consequatur minus exercitationem aspernatur praesentium illo at vitae adipisci rerum, ullam ipsum.",
  },
  {
    title: "News Title Goes Here",
    bookCoverImage: entertaiment12,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, perferendis sequi. Delectus, nulla repellat. Voluptatum delectus nihil dolorum consequatur minus exercitationem aspernatur praesentium illo at vitae adipisci rerum, ullam ipsum.",
  },
  {
    title: "News Title Goes Here",
    bookCoverImage: entertaiment02,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, perferendis sequi. Delectus, nulla repellat. Voluptatum delectus nihil dolorum consequatur minus exercitationem aspernatur praesentium illo at vitae adipisci rerum, ullam ipsum.",
  },
  {
    title: "News Title Goes Here",
    bookCoverImage: entertaiment21,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, perferendis sequi. Delectus, nulla repellat. Voluptatum delectus nihil dolorum consequatur minus exercitationem aspernatur praesentium illo at vitae adipisci rerum, ullam ipsum.",
  },
];

const Books = () => {
  return (
    <div className="booksContainer">
      <h1 className="mt-4 mb-3 text-primary">KIDS' BOOKS</h1>
      <hr />
      <Row>
        {books.map((books, index) => (
          <Col md={3} sm={6} xs={12} key={index} >
            <Link to={{ pathname: routes.singleBook }}>
              <Card className="mb-3 zoom books">
                <CardImg src={books.bookCoverImage} />
                <CardImgOverlay className="mb-4">
                  {" "}
                  <CardText className="bookOverlay">{books.title}</CardText>
                  <CardSubtitle className="text-light">
                    {books.description}
                  </CardSubtitle>
                </CardImgOverlay>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Books;
