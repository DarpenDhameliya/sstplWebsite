import React, {useState, useEffect, useRef} from "react";
// import singlePost from "../../../assets/images/icon/clicks.png";
import SidePortion from "../SidePortion";
import {servicesticky4, servicesticky1, servicesticky2, servicesticky3, servicesticky5, servicesticky6} from "../../../common/lib/ServiceSticky";
import webimg from "../../../../assets/images/services/web-app-development.webp";
import axios from "../../../common/Axios";
import {Servicestate, Servicestatus} from "../../slice/Service";
import {useDispatch, useSelector} from "react-redux";
const WebService = ({images, serviceContents}) => {
  const [tab, setTab] = useState("");
  const [serviceContent, setServiceContent] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const states = useSelector(Servicestate);
  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);
  // const ref4 = useRef(null);
  // const ref5 = useRef(null);

  // useEffect(() => {
  //   document.title = "SoftStorm - Web Application Developer";

  //   const handleScroll = () => {
  //     const middle = window.innerHeight / 2; // Calculate the middle of the window

  //     const rect1 = ref1.current.getBoundingClientRect();
  //     const rect2 = ref2.current.getBoundingClientRect();
  //     const rect3 = ref3.current.getBoundingClientRect();
  //     const rect4 = ref4.current.getBoundingClientRect();
  //     const rect5 = ref5.current.getBoundingClientRect();

  //     const div1IsMiddle = rect1.top <= middle && rect1.bottom >= middle;
  //     const div2IsMiddle = rect2.top <= middle && rect2.bottom >= middle;
  //     const div3IsMiddle = rect3.top <= middle && rect3.bottom >= middle;
  //     const div4IsMiddle = rect4.top <= middle && rect4.bottom >= middle;
  //     const div5IsMiddle = rect5.top <= middle && rect5.bottom >= middle;

  //     if (div1IsMiddle) {
  //       setTab("php");
  //     } else if (div2IsMiddle) {
  //       setTab("codeigniter");
  //     } else if (div3IsMiddle) {
  //       setTab("laravel");
  //     } else if (div4IsMiddle) {
  //       setTab("nodejs");
  //     } else if (div5IsMiddle) {
  //       setTab("python");
  //     } else {
  //       setTab("");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    if (states.response.result !== undefined) {
      states.response.result.map((e) => {
        if (e.heading === "Web Application Development") {
          console.log("=======", e);
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
    document.title = "Web Application Developer | SoftStorm - Custom Software Development Service Provider Company in Surat, India";

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


  // useEffect(() => {
  //   if (states.response.result === undefined) {
  //     console.log(images)
  //     if (images) {
  //       setImage(images);
  //     }
  //     if (serviceContents) {
  //       setServiceContent(serviceContents);
  //     }
  //   }
  // });

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
      <section className="blogpage-section">
        <header className="service-header haderhide">
          {/* <div className="container"> */}
          <div className="header-nav-box">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className=" d-flex">
                  <div>
                    <a className={`handleservice_header pl-3 pr-3 ${tab === "nodejs" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#nodejs">
                      NODE JS
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header   pl-3 pr-3 ${tab === "php" || tab === "php" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#php">
                      PHP
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header  pl-3 pr-3 ${tab === "laravel" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#laravel">
                      LARAVEL
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header  pl-3 pr-3 ${tab === "codeigniter" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#codeigniter">
                      CODEIGNITER
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={`handleservice_header pl-3 pr-3 ${tab === "python" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#python">
                      PYTHON
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
                <span id="nodejs" style={{paddingTop: "15px"}}></span>
                <h4 className="article-title mt-1">Web App</h4>
                <header className="service-header_small haderhide" id="service-header_id">
                  <div className="container">
                    <div className="header-nav-box">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className=" d-flex">
                            <div>
                              <a className={`handleservice_header pl-2 pr-2 ${tab === "nodejs" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#nodejs">
                                NODE JS
                              </a>
                            </div>
                            <span className="handlespan"> | </span>
                            <div>
                              <a className={`handleservice_header pl-2 pr-2 ${tab === "php" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#php">
                                PHP
                              </a>
                            </div>
                            <span className="handlespan"> | </span>
                            <div>
                              <a className={`handleservice_header pl-2 pr-2 ${tab === "laravel" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#laravel">
                                LARAVEL
                              </a>
                            </div>
                            <span className="handlespan"> | </span>
                            <div>
                              <a className={`handleservice_header  pl-2 pr-2 ${tab === "codeigniter" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#codeigniter">
                                CODEIGNITER
                              </a>
                            </div>
                            <span className="handlespan"> | </span>

                            <div>
                              <a className={`handleservice_header pl-2 pr-2 ${tab === "python" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#python">
                                PYTHON
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
                    <div className='softstormweb-web-service mt-25' ref={ref4} id="div4">
                      <div className="content">
                        <h4 className="title">Node.js</h4>
                        <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Python Dynamic Website Development</li>
                          <li>Web Application Development using Python</li>
                          <li>Data Science Projects</li>
                          <li>Python Active Directory integration services
                          <span id="php"></span></li>
                          <li>Web Crawler Development</li>
                          <li>Migration Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25'  ref={ref1} id="div1">
                      <div className="content">
                        <h4 className="title">PHP Development</h4>
                        <p>If your business demands a website which needs to gather information. Then PHP is the tool of choice. PHP gives web developers the ability to create dynamic web pages, which can collect data from visitors. Perfect for those business concerns which rely on capturing data. Travel Agents, Hospitals and similar concerns should go for PHP.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>
                            Custom PHP Developmente
                          </li>
                          <li>SaaS using PHP</li>
                          <li>E-Commerce Solutions using PHP</li>
                          <li>
                            Portal Development Solutions
                            <span id="laravel"></span>
                          </li>
                          <li>PHP/MySql Development</li>
                          <li>Web application and Social Networking Solution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25' ref={ref3} id="div3">
                      <div className="content">
                        <h4 className="title">Laravel Website Development</h4>
                        <p>A perfect tool for SME industry and their web Development needs. This framework gives the freedom of deploying highly multifunctional websites quickly. Department level, functional web Development, and data integration are possible with Laravel.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Custom Development</li>
                          <li>SaaS Development</li>
                          <li>
                            Custom Theme Development
                            <span id="codeigniter"></span>
                          </li>
                          <li>Migration to Laravel</li>

                          <li>Extension Development</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25' ref={ref2} id="div2">
                      <div className="content">
                        <h4 className="title">Codeigniter Development</h4>
                        <p>Perhaps the most popular PHP Development framework of present times. Perfect for travel aggregators and similar business. It is light and flexible. Data and logic based services are constructed on this framework.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Codeigniter Migration Service</li>
                          <li>Fast Development using CI</li>
                          <li>
                            Application Development
                            <span id="python"></span>
                          </li>
                          <li>Networking Solutions</li>
                          <li>Templating Development using CI</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25' ref={ref5} id="div5">
                      <div className="content">
                        <h4 className="title">Python Development</h4>
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

export default WebService;
