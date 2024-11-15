import React from "react";
import "../css/Option.css";
import { Link } from "react-router-dom";

const Option = () => {
  return (
    <div className="option-container">
      <Link to='/barcode'>Search by Barcode</Link>
      <Link to='/search'>Search by name</Link>
    </div>
  );
};

export default Option;
