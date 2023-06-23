/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useRef} from "react";
import aboutvodeo from "../../assets/images/about_video.mp4";

const About = ({className}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  const handleclick = () => {
    const videoElement = videoRef.current;
    videoElement.currentTime = 0;
    videoElement.muted = false;
    videoElement.play();
  };

  return (
    <>
      <section className={`softstormweb-video-player pt-70 pb-80 ${className || ""}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-10">
                  <div className="softstormweb-about-main-title">
                    <h3 className="mb-10">Our Company</h3>
                    <p>SoftStorm is your trusted partner for digital transformation, offering tailored services in software development, business intelligence, and mobile/web app development. With a proven track record of 30+ global clients in five years, we deliver over 50 successful projects with 100% client satisfaction. Our team's extensive 100K+ hours of freelancing experience guarantee the expertise to bring your vision to reality. Ranked among the top 1% talent on platforms like Upwork, we keep you ahead in the dynamic business landscape.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-10">
                  <div className="about-tab">
                    <video
                      ref={videoRef}
                      id="video"
                      width="100%"
                      // height="240"
                      muted
                      onClick={handleclick}
                      autoPlay
                      style={{borderRadius: "30px"}}
                      // controls
                      loop
                    >
                      <source src={aboutvodeo} type="video/mp4" />
                    </video>
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

export default About;
