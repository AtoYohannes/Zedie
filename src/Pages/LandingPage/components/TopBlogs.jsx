import React, { Component } from "react";
import {
  Col,
  Card,
  Row,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardFooter,
} from "reactstrap";
import Avatar from "../../../Components/Avatar";
import { Link } from "react-router-dom";
import routes from "../../../Config/routes";
import {
  entertaiment01,
  entertaiment07,
  entertaiment06,
} from "../../../Assets/images";

const blogs = [
  {
    title: "News Title Goes Here",
    image: entertaiment01,
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, perferendis sequi. Delectus, nulla repellat. Voluptatum delectus nihil dolorum consequatur minus exercitationem aspernatur praesentium illo at vitae adipisci rerum, ullam ipsum.",
    authorName: "Person Name Goes Here",
    autorEmail: "JohnDoe@gmail.com",
    authorImage: entertaiment07,
  },
  {
    title: "News Title Goes Here",
    image: entertaiment07,
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, perferendis sequi. Delectus, nulla repellat. Voluptatum delectus nihil dolorum consequatur minus exercitationem aspernatur praesentium illo at vitae adipisci rerum, ullam ipsum.",
    authorName: "Person Name Goes Here",
    autorEmail: "JohnDoe@gmail.com",
    authorImage: entertaiment01,
  },
  {
    title: "News Title Goes Here",
    image: entertaiment06,
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, perferendis sequi. Delectus, nulla repellat. Voluptatum delectus nihil dolorum consequatur minus exercitationem aspernatur praesentium illo at vitae adipisci rerum, ullam ipsum.",
    authorName: "Person Name Goes Here",
    autorEmail: "JohnDoe@gmail.com",
    authorImage: entertaiment01,
  },
];

class TopBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: false };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }
  updatePredicate() {
    this.setState({ isMobile: window.innerWidth > 800 });
  }

  render() {
    const isMobile = this.state.isMobile;

    return (
      <div className="blogsContainer">
        {isMobile ? (
          <Row>
            {blogs.map((blogs, index) => (
              <Col key={index} md={10} sm={12} xs={12} className="mb-5">
                <Link
                  to={{ pathname: routes.singleBlog }}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="flex-row blogItem border-0 bg-background zoom">
                    <CardImg className="card-img-left " src={blogs.image} />
                    <CardBody>
                      <CardTitle className="bg-background title">
                        <b>{blogs.title}</b>
                      </CardTitle>
                      <CardText className="description">
                        {blogs.paragraph}
                      </CardText>
                      <CardFooter className="bg-background">
                        <Row>
                          <Col align="right">
                            <div>{blogs.authorName}</div>
                            <small>{blogs.autorEmail}</small>{" "}
                          </Col>
                          <Avatar className="border" src={blogs.authorImage} />{" "}
                        </Row>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ) : (
          <div>
            {blogs.map((blogs, index) => (
              <Col key={index} md={12} sm={12} xs={12} className="mb-2">
                <Link
                  to={{ pathname: routes.singleBlog }}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="blogItemMobile border bg-background">
                    <CardBody>
                      <CardTitle className="bg-background title">
                        <b>{blogs.title}</b>
                      </CardTitle>
                      <CardText className="description">
                        {blogs.paragraph}
                      </CardText>
                      <CardFooter className="bg-background">
                        <Row>
                          <Col align="right">
                            <div>{blogs.authorName}</div>
                            <small>{blogs.autorEmail}</small>
                          </Col>
                          <Avatar className="border" src={blogs.authorImage} />{" "}
                        </Row>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TopBlogs;
