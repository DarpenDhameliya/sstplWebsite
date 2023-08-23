import React, { useState, useEffect } from "react";
import sponserShape from "../../../assets/images/sponser-shape.png";
import Image from "next/image";

export default function Technology() {
  const [workdata, setWorkdata] = useState([]);

  useEffect(() => {
    const importData = async () => {
      const TechnologyData = await import("./TechnologyStaticdata");
      const sortedData = TechnologyData.default.sort(() => Math.random() - 0.5);
      setWorkdata(sortedData);
    };
    importData();
  }, []);

  return (
    <>
      <section className={`softstormweb-technology pb-70 pt-80 `}>
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
          <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
            <ul className="handleul_technology">
              {workdata.map((e, index) => {
                return (
                  <li className="handle_list" data-aos="zoom-in" data-aos-duration="1000" key={e.title}>
                    <div className="tech_icon">
                      <Image className="" src={e.image} alt="Apple" />
                    </div>
                    <h6 className="tech-title">{e.title}</h6>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="sponser-shape">
          <Image src={sponserShape} alt="" />
        </div>
      </section>
    </>
  );
}
