import Image from "next/image";
import React from "react";
import style from './ourwork.module.css'

const PortfolioItem = ({ data, handleModal }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className={` ${style.softstormweb_ourwork_main_teb} mt-30`}>
        <div className={style.thumb} data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleModal(data)}>
          <Image src={data.uploadimg} alt="image" width={900} height={600}/>
        </div>
        <div className={` ${style.content} text-center`}s>
          <h5 className={style.title}>{data.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
