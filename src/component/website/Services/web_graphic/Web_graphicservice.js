import React, {useState, useEffect, useRef} from "react";
import SidePortion from "../SidePortion";
import {servicesticky4, servicesticky1, servicesticky2, servicesticky3, servicesticky5, servicesticky6} from "../../../common/lib/ServiceSticky";
import graimg from "../../../../assets/images/services/web-graphic-designing.webp";
import axios  from "../../../common/Axios";
const Web_graphicservice = () => {
  const [tab, setTab] = useState("");
  const [serviceContent, setServiceContent] = useState('')
  const [image, setImage] = useState('')
  const [dbFetcherr, setDbFetcherr] = useState('')



  useEffect(() => {
    const fetchServiceata = () => {
      axios
        .get("service/service_list", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          result.data.result.map((e) => {
            if(e.heading === 'Web & Graphic Designing'){
              setImage(e.servicepageimg)
              setServiceContent(e.content);
            }
          })
        })
        .catch((err) => {
          setDbFetcherr(err.response.data.error);
        });
    };

    fetchServiceata();
  }, [])
  useEffect(() => {
    document.title = "SoftStorm - Web & Graphic Designing";
  
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
                    <a className={` handleservice_header pl-3 pr-3 ${tab === "webdesign" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#webdesign">
                      WEB DESIGN
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header pl-3 pr-3 ${tab === "uiux" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#uiux">
                      UI & UX DESIGN
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header pl-3 pr-3 ${tab === "reactjs" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#reactjs">
                      REACT JS
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header pl-3 pr-3 ${tab === "viewjs" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#viewjs">
                      VUE JS
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header pl-3 pr-3 ${tab === "logo" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#logo">
                      LOGO BANNER
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>

                  <div>
                    <a className={`handleservice_header pl-3 pr-3 ${tab === "brochur" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#brochur">
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
              <div className="single-post-area">
                <div className="post-thumb">
                  <img src={image} alt="" />
                </div>
                <span id="webdesign" style={{paddingTop: "15px"}}/>
                <h4 className="article-title">Web & Graphic</h4>

                <header className="service-header_small haderhide" id="service-header_id">
                  <div className="container">
                    <div className="header-nav-box">
                      <div className="row align-items-center">
                        <div className="col-lg-12 handlecolgraphicservice">
                          <div className=" d-flex">
                            <div>
                              <a className={` handleservice_header handlefontweb pl-2 pr-2 ${tab === "webdesign" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#webdesign">
                                WEB DESIGN
                              </a>
                            </div>
                            <span className="handlespan"> | </span>
                            <div>
                              <a className={`handleservice_header handlefontweb pl-2 pr-2 ${tab === "uiux" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#uiux">
                                UI & UX DESIGN
                              </a>
                            </div>
                            <span className="handlespan"> | </span>
                            <div>
                              <a className={`handleservice_header handlefontweb pl-2 pr-2 ${tab === "reactjs" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#reactjs">
                                REACT JS
                              </a>
                            </div>
                            <span className="handlespan"> | </span>
                            <div>
                              <a className={`handleservice_header handlefontweb pl-2 pr-2 ${tab === "viewjs" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#viewjs">
                                VUE JS
                              </a>
                            </div>
                            <span className="handlespan"> | </span>
                            <div>
                              <a className={`handleservice_header handlefontweb pl-2 pr-2 ${tab === "logo" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#logo">
                                LOGO BANNER
                              </a>
                            </div>
                            <span className="handlespan"> | </span>

                            <div>
                              <a className={`handleservice_header handlefontweb pl-2 pr-2 ${tab === "brochur" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#brochur">
                                BROCHUR & MOKEUP
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <div dangerouslySetInnerHTML={{__html: serviceContent}} />
                {/* <div className="row">
                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25'  id="div1" >
                      <div className="content">
                        <h4 className="title">WEB DESIGN</h4>
                        <p>If your business demands a website which needs to gather information. Then PHP is the tool of choice. PHP gives web developers the ability to create dynamic web pages, which can collect data from visitors. Perfect for those business concerns which rely on capturing data. Travel Agents, Hospitals and similar concerns should go for PHP.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Custom PHP Developmente</li>
                          <li>SaaS using PHP</li>
                          <li>E-Commerce Solutions using PHP</li>
                          <li>
                            Portal Development Solutions
                            <span id="uiux"/>
                          </li>
                          <li>PHP/MySql Development</li>
                          <li>Web application and Social Networking Solution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25'  id="div2">
                      <div className="content">
                        <h4 className="title"> UI & UX Development</h4>
                        <p>Perhaps the most popular PHP development framework of present times. Perfect for travel aggregators and similar business. It is light and flexible. Data and logic based services are constructed on this framework.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Codeigniter Migration Service</li>
                          <li>Fast Development using CI</li>
                          <li>
                            Application Development
                            <span id="reactjs"/>
                          </li>
                          <li>Networking Solutions</li>
                          <li>Templating Development using CI</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25'  id="div5">
                      <div className="content">
                        <h4 className="title">REACT JS DEVELOPER </h4>
                        <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Python Dynamic Website development</li>
                          <li>Web Application development using Python</li>
                          <li>Data Science Projects</li>
                          <li>
                            Python Active Directory integration services
                            <span id="viewjs"/>
                          </li>
                          <li>Web Crawler Development</li>
                          <li>Migration Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25' id="div4">
                      <div className="content">
                        <h4 className="title"> VUE JS Development</h4>
                        <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Python Dynamic Website development</li>
                          <li>Web Application development using Python</li>
                          <li>Data Science Projects</li>
                          <li>
                            Python Active Directory integration services
                            <span id="logo"/>
                          </li>
                          <li>Web Crawler Development</li>
                          <li>Migration Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25' id="div3">
                      <div className="content">
                        <h4 className="title">LOGO BANNER</h4>
                        <p>A perfect tool for SME industry and their web development needs. This framework gives the freedom of deploying highly multifunctional websites quickly. Department level, functional web development, and data integration are possible with Laravel.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Custom development</li>
                          <li>Saas Development</li>
                          <li>
                            Custom theme development
                            <span id="brochur"/>
                          </li>
                          <li>Migration to Laravel</li>

                          <li>Extension development</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25' id="div6">
                      <div className="content">
                        <h4 className="title"> BROCHUR & MOKEUP </h4>
                        <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Python Dynamic Website development</li>
                          <li>Web Application development using Python</li>
                          <li>Data Science Projects</li>
                          <li>Python Active Directory integration services</li>
                          <li>Web Crawler Development</li>
                          <li>Migration Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
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
