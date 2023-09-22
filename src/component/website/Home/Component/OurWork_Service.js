import React from "react";

const OurWork_Service = ({ image, number, title, discription ,style}) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className={`softstormweb-boc-service ${style} text-center mt-30 wow animated fadeInUp`}>
          <div className="icon">
            <img src={image} alt="" />
            <span>{number}</span>
          </div>
          <h4 className=" pb-2 pt-2">{title}</h4>
          <p> {discription}</p>
        </div>
      </div>
    </>
  );
};

export default OurWork_Service;
