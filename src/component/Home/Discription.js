import React ,{useEffect} from "react";
import CounterUpCom from "../common/lib/CounterUpCom";
import counterIconOne from '../../assets/images/icon/counter-icon-1.svg';
import counterIconTwo from '../../assets/images/icon/counter-icon-2.svg';
import counterIconThree from '../../assets/images/icon/counter-icon-3.svg';
import counterIconFour from '../../assets/images/icon/counter-icon-4.svg';

export default function Discription() {

  return (
    <>
      <div className="softstormweb-discription pt-70 pb-120" id="counter">
        <div className="container">
          <div className="softstormweb-title">
            <p className="softstormweb-title-discription d-flex justify-content-center">We Are SoftStorm.</p>
            <h2 className="d-flex justify-content-center">We Have The Experience</h2>
            <span className="main-header-line" style={{ }}></span>
            <p className="text-center">SoftStorm is your trusted partner for digital transformation, offering tailored services in software development, business intelligence, and mobile/web app development. With a proven track record of 30+ global clients in five years, we deliver over 50 successful projects with 100% client satisfaction. Our team's extensive 100K+ hours of freelancing experience guarantee the expertise to bring your vision to reality. Ranked among the top 1% talent on platforms like Upwork, we keep you ahead in the dynamic business landscape.</p>

          </div>
          <div className="row mt-20" data-aos-duration="1000" data-aos="fade-up">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="softstormweb-counter-discription"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="counter-content">
                  <div className="icon">
                    <img src={counterIconOne} alt="" />
                  </div>
                  <h3 className="title">
                    <span className="counter-item">
                      <CounterUpCom endValue={30} sectionSelect="counter" />
                    </span>
                    +
                  </h3>
                  <p>Globle Client</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="softstormweb-counter-discription  item-2 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="counter-content">
                  <div className="icon">
                    <img src={counterIconTwo} alt="" />
                  </div>
                  <h3 className="title">
                    <span className="counter-item">
                      <CounterUpCom endValue={50} sectionSelect="counter" />
                    </span>
                    +
                  </h3>
                  <p>Success Project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="softstormweb-counter-discription  item-3 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="600ms"
              >
                <div className="counter-content">
                  <div className="icon">
                    <img src={counterIconThree} alt="" />
                  </div>
                  <h3 className="title">
                    <span className="counter-item">
                      <CounterUpCom endValue={100} sectionSelect="counter" />
                    </span>
                    %
                  </h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="softstormweb-counter-discription  item-4 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="800ms"
              >
                <div className="counter-content">
                  <div className="icon">
                    <img src={counterIconFour} alt="" />
                  </div>
                  <h3 className="title">
                    <span className="counter-item">
                      <CounterUpCom endValue={18} sectionSelect="counter" />
                    </span>
                    +
                  </h3>
                  <p>Tech Experts Team</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}
