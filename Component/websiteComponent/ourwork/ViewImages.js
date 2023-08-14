import Image from "next/image";
import React from "react";

const PortfolioItem = ({ data, handleModal }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="softstormweb-ourwork-main-teb mt-30">
        <div className="thumb" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleModal(data)}>
          <Image src={data.uploadimg} alt="image" width={900} height={600}/>
        </div>
        <div className="content text-center">
          <h5 className="title">{data.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
