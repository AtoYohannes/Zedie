import React from "react";
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import bn from "../../utils/bemnames";
import routes from "../../Config/routes";
import {
  MdReorder,
  MdList,
  MdExitToApp,
  MdTv,
  MdPhone,
  MdBook,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../Assets/ZEDIE.svg";
import Avatar from "../Avatar";

const bem = bn.create("header");

class Header extends React.Component {
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

  logout = () => {
    window.onbeforeunload = function () {
      localStorage.clear();
    };
    window.location.reload(false);
    // alert("loggedOut");
  };

  render() {
    const isMobile = this.state.isMobile;
    let drawerClasses = "bg-blue text-dark";
    if (this.props.scrolled) {
      drawerClasses = "bg-gradient-theme-right scrolledAppBar";
    }
    return (
      <Navbar dark fixed="top" expand className={drawerClasses}>
        <Link
          to={{ pathname: routes.homePage }}
          style={{ textDecoration: "none" }}
        >
          <Nav navbar className="logoContainer">
            <img src={Logo} alt="" />
          </Nav>
        </Link>
        {isMobile && (
          <Nav navbar className="ml-2">
            ዘዴ
          </Nav>
        )}
        {isMobile ? (
          <Nav navbar className={bem.e("nav-right")}>
            <NavItem>
              <NavLink>
                {localStorage.getItem("usersData") ? (
                  <>
                    <Link to={{ pathname: routes.cinemaSchedules }}>
                      <Button outline size="sm" color="dark" className="mr-2">
                        <MdTv /> Cinema
                      </Button>
                    </Link>

                    <Link to={{ pathname: routes.directories }}>
                      <Button outline size="sm" color="dark" className="mr-2">
                        <MdPhone /> Directories
                      </Button>
                    </Link>

                    <Link to={{ pathname: routes.books }}>
                      <Button outline size="sm" color="dark" className="mr-2">
                        <MdBook /> Books
                      </Button>
                    </Link>
                    <Link to={{ pathname: routes.news }}>
                      <Button outline size="sm" color="dark" className="mr-5">
                        <MdList /> News
                      </Button>
                    </Link>
                    <Avatar />
                    <Button
                      outline
                      size="sm"
                      color="dark"
                      className="ml-3"
                      onClick={() => this.logout()}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to={{ pathname: routes.cinemaSchedules }}>
                      <Button outline size="sm" color="dark" className="mr-2">
                        <MdTv /> Cinema
                      </Button>
                    </Link>

                    <Link to={{ pathname: routes.directories }}>
                      <Button outline size="sm" color="dark" className="mr-2">
                        <MdPhone /> Directories
                      </Button>
                    </Link>

                    <Link to={{ pathname: routes.books }}>
                      <Button outline size="sm" color="dark" className="mr-2">
                        <MdBook /> Books
                      </Button>
                    </Link>
                    <Link to={{ pathname: routes.news }}>
                      <Button outline size="sm" color="dark" className="mr-5">
                        <MdList /> News
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      outline
                      onClick={() => this.props.toggle("signIn")}
                      color="dark"
                    >
                      SignIn
                    </Button>
                  </>
                )}
              </NavLink>
            </NavItem>
          </Nav>
        ) : (
          <Nav navbar className={bem.e("nav-right")}>
            <Popover
              trigger="legacy"
              placement="bottom"
              isOpen={this.state.isMobilePopoverOpen}
              toggle={this.toggleMobilePopover}
              target="MobilePopover"
              className="p-5 border"
            >
              <PopoverBody className="p-1">
                <ListGroup flush>
                  <ListGroupItem
                    tag="button"
                    action
                    className="border-dark"
                    onClick={() => this.props.toggle("signIn")}
                  >
                    <MdExitToApp className="mr-2" /> {"  "} SignIn
                  </ListGroupItem>
                </ListGroup>
              </PopoverBody>
            </Popover>
            <NavItem id="MobilePopover">
              <NavLink>
                <MdReorder size={20} />
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    );
  }
}

export default Header;
