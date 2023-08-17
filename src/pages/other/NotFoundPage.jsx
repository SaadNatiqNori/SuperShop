import React from "react";
import { Link } from "react-router-dom";
// My Styles
import NFP from "../../assets/css/pages/other/NotFoundPageStyles.module.css";
export default function NotFoundPage() {
  return (
    <h1 className={NFP.h1}>
      404 Not Found{" "}
      <small>
        Back To <Link to="/products">Products</Link>
      </small>
    </h1>
  );
}
