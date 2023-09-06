import Image from "next/image";
import React from "react";
import styles from "../cssComponent/WhyChoseUs.module.css";

const WhyChooseus_leftbox = ({ image, style, title, discription }) => {
  return (
    <>
      <div className={`${styles.softstormweb_left_chooseus} ${style === "item_2" && styles.item_2} ${style === "item_3" && styles.item_3} ${styles.softstormweb_left_chooseus_l1}`} data-aos="fade-right" data-aos-duration="800">
        <div className={styles.whychoosebox}>
          <Image src={image} alt="imagheader" className="max_width_67" />
        </div>
        <div>
          <h4 className={styles.handleh4_whycgoos}>{title}</h4>
          <p>{discription}</p>
        </div>
      </div>
    </>
  );
};

export default WhyChooseus_leftbox;
