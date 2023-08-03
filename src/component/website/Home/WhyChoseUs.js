import React from "react";
import image1 from "../../../assets/images/Group 16 (7).webp";
import mob1 from "../../../assets/images/customize solution png.webp";
import mob2 from "../../../assets/images/CUSTOMER SUPPORT.webp";
import mob3 from "../../../assets/images/LATEST TECHNOLOGY.webp";

export default function WhyChoseUs() {
  return (
    <>
      <section className="softstormweb-chooseus softstormweb-chooseus-1 pt-70 pb-80" id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11 col-sm-11">
              <div className="softstormweb-title-main-chooseus text-center">
                <p className=" softstormweb-title-discription">Why SoftStorm is the first choice for</p>
                <h3>Businesses That Prioritize Growth</h3>
                <span className="main-header-line_choos"></span>
                <p>We are dedicated to achieving our customer's goals, customizing their experiences, innovating through technology, and making a positive impact. We strive to continuously exceed expectations.</p>
              </div>
            </div>
          </div>
          <div className="row mt-30 align-items-center justify-content-center">
            <div className="col-lg-6 col-md-11 col-sm-11 col">
              <div>
                <div className="softstormweb-left-chooseus softstormweb-left-chooseus-l1 maintaincooseus" data-aos="fade-right" data-aos-duration="400">
                  <div className="whychoosebox">
                    <img src={mob1} alt="imagheader" style={{maxWidth:"67px"}}/>
                  </div>
                  <div>
                    <h4 className="handleh4_whycgoos">Customize Solution</h4>
                    <p>We always understand your need and provide you exact what you want.</p>
                  </div>
                </div>
                <div className="softstormweb-left-chooseus item-2 softstormweb-left-chooseus-l1" data-aos="fade-right" data-aos-duration="600">
                  <div className="whychoosebox">
                    <img src={mob2} alt="imagheader" draggable="false" style={{maxWidth:"67px"}}/>
                  </div>
                  <div>
                    <h4 className="handleh4_whycgoos">Customer Support</h4>
                    <p>We always become a solution for any need of our esteem client.</p>
                  </div>
                </div>
                <div className="softstormweb-left-chooseus item-3 softstormweb-left-chooseus-l1" data-aos="fade-right" data-aos-duration="800">
                  <div className="whychoosebox">
                    <img src={mob3} alt="imagheader" style={{maxWidth:"67px"}}/>
                  </div>
                  <div>
                    <h4 className="handleh4_whycgoos">Latest Technologies</h4>
                    <p>We are always updating our products with latest technologies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-11 col-sm-11">
              <div className="image-container wow animated fadeInRight image-container d-flex justify-content-center" data-aos="zoom-out-up" data-aos-duration="800" >
                <img src={image1} alt=""  className="handlewcu" />
              </div>
            </div>
          </div>
        </div>
      
       
      </section>
    </>
  );
}
