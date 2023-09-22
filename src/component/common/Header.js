import React, {useEffect, useState} from "react";
import StickyMenu from "./lib/StickyMenu";
import logo from "../../assets/images/logo.webp";
import {Link, useHistory} from "react-router-dom";
import aboutheader1 from "../../assets/images/aboutus_header/appfutura.webp";
import aboutheader2 from "../../assets/images/aboutus_header/clutch.webp";
import aboutheader3 from "../../assets/images/aboutus_header/glassdoor.webp";
import aboutheader4 from "../../assets/images/aboutus_header/goodfirms.webp";
import aboutheader5 from "../../assets/images/aboutus_header/upwork.webp";
import bullet1 from "../../assets/images/point100.webp";
import counterIconOne from "../../assets/images/icon/counter-icon-1.svg";
import counterIconTwo from "../../assets/images/icon/counter-icon-2.svg";
import counterIconFour from "../../assets/images/icon/counter-icon-4.svg";
import image from "../../assets/images/services banner.webp";
import {HashLink} from "react-router-hash-link";
import "../../assets/css/Fonts.css";
import {IconSlice, Iconstate, Iconstatus} from "../website/slice/IconSlice";
import {useDispatch, useSelector} from "react-redux";

const Header = ({action, cartToggle}) => {
  const [fields, setFields] = useState([]);
  const dispatch = useDispatch();
  const states = useSelector(Iconstate);
  useEffect(() => {
    StickyMenu();
    dispatch(IconSlice());

    if (states.status === "loading") {
    } else if (states.status === "succeeded") {
      setFields(states.response.result[0].data);
      dispatch(Iconstatus());
    } else if (states.status === "failed") {
      dispatch(Iconstatus());
    } else {
    }
  }, [states.states]);


  return (
    <>
      <header className="softstormweb-header_1 hidebtn">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-6">
              {fields.length > 0 ? (
                fields.map((e) => {
                  return (
                    <Link key={e.icon} rel="noreferrer" className="ml-15" to={{pathname: e.link}} target="_blank">
                      <i className={`fab ${e.icon}`} />
                    </Link>
                  );
                })
              ) : (
                <>
                  <Link rel="noreferrer" className="ml-15" to={{pathname: "https://www.facebook.com/softstorm.in"}} target="_blank">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link rel="noreferrer" className="ml-15" target="_blank" to={{pathname: "https://twitter.com/softstorm_in"}}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link rel="noreferrer" className="ml-15" target="_blank" to={{pathname: "https://www.linkedin.com/company/softstorm-in"}}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link rel="noreferrer" className="ml-15" target="_blank" to={{pathname: "https://www.instagram.com/softstorm.in"}}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link rel="noreferrer" className="ml-15" target="_blank" to={{pathname: "https://wa.me/912613560756"}}>
                    <i className="fab fa-whatsapp" />
                  </Link>
                  <Link rel="noreferrer" className="ml-15" target="_blank" to={{pathname: "skype:softstorminfosys?chat"}}>
                    <i className="fab fa-skype" />
                  </Link>
                </>
              )}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 order-3 order-sm-2 handlerightheader">
              <a href="mailto:contact@softstorm.in" rel="noopener noreferrer" className="pl-0 d-flex align-items-center" style={{color: "#f1f1f1"}}>
                <i className="fa fa-envelope mr-2" style={{fontSize: "18px", color: "#f1f1f1"}} />
                <div className="ml-1 fw-600">contact@softstorm.in</div>
              </a>
              <span style={{marginLeft: "20px", color: "#fff"}}> | </span>

              <a href="tel:+91261-3560756" className="pl-0  d-flex align-items-center ml-20">
                <i className="fa fa-phone mr-2 " style={{fontSize: "18px", color: "#f1f1f1"}} />
                <div className="ml-1 fs-16 fw-600" style={{color: "#f1f1f1"}}>
                  +91261-3560756
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>

      <header className="softstormweb-header_area softstormweb-header_sticky">
        <div className="container">
          <div className="menu-header ">
            {/* <div className="menu-logo"> */}
            <div className="dskt-logo">
              <Link className="nav-brand" to="/">
                <img src={logo} alt="Logo" style={{padding: "10px"}} />{" "}
              </Link>{" "}
            </div>
            {/* </div> */}
            <div className="softstrom_header d-flex align-items-center handlenavigation" role="navigation">
              <ul className="nav-list">
                <li className={`megamenu `}>
                  <Link to="/" className={`menu-links`}>
                    Home
                  </Link>
                </li>
                <li className="megamenu">
                  <Link to="/about-us" className={`menu-links `}>
                    About Us
                  </Link>
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
                                      {/* <li className='mb-2'><Link to="/about" className='b-menu p-1' ><div className='handlesub_menu_icon'><i className="fal fa-angle-right" style={{ fontSize: '25px' }} /></div> <span className='ml-15 hoverLink' style={{ fontSize: "15px" }}>About Us</span> </Link></li>
                                      <li className='mb-2'><Link to="/testimonial" className='handlesub-menu p-1' ><div className='handlesub_menu_icon'><i className="fal fa-angle-right" style={{ fontSize: '25px' }} /></div> <span className='ml-15 hoverLink' style={{ fontSize: "15px" }}>Testimonial</span> </Link></li> */}
                                      <li className="mb-2">
                                        <Link to="/about-us" className="handlesub-menu p-2">
                                          <div className="aboutheadre_left">
                                            <img src={bullet1} alt="symbol" className="header_icno" />
                                          </div>{" "}
                                          <span className="ml-15 hoverLink">About Us</span>{" "}
                                        </Link>
                                      </li>
                                      <li className="mb-2">
                                        <Link to="/testimonial" className="handlesub-menu p-2">
                                          <div className="aboutheadre_left">
                                            <img src={bullet1} alt="symbol" className="header_icno" />
                                          </div>{" "}
                                          <span className="ml-15 hoverLink">Testimonial</span>{" "}
                                        </Link>
                                      </li>
                                      <li className="mb-2">
                                        <Link to="/" className="handlesub-menu p-2">
                                          <div className="aboutheadre_left">
                                            <img src={bullet1} alt="symbol" className="header_icno" />
                                          </div>{" "}
                                          <span className="ml-15 hoverLink">Blog</span>{" "}
                                        </Link>
                                      </li>
                                      <li className="mb-2">
                                        <a rel="noreferrer" target="_blank" href="https://www.google.com/maps/uv?pb=!1s0x3be04f50264611d1%3A0x76746ef930af1752!5sSoftStorm%20Technosys%20Pvt.%20Ltd.!15sCgIgARICEAE&imagekey=!1e10!2sAF1QipM9setE_GO3u642xJu5mJb6uNQ7a20enuyXAxag" className="handlesub-menu p-2">
                                          <div className="aboutheadre_left">
                                            <img src={bullet1} alt="symbol" className="header_icno" />
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
                                          <div className="ml-1" style={{color: "#505056"}}>
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
                                          <div className="ml-1" style={{color: "#505056"}}>
                                            +91 90999 19947
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <h6 className="mt-3">Email</h6>
                                    {/* <div className="d-flex .justify-content-start align-items-center mt-2">
                                      {/* <i className="fa fa-envelope" aria-hidden="true"></i> *}
                                      <BsEnvelopeFill />
                                      <p className="pl-2">
                                        {" "}
                                        contact@softstorm.in
                                      </p>
                                    </div> */}
                                    <a href="mailto:contact@softstorm.in" rel="noopener noreferrer" className="pl-0 d-flex align-items-center mt-1" style={{color: "#505056"}}>
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
                                      <button type="button" onClick={cartToggle} className="main-btn hidebtn fs-17" data-toggle="modal" data-target="#exampleModalCenter">
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
                                      <ul style={{display: "contents"}}>
                                        <li>
                                          <img src={aboutheader5} alt="award" className="setAward" />
                                        </li>
                                        <li>
                                          <img src={aboutheader1} alt="award" className="setAward" />
                                        </li>
                                        <li>
                                          <img src={aboutheader4} alt="award" className="setAward" />
                                        </li>
                                        <li>
                                          <img src={aboutheader3} alt="award" className="setAward" />
                                        </li>
                                        <li>
                                          <img src={aboutheader2} alt="award" className="setAward" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="row mt-2 mb-3">
                                    <div className="col-lg-4">
                                      <div className="text-center">
                                        <div className="aboutp_2">
                                          {/* <i className="fa fa-users" style={{ fontSize: "40px" }} aria-hidden="true"></i> */}
                                          <img src={counterIconOne} alt="" className="imgheader" />
                                        </div>
                                        <h6>30+</h6>
                                        <p>Globle Client</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="text-center">
                                        <div className="aboutp_2">
                                          {/* <i className="fa fa-graduation-cap" style={{ fontSize: "40px" }} aria-hidden="true"></i> */}
                                          <img src={counterIconTwo} alt="" className="imgheader" />
                                        </div>
                                        <h6>50</h6>
                                        <p>Success Project</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="text-center">
                                        <div className="aboutp_2">
                                          {/* <i className="fa fa-github-alt" style={{ fontSize: "40px" }} aria-hidden="true"></i> */}
                                          <img src={counterIconFour} alt="" className="imgheader" />
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
                  <Link to="/our-service" className={`menu-links `}>
                    Our Service
                  </Link>
                  {/* <div className="menu-dropdown" style={{opacity:'1'}}> */}
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
                                  <li className="mb-1">
                                    <HashLink to="/web-application-developement#nodejs" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Node.js</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/web-application-developement#php" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">PHP</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/web-application-developement#laravel" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Laravel</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/web-application-developement#codeigniter" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Codeigniter</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/web-application-developement#python" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Python</span>{" "}
                                    </HashLink>
                                  </li>
                                </ul>
                              </div>
                              <div className="mega-menu-blocks1">
                                <h6 className="mb-2 pl-1"> Desktop & Embeded</h6>
                                <ul className="menu-li-link ">
                                  <li className="mb-1">
                                    <HashLink to="/desktop-software-developement#c" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">C#</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/desktop-software-developement#c++" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">C++</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/desktop-software-developement#mashinlerning" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Machine Learning</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/desktop-software-developement#controller" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Controller Based</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/desktop-software-developement#axistravelling" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Axis Traveling</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/desktop-software-developement#lasersource" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Laser Source</span>{" "}
                                    </HashLink>
                                  </li>
                                </ul>
                              </div>
                              <div className="mega-menu-blocks">
                                <h6 className="mb-2 pl-1"> Web & Graphic</h6>
                                <ul className="menu-li-link " style={{marginRight: "12px"}}>
                                  <li className="mb-1">
                                    <HashLink to="/web_graphic-designing#webdesign" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Web Designing</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/web_graphic-designing#uiux" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">UI/UX</span>{" "}
                                    </HashLink>
                                  </li>

                                  <li className="mb-1">
                                    <HashLink to="/web_graphic-designing#reactjs" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">React.js</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/web_graphic-designing#viewjs" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Vue.js</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/web_graphic-designing#logo" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Logo & Banner</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/web_graphic-designing#brochur" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Brochure & Mokeup</span>{" "}
                                    </HashLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="menu-block-service pt-2" style={{borderTop: "1px solid #dee2e6"}}>
                              <div className="mega-menu-blocks1">
                                <h6 className="mb-2 pl-1"> Mobile App</h6>
                                <ul className="menu-li-link ">
                                  <li className="mb-1">
                                    <HashLink to="/mobile-application-developement#flutter" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" style={{width: "25px"}} />
                                      </div>{" "}
                                      <span className="header_service_span ">Flutter</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/mobile-application-developement#android" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Android</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/mobile-application-developement#ios" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">iOS</span>{" "}
                                    </HashLink>
                                  </li>
                                </ul>
                              </div>
                              <div className="mega-menu-blocks1">
                                <h6 className="mb-2 pl-1"> Digital Marketing</h6>
                                <ul className="menu-li-link ">
                                  <li className="mb-1">
                                    {" "}
                                    <HashLink to="/digital-marketing#seo" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="ml-15 hoverLink" e={{fontSize: "15px"}}>
                                        SEO
                                      </span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/digital-marketing#smm" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">SMM</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/digital-marketing#political" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Political Profile</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/digital-marketing#mobileapp" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Mobile App Promotion</span>{" "}
                                    </HashLink>
                                  </li>
                                </ul>
                              </div>
                              <div className="mega-menu-blocks">
                                <h6 className="mb-2 pl-1"> Enterprise Services</h6>
                                <ul className="menu-li-link " style={{marginRight: "12px"}}>
                                  <li className="mb-1">
                                    <HashLink to="/enterprise-services#erp" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">ERP</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/enterprise-services#crm" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">CRM</span>{" "}
                                    </HashLink>
                                  </li>
                                  <li className="mb-1">
                                    <HashLink to="/enterprise-services#accounting" className=" p-1">
                                      <div>
                                        <img src={bullet1} alt="symbol" className="header_icno" />
                                      </div>{" "}
                                      <span className="header_service_span ">Customized Accounting</span>{" "}
                                    </HashLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <img src={image} alt="sstpl" />
                          {/* <h1>sstpl</h1> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="megamenu">
                  <Link to="/our-work" className={`menu-links `}>
                    Our Work
                  </Link>
                </li>
                <li className="megamenu">
                  <Link to="/career" className={`menu-links `}>
                    Career
                  </Link>
                </li>
                <li className="megamenu">
                  <Link to="/contact-us" className={`menu-links `}>
                    Contact Us
                  </Link>
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
