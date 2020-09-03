import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

const Divider = ({ title }) => {
  return (
    <div className="divider bg-background mt-3 mb-3">
      <MdAddShoppingCart size={30} />
      <div className="ml-1 mr-1">
        <h3>
          <b className="text-primary text-uppercase">{title}</b>
        </h3>
      </div>
      <MdAddShoppingCart size={30} />
    </div>
  );
};

export default Divider;
