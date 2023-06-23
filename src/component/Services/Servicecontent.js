import React from "react";
// import { useHistory } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import webimg from '../../assets/images/services/web-app-development.webp'
import mobimg from '../../assets/images/services/mobile-app-development.webp'
import deskimg from '../../assets/images/services/desktop-software-development.webp'
import digimg from '../../assets/images/services/digital-marketing.webp'
import graimg from '../../assets/images/services/web-graphic-designing.webp'
import entimg from '../../assets/images/services/enterprise-services.webp'
import { NavHashLink } from 'react-router-hash-link';

const Servicecontent = ({ className }) => {
  const history = useHistory();
  const handlepagechange = (e, data) => {
    history.push(`/${data}`)
  }

  return (<>
    <section className={`softstormweb-service pt-70 pb-80 ${className}`} id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div
              className="softstormweb-techno-service mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <img src={webimg} alt='webimg' style={{ borderRadius: '10px' }} onClick={(e) => handlepagechange(e, "webapp")} />
              <h4 className="title" style={{ textAlign: 'center' }}>Web Application Development</h4>
              <div className="display-service text-center">
                <HashLink smooth className="main-btn-about mob1 ml-10" to={`/web-application-developement#php`}>
                  PHP
                </HashLink>
                <HashLink smooth className="main-btn-about mob1 ml-10" to="/web-application-developement#codeigniter">
                  CODEIGNITER
                </HashLink>
                <HashLink smooth className="main-btn-about mob1 ml-10" to="/web-application-developement#laravel">
                  LARAVEL
                </HashLink>
                <HashLink smooth className="main-btn-about mob1 ml-10" to="/web-application-developement#nodejs">
                  NODE JS
                </HashLink>
                <HashLink smooth className="main-btn-about mob1 ml-10" to="/web-application-developement#python">
                  PYTHON
                </HashLink>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div
              className="softstormweb-techno-service item-2 mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <img src={mobimg} alt='webimg' style={{ borderRadius: '10px' }} onClick={(e) => handlepagechange(e, "mobile")} />
              <h4 className="title" style={{ textAlign: 'center' }}>Mobile Application Development</h4>
              <div className="display-service text-center">
                <HashLink smooth className="main-btn-about mob2 ml-10" to="/mobile-application-developement#ios">
                  IOS
                </HashLink>
                <HashLink smooth className="main-btn-about mob2 ml-10" to="/mobile-application-developement#flutter">
                  FLUTTER
                </HashLink>
                <HashLink smooth className="main-btn-about mob2 ml-10" to="/mobile-application-developement#android">
                  ANDROID
                </HashLink>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div
              className="softstormweb-techno-service item-3 mt-30 wow animated fadeInUp "
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >

              <img src={deskimg} alt='webimg' style={{ borderRadius: '10px' }} onClick={(e) => handlepagechange(e, "desktop")} />
              <h4 className="title" style={{ textAlign: 'center' }}>Desktop Software Development</h4>
              <div className="display-service text-center">
                <HashLink smooth className="main-btn-about mob3 ml-10" to="/desktop-software-developement#c">
                  C#
                </HashLink>
                <HashLink smooth className="main-btn-about mob3 ml-10" to="/desktop-software-developement#c++">
                  c++
                </HashLink>
                <HashLink smooth className="main-btn-about mob3 ml-10" to="/desktop-software-developement#mashinlerning">
                  MASHINE LERNING
                </HashLink>
                <HashLink smooth className="main-btn-about mob3 ml-10" to="/desktop-software-developement#controller">
                  CONTEROLLER  BASED
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
            <div
              className="softstormweb-techno-service item-4 mt-30 wow animated fadeInUp  "
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <img src={digimg} alt='webimg' style={{ borderRadius: '10px' }} onClick={(e) => handlepagechange(e, "digital")} />
              <h4 className="title" style={{ textAlign: 'center' }}>Digital Marketing</h4>
              <div className="display-service text-center">
                {/* <Link
                  className="main-btn-about"
                  activeClass="active"
                  // spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to='/digital#smm'
                >smm</Link> */}
                <HashLink smooth className="main-btn-about mob4 ml-10" to="/digital-marketing#seo" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
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
            <div
              className="softstormweb-techno-service item-5 mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <img src={graimg} alt='webimg' style={{ borderRadius: '10px' }} onClick={(e) => handlepagechange(e, "graphic")} />
              <h4 className="title" style={{ textAlign: 'center' }}>Web & Graphic Designing</h4>
              <div className="display-service text-center">
                <HashLink smooth className="main-btn-about mob5 ml-10" to="/web_graphic-designing#webdesign">
                  WEB DESIGN
                </HashLink>
                <HashLink smooth className="main-btn-about mob5 ml-10" to="/web_graphic-designing#uiux">
                  UI & UX DESIGN
                </HashLink>
                <HashLink smooth className="main-btn-about mob5 ml-10" to="/web_graphic-designing#logo">
                  LOGO BANNER
                </HashLink>
                <HashLink smooth className="main-btn-about mob5 ml-10" to="/web_graphic-designing#viewjs">
                  VUE JS
                </HashLink>
                <HashLink smooth className="main-btn-about mob5 ml-10" to="/web_graphic-designing#reactjs">
                  REACT JS
                </HashLink>
                <HashLink smooth className="main-btn-about mob5 ml-10" to="/web_graphic-designing#brochur">
                  BROCHUR & MOKEUP
                </HashLink>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div
              className="softstormweb-techno-service item-6 mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <img src={entimg} alt='webimg' style={{ borderRadius: '10px' }} onClick={(e) => handlepagechange(e, "enterprise")} />
              <h4 className="title" style={{ textAlign: 'center' }}>Enterprise Services</h4>
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
  </>)
};

export default Servicecontent;

{/* <header className="service-header " id="service-header_id" >
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
</header> */}