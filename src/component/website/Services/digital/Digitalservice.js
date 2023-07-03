import React, {useState, useEffect, useRef} from "react";
import SidePortion from "../SidePortion";
import {servicesticky4, servicesticky1, servicesticky2, servicesticky3, servicesticky5, servicesticky6} from "../../../common/lib/ServiceSticky";
import digimg from "../../../../assets/images/services/digital-marketing.webp";
import axios from "../../../common/Axios";
const Digitalservice = () => {
  const [tab, setTab] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState('')
  const [serviceContent, setServiceContent] = useState('')

  const [image, setImage] = useState('')

  var filterdata;


  useEffect(() => {
    document.title = "SoftStorm - Digital Marketing";

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
    const fetchServiceata = () => {
      axios
        .get("service/service_list", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          result.data.result.map((e) => {
            if(e.heading === 'Digital Marketing'){
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
      <section className="blogpage-section">
        <header className="service-header haderhide">
          <div className="header-nav-box">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className=" d-flex">
                  <div>
                    <a className={`pl-3 pr-3 handleservice_header ${tab === "seo" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#seo" onClick={handleclick}>
                      SEO
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={` handleservice_header pl-3 pr-3 ${tab === "smm" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#smm" onClick={handleclick}>
                      SMM
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={` handleservice_header pl-3 pr-3 ${tab === "political" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#political" onClick={handleclick}>
                      POLITICAL PROFILE
                    </a>
                  </div>
                  <span style={{margin: "12px 5px 0 ", color: "white"}}>|</span>
                  <div>
                    <a className={` handleservice_header pl-3 pr-3 ${tab === "mobileapp" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#mobileapp" onClick={handleclick}>
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
              <div className="single-post-area">
                <div className="post-thumb">
                  <img src={image} alt="" />
                </div>
                <span id="seo" style={{paddingTop: "15px"}}></span>
                <h4 className="article-title">Digital Marketing</h4>

                <header className="service-header_small haderhide ">
                  {/* <div className="container"> */}
                  <div className="header-nav-box">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <div className=" d-flex">
                          <div>
                            <a className={`ml-2 handleservice_header   pl-2 pr-2  ${tab === "seo" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#seo" onClick={handleclick}>
                              SEO
                            </a>
                          </div>
                          <span className="handlespan"> | </span>
                          <div>
                            <a className={`handleservice_header   pl-2 pr-2  ${tab === "smm" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#smm" onClick={handleclick}>
                              SMM
                            </a>
                          </div>
                          <span className="handlespan"> | </span>
                          <div>
                            <a className={`handleservice_header   pl-2 pr-2 ${tab === "political" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#political" onClick={handleclick}>
                              POLITICAL PROFILE
                            </a>
                          </div>
                          <span className="handlespan"> | </span>
                          <div>
                            <a className={`handleservice_header   pl-2 pr-2  ${tab === "mobileapp" ? "subHadactive" : ""}`} style={{color: "#fff", paddingTop: "12px"}} href="#mobileapp" onClick={handleclick}>
                              MOBILE APP PROMOTION
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </header>
                <div dangerouslySetInnerHTML={{__html: serviceContent}} />

                {/* <div className="row">
                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25'  id="div1">
                      <div className="content">
                        <h4 className="title">SEO</h4>
                        <p>If your business demands a website which needs to gather information. Then PHP is the tool of choice. PHP gives web developers the ability to create dynamic web pages, which can collect data from visitors. Perfect for those business concerns which rely on capturing data. Travel Agents, Hospitals and similar concerns should go for PHP.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Custom PHP Developmente</li>
                          <li>SaaS using PHP</li>
                          <li>E-Commerce Solutions using PHP</li>
                          <li>
                            Portal Development Solutions
                            <span id="smm"></span>
                          </li>
                          <li>PHP/MySql Development</li>
                          <li>Web application and Social Networking Solution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25' id="div2">
                      <div className="content">
                        <h4 className="title">SMM</h4>
                        <p>Perhaps the most popular PHP development framework of present times. Perfect for travel aggregators and similar business. It is light and flexible. Data and logic based services are constructed on this framework.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Codeigniter Migration Service</li>
                          <li>Fast Development using CI</li>
                          <li>
                            <span id="political"></span>
                            Application Development
                          </li>
                          <li>Networking Solutions</li>
                          <li>Templating Development using CI</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25' id="div3">
                      <div className="content">
                        <h4 className="title">POLITICAL PROFILE</h4>
                        <p>A perfect tool for SME industry and their web development needs. This framework gives the freedom of deploying highly multifunctional websites quickly. Department level, functional web development, and data integration are possible with Laravel.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Custom development</li>
                          <li>Saas Development</li>
                          <li>
                            Custom theme development
                            <span id="mobileapp"></span>
                          </li>
                          <li>Migration to Laravel</li>
                          <li>Extension development</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className='softstormweb-web-service mt-25' id="div4">
                      <div className="content">
                        <h4 className="title">MOBILE APP PROMOTION</h4>
                        <p>Perhaps the most popular PHP development framework of present times. Perfect for travel aggregators and similar business. It is light and flexible. Data and logic based services are constructed on this framework.</p>
                        <h6>SoftStorm Provides:</h6>
                        <ul className="ml-15 mt-2 handlelist">
                          <li>Codeigniter Migration Service</li>
                          <li>Fast Development using CI</li>
                          <li>Application Development</li>
                          <li>Networking Solutions</li>
                          <li>Templating Development using CI</li>
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

export default Digitalservice;
