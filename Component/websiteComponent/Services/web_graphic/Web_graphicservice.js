import React, { useState, useEffect, useRef } from "react";
import { servicesticky4, servicesticky1, servicesticky2, servicesticky3, servicesticky5, servicesticky6 } from "../../SubComponent/lib/ServiceSticky";
import graimg from "../../../../assets/images/services/web-graphic-designing.webp";
import { Servicestate } from "../../../../redux/slice/Service";
import { useSelector } from "react-redux";
import style from '../service.module.css'
import dynamic from "next/dynamic";
const SidePortion = dynamic(() => import("../SidePortion.js"));
const Web_graphicservice = ({ images, serviceContents }) => {
  const [tab, setTab] = useState("");
  const [serviceContent, setServiceContent] = useState("");
  const [image, setImage] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState("");
  const states = useSelector(Servicestate);

  // logic for redux handle
  useEffect(() => {
    if (states.response.result !== undefined) {
      states.response.result.map((e) => {
        if (e.heading === "Web & Graphic Designing") {
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

  // logic for fetch api calling

  // logic for active technology
  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2;

      const div1 = document.getElementById("div1");
      const div2 = document.getElementById("div2");
      const div3 = document.getElementById("div3");
      const div4 = document.getElementById("div4");
      const div5 = document.getElementById("div5");
      const div6 = document.getElementById("div6");

      const div1IsMiddle = isElementInMiddle(div1, middle);
      const div2IsMiddle = isElementInMiddle(div2, middle);
      const div3IsMiddle = isElementInMiddle(div3, middle);
      const div4IsMiddle = isElementInMiddle(div4, middle);
      const div5IsMiddle = isElementInMiddle(div5, middle);
      const div6IsMiddle = isElementInMiddle(div6, middle);

      if (div1IsMiddle) {
        setTab("webdesign");
      } else if (div2IsMiddle) {
        setTab("uiux");
      } else if (div3IsMiddle) {
        setTab("logo");
      } else if (div4IsMiddle) {
        setTab("viewjs");
      } else if (div5IsMiddle) {
        setTab("reactjs");
      } else if (div6IsMiddle) {
        setTab("brochur");
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

  // logic for long header and short header
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
  return (
    <>
      <section className={style.blogpage_section}>
        <header className={`service-header ${style.haderhide} `}>
          {/* <div className="container"> */}
          <div className={style.header_nav_box}>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className=" d-flex">
                  <div>
                    <a className={` ${style.handleservice_header}  pl-3 pr-3 white pt-12 ${tab === "webdesign" ? "subHadactive" : ""}`} href="#webdesign">
                      WEB DESIGN
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header}  pl-3 pr-3 white pt-12 ${tab === "uiux" ? "subHadactive" : ""}`} href="#uiux">
                      UI & UX DESIGN
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header}  pl-3 pr-3 white pt-12 ${tab === "reactjs" ? "subHadactive" : ""}`} href="#reactjs">
                      REACT JS
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header}  pl-3 pr-3 white pt-12 ${tab === "viewjs" ? "subHadactive" : ""}`} href="#viewjs">
                      VUE JS
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header}  pl-3 pr-3 white pt-12 ${tab === "logo" ? "subHadactive" : ""}`} href="#logo">
                      LOGO BANNER
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>

                  <div>
                    <a className={`${style.handleservice_header}  pl-3 pr-3 white pt-12 ${tab === "brochur" ? "subHadactive" : ""}`} href="#brochur">
                      BROCHUR & MOKEUP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 ">
              <div className={style.single_post_area}>
                <div className={style.post_thumb}>
                  <img src={image ? image : graimg} alt="" />
                </div>
                <span id="webdesign" style={{ paddingTop: "15px" }} />
                <h4 className={style.post_thumb}>Web & Graphic</h4>

                <header className="service-header_small haderhide" id="service-header_id">
                  <div className="container">
                    <div className={style.header_nav_box}>
                      <div className="row align-items-center">
                        <div className="col-lg-12 handlecolgraphicservice">
                          <div className=" d-flex">
                            <div>
                              <a className={` ${style.handleservice_header}  handlefontweb pl-2 pr-2 ${tab === "webdesign" ? "subHadactive" : ""}`} href="#webdesign">
                                WEB DESIGN
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={`${style.handleservice_header}  handlefontweb pl-2 pr-2 ${tab === "uiux" ? "subHadactive" : ""}`} href="#uiux">
                                UI & UX DESIGN
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={`${style.handleservice_header}  handlefontweb pl-2 pr-2 ${tab === "reactjs" ? "subHadactive" : ""}`} href="#reactjs">
                                REACT JS
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={`${style.handleservice_header}  handlefontweb pl-2 pr-2 ${tab === "viewjs" ? "subHadactive" : ""}`} href="#viewjs">
                                VUE JS
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={`${style.handleservice_header}  handlefontweb pl-2 pr-2 ${tab === "logo" ? "subHadactive" : ""}`} href="#logo">
                                LOGO BANNER
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>

                            <div>
                              <a className={`${style.handleservice_header}  handlefontweb pl-2 pr-2 ${tab === "brochur" ? "subHadactive" : ""}`} href="#brochur">
                                BROCHUR & MOKEUP
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Web_graphicservice;
