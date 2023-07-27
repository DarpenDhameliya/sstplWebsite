import React from "react";
import IconOne from '../../../assets/images/icon/pencil.svg';
import IconTwo from '../../../assets/images/icon/creativity.svg';
import IconThree from '../../../assets/images/icon/prototype.svg';
import IconFour from '../../../assets/images/icon/computer.svg';
import IconFive from '../../../assets/images/icon/quality-check.svg';
import IconSix from '../../../assets/images/icon/start-up.svg';
import IconSeven from '../../../assets/images/icon/customer-support.svg';

export default function OurWorkService(className) {
  return (<>
    <section className={`softstormweb-service handleworkservice pt-70 pb-80 ${className}`} id="service" style={{background:'none'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-11">
            <div className=" text-center">
              <h3>
              We Follow Agile Development Process.
              </h3>
              <span className="main-header-line_choos"></span>
              <p>Our design a process follows a proven approach. We begin with a deep understanding of your needs and deliver a complete solution. </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-11">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6 col-sm-6" >
                <div
                  className="softstormweb-boc-service text-center mt-30 wow animated fadeInUp"
                  
                >
                  <div className="icon">
                    <img src={IconOne} alt="" />
                    <span>1</span>
                  </div>
                  <h4 className=" pb-2 pt-2">Requirement Gathering</h4>
                  <p> Requirement gathering involves collecting and documenting the needs of stakeholders to define project goals.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="softstormweb-boc-service text-center mt-30 item-2 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="400ms"
                >
                  <div className="icon">
                    <img src={IconTwo} alt="" />
                    <span>2</span>
                  </div>
                  <h4 className=" pb-2 pt-2">Design</h4>
                  <p>Design phase focuses on creating a visual and structural plan to meet the identified requirements.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="softstormweb-boc-service text-center mt-30 item-3 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                >
                  <div className="icon">
                    <img src={IconThree} alt="" />
                    <span>3</span>
                  </div>
                  <h4 className=" pb-2 pt-2">Prototype</h4>
                  <p>A prototype is developed to provide a working model that demonstrates key features and functionalities.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="softstormweb-boc-service text-center mt-30 item-4 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="800ms"
                >
                  <div className="icon">
                    <img src={IconFour} alt="" />
                    <span>4</span>
                  </div>
                  <h4 className=" pb-2 pt-2">Development</h4>
                  <p>During the development stage, software engineers write code to bring the design and prototype to life.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="softstormweb-boc-service text-center mt-30 item-5 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="800ms"
                >
                  <div className="icon">
                    <img src={IconFive} alt="" />
                    <span >5</span>
                  </div>
                  <h4 className=" pb-2 pt-2">Quality Assurance</h4>
                  <p>Quality assurance ensures that the developed software meets quality standards and performs as expected.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="softstormweb-boc-service text-center mt-30 item-2 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="800ms"
                >
                  <div className="icon">
                    <img src={IconSix} alt="" />
                    <span>6</span>
                  </div>
                  <h4 className=" pb-2 pt-2">Deployment</h4>
                  <p>Deployment involves releasing the developed software for end-users to access and utilize.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="softstormweb-boc-service text-center mt-30 item-3 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="800ms"
                >
                  <div className="icon">
                    <img src={IconSeven} alt="" />
                    <span>7</span>
                  </div>
                  <h4 className=" pb-2 pt-2">Support & Maintenance</h4>
                  <p>Support and maintenance involve providing ongoing assistance and updates to ensure the software's smooth operation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </>)
}


// .process-content:after {
//   content: "";
//   position: absolute;
//   left: 0;
//   width: 0%;
//   bottom: 0;
//   height: 4px;
//   background: linear-gradient(270deg, #c50004 -20%, #ffcd04 100%);
//   transition: all 0.5s ease;
//   -moz-transition: all 0.5s ease;
//   -webkit-transition: all 0.5s ease;
// }

// .progress-bar-striped {
//   background-image: linear-gradient(
//     45deg,
//     rgba(255, 255, 255, 0.15) 25%,
//     transparent 25%,
//     transparent 50%,
//     rgba(255, 255, 255, 0.15) 50%,
//     rgba(255, 255, 255, 0.15) 75%,
//     transparent 75%,
//     transparent
//   );
//   background-size: 1rem 1rem;
// }

// .swiper-container-3d .swiper-slide-shadow-left {
//   background-image: linear-gradient(
//     to left,
//     rgba(0, 0, 0, 0.5),
//     rgba(0, 0, 0, 0)
//   );
// }
// .swiper-container-3d .swiper-slide-shadow-right {
//   background-image: linear-gradient(
//     to right,
//     rgba(0, 0, 0, 0.5),
//     rgba(0, 0, 0, 0)
//   );
// }
// .swiper-container-3d .swiper-slide-shadow-top {
//   background-image: linear-gradient(
//     to top,
//     rgba(0, 0, 0, 0.5),
//     rgba(0, 0, 0, 0)
//   );
// }
// .swiper-container-3d .swiper-slide-shadow-bottom {
//   background-image: linear-gradient(
//     to bottom,
//     rgba(0, 0, 0, 0.5),
//     rgba(0, 0, 0, 0)
//   );
// }