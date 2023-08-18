import React from "react";
import shapeTwo from "../../../assets/images/code (3).webp";
import shape15 from "../../../assets/images/PERSANTAGE (3).png";
import shapeThree from "../../../assets/images/curly brecket (1).png";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import homedata from "./fM1Ya2VfEr.json";
const Home = () => {
  return (
    <>
      <section className="website-css-area">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-11">
              <div className="website-css-content">
                <h4 className="pb-3 fw-600">Digitalize Businesses Across the World</h4>
                <h2 className="pb-3 handle_home_animat">Trusted Service </h2>
                <div className="d-flex text-center softstorm_home_tebview pb-3">
                  <h2 className=" handle_home_animat">Provider for</h2>
                  <div className="verticalFlip">
                    <span className="maintain_mobview">AI Tool & iOT Service</span>
                    <span className="maintain_mobview">Web Application</span>
                    <span className="maintain_mobview">Mobile Application</span>
                    <span className="maintain_mobview">Enterprise Solution</span>
                    <span className="maintain_mobview">Digital Marketing</span>
                  </div>
                </div>

                <p className="home_effect_p pb-2">Save time to build your business, let us build the softwares and apps for you!</p>
                <Link scroll={false} href="/contact" className="main-btn  mt-4 fw-600">
                  CONSULT SOFTSTORM
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-11">
              <div className="website-css-thumb" activeClassName="active-link" data-aos-duration="2000" data-aos="fade-up">
                <div className="thumb wow animated fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                  <Lottie animationData={homedata} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape-1 ">
          <Image src={shapeTwo} alt="shap" />
        </div>
        <div className="hero-shape-2">
          <Image src={shapeThree} alt="shap" className="width-25" />
        </div>
        <div className="service-shape-2">
          <Image src={shape15} alt="shap" className="width-25" />
        </div>
      </section>
    </>
  );
};

export default Home;
