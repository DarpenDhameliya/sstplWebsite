import React, { useState, useEffect } from "react";
import { servicesticky4, servicesticky1, servicesticky2, servicesticky3, servicesticky5, servicesticky6 } from "../../SubComponent/lib/ServiceSticky";
import entimg from "../../../../assets/images/services/enterprise-services.webp";
import { Servicestate } from "../../../../redux/slice/Service";
import {  useSelector } from "react-redux";
import style from '../service.module.css'
import dynamic from "next/dynamic";
const SidePortion = dynamic(() => import("../SidePortion.js"));

const Enterpriseservice = ({ images, serviceContents }) => {
  const [tab, setTab] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState("");
  const [serviceContent, setServiceContent] = useState("");
  const states = useSelector(Servicestate);
  const [image, setImage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2;

      const div1 = document.getElementById("div1");
      const div2 = document.getElementById("div2");
      const div3 = document.getElementById("div3");

      const div1IsMiddle = isElementInMiddle(div1, middle);
      const div2IsMiddle = isElementInMiddle(div2, middle);
      const div3IsMiddle = isElementInMiddle(div3, middle);

      if (div1IsMiddle) {
        setTab("erp");
      } else if (div2IsMiddle) {
        setTab("crm");
      } else if (div3IsMiddle) {
        setTab("accounting");
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
        if (e.heading === "Enterprice Services") {
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
                    <a className={` ${style.handleservice_header} pl-3 pr-3 white pt-12 ${tab === "erp" ? "subHadactive" : ""}`} href="#erp">
                      ERP
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  {/* <div style={{borderLeft: '1px solid white', paddingLeft: '5px'}}> */}
                  <div>
                    <a className={` ${style.handleservice_header} pl-3 pr-3 white pt-12 ${tab === "crm" ? "subHadactive" : ""}`} href="#crm">
                      CRM
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={` ${style.handleservice_header} pl-3 pr-3 white pt-12 ${tab === "accounting" ? "subHadactive" : ""}`} href="#accounting">
                      CUSTOMIZED ACCOUNTING
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
                  <img src={image ? image : entimg} alt="" />
                </div>
                <span id="erp" style={{ paddingTop: "15px" }}></span>
                <h4 className={`${style.article_title} mt-1 mb-2`}>Enterprise Services</h4>

                <header className={`service-header_small ${style.haderhide}`} id="service-header_id">
                  <div className="container">
                    <div className={style.header_nav_box}>
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className=" d-flex">
                            <div>
                              <a className={` ${style.handleservice_header} pl-2 pr-2 pt-12 white ${tab === "erp" ? "subHadactive" : ""}`} href="#erp">
                                ERP
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={` ${style.handleservice_header} pl-2 pr-2 pt-12 white ${tab === "crm" ? "subHadactive" : ""}`} href="#crm">
                                CRM
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={` ${style.handleservice_header} pl-2 pr-2 pt-12 white ${tab === "accounting" ? "subHadactive" : ""}`} href="#accounting">
                                CUSTOMIZED ACCOUNTING
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

export default Enterpriseservice;
