import React from "react";
import { BiDollar } from "react-icons/bi";
import "./style.css";

/**
 * @author
 * @function Price
 **/

const Price = (props) => {
  return (
    <div className="price"
      style={{
        fontSize: props.fontSize ? props.fontSize : "14px",
        fontWeight: "bold",
        margin: "5px 0",
      }}
    >
      <BiDollar className="dol" />
      {props.value}
    </div>
  );
};

export default Price;
