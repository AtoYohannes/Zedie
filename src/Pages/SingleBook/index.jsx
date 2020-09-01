import React from "react";
import { PDFReader } from "reactjs-pdf-reader";

const SingleBook = ({ isMobile }) => {
  return (
    <div style={{ overflow: "scroll" }}>
      <PDFReader
        scale={2}
        showAllPage
        url={"https://arxiv.org/pdf/quant-ph/0410101.pdf"}
      />
    </div>
  );
};

export default SingleBook;
