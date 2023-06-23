import React, {useState, useEffect, useRef} from "react";
// import singlePost from "../../../assets/images/single-post/1.jpg";
import SidePortion from "../SidePortion";
import {servicesticky4, servicesticky1, servicesticky2, servicesticky3, servicesticky5, servicesticky6} from "../../common/lib/ServiceSticky";
import deskimg from "../../../assets/images/services/desktop-software-development.webp";

const Desktipservice = () => {
  const [tab, setTab] = useState("");
  // const [isVisible, setIsVisible] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2; // Calculate the middle of the window

      const rect1 = ref1.current.getBoundingClientRect();
      const rect2 = ref2.current.getBoundingClientRect();
      const rect3 = ref3.current.getBoundingClientRect();
      const rect4 = ref4.current.getBoundingClientRect();
      const rect5 = ref5.current.getBoundingClientRect();
      const rect6 = ref6.current.getBoundingClientRect();

      const div1IsMiddle = rect1.top <= middle && rect1.bottom >= middle;
      const div2IsMiddle = rect2.top <= middle && rect2.bottom >= middle;
      const div3IsMiddle = rect3.top <= middle && rect3.bottom >= middle;
      const div4IsMiddle = rect4.top <= middle && rect4.bottom >= middle;
      const div5IsMiddle = rect5.top <= middle && rect5.bottom >= middle;
      const div6IsMiddle = rect6.top <= middle && rect6.bottom >= middle;

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <section className="blogpage-section">
        <header className="service-header haderhide">
          {/* <div className="container"> */}
          <div className="header-nav-box">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className=" d-flex">
                  <div>
                    <a className={` handleservice_header pl-3 pr-3 ${tab === "c" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#c">
                      C#
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header pl-3 pr-3 ${tab === "c++" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#c++">
                      C ++
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header pl-3 pr-3 ${tab === "mashinlerning" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#mashinlerning">
                      MASHINE LERNING
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header pl-3 pr-3 ${tab === "controller" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#controller">
                      CONTEROLLER BASED
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header pl-3 pr-3 ${tab === "axistravelling" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#axistravelling">
                      AXIS TRAVELLING
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header pl-3 pr-3 ${tab === "lasersource" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#lasersource">
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
              <div className="single-post-area">
                <div className="post-thumb">
                  <img src={deskimg} alt="" />
                </div>
                <span id="c" style={{paddingTop: "15px"}}></span>
                <h4 className="article-title">Desktop App</h4>

                <header className="service-header_small haderhide" id="service-header_id">
                  <div className="container" style={{padding: "0 5px"}}>
                    <div>
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className=" d-flex">
                            <div>
                              <a
                                className={`handleservice_header handlefontweb  ${tab === "c" ? "subHadactive" : ""}`}
                                // style={{
                                //   color: "#fff",
                                //   padding: "12px 5px 0 5px",
                                // }}
                                href="#c"
                              >
                                C#
                              </a>
                            </div>
                            <span className="handlespan"> | </span>
                            <div>
                              <a className={`handleservice_header handlefontweb  ${tab === "c++" ? "subHadactive" : ""}`} href="#c++">
                                C ++
                              </a>
                            </div>
                            <span className="handlespan"> | </span>
                            <div>
                              <a className={`handleservice_header handlefontweb  ${tab === "mashinlerning" ? "subHadactive" : ""}`} href="#mashinlerning">
                                MACHINE LERNING
                              </a>
                            </div>
                            <span className="handlespan"> | </span>
                            <div>
                              <a className={`handleservice_header handlefontweb  ${tab === "controller" ? "subHadactive" : ""}`} href="#controller">
                                CONTEROLLER BASED
                              </a>
                            </div>
                            <span className="handlespan"> | </span>
                            <div>
                              <a className={`handleservice_header handlefontweb  ${tab === "axistravelling" ? "subHadactive" : ""}`} href="#axistravelling">
                                AXIS TRAVELLING
                              </a>
                            </div>
                            <span className="handlespan"> | </span>
                            <div>
                              <a className={`handleservice_header handlefontweb  ${tab === "lasersource" ? "subHadactive" : ""}`} href="#lasersource">
                                LASER SOURCE
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`softstormweb-web-service`} ref={ref1} style={{marginTop: "20px"}}>
                      <div className="content">
                        <h4 className="title">C# Development</h4>
                        <p>If your business demands a website which needs to gather information. Then PHP is the tool of choice. PHP gives web developers the ability to create dynamic web pages, which can collect data from visitors. Perfect for those business concerns which rely on capturing data. Travel Agents, Hospitals and similar concerns should go for PHP.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Custom PHP Developmente</li>
                          <li>SaaS using PHP</li>
                          <li>E-Commerce Solutions using PHP</li>
                          <li>
                            Portal Development Solutions
                            <span id="c++"></span>
                          </li>
                          <li>PHP/MySql Development</li>
                          <li>Web application and Social Networking Solution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={`softstormweb-web-service `} style={{marginTop: "25px"}} ref={ref2}>
                      <div className="content">
                        <h4 className="title">C++ Development</h4>
                        <p>Perhaps the most popular PHP Development framework of present times. Perfect for travel aggregators and similar business. It is light and flexible. Data and logic based services are constructed on this framework.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Codeigniter Migration Service</li>
                          <li>Fast Development using CI</li>
                          <li>
                            Application Development
                            <span id="mashinlerning"></span>
                          </li>
                          <li>Networking Solutions</li>
                          <li>Templating Development using CI</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={`softstormweb-web-service `} style={{marginTop: "25px"}} ref={ref3}>
                      <div className="content">
                        <h4 className="title">Machine Learning</h4>
                        <p>A perfect tool for SME industry and their web Development needs. This framework gives the freedom of deploying highly multifunctional websites quickly. Department level, functional web Development, and data integration are possible with Laravel.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Custom Development</li>
                          <li>SaaS Development</li>
                          <li>
                            Custom Theme Development
                            <span id="controller"></span>
                          </li>
                          <li>Migration to Laravel</li>

                          <li>Extension Development</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className={`softstormweb-web-service `} style={{marginTop: "25px"}} ref={ref4}>
                      <div className="content">
                        <h4 className="title">Controller Development</h4>
                        <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Python Dynamic Website Development</li>
                          <li>Web Application Development using Python</li>
                          <li>Data Science Projects</li>
                          <li>
                            Python Active Directory integration services
                            <span id="axistravelling"></span>
                          </li>
                          <li>Web Crawler Development</li>
                          <li>Migration Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={`softstormweb-web-service `} style={{marginTop: "25px"}} ref={ref5}>
                      <div className="content">
                        <h4 className="title">Axis Travelling </h4>
                        <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Python Dynamic Website Development</li>
                          <li>Web Application Development using Python</li>
                          <li>Data Science Projects</li>
                          <li>
                            Python Active Directory integration services
                            <span id="lasersource"></span>
                          </li>
                          <li>Web Crawler Development</li>
                          <li>Migration Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={`softstormweb-web-service `} style={{marginTop: "25px"}} ref={ref6}>
                      <div className="content">
                        <h4 className="title">Laser Source </h4>
                        <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Python Dynamic Website Development</li>
                          <li>Web Application Development using Python</li>
                          <li>Data Science Projects</li>
                          <li>Python Active Directory integration services</li>
                          <li>Web Crawler Development</li>
                          <li>Migration Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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
