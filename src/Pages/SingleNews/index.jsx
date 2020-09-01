import React, { Component } from "react";
import { RelatedNews, NewsBody, NewsHeader } from "./components";
import {
  entertaiment01,
  entertaiment02,
  entertaiment03,
  entertaiment05,
  entertaiment04,
  entertaiment06,
  entertaiment07,
} from "../../Assets/images";
import Divider from "../../Components/Divider";

class SingleNewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
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

  render() {
    const isMobile = this.state.isMobile;

    return (
      <>

        <NewsBody

          image={entertaiment01}
          image1={entertaiment02}
          image3={entertaiment05}
          image4={entertaiment04}
          image5={entertaiment06}
          image6={entertaiment07}
          isMobile={isMobile}

        />
        <NewsHeader isMobile={isMobile}  />


        <Divider title="Related News" />
        <RelatedNews
          image={entertaiment01}
          image2={entertaiment07}
          image3={entertaiment03}
        />
      </>
    );
  }
}

export default SingleNewsPage;
