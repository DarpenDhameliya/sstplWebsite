import Image from "next/image";
import React from "react";
import styles from "../cssComponent/OurWorkService.module.css";

const OurWork_Service = ({ image, number, dis, title, discription }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className={`${styles.softstormweb_boc_service} ${dis === "item_2" && styles.item_2} ${dis === "item_3" && styles.item_3} ${dis === "item_4" && styles.item_4} text-center mt-30 wow animated fadeInUp`}>
          <div className={styles.icon}>
            <Image src={image} alt="" />
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
