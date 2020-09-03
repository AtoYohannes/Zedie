import React, { Component } from "react";
import { PDFReader } from "reactjs-pdf-reader";
import firebase from "../../Config/Firebase";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      book: {},
      key: "",
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("Books")
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          book: doc.data(),
          key: doc.id,
          isLoading: false,
        });
      } else {
        console.log("No such document!");
      }
    });
  }
  render() {
    return (
      <div style={{ overflow: "scroll" }}>
        <PDFReader
          scale={2}
          showAllPage
          url={"https://arxiv.org/pdf/quant-ph/0410101.pdf"}
        />
      </div>
    );
  }
}

export default SingleBook;
