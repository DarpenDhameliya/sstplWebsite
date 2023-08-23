import React, { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../../assets/images/logo.webp";
import image from "../../../assets/images/services banner.webp";
import aboutheader1 from "../../../assets/images/aboutus_header/appfutura.webp";
import aboutheader2 from "../../../assets/images/aboutus_header/clutch.webp";
import aboutheader3 from "../../../assets/images/aboutus_header/goodfirms.webp";
import aboutheader4 from "../../../assets/images/aboutus_header/glassdoor.webp";
import aboutheader5 from "../../../assets/images/aboutus_header/upwork.webp";
import bullet1 from "../../../assets/images/point100.webp";
import counterIconOne from "../../../assets/images/icon/counter-icon-1.svg";
import counterIconTwo from "../../../assets/images/icon/counter-icon-2.svg";
import counterIconFour from "../../../assets/images/icon/counter-icon-4.svg";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { IconSlice, Iconstate, Iconstatus } from "@/redux/slice/IconSlice";
import StickyMenu from "../SubComponent/lib/StickyMenu";
import { Logostate, LogoSlice, Logostatus } from "@/redux/slice/logoSlice";
import { socialMediaLinks } from "../SubComponent/FooterLink";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import TopHeader from "./TopHeader";
const HeadermainLink = dynamic(() => import("../SubComponent/FooterLink").then((module) => module.HeadermainLink));
const SocialLink = dynamic(() => import("../SubComponent/FooterLink").then((module) => module.SocialLink));
const DynamicHeaderService = dynamic(() => import("../SubComponent/FooterLink").then((module) => module.HeaderService));

const Header = ({ action, cartToggle }) => {
  const [selectedLogo, setSelectedLogo] = useState("");
  const [fields, setFields] = useState([]);

  const dispatch = useDispatch();
  const states = useSelector(Iconstate);
  const logostates = useSelector(Logostate);
  const router = useRouter();

  const { pathname } = router;
  const isNotFound = pathname === "/404";

  function getCurrentFormattedDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); 
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${month}-${day}`;
  }
  useEffect(() => {
    dispatch(IconSlice());
    StickyMenu();
    dispatch(LogoSlice());
  }, []);

  useEffect(() => {
    if(isNotFound){
      document.querySelector('.softstormweb-header_1').style.display = 'none'
      document.querySelector('.softstormweb-header_area').style.display = 'none'
    } else {
      document.querySelector('.softstormweb-header_1').style.display = 'flex'
      document.querySelector('.softstormweb-header_area').style.display = 'block'

    }
  })
  

  useEffect(() => {
    if (states.status === "loading") {
    } else if (states.status === "succeeded") {
      setFields(states.response.result[0].data);
      dispatch(Iconstatus());
    } else if (states.status === "failed") {
      dispatch(Iconstatus());
    } else {
    }

    if (logostates.status === "loading") {
    } else if (logostates.status === "succeeded") {
      let data = logostates.response.result;
      const newFormattedDate = getCurrentFormattedDate();
      let finddatedata = data.find((e) => e.date.slice(5, 10) === newFormattedDate);
      if (finddatedata === undefined) {
        setSelectedLogo("");
      } else {
        setSelectedLogo(finddatedata.image);
      }
      dispatch(Logostatus());
    } else if (logostates.status === "failed") {
      dispatch(Logostatus());
    } else {
    }
  }, [states, logostates]);
  return (
    <>
      <header className="softstormweb-header_1 hidebtn">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-6">
              {fields.length > 0 ? (
                fields.map((e, index) => {
                  return (
                    <React.Fragment key={index}>
                      <SocialLink href={{ pathname: e.link }} className="ml-15">
                        <i className={`fab ${e.icon}`} />
                      </SocialLink>
                    </React.Fragment>
                  );
                })
              ) : (
                socialMediaLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      <SocialLink href={{ pathname: link.href }} className={link.className}>
                        <i className={link.iconClass} />
                      </SocialLink>
                    </React.Fragment>
                  ))
              )}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 order-3 order-sm-2 handlerightheader">
              <a href="mailto:contact@softstorm.in" rel="noopener noreferrer" className="pl-0 d-flex align-items-center" style={{ color: "#f1f1f1" }}>
                <i className="fa fa-envelope mr-2" style={{ fontSize: "18px", color: "#f1f1f1" }} />
                <div className="ml-1 fw-600">contact@softstorm.in</div>
              </a>
              <span style={{ marginLeft: "20px", color: "#fff" }}> | </span>

              <a href="tel:+91261-3560756" className="pl-0  d-flex align-items-center ml-20">
                <i className="fa fa-phone mr-2 " style={{ fontSize: "18px", color: "#f1f1f1" }} />
                <div className="ml-1 fs-16 fw-600" style={{ color: "#f1f1f1" }}>
                  +91261-3560756
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <TopHeader fields={fields} /> */}

      <header className="softstormweb-header_area softstormweb-header_sticky">
        <div className="container">
          <div className="menu-header ">
            <div className="dskt-logo">
              <Link className="nav-brand" href="/">
                <Image src={selectedLogo ? selectedLogo : logo} alt="Logo" layout="responsive" className="max_width_web" width={250} height={100} />
              </Link>{" "}
            </div>
            <div className="softstrom_header  handlenavigation" role="navigation">
              <ul className="nav-list">
                <li className={`megamenu `}>
                  <HeadermainLink href="/">Home</HeadermainLink>
                </li>
                <li className="megamenu">
                  <HeadermainLink href="/about-us">About Us</HeadermainLink>
                  <div className="menu-dropdown">
                    <div className="menu-block-set">
                      <div className="container submenuList ">
                        <div className="menu-block-a">
                          <div className="row">
                            <div className="col-lg-7 d-flex mega-menu-blocksmain ">
                              <div className="row handle_blocksmain_row">
                                <div className="col-xl-5 col-lg-6 handle_aboutHeader">
                                  <div>
                                    <ul className="menu-li-link">
                                      <li className="mb-2">
                                        <Link scroll={false} href="/about-us" className="handlesub-menu p-2">
                                          <div className="aboutheadre_left">
                                            <Image src={bullet1} alt="symbol" className="header_icno" />
                                          </div>{" "}
                                          <span className="ml-15 hoverLink">About Us</span>{" "}
                                        </Link>
                                      </li>
                                      <li className="mb-2">
                                        <Link scroll={false} href="/testimonial" className="handlesub-menu p-2">
                                          <div className="aboutheadre_left">
                                            <Image src={bullet1} alt="symbol" className="header_icno" />
                                          </div>{" "}
                                          <span className="ml-15 hoverLink">Testimonial</span>{" "}
                                        </Link>
                                      </li>
                                      <li className="mb-2">
                                        <Link scroll={false} href="/" className="handlesub-menu p-2">
                                          <div className="aboutheadre_left">
                                            <Image src={bullet1} alt="symbol" className="header_icno" />
                                          </div>{" "}
                                          <span className="ml-15 hoverLink">Blog</span>{" "}
                                        </Link>
                                      </li>
                                      <li className="mb-2">
                                        <a rel="noreferrer" target="_blank" href="https://www.google.com/maps/uv?pb=!1s0x3be04f50264611d1%3A0x76746ef930af1752!5sSoftStorm%20Technosys%20Pvt.%20Ltd.!15sCgIgARICEAE&imagekey=!1e10!2sAF1QipM9setE_GO3u642xJu5mJb6uNQ7a20enuyXAxag" className="handlesub-menu p-2">
                                          <div className="aboutheadre_left">
                                            <Image src={bullet1} alt="symbol" className="header_icno" />
                                          </div>
                                          <span className="ml-15 hoverLink">Life@SSTPL</span>{" "}
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 handle_address_blick ">
                                  <div className="mega-menu-blocks">
                                    <p>Create disruptive business innovations through high-end creativity and world-class alliances.</p>
                                    <h6 className="mt-3">Contact</h6>
                                    <div className="row">
                                      <div className="col-lg-12 mt-2">
                                        <a href="tel:+91261-3560756" className="pl-0 pb-1 d-flex align-items-center">
                                          <i
                                            className="fa fa-phone mr-2"
                                            style={{
                                              fontSize: "18px",
                                              color: "#505056",
                                            }}
                                          />
                                          <div className="ml-1" style={{ color: "#505056" }}>
                                            +91261-3560756
                                          </div>
                                        </a>
                                      </div>
                                      <div className="col-lg-12 mt-1">
                                        <a href="tel:+919099919947" className="pl-0 pb-1 d-flex align-items-center">
                                          <i
                                            className="fa fa-phone mr-2"
                                            style={{
                                              fontSize: "18px",
                                              color: "#505056",
                                            }}
                                          />
                                          <div className="ml-1" style={{ color: "#505056" }}>
                                            +91 90999 19947
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <h6 className="mt-3">Email</h6>
                                    <a href="mailto:contact@softstorm.in" rel="noopener noreferrer" className="pl-0 d-flex align-items-center mt-1" style={{ color: "#505056" }}>
                                      <i
                                        className="fa fa-envelope mr-2"
                                        style={{
                                          fontSize: "18px",
                                          color: "#505056",
                                        }}
                                      />
                                      <div className="ml-1">contact@softstorm.in</div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-12 pl-0 menu_hire_about">
                                  <div className="container pt-2 pb-2 pr-0 pl-0">
                                    <div className="menu-extra-info-inner d-flex justify-content-between">
                                      <div className="d-flex align-items-center">
                                        <p>Send Us Inquiry on:</p>
                                        <a href="mailto:hr.softstorm@gmail.com" rel="noopener noreferrer">
                                          <h6 className="pl-2">hr.softstorm@gmail.com </h6>
                                        </a>
                                      </div>
                                      <button type="button" className="main-btn hidebtn fs-17" data-toggle="modal" data-target="#exampleModalCenter">
                                        HIRE US
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="mega-menu-blocks_part2 ">
                                <div className="menu-inner-block-a">
                                  <div className="row">
                                    <h5 className="mb-2">Awards & Recognition</h5>
                                    <div className="col-lg-12 mt-3 mb-3 d-flex justify-content-between flex-sm-wrap">
                                      <ul style={{ display: "contents" }}>
                                        <li>
                                          <Image src={aboutheader5} alt="award" className="setAward" />
                                        </li>
                                        <li>
                                          <Image src={aboutheader1} alt="award" className="setAward" />
                                        </li>
                                        <li>
                                          <Image src={aboutheader4} alt="award" className="setAward" />
                                        </li>
                                        <li>
                                          <Image src={aboutheader3} alt="award" className="setAward" />
                                        </li>
                                        <li>
                                          <Image src={aboutheader2} alt="award" className="setAward" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="row mt-2 mb-3">
                                    <div className="col-lg-4">
                                      <div className="text-center">
                                        <div className="aboutp_2">
                                          <Image src={counterIconOne} alt="" className="imgheader" />
                                        </div>
                                        <h6>30+</h6>
                                        <p>Globle Client</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="text-center">
                                        <div className="aboutp_2">
                                          <Image src={counterIconTwo} alt="" className="imgheader" />
                                        </div>
                                        <h6>50</h6>
                                        <p>Success Project</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="text-center">
                                        <div className="aboutp_2">
                                          <Image src={counterIconFour} alt="" className="imgheader" />
                                        </div>
                                        <h6>18+</h6>
                                        <p>Tech Experts team</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="megamenu">
                  <HeadermainLink href="/our-service"> Our Service</HeadermainLink>
                  <div className="menu-dropdown">
                    <div className="menu-block-set">
                      <div className="container submenuList ">
                        <div className="menu-block-a_service">
                          <div
                            style={{
                              borderRight: "1px solid #dee2e6",
                              paddingRight: "10px",
                            }}
                          >
                            <div className="menu-block-service pb-2">
                              <div className="mega-menu-blocks1">
                                <h6 className="mb-2 pl-1"> Web App</h6>
                                <ul className="menu-li-link ">
                                  <DynamicHeaderService href="/web-application-developement#nodejs" leanguage="Node.js" />
                                  <DynamicHeaderService href="/web-application-developement#php" leanguage="PHP" />
                                  <DynamicHeaderService href="/web-application-developement#laravel" leanguage="Laravel" />
                                  <DynamicHeaderService href="/web-application-developement#codeigniter" leanguage="Codeigniter" />
                                  <DynamicHeaderService href="/web-application-developement#python" leanguage="Python" />
                                </ul>
                              </div>
                              <div className="mega-menu-blocks1">
                                <h6 className="mb-2 pl-1"> Desktop & Embeded</h6>
                                <ul className="menu-li-link ">
                                  <DynamicHeaderService href="/desktop-software-developement#c" leanguage="C#" />
                                  <DynamicHeaderService href="/desktop-software-developement#c++" leanguage="C++" />
                                  <DynamicHeaderService href="/desktop-software-developement#mashinlerning" leanguage="Machine Learning" />
                                  <DynamicHeaderService href="/desktop-software-developement#controller" leanguage="Controller Based" />
                                  <DynamicHeaderService href="/desktop-software-developement#axistravelling" leanguage="Axis Traveling" />
                                  <DynamicHeaderService href="/desktop-software-developement#lasersource" leanguage="Laser Source" />
                                </ul>
                              </div>
                              <div className="mega-menu-blocks">
                                <h6 className="mb-2 pl-1"> Web & Graphic</h6>
                                <ul className="menu-li-link " style={{ marginRight: "12px" }}>
                                  <DynamicHeaderService href="/web_graphic-designing#webdesign" leanguage="Web Designing" />
                                  <DynamicHeaderService href="/web_graphic-designing#uiux" leanguage="UI/UX" />
                                  <DynamicHeaderService href="/web_graphic-designing#reactjs" leanguage="React.js" />
                                  <DynamicHeaderService href="/web_graphic-designing#viewjs" leanguage="Vue.js" />
                                  <DynamicHeaderService href="/web_graphic-designing#logo" leanguage="Logo & Banner" />
                                  <DynamicHeaderService href="/web_graphic-designing#brochur" leanguage="Brochure & Mokeup" />
                                </ul>
                              </div>
                            </div>
                            <div className="menu-block-service pt-2" style={{ borderTop: "1px solid #dee2e6" }}>
                              <div className="mega-menu-blocks1">
                                <h6 className="mb-2 pl-1"> Mobile App</h6>
                                <ul className="menu-li-link ">
                                  <DynamicHeaderService href="/mobile-application-developement#flutter" leanguage="Flutter" />
                                  <DynamicHeaderService href="/mobile-application-developement#android" leanguage="Android" />
                                  <DynamicHeaderService href="/mobile-application-developement#ios" leanguage="iOS" />
                                </ul>
                              </div>
                              <div className="mega-menu-blocks1">
                                <h6 className="mb-2 pl-1"> Digital Marketing</h6>
                                <ul className="menu-li-link ">
                                  <DynamicHeaderService href="/digital-marketing#seo" leanguage="SEO" />
                                  <DynamicHeaderService href="/digital-marketing#smm" leanguage="SMM" />
                                  <DynamicHeaderService href="/digital-marketing#political" leanguage="Political Profile" />
                                  <DynamicHeaderService href="/digital-marketing#mobileapp" leanguage="Mobile App Promotion" />
                                </ul>
                              </div>
                              <div className="mega-menu-blocks">
                                <h6 className="mb-2 pl-1"> Enterprise Services</h6>
                                <ul className="menu-li-link " style={{ marginRight: "12px" }}>
                                  <DynamicHeaderService href="/enterprise-services#erp" leanguage="ERP" />
                                  <DynamicHeaderService href="/enterprise-services#crm" leanguage="CRM" />
                                  <DynamicHeaderService href="/enterprise-services#accounting" leanguage="Customized Accounting" />
                                </ul>
                              </div>
                            </div>
                          </div>
                          <Image height={500} width={1000} src={image} alt="sstpl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="megamenu">
                  <HeadermainLink href="/our-work"> Our Work </HeadermainLink>
                </li>
                <li className="megamenu">
                  <HeadermainLink href="/career">Career </HeadermainLink>
                </li>
                <li className="megamenu">
                  <HeadermainLink href="/contact-us">Contact Us</HeadermainLink>
                </li>
              </ul>
              <button type="button" onClick={cartToggle} className="main-btn hidebtn fs-17 fw-600" data-toggle="modal" data-target="#exampleModalCenter">
                HIRE US
              </button>
            </div>
            <div className="softstormweb-header_btn_box text-right handlebtnmobil">
              <div onClick={(e) => action(e)} className="toggle-btn ml-30 mr-30 canvas_open d-lg-none d-block">
                <i className="fa fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
