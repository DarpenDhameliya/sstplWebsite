import React, { Component } from "react";
// import errorimg from '../../assets/images/500error-01.webp'
import errorimg from '../../assets/images/icon/500 (1).webp'

import Image from "next/image";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error here or perform any other error handling actions
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }


  render() {
    const handlereferesh = () => {
      window.location.reload();
    }

    if (this.state.hasError) {
      // You can render a custom error message or fallback UI here
      return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
          <Image src={errorimg} alt="error" width={400} height={200} />
          <h2 className="mt-3 pb-10" style={{ color: "#4f4f4f", borderBottom: "2px solid #4f4f4f" }}>
            Server Error
          </h2>
          <div className="footer_bottomLinks pt-10 black" onClick={handlereferesh} style={{cursor:'pointer'}} >
            <i className="fa fa-refresh mr-3" />
            Referesh
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
