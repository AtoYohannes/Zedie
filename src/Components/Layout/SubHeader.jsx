import React, { Component } from "react";
import { Card, Button, Row, Col } from "reactstrap";
import { MdBook, MdChangeHistory, MdWallpaper } from "react-icons/md";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";
// import { MdReorder, MdExitToApp, MdBook, MdWallpaper } from "react-icons/md";
import Translate from "react-translate-component";

class SubHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isMobilePopoverOpen: false,
      isAboutPopoverOpen: false,
    };
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
    this.setState({ isMobile: window.innerWidth > 600 });
  }
  toggleMobilePopover = () => {
    this.setState({
      isMobilePopoverOpen: !this.state.isMobilePopoverOpen,
    });
  };
  toggleAboutPopover = () => {
    this.setState({
      isAboutPopoverOpen: !this.state.isAboutPopoverOpen,
    });
  };
  render() {
    const isMobile = this.state.isMobile;

    return (
      <Card align="center" className="subheaderHeader">
        {isMobile ? (
          <div className="subHeaderContainer">
            <Row>
              <Col className="mb-1" md={4} sm={12} xs={12}>
                <Link to={{ pathname: routes.quizCategories }}>
                  <Button
                    block
                    outline
                    size="sm"
                    color="light"
                    className="mr-2"
                  >
                    <MdChangeHistory className="mr-1" />
                    <Translate className="translate" content="quizes" />
                  </Button>
                </Link>
              </Col>
              <Col className="mb-1" md={4} sm={12} xs={12}>
                <Link to={{ pathname: routes.books }}>
                  <Button
                    block
                    outline
                    size="sm"
                    color="light"
                    className="mr-2"
                  >
                    <MdBook className="mr-1" />
                    <Translate className="translate" content="books" />
                  </Button>
                </Link>
              </Col>
              <Col className="mb-1" md={4} sm={12} xs={12}>
                <Link to={{ pathname: routes.writingChallenge }}>
                  <Button
                    block
                    outline
                    size="sm"
                    color="light"
                    className="mr-2"
                  >
                    <MdWallpaper className="mr-1" />
                    <Translate className="translate" content="wordChallenges" />
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        ) : (
          <Row>
            <Col className="mb-1" md={4} sm={12} xs={12}>
              <Link to={{ pathname: routes.quizCategories }}>
                <Button block outline size="sm" color="light" className="mr-2">
                  <MdChangeHistory className="mr-1" />
                  <Translate className="translate" content="quizes" />
                </Button>
              </Link>
            </Col>
            <Col className="mb-1" md={4} sm={12} xs={12}>
              <Link to={{ pathname: routes.books }}>
                <Button block outline size="sm" color="light" className="mr-2">
                  <MdBook className="mr-1" />
                  <Translate className="translate" content="books" />
                </Button>
              </Link>
            </Col>
            <Col className="mb-1" md={4} sm={12} xs={12}>
              <Link to={{ pathname: routes.writingChallenge }}>
                <Button block outline size="sm" color="light" className="mr-2">
                  <MdWallpaper className="mr-1" />
                  <Translate className="translate" content="wordChallenges" />
                </Button>
              </Link>
            </Col>
          </Row>
        )}
      </Card>
    );
  }
}

export default SubHeader;
