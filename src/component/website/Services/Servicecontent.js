import React ,{useState, useEffect} from "react";
// import { useHistory } from "react-router-dom";
import {Link, useHistory} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import webimg from "../../../assets/images/services/web-app-development.webp";
import mobimg from "../../../assets/images/services/mobile-app-development.webp";
import deskimg from "../../../assets/images/services/desktop-software-development.webp";
import digimg from "../../../assets/images/services/digital-marketing.webp";
import graimg from "../../../assets/images/services/web-graphic-designing.webp";
import entimg from "../../../assets/images/services/enterprise-services.webp";
import axios from "../../common/Axios";
const Servicecontent = ({className}) => {
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

  const handlepagechange = (e, data) => {
    history.push(`/${e}`)
  };


  useEffect(() => {
    const fetchServiceata = () => {
      axios
        .get("service/service_list", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          console.log(result.data.result);
          setWebappimg(result.data.result[0].frontpageimg);
          setWebapptitle(result.data.result[0].heading);
          setMobppimg(result.data.result[1].frontpageimg);
          setMobpptitle(result.data.result[1].heading);
          setDeskappimg(result.data.result[2].frontpageimg);
          setDeskapptitle(result.data.result[2].heading);
          setDigitalappimg(result.data.result[3].frontpageimg);
          setDigitalapptitle(result.data.result[3].heading);
          setWebgraappimg(result.data.result[4].frontpageimg);
          setWebgraapptitle(result.data.result[4].heading);
          setErpappimg(result.data.result[5].frontpageimg);
          setErpapptitle(result.data.result[5].heading);
        })
        .catch((err) => {
          setDbFetcherr(err.response.data.error);
        });
    };

    fetchServiceata();
  }, []);

  return (
    <>
      <section className={`softstormweb-service pt-70 pb-80 ${className}`} id="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="softstormweb-techno-service mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
              <div onClick={() => handlepagechange('web-application-developement')}>
                <img src={webappimg} alt="webimg"  style={{borderRadius: "10px"}}  />
              </div>
                <h4 className="title" style={{textAlign: "center"}} >
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
              <div onClick={() => handlepagechange( "mobile-application-developement")} >
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
                <img src={deskappimg} alt="webimg" style={{borderRadius: "10px"}}  />
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
              <div onClick={() => handlepagechange( "digital-marketing")}>
                <img src={digitalappimg} alt="webimg" style={{borderRadius: "10px"}}  />
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
                <img src={webgraappimg} alt="webimg" style={{borderRadius: "10px"}}  />
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
                <img src={erpappimg} alt="webimg" style={{borderRadius: "10px"}}  />
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
