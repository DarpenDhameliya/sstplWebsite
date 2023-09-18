import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ServiceSlice, Servicestate, Servicestatus } from "@/redux/slice/Service";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import webimg from "../../../assets/images/services/web-app-development.webp";
import mobimg from "../../../assets/images/services/mobile-app-development.webp";
import deskimg from "../../../assets/images/services/desktop-software-development.webp";
import digimg from "../../../assets/images/services/digital-marketing.webp";
import graimg from "../../../assets/images/services/web-graphic-designing.webp";
import entimg from "../../../assets/images/services/enterprise-services.webp";
import style from "./cssComponent/Service.module.css";
const FooterLink = dynamic(() => import("../SubComponent/FooterLink").then((module) => module.FooterLink));

export default function Services(className) {
  const [dbFetcherr, setDbFetcherr] = useState("");
  const [state, setState] = useState({
    webappimg: "",
    mobappimg: "",
    deskappimg: "",
    digitalappimg: "",
    webgraappimg: "",
    erpappimg: "",
    webapptitle: "",
    mobapptitle: "",
    deskapptitle: "",
    digitalapptitle: "",
    webgraapptitle: "",
    erpapptitle: "",
  });
  const states = useSelector(Servicestate);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(ServiceSlice());
  }, []);

  useEffect(() => {
    if (states.status === "succeeded") {
      if (states.response.length > 0) {
        setState({
          ...state,
          webappimg: states.response[0].frontpageimg,
          webapptitle: states.response[0].heading,
          mobappimg: states.response[1].frontpageimg,
          mobapptitle: states.response[1].heading,
          deskappimg: states.response[2].frontpageimg,
          deskapptitle: states.response[2].heading,
          digitalappimg: states.response[3].frontpageimg,
          digitalapptitle: states.response[3].heading,
          webgraappimg: states.response[4].frontpageimg,
          webgraapptitle: states.response[4].heading,
          erpappimg: states.response[5].frontpageimg,
          erpapptitle: states.response[5].heading,
        });
      }
      dispatch(Servicestatus());
    } else if (states.status === "failed") {
      setDbFetcherr(states.error);
      setTimeout(() => {
        setDbFetcherr([]);
      }, 3000);
      dispatch(Servicestatus());
    } else {
    }
  });

  const handlepagechange = (e, data) => {
    router.push(`/${e}`);
  };

  return (
    <>
      <section className={`${style.softstormweb_service} pt-70 pb-80 ${className}`} id="service">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className="col-lg-12 col-md-11">
              <div className=" text-center">
                <h3>Our Services</h3>
                <span className="main-header-line_choos"></span>
                <p>Our Present Service Spectrum Your Business Objectives & Our IT Solutions.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <div className={`${style.softstormweb_techno_service} mt-30 wow animated fadeInUp`} data-aos="fade-right" data-aos-duration="400">
                    <div className={style.imagedisplay} onClick={() => handlepagechange("web-application-developement")}>
                      <Image src={state.webappimg ? state.webappimg : webimg} width={600} height={300} alt="webimg" style={{ borderRadius: "10px" }} />
                    </div>
                    <h4 className={`${style.title} text-center`}>{state.webapptitle ? state.webapptitle : "Web Application Developement"}</h4>
                    <div className={style.servicedisplay}>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob1} m-1`} href="/web-application-developement#nodejs">
                        NODE JS
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob1} m-1`} href="/web-application-developement#php">
                        PHP
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob1} m-1`} href="/web-application-developement#laravel">
                        LARAVEL
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob1} m-1`} href="/web-application-developement#codeigniter">
                        CODEIGNITER
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob1} m-1`} exact href="/web-application-developement#python">
                        PYTHON
                      </FooterLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <div className={`${style.softstormweb_techno_service} item-2 mt-30 wow animated fadeInUp`} data-aos="fade-right" data-aos-duration="800">
                    <div className={style.imagedisplay} onClick={() => handlepagechange("mobile-application-developement")}>
                      <Image src={state.mobappimg ? state.mobappimg : mobimg} width={600} height={300} alt="webimg" style={{ borderRadius: "10px" }} />
                    </div>
                    <h4 className={`${style.title} text-center`}>{state.mobapptitle ? state.mobapptitle : "Mobile Application Developer"}</h4>
                    <div className={style.servicedisplay}>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob2} m-1`} href="/mobile-application-developement#flutter">
                        FLUTTER
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob2} m-1`} href="/mobile-application-developement#android">
                        ANDROID
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob2} m-1`} href="/mobile-application-developement#ios">
                        IOS
                      </FooterLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <div className={`${style.softstormweb_techno_service} item-3 mt-30 wow animated fadeInUp `} data-aos="fade-right" data-aos-duration="1000">
                    <div className={style.imagedisplay} onClick={() => handlepagechange("desktop-software-developement")}>
                      <Image src={state.deskappimg ? state.deskappimg : deskimg} width={600} height={300} alt="webimg" style={{ borderRadius: "10px" }} />
                    </div>
                    <h4 className={`${style.title} text-center`}>{state.deskapptitle ? state.deskapptitle : "Desktop Software Developement"}</h4>
                    <div className={style.servicedisplay}>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob3} m-1`} href="/desktop-software-developement#c">
                        C#
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob3} m-1`} href="/desktop-software-developement#c++">
                        C++
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob3} m-1`} href="/desktop-software-developement#mashinlerning">
                        MASHINE LEARNING
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob3} m-1`} href="/desktop-software-developement#controller">
                        CONTEROLLER BASED
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob3} m-1`} href="/desktop-software-developement#axistravelling">
                        AXIS TRAVELLING
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob3} m-1`} href="/desktop-software-developement#lasersource">
                        LASER SOURCE
                      </FooterLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <div className={`${style.softstormweb_techno_service} item-4 mt-30 wow animated fadeInUp `} data-aos="fade-right" data-aos-duration="400">
                    <div className={style.imagedisplay} onClick={() => handlepagechange("digital-marketing")}>
                      <Image src={state.digitalappimg ? state.digitalappimg : digimg} width={600} height={300} alt="webimg" style={{ borderRadius: "10px" }} />
                    </div>
                    <h4 className={`${style.title} text-center`}>{state.digitalapptitle ? state.digitalapptitle : "Digital Marketing"}</h4>
                    <div className={style.servicedisplay}>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob4} m-1`} href="/digital-marketing#seo">
                        SEO
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob4} m-1`} href="/digital-marketing#smm">
                        SMM
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob4} m-1`} href="/digital-marketing#political">
                        POLITICAL PROFILE
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob4} m-1`} href="/digital-marketing#mobileapp">
                        MOBILE APP PROMOTION
                      </FooterLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <div className={`${style.softstormweb_techno_service} item-5 mt-30 wow animated fadeInUp`} data-aos="fade-right" data-aos-duration="800">
                    <div className={style.imagedisplay} onClick={() => handlepagechange("web_graphic-designing")}>
                      <Image src={state.webgraappimg ? state.webgraappimg : graimg} width={600} height={300} alt="webimg" style={{ borderRadius: "10px" }} />
                    </div>
                    <h4 className={`${style.title} text-center`}>{state.webgraapptitle ? state.webgraapptitle : "Web & Graphic Designing"}</h4>
                    <div className={style.servicedisplay}>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob5} m-1`} href="/web_graphic-designing#webdesign">
                        WEB DESIGN
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob5} m-1`} href="/web_graphic-designing#uiux">
                        UI & UX DESIGN
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob5} m-1`} href="/web_graphic-designing#reactjs">
                        REACT JS
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob5} m-1`} href="/web_graphic-designing#viewjs">
                        VUE JS
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob5} m-1`} href="/web_graphic-designing#logo">
                        LOGO BANNER
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob5} m-1`} href="/web_graphic-designing#brochur">
                        BROCHUR & MOKEUP
                      </FooterLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <div className={`${style.softstormweb_techno_service} item-6 mt-30 wow animated fadeInUp`} data-aos="fade-right" data-aos-duration="1000">
                    <div className={style.imagedisplay} onClick={() => handlepagechange("enterprise-services")}>
                      <Image src={state.erpappimg ? state.erpappimg : entimg} width={600} height={300} alt="webimg" style={{ borderRadius: "10px" }} />
                    </div>
                    <h4 className={`${style.title} text-center`}>{state.erpapptitle ? state.erpapptitle : "Enterprice Services"}</h4>
                    <div className={style.servicedisplay}>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob6} m-1`} href="/enterprise-services#erp">
                        ERP
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob6} m-1`} href="/enterprise-services#crm">
                        CRM
                      </FooterLink>
                      <FooterLink className={` ${style.main_btn_about} ${style.mob6} m-1`} href="/enterprise-services#accounting">
                        CUSTOMIZED ACCOUNTING
                      </FooterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
