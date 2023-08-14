import React from "react";
import logo from "../assets/images/logo-removebg-preview.webp";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="onloadpage" id="page-load">
      <div className="loader-div d-flex justify-content-center ">
        <div className="on-img">
          <Image src={logo} height={100} width={100} alt="loader" className="loader-logo" />
          <div className="loader">Loading ...</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
