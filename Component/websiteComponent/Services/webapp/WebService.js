import React, { useState, useEffect } from "react";
import { servicesticky4, servicesticky1, servicesticky2, servicesticky3, servicesticky5, servicesticky6 } from "../../SubComponent/lib/ServiceSticky";
import { Servicestate } from "../../../../redux/slice/Service";
import { useDispatch, useSelector } from "react-redux";
import style from "../service.module.css";
import webimg from "../../../../assets/images/services/web-app-development.webp";
import dynamic from "next/dynamic";
const SidePortion = dynamic(() => import("../SidePortion.js"));
const WebService = ({ images, serviceContents }) => {
  const [tab, setTab] = useState("");
  const [serviceContent, setServiceContent] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const states = useSelector(Servicestate);

  useEffect(() => {
    if (states.response.result !== undefined) {
      states.response.result.map((e) => {
        if (e.heading === "Web Application Development") {
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

  // active header code
  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2;

      const div1 = document.getElementById("div1");
      const div2 = document.getElementById("div2");
      const div3 = document.getElementById("div3");
      const div4 = document.getElementById("div4");
      const div5 = document.getElementById("div5");

      const div1IsMiddle = isElementInMiddle(div1, middle);
      const div2IsMiddle = isElementInMiddle(div2, middle);
      const div3IsMiddle = isElementInMiddle(div3, middle);
      const div4IsMiddle = isElementInMiddle(div4, middle);
      const div5IsMiddle = isElementInMiddle(div5, middle);

      if (div1IsMiddle) {
        setTab("php");
      } else if (div2IsMiddle) {
        setTab("codeigniter");
      } else if (div3IsMiddle) {
        setTab("laravel");
      } else if (div4IsMiddle) {
        setTab("nodejs");
      } else if (div5IsMiddle) {
        setTab("python");
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

  // header small big code
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
          <div className={style.header_nav_box}>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className=" d-flex">
                  <div>
                    <a className={`${style.handleservice_header} pl-3 pr-3 white pt-12 ${tab === "nodejs" ? "subHadactive" : ""}`} href="#nodejs">
                      NODE JS
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header}   pl-3 pr-3 white pt-12 ${tab === "php" || tab === "php" ? "subHadactive" : ""}`} href="#php">
                      PHP
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header}  pl-3 pr-3 white pt-12 ${tab === "laravel" ? "subHadactive" : ""}`} href="#laravel">
                      LARAVEL
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header}  pl-3 pr-3 white pt-12 ${tab === "codeigniter" ? "subHadactive" : ""}`} href="#codeigniter">
                      CODEIGNITER
                    </a>
                  </div>
                  <span style={{ margin: "12px 5px 0 ", color: "white" }}>|</span>
                  <div>
                    <a className={`${style.handleservice_header} pl-3 pr-3 white pt-12 ${tab === "python" ? "subHadactive" : ""}`} href="#python">
                      PYTHON
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
                  <img src={image ? image : webimg} alt="" />
                </div>
                <span id="nodejs" className="pt-15"></span>
                <h4 className={`${style.article_title} mt-1 mb-2`}>Web App</h4>
                <header className={`service-header_small ${style.haderhide} `} id="service-header_id">
                  <div className="container">
                    <div className={style.header_nav_box}>
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className=" d-flex">
                            <div>
                              <a className={`${style.handleservice_header} pl-2 pr-2 pt-12 white ${tab === "nodejs" ? "subHadactive" : ""}`} href="#nodejs">
                                NODE JS
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={`${style.handleservice_header} pl-2 pr-2 pt-12 white ${tab === "php" ? "subHadactive" : ""}`} href="#php">
                                PHP
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={`${style.handleservice_header} pl-2 pr-2 pt-12 white ${tab === "laravel" ? "subHadactive" : ""}`} href="#laravel">
                                LARAVEL
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>
                            <div>
                              <a className={`${style.handleservice_header}  pl-2 pr-2 pt-12 white ${tab === "codeigniter" ? "subHadactive" : ""}`} href="#codeigniter">
                                CODEIGNITER
                              </a>
                            </div>
                            <span className={style.handlespan}> | </span>

                            <div>
                              <a className={`${style.handleservice_header} pl-2 pr-2 pt-12 white ${tab === "python" ? "subHadactive" : ""}`} href="#python">
                                PYTHON
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

export default WebService;
