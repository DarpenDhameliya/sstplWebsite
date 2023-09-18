import React, { useState, useEffect, useRef } from "react";
import { servicesticky4, servicesticky1, servicesticky2, servicesticky3, servicesticky5, servicesticky6 } from "../../SubComponent/lib/ServiceSticky";
import digimg from "../../../../assets/images/services/digital-marketing.webp";
import { Servicestate, } from "../../../../redux/slice/Service";
import {  useSelector } from "react-redux";
import style from "../service.module.css";
import dynamic from "next/dynamic";
const SidePortion = dynamic(() => import("../SidePortion.js"));
const Digitalservice = ({ images, serviceContents }) => {
  const [tab, setTab] = useState("");
  const [serviceContent, setServiceContent] = useState("");
  const states = useSelector(Servicestate);
  const [image, setImage] = useState("");

  var filterdata;

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2;

      const div1 = document.getElementById("div1");
      const div2 = document.getElementById("div2");
      const div3 = document.getElementById("div3");
      const div4 = document.getElementById("div4");

      const div1IsMiddle = isElementInMiddle(div1, middle);
      const div2IsMiddle = isElementInMiddle(div2, middle);
      const div3IsMiddle = isElementInMiddle(div3, middle);
      const div4IsMiddle = isElementInMiddle(div4, middle);

      if (div1IsMiddle) {
        setTab("seo");
      } else if (div2IsMiddle) {
        setTab("smm");
      } else if (div3IsMiddle) {
        setTab("political");
      } else if (div4IsMiddle) {
        setTab("mobileapp");
      } else {
        setTab("");
      }
    };

    const isElementInMiddle = (element, middle) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= middle && rect.bottom >= middle;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (states.response.result !== undefined) {
      states.response.result.map((e) => {
        if (e.heading === "Digital Marketing") {
          setImage(e.servicepageimg);
          setServiceContent(e.content);
        }
      });
    } else {
      if (images) {
        setImage(images);
      }
      if (serviceContents) {
        setServiceContent(serviceContents);
      }
    }
  });

  useEffect(() => {
    if (window.innerWidth < 1200 && window.innerWidth > 992) {
      servicesticky3();
      servicesticky4();
    } else if (window.innerWidth < 1400 && window.innerWidth > 1200) {
      servicesticky5();
      servicesticky6();
    } else {
      servicesticky1();
      servicesticky2();
    }
    const element = document.querySelector(".service-header");
    element.classList.add("display");
  }, []);

  const handleclick = () => {};

  return (
    <>
      <section className={style.blogpage_section}>
        <header className={`service-header ${style.haderhide} `}>
          <div className={style.header_nav_box}>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className=" d-flex">
                  <div>
                    <a className={`pl-3 pr-3 handleservice_header ${tab === "seo" ? "subHadactive" : ""}`} href="#seo" onClick={handleclick}>
                      SEO
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={` ${style.handleservice_header} pl-3 pr-3 white pt-12 ${tab === "smm" ? "subHadactive" : ""}`} href="#smm" onClick={handleclick}>
                      SMM
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={` ${style.handleservice_header} pl-3 pr-3 white pt-12 ${tab === "political" ? "subHadactive" : ""}`} href="#political" onClick={handleclick}>
                      POLITICAL PROFILE
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={` ${style.handleservice_header} pl-3 pr-3 white pt-12 ${tab === "mobileapp" ? "subHadactive" : ""}`} href="#mobileapp" onClick={handleclick}>
                      MOBILE APP PROMOTION
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 ">
              <div className={style.single_post_area}>
                <div className={style.post_thumb}>
                  <img src={image ? image : digimg} alt="" />
                </div>
                <span id="seo" style={{ paddingTop: "15px" }}></span>
                <h4 className={`${style.article_title} mt-1 mb-2`}>Digital Marketing</h4>

                <header className={`service-header_small ${style.haderhide} `}>
                  {/* <div className="container"> */}
                  <div className={style.header_nav_box}>
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <div className=" d-flex">
                          <div>
                            <a className={`ml-2 ${style.handleservice_header} pl-2 pr-2 pt-12 white  ${tab === "seo" ? "subHadactive" : ""}`} href="#seo" onClick={handleclick}>
                              SEO
                            </a>
                          </div>
                          <span className={style.handlespan}> | </span>
                          <div>
                            <a className={`${style.handleservice_header} pl-2 pr-2 pt-12 white  ${tab === "smm" ? "subHadactive" : ""}`} href="#smm" onClick={handleclick}>
                              SMM
                            </a>
                          </div>
                          <span className={style.handlespan}> | </span>
                          <div>
                            <a className={`${style.handleservice_header} pl-2 pr-2 pt-12 white ${tab === "political" ? "subHadactive" : ""}`} href="#political" onClick={handleclick}>
                              POLITICAL PROFILE
                            </a>
                          </div>
                          <span className={style.handlespan}> | </span>
                          <div>
                            <a className={`${style.handleservice_header} pl-2 pr-2 pt-12 white  ${tab === "mobileapp" ? "subHadactive" : ""}`} href="#mobileapp" onClick={handleclick}>
                              MOBILE APP PROMOTION
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </header>
                {serviceContent.length > 0 && <div dangerouslySetInnerHTML={{ __html: serviceContent }} /> }
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <SidePortion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Digitalservice;
