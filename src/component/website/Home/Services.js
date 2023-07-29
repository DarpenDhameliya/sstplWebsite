import React, {useEffect, useState} from "react";
import webimg from "../../../assets/images/services/web-app-development.webp";
import mobimg from "../../../assets/images/services/mobile-app-development.webp";
import deskimg from "../../../assets/images/services/desktop-software-development.webp";
import digimg from "../../../assets/images/services/digital-marketing.webp";
import graimg from "../../../assets/images/services/web-graphic-designing.webp";
import entimg from "../../../assets/images/services/enterprise-services.webp";
import {HashLink} from "react-router-hash-link";
import shapeTwo from "../../../assets/images/mobile and phone (1).webp";
import shapeThree from "../../../assets/images/database (1).webp";
import axios from "../../common/Axios";
import {Servicestate, Servicestatus, ServiceSlice} from "../slice/Service";
import {useSelector, useDispatch} from "react-redux";

export default function Services(className) {
  const [serviceList, setServiceList] = useState([]);
  const [dbFetcherr, setDbFetcherr] = useState("");
  const [webappimg, setWebappimg] = useState("");
  const [mobappimg, setMobppimg] = useState("");
  const [deskappimg, setDeskappimg] = useState("");
  const [digitalappimg, setDigitalappimg] = useState("");
  const [webgraappimg, setWebgraappimg] = useState("");
  const [erpappimg, setErpappimg] = useState("");
  const [webapptitle, setWebapptitle] = useState("");
  const [mobapptitle, setMobpptitle] = useState("");
  const [deskapptitle, setDeskapptitle] = useState("");
  const [digitalapptitle, setDigitalapptitle] = useState("");
  const [webgraapptitle, setWebgraapptitle] = useState("");
  const [erpapptitle, setErpapptitle] = useState("");
  const states = useSelector(Servicestate);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (states.response.result === undefined) {
  //   const fetchServiceata = () => {
  //     axios
  //       .get("service/service_list", {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       .then((result) => {
  //         setWebappimg(result.data.result[0].frontpageimg);
  //         setWebapptitle(result.data.result[0].heading);
  //         setMobppimg(result.data.result[1].frontpageimg);
  //         setMobpptitle(result.data.result[1].heading);
  //         setDeskappimg(result.data.result[2].frontpageimg);
  //         setDeskapptitle(result.data.result[2].heading);
  //         setDigitalappimg(result.data.result[3].frontpageimg);
  //         setDigitalapptitle(result.data.result[3].heading);
  //         setWebgraappimg(result.data.result[4].frontpageimg);
  //         setWebgraapptitle(result.data.result[4].heading);
  //         setErpappimg(result.data.result[5].frontpageimg);
  //         setErpapptitle(result.data.result[5].heading);
  //       })
  //       .catch((err) => {
  //         setDbFetcherr(err.response.data.error);
  //       });
  //   };

  //   fetchServiceata();
  // }
  // }, []);

  useEffect(() => {
    dispatch(ServiceSlice());
  }, []);

  useEffect(() => {
    if (states.status === "loading") {
    } else if (states.status === "succeeded") {
      if (states.response.length > 0) {
        setWebappimg(states.response[0].frontpageimg);
        setWebapptitle(states.response[0].heading);
        setMobppimg(states.response[1].frontpageimg);
        setMobpptitle(states.response[1].heading);
        setDeskappimg(states.response[2].frontpageimg);
        setDeskapptitle(states.response[2].heading);
        setDigitalappimg(states.response[3].frontpageimg);
        setDigitalapptitle(states.response[3].heading);
        setWebgraappimg(states.response[4].frontpageimg);
        setWebgraapptitle(states.response[4].heading);
        setErpappimg(states.response[5].frontpageimg);
        setErpapptitle(states.response[5].heading);
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

  return (
    <>
      <section className={`softstormweb-service handleservice pt-70 pb-80 ${className}`} id="service">
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
                  <div className="softstormweb-techno-service mt-30 wow animated fadeInUp" data-aos="fade-right" data-aos-duration="400">
                    <div className="imagedisplay" style={{minHeight: "240px", background: "#ddf4fd"}}>
                      <img src={webappimg} alt="webimg" style={{borderRadius: "10px"}} />
                    </div>
                    <h4 className="title" style={{textAlign: "center"}}>
                      {webapptitle}
                    </h4>
                    <div className="servicedisplay">
                      <HashLink className="main-btn-about mob1 ml-10" to="/web-application-developement#nodejs">
                        NODE JS
                      </HashLink>
                      <HashLink smooth className="main-btn-about mob1 ml-10" to="/web-application-developement#php">
                        PHP
                      </HashLink>
                      <HashLink className="main-btn-about mob1 ml-10" to="/web-application-developement#laravel">
                        LARAVEL
                      </HashLink>
                      <HashLink className="main-btn-about mob1 ml-10" to="/web-application-developement#codeigniter">
                        CODEIGNITER
                      </HashLink>
                      <HashLink className="main-btn-about mob1 ml-10" exact to="/web-application-developement#python">
                        PYTHON
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <div className="softstormweb-techno-service item-2 mt-30 wow animated fadeInUp" data-aos="fade-right" data-aos-duration="800">
                    <div className="imagedisplay" style={{minHeight: "240px", background: "#fedaf4"}}>
                      <img src={mobappimg} alt="webimg" style={{borderRadius: "10px"}} />
                    </div>
                    <h4 className="title" style={{textAlign: "center"}}>
                      {mobapptitle}
                    </h4>
                    <div className="servicedisplay">
                      <HashLink className="main-btn-about mob2 ml-10" to="/mobile-application-developement#flutter">
                        FLUTTER
                      </HashLink>
                      <HashLink className="main-btn-about mob2 ml-10" to="/mobile-application-developement#android">
                        ANDROID
                      </HashLink>
                      <HashLink className="main-btn-about mob2 ml-10" to="/mobile-application-developement#ios">
                        IOS
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <div className="softstormweb-techno-service item-3 mt-30 wow animated fadeInUp " data-aos="fade-right" data-aos-duration="1000">
                    <div className="imagedisplay" style={{minHeight: "240px", background: "#cadcff"}}>
                      <img src={deskappimg} alt="webimg" style={{borderRadius: "10px"}} />
                    </div>
                    <h4 className="title" style={{textAlign: "center"}}>
                      {deskapptitle}
                    </h4>
                    <div className="servicedisplay">
                      <HashLink className="main-btn-about mob3 ml-10" to="/desktop-software-developement#c">
                        C#
                      </HashLink>
                      <HashLink className="main-btn-about mob3 ml-10" to="/desktop-software-developement#c++">
                        C ++
                      </HashLink>
                      <HashLink className="main-btn-about mob3 ml-10" to="/desktop-software-developement#mashinlerning">
                        MASHINE LEARNING
                      </HashLink>
                      <HashLink className="main-btn-about mob3 ml-10" to="/desktop-software-developement#controller">
                        CONTEROLLER BASED
                      </HashLink>
                      <HashLink className="main-btn-about mob3 ml-10" to="/desktop-software-developement#axistravelling">
                        AXIS TRAVELLING
                      </HashLink>
                      <HashLink className="main-btn-about mob3 ml-10" to="/desktop-software-developement#lasersource">
                        LASER SOURCE
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <div className="softstormweb-techno-service item-4 mt-30 wow animated fadeInUp  " data-aos="fade-right" data-aos-duration="400">
                    <div className="imagedisplay" style={{minHeight: "240px", background: "#ffbc8d"}}>
                      <img src={digitalappimg} alt="webimg" style={{borderRadius: "10px"}} />
                    </div>
                    <h4 className="title" style={{textAlign: "center"}}>
                      {digitalapptitle}
                    </h4>
                    <div className="servicedisplay">
                      <HashLink className="main-btn-about mob4 ml-10" to="/digital-marketing#seo">
                        SEO
                      </HashLink>
                      <HashLink className="main-btn-about mob4 ml-10" to="/digital-marketing#smm">
                        SMM
                      </HashLink>
                      <HashLink className="main-btn-about mob4 ml-10" to="/digital-marketing#political">
                        POLITICAL PROFILE
                      </HashLink>
                      <HashLink className="main-btn-about mob4 ml-10" to="/digital-marketing#mobileapp">
                        MOBILE APP PROMOTION
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <div className="softstormweb-techno-service item-5 mt-30 wow animated fadeInUp" data-aos="fade-right" data-aos-duration="800">
                    <div className="imagedisplay" style={{minHeight: "240px", background: "#97adff"}}>
                      <img src={webgraappimg} alt="webimg" style={{borderRadius: "10px"}} />
                    </div>
                    <h4 className="title" style={{textAlign: "center"}}>
                      {webgraapptitle}
                    </h4>
                    <div className="servicedisplay">
                      <HashLink className="main-btn-about mob5 ml-10" to="/web_graphic-designing#webdesign">
                        WEB DESIGN
                      </HashLink>
                      <HashLink className="main-btn-about mob5 ml-10" to="/web_graphic-designing#uiux">
                        UI & UX DESIGN
                      </HashLink>
                      <HashLink className="main-btn-about mob5 ml-10" to="/web_graphic-designing#reactjs">
                        REACT JS
                      </HashLink>
                      <HashLink className="main-btn-about mob5 ml-10" to="/web_graphic-designing#viewjs">
                        VUE JS
                      </HashLink>
                      <HashLink className="main-btn-about mob5 ml-10" to="/web_graphic-designing#logo">
                        LOGO BANNER
                      </HashLink>
                      <HashLink className="main-btn-about mob5 ml-10" to="/web_graphic-designing#brochur">
                        BROCHUR & MOKEUP
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <div className="softstormweb-techno-service item-6 mt-30 wow animated fadeInUp" data-aos="fade-right" data-aos-duration="1000">
                    <div className="imagedisplay" style={{minHeight: "240px", background: "#98e7d4"}}>
                      <img src={erpappimg} alt="webimg" style={{borderRadius: "10px"}} />
                    </div>
                    <h4 className="title" style={{textAlign: "center"}}>
                      {erpapptitle}
                    </h4>
                    <div className="servicedisplay">
                      <HashLink className="main-btn-about mob6 ml-10" to="/enterprise-services#erp">
                        ERP
                      </HashLink>
                      <HashLink className="main-btn-about mob6 ml-10" to="/enterprise-services#crm">
                        CRM
                      </HashLink>
                      <HashLink className="main-btn-about mob6 ml-10" to="/enterprise-services#accounting">
                        CUSTOMIZED ACCOUNTING
                      </HashLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-shape-1">
          <img src={shapeTwo} alt="" />
        </div>
        <div className="service-shape-2" style={{width:"30px"}}>
          <img src={shapeThree} alt="" />
        </div>
      </section>
    </>
  );
}
