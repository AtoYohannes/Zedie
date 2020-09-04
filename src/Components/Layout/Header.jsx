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
import { MdReorder, MdExitToApp } from "react-icons/md";
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

  render() {
    const isMobile = this.state.isMobile;
    let drawerClasses = " bg-primary text-light";
    if (this.props.scrolled) {
      drawerClasses = "bg-gradient-theme-right scrolledAppBar";
    }
    return (
      <>
        <Navbar light fixed="top" expand className={drawerClasses}>
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
                    <Avatar />
                  ) : (
                    <Button
                      size="sm"
                      outline
                      onClick={() => this.props.toggle("signIn")}
                      color="light"
                    >
                      SignIn
                    </Button>
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
                      className="border-light"
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
      </>
    );
  }
}

export default Header;
