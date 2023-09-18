import React, { useState, useEffect, useRef } from "react";

import { servicesticky4, servicesticky1, servicesticky2, servicesticky3, servicesticky5, servicesticky6 } from "../../SubComponent/lib/ServiceSticky";
import deskimg from "../../../../assets/images/services/desktop-software-development.webp";
import { Servicestate } from "../../../../redux/slice/Service";
import { useSelector } from "react-redux";
import style from '../service.module.css'
import dynamic from "next/dynamic";
const SidePortion = dynamic(() => import("../SidePortion.js"));

const Desktipservice = ({ images, serviceContents }) => {
  const [tab, setTab] = useState("");
  const [serviceContent, setServiceContent] = useState("");
  const states = useSelector(Servicestate);
  const [image, setImage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2; // Calculate the middle of the window

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
        setTab("c");
      } else if (div2IsMiddle) {
        setTab("c++");
      } else if (div3IsMiddle) {
        setTab("mashinlerning");
      } else if (div4IsMiddle) {
        setTab("controller");
      } else if (div5IsMiddle) {
        setTab("axistravelling");
      } else if (div6IsMiddle) {
        setTab("lasersource");
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
        if (e.heading === "Desktop Software Developement") {
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

  var filterdata;
  useEffect(() => {
    var data = window.location.href;
    filterdata = data.split("#")[1];
    setTab(filterdata);
  }, []);

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
                    <a className={` ${style.handleservice_header} pl-3 pr-3 pt-12 white ${tab === "c" ? "subHadactive" : ""}`} href="#c">
                      C#
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header} pl-3 pr-3 pt-12 white ${tab === "c++" ? "subHadactive" : ""}`} href="#c++">
                      C++
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header} pl-3 pr-3 pt-12 white ${tab === "mashinlerning" ? "subHadactive" : ""}`} href="#mashinlerning">
                      MACHINE LEARNING
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header} pl-3 pr-3 pt-12 white ${tab === "controller" ? "subHadactive" : ""}`} href="#controller">
                      CONTEROLLER BASED
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header} pl-3 pr-3 pt-12 white ${tab === "axistravelling" ? "subHadactive" : ""}`} href="#axistravelling">
                      AXIS TRAVELLING
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header} pl-3 pr-3 pt-12 white ${tab === "lasersource" ? "subHadactive" : ""}`} href="#lasersource">
                      LASER SOURCE
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
                  <img src={image ? image : deskimg} alt="" />
                </div>
                <span id="c" style={{ paddingTop: "15px" }}></span>
                <h4 className={`${style.article_title} mt-1 mb-2 `}>Desktop App</h4>

                <header className={`service-header_small ${style.haderhide}`} id="service-header_id">
                  <div className="container" style={{ padding: "0 5px" }}>
                    <div>
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className=" d-flex">
                            <div>
                              <a className={`${style.handleservice_header} handlefontweb  ${tab === "c" ? "subHadactive" : ""}`} href="#c">
                                C#
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={`${style.handleservice_header} handlefontweb  ${tab === "c++" ? "subHadactive" : ""}`} href="#c++">
                                C++
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={`${style.handleservice_header} handlefontweb  ${tab === "mashinlerning" ? "subHadactive" : ""}`} href="#mashinlerning">
                                MACHINE LEARNING
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={`${style.handleservice_header} handlefontweb  ${tab === "controller" ? "subHadactive" : ""}`} href="#controller">
                                CONTEROLLER BASED
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={`${style.handleservice_header} handlefontweb  ${tab === "axistravelling" ? "subHadactive" : ""}`} href="#axistravelling">
                                AXIS TRAVELLING
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={`${style.handleservice_header} handlefontweb  ${tab === "lasersource" ? "subHadactive" : ""}`} href="#lasersource">
                                LASER SOURCE
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

export default Desktipservice;
