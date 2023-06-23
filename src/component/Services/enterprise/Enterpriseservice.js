import React, { useState, useEffect ,useRef} from "react";
import SidePortion from "../SidePortion";
import { servicesticky4, servicesticky1, servicesticky2, servicesticky3 , servicesticky5 ,servicesticky6} from "../../common/lib/ServiceSticky";
import entimg from '../../../assets/images/services/enterprise-services.webp'

const Enterpriseservice = () => {
  const [tab, setTab] = useState('');
  
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2; // Calculate the middle of the window

      const rect1 = ref1.current.getBoundingClientRect();
      const rect2 = ref2.current.getBoundingClientRect();
      const rect3 = ref3.current.getBoundingClientRect();


      const div1IsMiddle = rect1.top <= middle && rect1.bottom >= middle;
      const div2IsMiddle = rect2.top <= middle && rect2.bottom >= middle;
      const div3IsMiddle = rect3.top <= middle && rect3.bottom >= middle;


      if (div1IsMiddle) {
        setTab("erp");
      } else if (div2IsMiddle) {
        setTab("crm");
      } else if (div3IsMiddle) {
        setTab("accounting");
      } else {
        setTab('')
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // var filterdata
  // useEffect(() => {
  //   var data = window.location.href
  //   filterdata = data.split("#")[1]
  //   setTab(filterdata)
  // })



  useEffect(() => {
    if (window.innerWidth < 1200 && window.innerWidth > 992) {
      servicesticky3();
      servicesticky4();
    } else if (window.innerWidth < 1400 && window.innerWidth > 1200) {
      servicesticky5();
      servicesticky6();
    }else {
      servicesticky1();
      servicesticky2();
    }
    const element = document.querySelector('.service-header');
    element.classList.add('display');
  }, [])
  return (<>
    <section className="blogpage-section">
      <header className="service-header haderhide">
        {/* <div className="container"> */}
        <div className="header-nav-box">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className=" d-flex">
                <div >
                  <a className={` handleservice_header  pl-3 pr-3 ${tab === 'erp' ? 'subHadactive' : ''}`} style={{ color: '#fff', paddingTop: '12px' }} href="#erp" >
                    ERP
                  </a>
                </div>
                <span style={{margin: "12px 5px 0 " , color: 'white'}}>|</span>
                {/* <div style={{borderLeft: '1px solid white', paddingLeft: '5px'}}> */}
                <div>
                  <a className={` handleservice_header pl-3 pr-3 ${tab === 'crm' ? 'subHadactive' : ''}`} style={{ color: '#fff', paddingTop: '12px' }} href="#crm">
                    CRM
                  </a>
                </div>
                <span style={{margin: "12px 5px 0 " , color: 'white'}}>|</span>
                <div>
                  <a className={` handleservice_header pl-3 pr-3 ${tab === 'accounting' ? 'subHadactive' : ''}`} style={{ color: '#fff', paddingTop: '12px' }} href="#accounting">
                    CUSTOMIZED ACCOUNTING
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* </div> */}
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7 ">
            <div className="single-post-area">
              <div className="post-thumb">
                <img src={entimg} alt="" />
              </div>
              <span id="erp" style={{ paddingTop: '15px' }}></span>
              <h4 className="article-title">Enterprise Services</h4>

              <header className="service-header_small haderhide" id="service-header_id" >
                <div className="container">
                  <div className="header-nav-box">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <div className=" d-flex">
                          <div >
                            <a className={` handleservice_header pl-2 pr-2 ${tab === 'erp' ? 'subHadactive' : ''}`} style={{ color: '#fff', paddingTop: '12px' }} href="#erp" >
                              ERP
                            </a>
                          </div><span className="handlespan"> | </span>
                          <div>
                            <a className={` handleservice_header pl-2 pr-2 ${tab === 'crm' ? 'subHadactive' : ''}`} style={{ color: '#fff', paddingTop: '12px' }} href="#crm">
                              CRM
                            </a>
                          </div><span className="handlespan"> | </span>
                          <div>
                            <a className={` handleservice_header pl-2 pr-2 ${tab === 'accounting' ? 'subHadactive' : ''}`} style={{ color: '#fff', paddingTop: '12px' }} href="#accounting">
                              CUSTOMIZED ACCOUNTING
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className={`softstormweb-web-service`} style={{ marginTop: '20px' }}  ref={ref1}>
                    <div className="content" >
                      <h4 className="title">ERP</h4>
                      <p>If your business demands a website which needs to gather information. Then PHP is the tool of choice. PHP gives web developers the ability to create dynamic web pages, which can collect data from visitors. Perfect for those business concerns which rely on capturing data. Travel Agents, Hospitals and similar concerns should go for PHP.</p>
                      <h6>SoftStorm Provides:</h6>
                      <ul className="ml-15 mt-2 handlelist">
                        <li>
                          Custom PHP Developmente
                        </li>
                        <li>
                          SaaS using PHP
                        </li>
                        <li>
                          E-Commerce Solutions using PHP
                        </li>
                        <li>
                          Portal Development Solutions
                          <span id="crm"></span>
                        </li>
                        <li>
                          PHP/MySql Development
                        </li>
                        <li>
                          Web application and Social Networking Solution
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div
                    className={`softstormweb-web-service `}
                    style={{ marginTop: '25px' }}
                    ref={ref2}
                  >
                    <div className="content" >
                      <h4 className="title">CRM</h4>
                      <p>Perhaps the most popular PHP development framework of present times. Perfect for travel aggregators and similar business. It is light and flexible. Data and logic based services are constructed on this framework.</p>
                      <h6>SoftStorm Provides:</h6>
                      <ul className="ml-15 mt-2 handlelist">
                        <li>
                          Codeigniter Migration Service
                        </li>
                        <li>
                          Fast Development using CI
                        </li>
                        <li>
                          <span id="accounting" ></span>
                          Application Development
                        </li>
                        <li>
                          Networking Solutions
                        </li>
                        <li>
                          Templating Development using CI
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div
                    className={`softstormweb-web-service `}
                    style={{ marginTop: '25px' }}
                    ref={ref3}
                  >
                    <div className="content" >
                      <h4 className="title">CUSTOMIZED ACCOUNTING</h4>
                      <p>A perfect tool for SME industry and their web development needs. This framework gives the freedom of deploying highly multifunctional websites quickly. Department level, functional web development, and data integration are possible with Laravel.</p>
                      <h6>SoftStorm Provides:</h6>
                      <ul className="ml-15 mt-2 handlelist">
                        <li>
                          Custom development
                        </li>
                        <li>
                          Saas Development
                        </li>
                        <li>
                          Custom theme development
                        </li>
                        <li>
                          Migration to Laravel
                        </li>
                        <li>
                          Extension development
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <SidePortion />
          </div>
        </div>
      </div>
    </section>
  </>)
};

export default Enterpriseservice;
