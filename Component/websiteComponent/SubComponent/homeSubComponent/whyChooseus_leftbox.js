import Image from "next/image";
import React from "react";

const WhyChooseus_leftbox = ({image , style , title , discription}) => {
  return (
    <>
      <div className={`softstormweb-left-chooseus ${style} softstormweb-left-chooseus-l1`} data-aos="fade-right" data-aos-duration="800">
        <div className="whychoosebox">
          <Image src={image} alt="imagheader" className="max_width_67" />
        </div>
        <div>
          <h4 className="handleh4_whycgoos">{title}</h4>
          <p>{discription}</p>
        </div>
      </div>
    </>
  );
};

export default WhyChooseus_leftbox;
