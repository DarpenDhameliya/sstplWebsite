import React from "react";
import errorimg from "../../assets/images/error.png";
import {Link} from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
      <img src={errorimg} alt="error" />
      <h2 className="mt-3 pb-10" style={{color: "#c20004", borderBottom: "2px solid"}}>
        Page Not Found
      </h2>
      <Link to="/" className="footer_bottomLinks pt-10 ">
        <i className="fa fa-arrow-left-long mr-3" />
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
