import React, {useEffect} from "react";
import shapeTwo from "../../../assets/images/shape/shape-10.webp";
import shapeThree from "../../../assets/images/shape/shape-3.webp";
import Lottie from "lottie-react";
import homedata from "../../common/fM1Ya2VfEr.json";
import {Link} from "react-router-dom";
import fileContent from "../../../sample.txt";

export default function Home() {
  useEffect(() => {
    readFile();
  }, []);


  const readFile = async () => {
    try {
      const response = await fetch(fileContent);
      if (response.ok) {
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const metaTag = doc.querySelector('meta[name="google-site-verification"]');
        const scriptTags = doc.querySelectorAll("script");
        if (metaTag) {
          document.head.appendChild(metaTag);
        }
        scriptTags.forEach((scriptTag) => {
          document.head.appendChild(scriptTag);
        });
        // checkMetaTag();
      } else {
        console.error("Error reading file:", response.status);
      }
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  // const checkMetaTag = () => {
  //   const metaTag = document.head.querySelector('meta[name="google-site-verification"]');
  //   const scriptTags = document.head.querySelectorAll('script');
  //   scriptTags.forEach((scriptTag) => {
  //   });
  // }

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
                <Link to="/contact" className="main-btn  mt-4 fw-600">
                  CONSULT SOFTSTORM
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-11">
              <div className="website-css-thumb" data-aos-duration="2000" data-aos="fade-up">
                <div className="thumb wow animated fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                  <Lottie animationData={homedata} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape-1">
          <img src={shapeTwo} alt="" />
        </div>
        <div className="hero-shape-2">
          <img src={shapeThree} alt="" />
        </div>
        {/* <div className="hero-shape-3">
        <img src={shapeFour} alt="" />
      </div> */}
      </section>
    </>
  );
}
