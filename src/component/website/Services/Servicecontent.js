/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
// import { useHistory } from "react-router-dom";
import {useHistory} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
// import webimg from "../../../assets/images/services/web-app-development.webp";
// import mobimg from "../../../assets/images/services/mobile-app-development.webp";
// import deskimg from "../../../assets/images/services/desktop-software-development.webp";
// import digimg from "../../../assets/images/services/digital-marketing.webp";
// import graimg from "../../../assets/images/services/web-graphic-designing.webp";
// import entimg from "../../../assets/images/services/enterprise-services.webp";
import axios from "../../common/Axios";
import {Servicestate} from "../slice/Service";
import {useSelector} from "react-redux";

const Servicecontent = ({className, list}) => {
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
  const history = useHistory();
  const states = useSelector(Servicestate);
  const handlepagechange = (e, data) => {
    history.push(`/${e}`);
  };
  // useEffect(() => {
  //   document.title = "Our-Service | SoftStorm - Custom Software Development Service Provider Company in Surat, India";

  //   if (states.response.result === undefined) {
  //     var fetchServiceata = () => {
  //       axios
  //         .get("service/service_list", {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         })
  //         .then((result) => {
  //           setWebappimg(result.data.result[0].frontpageimg);
  //           setWebapptitle(result.data.result[0].heading);
  //           setMobppimg(result.data.result[1].frontpageimg);
  //           setMobpptitle(result.data.result[1].heading);
  //           setDeskappimg(result.data.result[2].frontpageimg);
  //           setDeskapptitle(result.data.result[2].heading);
  //           setDigitalappimg(result.data.result[3].frontpageimg);
  //           setDigitalapptitle(result.data.result[3].heading);
  //           setWebgraappimg(result.data.result[4].frontpageimg);
  //           setWebgraapptitle(result.data.result[4].heading);
  //           setErpappimg(result.data.result[5].frontpageimg);
  //           setErpapptitle(result.data.result[5].heading);
  //         })
  //         .catch((err) => {
  //           setDbFetcherr(err.response.data.error);
  //         });
  //     };
  //     fetchServiceata();
  //   }
  // }, []);
  useEffect(() => {
    if (states.response.result === undefined) {
      if (list.length > 0) {
        setWebappimg(list[0].frontpageimg);
        setWebapptitle(list[0].heading);
        setMobppimg(list[1].frontpageimg);
        setMobpptitle(list[1].heading);
        setDeskappimg(list[2].frontpageimg);
        setDeskapptitle(list[2].heading);
        setDigitalappimg(list[3].frontpageimg);
        setDigitalapptitle(list[3].heading);
        setWebgraappimg(list[4].frontpageimg);
        setWebgraapptitle(list[4].heading);
        setErpappimg(list[5].frontpageimg);
        setErpapptitle(list[5].heading);
      }
    }
  });
  useEffect(() => {
    if (states.response.result !== undefined) {
      setWebappimg(states.response.result[0].frontpageimg);
      setWebapptitle(states.response.result[0].heading);
      setMobppimg(states.response.result[1].frontpageimg);
      setMobpptitle(states.response.result[1].heading);
      setDeskappimg(states.response.result[2].frontpageimg);
      setDeskapptitle(states.response.result[2].heading);
      setDigitalappimg(states.response.result[3].frontpageimg);
      setDigitalapptitle(states.response.result[3].heading);
      setWebgraappimg(states.response.result[4].frontpageimg);
      setWebgraapptitle(states.response.result[4].heading);
      setErpappimg(states.response.result[5].frontpageimg);
      setErpapptitle(states.response.result[5].heading);
    }
  });

  return (
    <>
      <section className={`softstormweb-service pt-70 pb-80 ${className}`} id="service">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="softstormweb-techno-service mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                <div onClick={() => handlepagechange("web-application-developement")}>
                  <img src={webappimg} alt="webimg" style={{borderRadius: "10px"}} />
                </div>
                <h4 className="title" style={{textAlign: "center"}}>
                  {webapptitle}
                </h4>
                <div className="display-service text-center">
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
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="softstormweb-techno-service item-2 mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="400ms">
                <div onClick={() => handlepagechange("mobile-application-developement")}>
                  <img src={mobappimg} alt="webimg" style={{borderRadius: "10px"}} />
                </div>
                <h4 className="title" style={{textAlign: "center"}}>
                  {mobapptitle}
                </h4>
                <div className="display-service text-center">
                  <HashLink smooth className="main-btn-about mob2 ml-10" to="/mobile-application-developement#flutter">
                    FLUTTER
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob2 ml-10" to="/mobile-application-developement#android">
                    ANDROID
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob2 ml-10" to="/mobile-application-developement#ios">
                    IOS
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="softstormweb-techno-service item-3 mt-30 wow animated fadeInUp " data-wow-duration="2000ms" data-wow-delay="600ms">
                <div onClick={() => handlepagechange("desktop-software-developement")}>
                  <img src={deskappimg} alt="webimg" style={{borderRadius: "10px"}} />
                </div>
                <h4 className="title" style={{textAlign: "center"}}>
                  {deskapptitle}
                </h4>
                <div className="display-service text-center">
                  <HashLink smooth className="main-btn-about mob3 ml-10" to="/desktop-software-developement#c">
                    C#
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob3 ml-10" to="/desktop-software-developement#c++">
                    C++
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob3 ml-10" to="/desktop-software-developement#mashinlerning">
                    MASHINE LEARNING
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob3 ml-10" to="/desktop-software-developement#controller">
                    CONTEROLLER BASED
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob3 ml-10" to="/desktop-software-developement#axistravelling">
                    AXIS TRAVELLING
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob3 ml-10" to="/desktop-software-developement#lasersource">
                    LASER SOURCE
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="softstormweb-techno-service item-4 mt-30 wow animated fadeInUp  " data-wow-duration="2000ms" data-wow-delay="200ms">
                <div onClick={() => handlepagechange("digital-marketing")}>
                  <img src={digitalappimg} alt="webimg" style={{borderRadius: "10px"}} />
                </div>
                <h4 className="title" style={{textAlign: "center"}}>
                  {digitalapptitle}
                </h4>
                <div className="display-service text-center">
                  <HashLink smooth className="main-btn-about mob4 ml-10" to="/digital-marketing#seo" scroll={(el) => el.scrollIntoView({behavior: "auto", block: "end"})}>
                    SEO
                  </HashLink>
                  <HashLink className="main-btn-about mob4 ml-10" to="/digital-marketing#smm">
                    SMM
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob4 ml-10" to="/digital-marketing#political">
                    POLITICAL PROFILE
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob4 ml-10" to="/digital-marketing#mobileapp">
                    MOBILE APP PROMOTION
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="softstormweb-techno-service item-5 mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="400ms">
                <div onClick={() => handlepagechange("web_graphic-designing")}>
                  <img src={webgraappimg} alt="webimg" style={{borderRadius: "10px"}} />
                </div>
                <h4 className="title" style={{textAlign: "center"}}>
                  {webgraapptitle}
                </h4>
                <div className="display-service text-center">
                  <HashLink smooth className="main-btn-about mob5 ml-10" to="/web_graphic-designing#webdesign">
                    WEB DESIGN
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob5 ml-10" to="/web_graphic-designing#uiux">
                    UI & UX DESIGN
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob5 ml-10" to="/web_graphic-designing#reactjs">
                    REACT JS
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob5 ml-10" to="/web_graphic-designing#viewjs">
                    VUE JS
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob5 ml-10" to="/web_graphic-designing#logo">
                    LOGO BANNER
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob5 ml-10" to="/web_graphic-designing#brochur">
                    BROCHUR & MOKEUP
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="softstormweb-techno-service item-6 mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="600ms">
                <div onClick={() => handlepagechange("enterprise-services")}>
                  <img src={erpappimg} alt="webimg" style={{borderRadius: "10px"}} />
                </div>
                <h4 className="title" style={{textAlign: "center"}}>
                  {erpapptitle}
                </h4>
                <div className="display-service text-center">
                  <HashLink smooth className="main-btn-about mob6 ml-10" to="/enterprise-services#erp">
                    ERP
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob6 ml-10" to="/enterprise-services#crm">
                    CRM
                  </HashLink>
                  <HashLink smooth className="main-btn-about mob6 ml-10" to="/enterprise-services#accounting">
                    CUSTOMIZED ACCOUNTING
                  </HashLink>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-12 col-sm-12 " style={{padding: "25px 10px", background: "#fafbfb"}}>
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  {" "}
                  <div onClick={() => handlepagechange("web-application-developement")}>
                    <img src={webappimg} alt="webimg" className="maintainleft_img" style={{borderRadius: "10px", position: "relative", right: "8%"}} />
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 d-flex align-items-center handlemobileview_service">
                  <div>
                    <h4 className="mb-3">{webapptitle}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
                      <ul className="handleul_servicetechno">
                        <HashLink className="maintain_link  " to="/web-application-developement#nodejs">
                          <li className="handleul_servicetechno_list border1" data-aos="zoom-in" data-aos-duration="1000">
                            NODE JS
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link " to="/web-application-developement#php">
                          <li className="handleul_servicetechno_list border1" data-aos="zoom-in" data-aos-duration="1000">
                            PHP
                          </li>
                        </HashLink>
                        <HashLink className="maintain_link " to="/web-application-developement#laravel">
                          <li className="handleul_servicetechno_list border1" data-aos="zoom-in" data-aos-duration="1000">
                            LARAVEL
                          </li>
                        </HashLink>
                        <HashLink className="maintain_link  " to="/web-application-developement#codeigniter">
                          <li className="handleul_servicetechno_list border1" data-aos="zoom-in" data-aos-duration="1000">
                            CODEIGNITER
                          </li>
                        </HashLink>
                        <HashLink className="maintain_link  " exact to="/web-application-developement#python">
                          <li className="handleul_servicetechno_list border1" data-aos="zoom-in" data-aos-duration="1000">
                            PYTHON
                          </li>
                        </HashLink>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 mt-5" style={{padding: "25px 10px", background: "#fafbfb"}}>
              <div className="row">
                <div className="col-lg-7 col-md-6 d-flex align-items-center maintain_space_box">
                  <div>
                    <h4 className="mb-3">{mobapptitle}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
                      <ul className="handleul_servicetechno">
                        <HashLink smooth className="maintain_link1 " to="/mobile-application-developement#flutter">
                          <li className="handleul_servicetechno_list border2" data-aos="zoom-in" data-aos-duration="1000">
                            FLUTTER
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link1 " to="/mobile-application-developement#android">
                          <li className="handleul_servicetechno_list border2" data-aos="zoom-in" data-aos-duration="1000">
                            ANDROID
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link1 " to="/mobile-application-developement#ios">
                          <li className="handleul_servicetechno_list border2" data-aos="zoom-in" data-aos-duration="1000">
                            IOS
                          </li>
                        </HashLink>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div onClick={() => handlepagechange("mobile-application-developement")}>
                    <img src={mobappimg} alt="webimg" className="maintainright_img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 mt-5" style={{padding: "25px 10px", background: "#fafbfb"}}>
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  {" "}
                  <div onClick={() => handlepagechange("web-application-developement")}>
                    <img src={deskappimg} alt="Desktop" className="maintainleft_img" style={{borderRadius: "10px", position: "relative", right: "8%"}} />
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 d-flex align-items-center handlemobileview_service">
                  <div>
                    <h4 className="mb-3">{deskapptitle}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
                      <ul className="handleul_servicetechno">
                        <HashLink smooth className="maintain_link2 " to="/desktop-software-developement#c">
                          <li className="handleul_servicetechno_list border3" data-aos="zoom-in" data-aos-duration="1000">
                            C#
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link2 " to="/desktop-software-developement#c++">
                          <li className="handleul_servicetechno_list border3" data-aos="zoom-in" data-aos-duration="1000">
                            C++
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link2 " to="/desktop-software-developement#mashinlerning">
                          <li className="handleul_servicetechno_list border3" data-aos="zoom-in" data-aos-duration="1000">
                            MASHINE LEARNING
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link2" to="/desktop-software-developement#controller">
                          <li className="handleul_servicetechno_list border3" data-aos="zoom-in" data-aos-duration="1000">
                            CONTEROLLER BASED
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link2 ml-10" to="/desktop-software-developement#axistravelling">
                          <li className="handleul_servicetechno_list border3" data-aos="zoom-in" data-aos-duration="1000">
                            AXIS TRAVELLING
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link2 ml-10" to="/desktop-software-developement#lasersource">
                          <li className="handleul_servicetechno_list border3" data-aos="zoom-in" data-aos-duration="1000">
                            LASER SOURCE
                          </li>
                        </HashLink>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 mt-5" style={{padding: "25px 10px", background: "#fafbfb"}}>
              <div className="row">
                <div className="col-lg-7 col-md-6 d-flex align-items-center maintain_space_box">
                  <div>
                    <h4 className="mb-3">{digitalapptitle}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
                      <ul className="handleul_servicetechno">
                        <HashLink smooth className="maintain_link3 " to="/digital-marketing#seo" scroll={(el) => el.scrollIntoView({behavior: "auto", block: "end"})}>
                          <li className="handleul_servicetechno_list border4" data-aos="zoom-in" data-aos-duration="1000">
                            SEO
                          </li>
                        </HashLink>
                        <HashLink className="maintain_link3 " to="/digital-marketing#smm">
                          <li className="handleul_servicetechno_list border4" data-aos="zoom-in" data-aos-duration="1000">
                            SMM
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link3 " to="/digital-marketing#political">
                          <li className="handleul_servicetechno_list border4" data-aos="zoom-in" data-aos-duration="1000">
                            POLITICAL PROFILE
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link3" to="/digital-marketing#mobileapp">
                          <li className="handleul_servicetechno_list border4" data-aos="zoom-in" data-aos-duration="1000">
                            MOBILE APP PROMOTION
                          </li>
                        </HashLink>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div onClick={() => handlepagechange("mobile-application-developement")}>
                    <img src={digitalappimg} alt="webimg" className="maintainright_img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 mt-5" style={{padding: "25px 10px", background: "#fafbfb"}}>
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  {" "}
                  <div onClick={() => handlepagechange("web-application-developement")}>
                    <img src={webgraappimg} className="maintainleft_img" alt="graphic poster" style={{borderRadius: "10px", position: "relative", right: "8%"}} />
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 d-flex align-items-center handlemobileview_service">
                  <div>
                    <h4 className="mb-3">{webgraapptitle}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
                      <ul className="handleul_servicetechno">
                        <HashLink smooth className="maintain_link4 " to="/web_graphic-designing#webdesign">
                          <li className="handleul_servicetechno_list border5" data-aos="zoom-in" data-aos-duration="1000">
                            WEB DESIGN
                          </li>
                        </HashLink>

                        <HashLink smooth className="maintain_link4 " to="/web_graphic-designing#uiux">
                          <li className="handleul_servicetechno_list border5" data-aos="zoom-in" data-aos-duration="1000">
                            UI & UX DESIGN
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link4 " to="/web_graphic-designing#reactjs">
                          <li className="handleul_servicetechno_list border5" data-aos="zoom-in" data-aos-duration="1000">
                            REACT JS
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link4 " to="/web_graphic-designing#viewjs">
                          <li className="handleul_servicetechno_list border5" data-aos="zoom-in" data-aos-duration="1000">
                            VUE JS
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link4 " to="/web_graphic-designing#logo">
                          <li className="handleul_servicetechno_list border5" data-aos="zoom-in" data-aos-duration="1000">
                            LOGO BANNER
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link4 " to="/web_graphic-designing#brochur">
                          <li className="handleul_servicetechno_list border5" data-aos="zoom-in" data-aos-duration="1000">
                            BROCHUR & MOKEUP
                          </li>
                        </HashLink>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 mt-5" style={{padding: "25px 10px", background: "#fafbfb"}}>
              <div className="row">
                <div className="col-lg-7 col-md-6 d-flex align-items-center maintain_space_box">
                  <div>
                    <h4 className="mb-3">{erpapptitle}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
                      <ul className="handleul_servicetechno">
                        <HashLink smooth className="maintain_link5" to="/enterprise-services#erp">
                          <li className="handleul_servicetechno_list border6" data-aos="zoom-in" data-aos-duration="1000">
                            ERP
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link5" to="/enterprise-services#crm">
                          <li className="handleul_servicetechno_list border6" data-aos="zoom-in" data-aos-duration="1000">
                            CRM
                          </li>
                        </HashLink>
                        <HashLink smooth className="maintain_link5" to="/enterprise-services#accounting">
                          <li className="handleul_servicetechno_list border6" data-aos="zoom-in" data-aos-duration="1000">
                            CUSTOMIZED ACCOUNTING
                          </li>
                        </HashLink>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div onClick={() => handlepagechange("mobile-application-developement")}>
                    <img src={erpappimg} alt="webimg" className="maintainright_img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicecontent;

{
  /* <header className="service-header " id="service-header_id" >
<div className="container">
  <div className="header-nav-box">
    <div className="row align-items-center">
      <div className="col-lg-12">
        <div className=" d-flex">
          <div>
            <a className={` pl-10 pr-10 ${tab === "ios" ? "subHadactive" : ""}`} style={{ color: "#0e1133" }} href="#ios">
              IOS
            </a>
          </div>
          <div>
            <a className={` pl-10 pr-10 ${tab === 'flutter' ? 'subHadactive' : ''}`} style={{ color: '#0e1133' }} href="#flutter">
              FLUTTER
            </a>
          </div>
          <div>
            <a className={` pl-10 pr-10 ${tab === 'android' ? 'subHadactive' : ''}`} style={{ color: '#0e1133' }} href="#android">
              ANDROID
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</header> */
}
