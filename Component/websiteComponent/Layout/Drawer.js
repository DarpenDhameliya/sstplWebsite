/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { Iconstate, Iconstatus } from "@/redux/slice/IconSlice";
import { SocialLink, socialMediaLinks } from "../SubComponent/FooterLink";
import { useDispatch, useSelector } from "react-redux";

function Drawer({ drawer, action, cartToggle }) {
  const [size, setSize] = useState("0px");
  const [item, setItem] = useState("home");
  const dispatch = useDispatch();
  const [fields, setFields] = useState([]);
  const states = useSelector(Iconstate);

  const handler = (e, value, sizes) => {
    e.preventDefault();
    if (value === "about-us" || value === "testimoial" || value === "value_home" || value === "value_home_img") {
      action(e);
    }
    if (value === "value_home_img") {
      let url = "https://www.google.com/maps/uv?pb=!1s0x3be04f50264611d1%3A0x76746ef930af1752!5sSoftStorm%20Technosys%20Pvt.%20Ltd.!15sCgIgARICEAE&imagekey=!1e10!2sAF1QipM9setE_GO3u642xJu5mJb6uNQ7a20enuyXAxag";
      window.open(url, "_blank");
    }
    if (sizes > "0px") {
      setSize("0px");
    } else {
      if (value !== "about") {
        action(e);
      }

      const getItems = document.querySelectorAll(`#${value} li`).length;

      if (getItems > 0) {
        setSize(`${43 * getItems}px`);
        setItem(value);
      }
    }
  };
  const handleaction = (e) => {
    action(e);
  };
  useEffect(() => {
    if (states.status === "succeeded") {
      setFields(states.response.result[0].data);
      dispatch(Iconstatus());
    } else if (states.status === "failed") {
      dispatch(Iconstatus());
    } else {
    }
  }, [states]);
  return (
    <>
      <div onClick={handleaction} className={`off_canvars_overlay ${drawer ? "active" : ""}`}></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}>
                <div className="offcanvas-brand text-center mb-40">
                  <Image src={logo} alt="" />
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li onClick={(e) => handler(e, "home", size)} id="home" className="menu-item-has-children active">
                      <Link scroll={false} href="/">
                        Home
                      </Link>
                    </li>
                    <li onClick={(e) => handler(e, "about", size)} id="about" className="menu-item-has-children active">
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <Link scroll={false} href="#">
                        ABOUT US
                      </Link>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "about" ? size : "0px",
                        }}
                      >
                        <li onClick={(e) => handler(e, "about-us", size)} id="about-us">
                          <Link scroll={false} href="/about-us">
                            About SSTPL
                          </Link>
                        </li>
                        <li onClick={(e) => handler(e, "testimoial", size)} id="testimoial">
                          <Link scroll={false} href="/testimonial">
                            Testimonial
                          </Link>
                        </li>
                        <li onClick={(e) => handler(e, "value_home", size)} id="value_home">
                          <Link scroll={false} href="/">
                            Blog
                          </Link>
                        </li>
                        <li onClick={(e) => handler(e, "value_home_img", size)} id="value_home">
                          <Link scroll={false} href="#">
                            Life@SSTPL
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li onClick={(e) => handler(e, "ourservice", size)} id="ourservice" className="menu-item-has-children active">
                      <Link scroll={false} href="/our-service">
                        Our Service
                      </Link>
                    </li>
                    <li onClick={(e) => handler(e, "OurWork", size)} id="OurWork" className="menu-item-has-children active">
                      <Link scroll={false} href="/our-work">
                        OUR WORK
                      </Link>
                    </li>
                    <li onClick={(e) => handler(e, "careers", size)} id="home" className="menu-item-has-children active">
                      <Link scroll={false} href="/career">
                        CAREERS
                      </Link>
                    </li>
                    <li onClick={(e) => handler(e, "contact-us", size)} id="contactus" className="menu-item-has-children active">
                      <Link scroll={false} href="/contact-us">
                        CONTACT US
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <button type="button" onClick={cartToggle} className="main-btn-sidebar mt-3" data-toggle="modal" data-target="#exampleModalCenter">
                    HIRE US
                  </button>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    {fields.length > 0
                      ? fields.map((e, index) => {
                          return (
                            <React.Fragment key={index}>
                              <li>
                                <SocialLink href={{ pathname: e.link }} className="ml-15">
                                  <i className={`fab ${e.icon} ${e.class}`} style={{ color: "#4f4f4f " }} />
                                </SocialLink>
                              </li>
                            </React.Fragment>
                          );
                        })
                      : socialMediaLinks.map((link, index) => (
                          <React.Fragment key={index}>
                            <li>
                              <SocialLink href={{ pathname: link.href }} className={link.className}>
                                <i className={link.iconClass} style={{ color: "#4f4f4f " }} />
                              </SocialLink>
                            </li>
                          </React.Fragment>
                        ))}
                  </ul>
                </div>
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <a href="mailto:hr.softstorm@gmail.com" rel="noopener noreferrer" className="pl-0">
                        <i className="fa fa-envelope mr-2 drawer_locat" />
                        <div className="ml-30">contact@softstorm.in</div>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+91261-3560756" className="pl-0">
                        <i className="fa fa-phone mr-2 drawer_locat" />
                        <div className="ml-30">+91261-3560756</div>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919099919947" className="pl-0">
                        <i className="fa fa-phone mr-2 drawer_locat" />
                        <div className="ml-30">+91 90999 19947</div>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps/dir/21.2369408,72.8629248/softstorm/@21.2356059,72.8587446,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04f50264611d1:0x76746ef930af1752!2m2!1d72.8590564!2d21.2349749?entry=ttu" target="_blank" className="pl-0">
                        <i className="fa fa-location-dot mr-2" style={{ fontSize: "20px", color: "#c20004" }} />
                        <div className="ml-30">305-306, Amby Valley Arcade, Opp. Santosa Height, Manisha Garnala. Uttran, Surat, Gujarat</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
