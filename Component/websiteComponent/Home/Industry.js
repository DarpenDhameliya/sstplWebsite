import React, { useState, useEffect } from "react";

import sstplright from "../../../assets/images/RIGHT (10) 1 1.webp";
import sstplleft from "../../../assets/images/LEFT (9).webp";
import Image from "next/image";
import style from './cssComponent/Industy.module.css'
export default function Industry() {
  const [workdata, setWorkdata] = useState([]);

  useEffect(() => {
    const importData = async () => {
      const TechnologyData = await import("./component/IndustryData");
      const sortedData = TechnologyData.default.sort(() => Math.random() - 0.5);
      setWorkdata(sortedData);
    };
    importData();
  }, []);
  return (
    <>
      <section className={` ${style.softstormweb_industry} pt-70 pb-80`}>
        <div className={style.leftimage}>
          <Image src={sstplleft} alt="left bg" className="left-image" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              <div className="text-center">
                <h3>Industries We Serve</h3>
                <span className="main-header-line_choos"></span>
                <p>The app provides design and digital marketing.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              <div className="row">
                {workdata.map((e, index) => {
                  return (
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={e.title}>
                      <div className={` ${style.softstormweb_name_industry} mt-30`} data-aos-duration={` ${2000 + index * 500}`} data-aos="fade-up">
                        <div className={style.thumb}>
                          <Image src={e.image} alt={e.title} />
                        </div>
                        <div className={style.content}>
                          <h6 className={style.title}>{e.title}</h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={style.rightimage}>
          <Image src={sstplright} alt="right br" className="right-image" />
        </div>
      </section>
    </>
  );
}
