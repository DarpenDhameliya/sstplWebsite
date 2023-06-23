import React from "react";
import errorimg from "../../assets/images/error.png";
const ErrorPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column" >
        <img src={errorimg} alt="error" />
        <h2 className="mt-3 " style={{color: "#c20004"}}>Page Not Found</h2>
    </div>
  );
};

export default ErrorPage;
