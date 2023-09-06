import React, { useState, useEffect } from "react";
import sponserShape from "../../../assets/images/sponser-shape.png";
import Image from "next/image";
import style from './cssComponent/Technology.module.css'
export default function Technology() {
  const [workdata, setWorkdata] = useState([]);

  useEffect(() => {
    const importData = async () => {
      const TechnologyData = await import("./component/TechnologyStaticdata");
      const sortedData = TechnologyData.default.sort(() => Math.random() - 0.5);
      setWorkdata(sortedData);
    };
    importData();
  }, []);

  return (
    <>
      <section className={`${style.softstormweb_technology} pb-70 pt-80 `}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className=" text-center">
                <h3 className="">Technologies We Work With</h3>
                <span className="main-header-line_choos"></span>
                <p>Join over 40,000 businesses worldwide.</p>
              </div>
            </div>
          </div>
          <div className={` ${style.softstormweb_box_technology} d-flex justify-content-center pt-4`}>
            <ul className={style.handleul_technology}>
              {workdata.map((e, index) => {
                return (
                  <li className={style.handle_list} data-aos="zoom-in" data-aos-duration="1000" key={e.title}>
                    <div className={style.tech_icon}>
                      <Image className="" src={e.image} alt="Apple" />
                    </div>
                    <h6 className={style.tech_title}>{e.title}</h6>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={style.sponser_shape}>
          <Image src={sponserShape} alt="" />
        </div>
      </section>
    </>
  );
}
