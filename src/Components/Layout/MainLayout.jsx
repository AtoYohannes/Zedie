import { Content, Footer, Header } from "./index";
import React from "react";
import { BackDrop, SlidingDrawer } from "../Drawer";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import SignIn from "../../Pages/SignIn";
import Translate from "react-translate-component";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isMobile: false,
      scrollTop: 0,
      scrolled: false,
      drawerOpen: false,
      scrolledSignUp: false,
      type: "",
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  drawerToggleClickHandler = (type) => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
      type: type,
    });
  };
  backdropClickHandler = () => {
    this.setState({
      drawerOpen: false,
    });
  };
  updatePredicate() {
    this.setState({ isMobile: window.innerWidth > 600 });
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  onScroll = () => {
    const scrollTop = this.myRef.current.scrollTop;
    if (scrollTop > 160) {
      this.setState({
        scrolled: true,
      });
    }
    if (scrollTop > 160 && !localStorage.getItem("usersData")) {
      this.setState({
        scrolledSignUp: true,
      });
    }
    if (scrollTop < 160) {
      this.setState({
        scrolled: false,
        scrolledSignUp: false,
      });
    }
    this.setState({
      scrollTop: scrollTop,
    });
  };

  render() {
    const { children } = this.props;
    const isMobile = this.state.isMobile;
    let backdrop;
    if (this.state.drawerOpen) {
      backdrop = <BackDrop close={this.backdropClickHandler} />;
    }
    let className = "app-container bg-light";
    if (isMobile) {
      className = "app-container-mobile";
    }
    return (
      <div
        className={className}
        style={{
          height: "100vh",
          overflow: "scroll",
        }}
        onScroll={this.onScroll}
        ref={this.myRef}
      >
        <Modal isOpen={this.state.scrolledSignUp}>
          <ModalHeader>
            <Translate content="you" />
          </ModalHeader>
          <ModalBody className="p-3">
            <SignIn />
            <div className="p-5">
              <Translate content="in" />
            </div>
          </ModalBody>
        </Modal>
        <div>
          <main className="cr-app">
            <SlidingDrawer
              show={this.state.drawerOpen}
              type={this.state.type}
            />
            {backdrop}
            <Content fluid>
              <Header
                toggle={this.drawerToggleClickHandler}
                scrolled={this.state.scrolled}
              />
              <div>
                {/* <SubHeader /> */}
                <div className="cr-app-body">{children}</div>
              </div>
              <div className="mt-5">
                <Footer />
              </div>
            </Content>
          </main>
        </div>
      </div>
    );
  }
}

export default MainLayout;
