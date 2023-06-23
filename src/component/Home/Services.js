import React from "react";
import webimg from '../../assets/images/services/web-app-development.webp'
import mobimg from '../../assets/images/services/mobile-app-development.webp'
import deskimg from '../../assets/images/services/desktop-software-development.webp'
import digimg from '../../assets/images/services/digital-marketing.webp'
import graimg from '../../assets/images/services/web-graphic-designing.webp'
import entimg from '../../assets/images/services/enterprise-services.webp'
import { HashLink } from "react-router-hash-link";

export default function Services(className) {
  return (<>
    <section className={`softstormweb-service handleservice pt-70 pb-80 ${className}`} id="service">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-lg-12 col-md-11">
            <div className=" text-center">
              <h3 >
                Our Services
              </h3>
              <span className="main-header-line_choos"></span>
              <p>
                Our Present Service Spectrum Your Business Objectives & Our IT Solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-11">
            <div className="row">
             <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div
                  className="softstormweb-techno-service mt-30 wow animated fadeInUp"
                  data-aos="fade-right" data-aos-duration="400"

                >
                  <div className="imagedisplay" style={{minHeight:'230px' , background:'#ddf4fd' }}>
                    <img src={webimg} alt='webimg' style={{ borderRadius: '10px' }} />
                  </div>
                  <h4 className="title" style={{ textAlign: 'center' }}>Web Application Development</h4>
                  <div className="servicedisplay">
                    <HashLink smooth className="main-btn-about mob1 ml-10" to="/web-application-developement#php">
                      PHP
                    </HashLink>
                    <HashLink className="main-btn-about mob1 ml-10" to="/web-application-developement#codeigniter">
                      CODEIGNITER
                    </HashLink>
                    <HashLink className="main-btn-about mob1 ml-10" to="/web-application-developement#laravel">
                      LARAVEL
                    </HashLink>
                    <HashLink className="main-btn-about mob1 ml-10" to="/web-application-developement#python">
                      NODE JS
                    </HashLink>
                    <HashLink className="main-btn-about mob1 ml-10" exact to="/web-application-developement#python">
                      PYTHON
                    </HashLink>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div
                  className="softstormweb-techno-service item-2 mt-30 wow animated fadeInUp"
                  data-aos="fade-right" data-aos-duration="800"                >
                  <div className="imagedisplay" style={{minHeight:'230px' , background:'#fedaf4'}}>
                    <img src={mobimg} alt='webimg' style={{ borderRadius: '10px' }} />
                  </div>
                  <h4 className="title" style={{ textAlign: 'center' }}>Mobile Application Development</h4>
                  <div className="servicedisplay">
                    <HashLink className="main-btn-about mob2 ml-10" to="/mobile-application-developement#ios">
                      IOS
                    </HashLink>
                    <HashLink className="main-btn-about mob2 ml-10" to="/mobile-application-developement#android">
                      ANDROID
                    </HashLink>
                    <HashLink className="main-btn-about mob2 ml-10" to="/mobile-application-developement#flutter">
                      FLUTTER
                    </HashLink>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div
                  className="softstormweb-techno-service item-3 mt-30 wow animated fadeInUp "
                  data-aos="fade-right" data-aos-duration="1000"
                >
                  <div className="imagedisplay" style={{minHeight:'230px' , background:'#cadcff'}}>

                    <img src={deskimg} alt='webimg' style={{ borderRadius: '10px' }} />
                  </div>
                  <h4 className="title" style={{ textAlign: 'center' }}>Desktop Software Development</h4>
                  <div className="servicedisplay">
                    <HashLink className="main-btn-about mob3 ml-10" to="/desktop-software-developement#c">
                      C#
                    </HashLink>
                    <HashLink className="main-btn-about mob3 ml-10" to="/desktop-software-developement#c++">
                      C ++
                    </HashLink>
                    <HashLink className="main-btn-about mob3 ml-10" to="/desktop-software-developement#mashinlerning">
                      MASHINE LERNING
                    </HashLink>
                    <HashLink className="main-btn-about mob3 ml-10" to="/desktop-software-developement#controller">
                      CONTEROLLER  BASED
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
                <div
                  className="softstormweb-techno-service item-4 mt-30 wow animated fadeInUp  "
                  data-aos="fade-right" data-aos-duration="400"
                >
                  <div className="imagedisplay" style={{minHeight:'230px' , background:'#ffbc8d'}}>
                    <img src={digimg} alt='webimg' style={{ borderRadius: '10px' }} />
                  </div>
                  <h4 className="title" style={{ textAlign: 'center' }}>Digital Marketing</h4>
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
                <div
                  className="softstormweb-techno-service item-5 mt-30 wow animated fadeInUp"
                  data-aos="fade-right" data-aos-duration="800"
                >
                  <div className="imagedisplay" style={{minHeight:'230px' , background:'#97adff'}}>
                    <img src={graimg} alt='webimg' style={{ borderRadius: '10px' }} />
                  </div>
                  <h4 className="title" style={{ textAlign: 'center' }}>Web & Graphic Designing</h4>
                  <div className="servicedisplay">

                    <HashLink className="main-btn-about mob5 ml-10" to="/web_graphic-designing#webdesign">
                      WEB DESIGN
                    </HashLink>
                    <HashLink className="main-btn-about mob5 ml-10" to="/web_graphic-designing#uiux">
                      UI & UX DESIGN
                    </HashLink>
                    <HashLink className="main-btn-about mob5 ml-10" to="/web_graphic-designing#logo">
                      LOGO BANNER
                    </HashLink>
                    <HashLink className="main-btn-about mob5 ml-10" to="/web_graphic-designing#viewjs">
                      VUE JS
                    </HashLink>
                    <HashLink className="main-btn-about mob5 ml-10" to="/web_graphic-designing#reactjs">
                      REACT JS
                    </HashLink>
                    <HashLink className="main-btn-about mob5 ml-10" to="/web_graphic-designing#brochur">
                      BROCHUR & MOKEUP
                    </HashLink>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div
                  className="softstormweb-techno-service item-6 mt-30 wow animated fadeInUp"
                  data-aos="fade-right" data-aos-duration="1000"
                >
                  <div className="imagedisplay" style={{minHeight:'230px' , background:'#98e7d4'}}>
                    <img src={entimg} alt='webimg' style={{ borderRadius: '10px' }} />
                  </div>
                  <h4 className="title" style={{ textAlign: 'center' }}>Enterprise Services</h4>
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
    </section>
  </>)
}


{/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div
                  className="softstormweb-techno-service mt-30 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <div className="imagedisplay">
                    <img src={webimg} alt='webimg' style={{ borderRadius: '10px' }} />
                  </div>
                  <h4 className="title" style={{ textAlign: 'center' }}>Web Application Development</h4>
                  <div className="servicedisplay">
                    <HashLink smooth className="main-btn-about mob1 ml-10" to="/webapp#php">
                      PHP
                    </HashLink>
                    <HashLink className="main-btn-about mob1 ml-10" to="/webapp#codeigniter">
                      CODEIGNITER
                    </HashLink>
                    <HashLink className="main-btn-about mob1 ml-10" to="/webapp#laravel">
                      LARAVEL
                    </HashLink>
                    <HashLink className="main-btn-about mob1 ml-10" to="/webapp#python">
                      NODE JS
                    </HashLink>
                    <HashLink className="main-btn-about mob1 ml-10" exact to="/webapp#python">
                      PYTHON
                    </HashLink>
                  </div>
                </div>
              </div> */}