import React, { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../../assets/images/logo.webp";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { IconSlice, Iconstate, Iconstatus } from "@/redux/slice/IconSlice";
import StickyMenu from "../SubComponent/lib/StickyMenu";
import { Logostate, LogoSlice, Logostatus } from "@/redux/slice/logoSlice";
import { socialMediaLinks } from "../SubComponent/FooterLink";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import style from "./Layout.module.css";
const ServiceHeader = dynamic(() => import("./header/ServiceHeader"), { ssr: false });
const AboutHeader = dynamic(() => import("./header/aboutHeader"), { ssr: false });
const HeadermainLink = dynamic(() => import("../SubComponent/FooterLink").then((module) => module.HeadermainLink));
const SocialLink = dynamic(() => import("../SubComponent/FooterLink").then((module) => module.SocialLink));

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
    if (isNotFound) {
      document.querySelector(`.${style.softstormweb_header_1}`).style.display = "none";
      document.querySelector(`.${style.softstormweb_header_area}`).style.display = "none";
    } else {
      document.querySelector(`.${style.softstormweb_header_1}`).style.display = "flex";
      document.querySelector(`.${style.softstormweb_header_area}`).style.display = "block";
    }
  });

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
      <header className={`${style.softstormweb_header_1}  ${style.hidebtn}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-6">
              {fields.length > 0
                ? fields.map((e, index) => {
                    return (
                      <React.Fragment key={index}>
                        <SocialLink href={{ pathname: e.link }} className="ml-15">
                          <i className={`fab ${e.icon}`} />
                        </SocialLink>
                      </React.Fragment>
                    );
                  })
                : socialMediaLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      <SocialLink href={{ pathname: link.href }} className={link.className}>
                        <i className={link.iconClass} />
                      </SocialLink>
                    </React.Fragment>
                  ))}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 order-3 order-sm-2 d-flex justify-content-end">
              <a href="mailto:contact@softstorm.in" rel="noopener noreferrer" className="pl-0 d-flex align-items-center white">
                <i className="fa fa-envelope mr-2 fs-18 white" />
                <div className="ml-1 fw-600">contact@softstorm.in</div>
              </a>
              <span className="ml-20 white"> | </span>

              <a href="tel:+91261-3560756" className="pl-0  d-flex align-items-center ml-20">
                <i className="fa fa-phone mr-2 fs-18 white" />
                <div className="ml-1 fs-16 fw-600 white">+91261-3560756</div>
              </a>
            </div>
          </div>
        </div>
      </header>

      <header className={`${style.softstormweb_header_area} softstormweb-header_sticky`}>
        <div className="container">
          <div className={style.menu_header}>
            <div className={style.dskt_logo}>
              <Link className={style.nav_brand} href="/">
                <Image src={selectedLogo ? selectedLogo : logo} alt="Logo" layout="responsive" className={style.max_width_web} width={250} height={100} />
              </Link>{" "}
            </div>
            <div className={`softstrom_header  ${style.handlenavigation}`} role="navigation">
              <ul className="nav-list">
                <li className={`megamenu `}>
                  <HeadermainLink href="/">Home</HeadermainLink>
                </li>
                <li className="megamenu">
                  <HeadermainLink href="/about-us">About Us</HeadermainLink>
                  <AboutHeader />
                </li>
                <li className="megamenu">
                  <HeadermainLink href="/our-service"> Our Service</HeadermainLink>
                  <ServiceHeader />
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
