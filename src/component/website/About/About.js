/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useRef} from "react";
// import aboutvodeo from "../../../assets/images/about_video.mp4";
import aboutvodeo1 from "../../../assets/images/about_video.webm";


const About = ({className, list, error}) => {
  const [aboutheading, setAboutheading] = useState("");
  const [aboutcontent, setAboutcontent] = useState("");

  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.play();
    document.title = "About Us | SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  }, []);

  const handleclick = () => {
    const videoElement = videoRef.current;
    videoElement.currentTime = 0;
    videoElement.muted = false;
    videoElement.play();
  };  


  useEffect(() => {
    if(list.length > 0) {
      list[0].aboutcontent.replace(/<\/?p>/g, "")
      setAboutheading(list[0].about);
      setAboutcontent(list[0].aboutcontent.replace(/<\/?p>/g, ""));
    }
  }, [list]);



  return (
    <>
      <section className={`softstormweb-video-player pt-70 pb-80 `}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-10">
                  <div className="softstormweb-about-main-title">
                    <h3 className="mb-10">{aboutheading ? aboutheading : 'We are SoftStorm'} </h3>
                    {aboutcontent ? <div dangerouslySetInnerHTML={{ __html: aboutcontent }} /> : <p>SoftStorm is your trusted partner for digital transformation, offering tailored services in software development, business intelligence, and mobile/web app development. With a proven track record of 30+ global clients in five years, we deliver over 50 successful projects with 100% client satisfaction. Our team's extensive 100K+ hours of freelancing experience guarantee the expertise to bring your vision to reality. Ranked among the top 1% talent on platforms like Upwork, we keep you ahead in the dynamic business landscape.</p>}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-10">
                  <div className="about-tab">
                    <video
                      ref={videoRef}
                      id="video"
                      width="100%"
                      muted
                      onClick={handleclick}
                      autoPlay
                      style={{borderRadius: "30px"}}
                      loop
                    >
                      <source src={aboutvodeo1} type="video/webm" />
                      <source src={aboutvodeo1} type="video/mp4" />
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
