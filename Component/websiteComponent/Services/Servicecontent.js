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
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import style from './service.module.css'
const FooterLink = dynamic(() => import("../SubComponent/FooterLink").then((module) => module.FooterLink));

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
      <section className={`pt-70 pb-80 ${className}`} id="service">
        <div className="container">

          <div className="row">
            <div className={`col-md-12 col-sm-12 ${style.service_box}`} >
              {/* line no 78 has issu of scrool in mobile for only this page  */}
              <div className={`row ${style.maintainpd_service}`}>
                <div className={`col-lg-5 col-md-6 ${style.handlefor_mob_img}`}>
                  {" "}
                  <div onClick={() => handlepagechange("web-application-developement")}>
                    <Image width={800} height={500} src={webappimg ? webappimg : webimg} alt="webimg" className={style.maintainleft_img}  />
                  </div>
                </div>
                <div className={`col-lg-7 col-md-6 d-flex align-items-center ${style.handlemobileview_service} ${style.handlefor_mob_con}`}>
                  <div>
                    <h4 className="mb-3">{webapptitle ? webapptitle : "Web Application Developement"}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className=" d-flex justify-content-center pt-4">
                      <ul className={style.handleul_servicetechno}>
                        <FooterLink className={style.maintain_link } href="/web-application-developement#nodejs">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border1}`} >
                            NODE JS
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link } href="/web-application-developement#php">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border1}`} >
                            PHP
                          </li>
                        </FooterLink>
                        <FooterLink className={style.maintain_link } href="/web-application-developement#laravel">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border1}`} >
                            LARAVEL
                          </li>
                        </FooterLink>
                        <FooterLink className={style.maintain_link } href="/web-application-developement#codeigniter">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border1}`} >
                            CODEIGNITER
                          </li>
                        </FooterLink>
                        <FooterLink className={style.maintain_link } exact href="/web-application-developement#python">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border1}`} >
                            PYTHON
                          </li>
                        </FooterLink>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-12 col-sm-12 ${style.service_box} mt-5`} >
              <div className={`row ${style.maintainpd_service}`}>
                <div className={`col-lg-7 col-md-6 d-flex align-items-center ${style.maintain_space_box} ${style.handlefor_mob_con}`}>
                  <div>
                    <h4 className="mb-3">{mobapptitle ? mobapptitle : "Mobile Application Developer"}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className=" d-flex justify-content-center pt-4">
                      <ul className={style.handleul_servicetechno}>
                        <FooterLink smooth className={style.maintain_link1} href="/mobile-application-developement#flutter">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border2}`} >
                            FLUTTER
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link1} href="/mobile-application-developement#android">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border2}`} >
                            ANDROID
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link1} href="/mobile-application-developement#ios">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border2}`} >
                            IOS
                          </li>
                        </FooterLink>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 handlefor_mob_img">
                  <div onClick={() => handlepagechange("mobile-application-developement")}>
                    <Image width={800} height={500} src={mobappimg ? mobappimg : mobimg} alt="webimg" className={style.maintainright_img} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-12 col-sm-12 ${style.service_box} mt-5`} >
              <div className={`row ${style.maintainpd_service}`}>
                <div className="col-lg-5 col-md-6 handlefor_mob_img">
                  {" "}
                  <div onClick={() => handlepagechange("desktop-software-developement")}>
                    <Image width={800} height={500} src={deskappimg ? deskappimg : deskimg}  alt="Desktop" className={style.maintainleft_img} style={{borderRadius: "10px", position: "relative", right: "8%"}} />
                  </div>
                </div>
                <div className={`col-lg-7 col-md-6 d-flex align-items-center ${style.handlemobileview_service} ${style.handlefor_mob_con}`}>
                  <div>
                    <h4 className="mb-3">{deskapptitle ? deskapptitle : "Desktop Software Developement"}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className=" d-flex justify-content-center pt-4">
                      <ul className={style.handleul_servicetechno}>
                        <FooterLink smooth className={style.maintain_link2} href="/desktop-software-developement#c">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border3}`} >
                            C#
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link2} href="/desktop-software-developement#c++">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border3}`} >
                            C++
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link2} href="/desktop-software-developement#mashinlerning">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border3}`} >
                            MASHINE LEARNING
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link2} href="/desktop-software-developement#controller">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border3}`} >
                            CONTEROLLER BASED
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link2} href="/desktop-software-developement#axistravelling">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border3}`} >
                            AXIS TRAVELLING
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link2} href="/desktop-software-developement#lasersource">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border3}`} >
                            LASER SOURCE
                          </li>
                        </FooterLink>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-12 col-sm-12 ${style.service_box} mt-5`} >
              <div className={`row ${style.maintainpd_service}`}>
                <div className={`col-lg-7 col-md-6 d-flex align-items-center ${style.maintain_space_box} ${style.handlefor_mob_con}`}>
                  <div>
                    <h4 className="mb-3">{digitalapptitle ? digitalapptitle : "Digital Marketing"}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className=" d-flex justify-content-center pt-4">
                      <ul className={style.handleul_servicetechno}>
                        <FooterLink smooth className={style.maintain_link3} href="/digital-marketing#seo" >
                          <li className={` ${style.handleul_servicetechno_list} ${style.border4}`} >
                            SEO
                          </li>
                        </FooterLink>
                        <FooterLink className={style.maintain_link3} href="/digital-marketing#smm">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border4}`} >
                            SMM
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link3} href="/digital-marketing#political">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border4}`} >
                            POLITICAL PROFILE
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link3} href="/digital-marketing#mobileapp">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border4}`} >
                            MOBILE APP PROMOTION
                          </li>
                        </FooterLink>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 handlefor_mob_img">
                  <div onClick={() => handlepagechange("digital-marketing")}>
                    <Image width={800} height={500} src={digitalappimg ? digitalappimg : digimg} alt="webimg" className={style.maintainright_img} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-12 col-sm-12 ${style.service_box} mt-5`} >
              <div className={`row ${style.maintainpd_service}`}>
                <div className="col-lg-5 col-md-6 handlefor_mob_img">
                  {" "}
                  <div onClick={() => handlepagechange("web_graphic-designing")}>
                    <Image width={800} height={500} src={webgraappimg ? webgraappimg : graimg} className={style.maintainleft_img} alt="graphic poster" style={{borderRadius: "10px", position: "relative", right: "8%"}} />
                  </div>
                </div>
                <div className={`col-lg-7 col-md-6 d-flex align-items-center ${style.handlemobileview_service} ${style.handlefor_mob_con}`}>
                  <div>
                    <h4 className="mb-3">{webgraapptitle ? webgraapptitle : "Web & Graphic Designing"}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className=" d-flex justify-content-center pt-4">
                      <ul className={style.handleul_servicetechno}>
                        <FooterLink smooth className={style.maintain_link4} href="/web_graphic-designing#webdesign">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border5}`} >
                            WEB DESIGN
                          </li>
                        </FooterLink>

                        <FooterLink smooth className={style.maintain_link4} href="/web_graphic-designing#uiux">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border5}`} >
                            UI & UX DESIGN
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link4} href="/web_graphic-designing#reactjs">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border5}`} >
                            REACT JS
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link4} href="/web_graphic-designing#viewjs">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border5}`} >
                            VUE JS
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link4} href="/web_graphic-designing#logo">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border5}`} >
                            LOGO BANNER
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link4} href="/web_graphic-designing#brochur">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border5}`} >
                            BROCHUR & MOKEUP
                          </li>
                        </FooterLink>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-12 col-sm-12 ${style.service_box} mt-5`} >
              <div className={`row ${style.maintainpd_service}`}>
                <div className={`col-lg-7 col-md-6 d-flex align-items-center ${style.maintain_space_box} ${style.handlefor_mob_con}`}>
                  <div>
                    <h4 className="mb-3">{erpapptitle ? erpapptitle : "Enterprice Services"}</h4>
                    <p>Need to build a smart web service. Cloud computing based solutions are built on Python. Smart applications with the ability to analyze data is what python all about. Perfect for those looking to develop simple web solutions to complex real-life problems. Companies like health record keepers and taxi aggregators should choose this framework.</p>
                    <div className=" d-flex justify-content-center pt-4">
                      <ul className={style.handleul_servicetechno}>
                        <FooterLink smooth className={style.maintain_link5} href="/enterprise-services#erp">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border6}`} >
                            ERP
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link5} href="/enterprise-services#crm">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border6}`} >
                            CRM
                          </li>
                        </FooterLink>
                        <FooterLink smooth className={style.maintain_link5} href="/enterprise-services#accounting">
                          <li className={` ${style.handleul_servicetechno_list} ${style.border6}`} >
                            CUSTOMIZED ACCOUNTING
                          </li>
                        </FooterLink>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 handlefor_mob_img">
                  <div onClick={() => handlepagechange("enterprise-services")}>
                    <Image width={800} height={500} src={erpappimg ? erpappimg : entimg} alt="webimg" className={style.maintainright_img} />
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