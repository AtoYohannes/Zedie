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
import Avatar from "../../Components/Avatar";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";
import { entertaiment06 } from "../../Assets/images";
import firebase from "../../Config/Firebase";

class News extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("News");
    this.unsubscribe = null;
    this.state = {
      news: [],
      isMobile: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  onCollectionUpdate = (querySnapshot) => {
    const news = [];
    querySnapshot.forEach((doc) => {
      const { body, header, author } = doc.data();
      news.push({
        key: doc.id,
        doc, // DocumentSnapshot
        body,
        header,
        author,
      });
    });
    this.setState({
      news,
    });
  };

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
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
        <h1 className="mt-4 mb-3 text-primary">NEWS</h1>
        <hr />
        {isMobile ? (
          <Row>
            {/* {news.map((news, index) => ( */}
            {this.state.news.map((news, index) => (
              <Col key={index} md={6} sm={12} xs={12} className="mb-5">
                <Link
                  to={{ pathname: routes.singleNews }}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="flex-row blogItem border-0 bg-background zoom">
                    <CardImg className="card-img-left " src={entertaiment06} />
                    <CardBody>
                      <CardTitle className="bg-background title">
                        <b>{news.header}</b>
                      </CardTitle>
                      <CardText className="description">{news.body}</CardText>
                      <CardFooter className="bg-background">
                        <Row>
                          <Col align="right">
                            <div>{news.authorName}</div>
                            <small>{news.autorEmail}</small>{" "}
                          </Col>
                          <Avatar className="border" src={news.authorImage} />{" "}
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
            {/* {news.map((news, index) => ( */}
            {this.state.news.map((news, index) => (
              <Col key={index} md={12} sm={12} xs={12} className="mb-2">
                <Link
                  to={{ pathname: routes.singleBlog }}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="blogItemMobile border bg-background">
                    <CardBody>
                      <CardTitle className="bg-background title">
                        <b>{news.header}</b>
                      </CardTitle>
                      <CardText className="description">{news.body}</CardText>
                      <CardFooter className="bg-background">
                        <Row>
                          <Col align="right">
                            <div>{news.authorName}</div>
                            <small>{news.autorEmail}</small>
                          </Col>
                          <Avatar className="border" src={news.authorImage} />{" "}
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

export default News;
