/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import webimg from "../../../assets/images/services/web-app-development.webp";
import mobimg from "../../../assets/images/services/mobile-app-development.webp";
import deskimg from "../../../assets/images/services/desktop-software-development.webp";
import digimg from "../../../assets/images/services/digital-marketing.webp";
import graimg from "../../../assets/images/services/web-graphic-designing.webp";
import entimg from "../../../assets/images/services/enterprise-services.webp";
import {Servicestate} from "../../../redux/slice/Service";
import {useSelector} from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const states = useSelector(Servicestate);
  const handlepagechange = (e, data) => {
    router.push(`/${e}`);
  };

  useEffect(() => {
    if (!states.response) {
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
    } else {
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
  });


  return (
    <>
      <section className={`softstormweb-service-detail pt-70 pb-80 ${className}`} id="service">
        <div className="container">
         
          <div className="row">
            <div className="col-md-12 col-sm-12 " style={{padding: "25px 10px", background: "#fafbfb"}}>
              <div className="row maintainpd_service">
                <div className="col-lg-5 col-md-6 handlefor_mob_img">
                  {" "}
                  <div onClick={() => handlepagechange("web-application-developement")}>
                    <Image width={500} height={500} src={webappimg ? webappimg : webimg} alt="webimg" className="maintainleft_img" style={{borderRadius: "10px", position: "relative", right: "8%"}} />
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 d-flex align-items-center handlemobileview_service handlefor_mob_con">
                  <div>
                    <h4 className="mb-3">{webapptitle ? webapptitle : "Web Application Developement"}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
                      <ul className="handleul_servicetechno">
                        <Link scroll={false} className="maintain_link  " href="/web-application-developement#nodejs">
                          <li className="handleul_servicetechno_list border1" >
                            NODE JS
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link " href="/web-application-developement#php">
                          <li className="handleul_servicetechno_list border1" >
                            PHP
                          </li>
                        </Link>
                        <Link scroll={false} className="maintain_link " href="/web-application-developement#laravel">
                          <li className="handleul_servicetechno_list border1" >
                            LARAVEL
                          </li>
                        </Link>
                        <Link scroll={false} className="maintain_link  " href="/web-application-developement#codeigniter">
                          <li className="handleul_servicetechno_list border1" >
                            CODEIGNITER
                          </li>
                        </Link>
                        <Link scroll={false} className="maintain_link  " exact href="/web-application-developement#python">
                          <li className="handleul_servicetechno_list border1" >
                            PYTHON
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 mt-5" style={{padding: "25px 10px", background: "#fafbfb"}}>
              <div className="row maintainpd_service">
                <div className="col-lg-7 col-md-6 d-flex align-items-center maintain_space_box handlefor_mob_con">
                  <div>
                    <h4 className="mb-3">{mobapptitle ? mobapptitle : "Mobile Application Developer"}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
                      <ul className="handleul_servicetechno">
                        <Link scroll={false} smooth className="maintain_link1 " href="/mobile-application-developement#flutter">
                          <li className="handleul_servicetechno_list border2" >
                            FLUTTER
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link1 " href="/mobile-application-developement#android">
                          <li className="handleul_servicetechno_list border2" >
                            ANDROID
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link1 " href="/mobile-application-developement#ios">
                          <li className="handleul_servicetechno_list border2" >
                            IOS
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 handlefor_mob_img">
                  <div onClick={() => handlepagechange("mobile-application-developement")}>
                    <Image width={500} height={500} src={mobappimg ? mobappimg : mobimg} alt="webimg" className="maintainright_img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 mt-5" style={{padding: "25px 10px", background: "#fafbfb"}}>
              <div className="row maintainpd_service">
                <div className="col-lg-5 col-md-6 handlefor_mob_img">
                  {" "}
                  <div onClick={() => handlepagechange("desktop-software-developement")}>
                    <Image width={500} height={500} src={deskappimg ? deskappimg : deskimg}  alt="Desktop" className="maintainleft_img" style={{borderRadius: "10px", position: "relative", right: "8%"}} />
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 d-flex align-items-center handlemobileview_service handlefor_mob_con">
                  <div>
                    <h4 className="mb-3">{deskapptitle ? deskapptitle : "Desktop Software Developement"}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
                      <ul className="handleul_servicetechno">
                        <Link scroll={false} smooth className="maintain_link2 " href="/desktop-software-developement#c">
                          <li className="handleul_servicetechno_list border3" >
                            C#
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link2 " href="/desktop-software-developement#c++">
                          <li className="handleul_servicetechno_list border3" >
                            C++
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link2 " href="/desktop-software-developement#mashinlerning">
                          <li className="handleul_servicetechno_list border3" >
                            MASHINE LEARNING
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link2" href="/desktop-software-developement#controller">
                          <li className="handleul_servicetechno_list border3" >
                            CONTEROLLER BASED
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link2 ml-10" href="/desktop-software-developement#axistravelling">
                          <li className="handleul_servicetechno_list border3" >
                            AXIS TRAVELLING
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link2 ml-10" href="/desktop-software-developement#lasersource">
                          <li className="handleul_servicetechno_list border3" >
                            LASER SOURCE
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 mt-5" style={{padding: "25px 10px", background: "#fafbfb"}}>
              <div className="row maintainpd_service">
                <div className="col-lg-7 col-md-6 d-flex align-items-center maintain_space_box handlefor_mob_con">
                  <div>
                    <h4 className="mb-3">{digitalapptitle ? digitalapptitle : "Digital Marketing"}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
                      <ul className="handleul_servicetechno">
                        <Link scroll={false} smooth className="maintain_link3 " href="/digital-marketing#seo" >
                          <li className="handleul_servicetechno_list border4" >
                            SEO
                          </li>
                        </Link>
                        <Link scroll={false} className="maintain_link3 " href="/digital-marketing#smm">
                          <li className="handleul_servicetechno_list border4" >
                            SMM
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link3 " href="/digital-marketing#political">
                          <li className="handleul_servicetechno_list border4" >
                            POLITICAL PROFILE
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link3" href="/digital-marketing#mobileapp">
                          <li className="handleul_servicetechno_list border4" >
                            MOBILE APP PROMOTION
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 handlefor_mob_img">
                  <div onClick={() => handlepagechange("digital-marketing")}>
                    <Image width={500} height={500} src={digitalappimg ? digitalappimg : digimg} alt="webimg" className="maintainright_img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 mt-5" style={{padding: "25px 10px", background: "#fafbfb"}}>
              <div className="row maintainpd_service">
                <div className="col-lg-5 col-md-6 handlefor_mob_img">
                  {" "}
                  <div onClick={() => handlepagechange("web_graphic-designing")}>
                    <Image width={550} height={500} src={webgraappimg ? webgraappimg : graimg} className="maintainleft_img" alt="graphic poster" style={{borderRadius: "10px", position: "relative", right: "8%"}} />
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 d-flex align-items-center handlemobileview_service handlefor_mob_con">
                  <div>
                    <h4 className="mb-3">{webgraapptitle ? webgraapptitle : "Web & Graphic Designing"}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
                      <ul className="handleul_servicetechno">
                        <Link scroll={false} smooth className="maintain_link4 " href="/web_graphic-designing#webdesign">
                          <li className="handleul_servicetechno_list border5" >
                            WEB DESIGN
                          </li>
                        </Link>

                        <Link scroll={false} smooth className="maintain_link4 " href="/web_graphic-designing#uiux">
                          <li className="handleul_servicetechno_list border5" >
                            UI & UX DESIGN
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link4 " href="/web_graphic-designing#reactjs">
                          <li className="handleul_servicetechno_list border5" >
                            REACT JS
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link4 " href="/web_graphic-designing#viewjs">
                          <li className="handleul_servicetechno_list border5" >
                            VUE JS
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link4 " href="/web_graphic-designing#logo">
                          <li className="handleul_servicetechno_list border5" >
                            LOGO BANNER
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link4 " href="/web_graphic-designing#brochur">
                          <li className="handleul_servicetechno_list border5" >
                            BROCHUR & MOKEUP
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 mt-5" style={{padding: "25px 10px", background: "#fafbfb"}}>
              <div className="row maintainpd_service">
                <div className="col-lg-7 col-md-6 d-flex align-items-center maintain_space_box handlefor_mob_con">
                  <div>
                    <h4 className="mb-3">{erpapptitle ? erpapptitle : "Enterprice Services"}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
                      <ul className="handleul_servicetechno">
                        <Link scroll={false} smooth className="maintain_link5" href="/enterprise-services#erp">
                          <li className="handleul_servicetechno_list border6" >
                            ERP
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link5" href="/enterprise-services#crm">
                          <li className="handleul_servicetechno_list border6" >
                            CRM
                          </li>
                        </Link>
                        <Link scroll={false} smooth className="maintain_link5" href="/enterprise-services#accounting">
                          <li className="handleul_servicetechno_list border6" >
                            CUSTOMIZED ACCOUNTING
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 handlefor_mob_img">
                  <div onClick={() => handlepagechange("enterprise-services")}>
                    <Image width={500} height={500} src={erpappimg ? erpappimg : entimg} alt="webimg" className="maintainright_img" />
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