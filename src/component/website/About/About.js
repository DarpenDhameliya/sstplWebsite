/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useRef} from "react";
import aboutvodeo from "../../../assets/images/about_video.mp4";

const About = ({className, list, error}) => {
  const [metaList, setMetaList] = useState([]);
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

  // useEffect(() => {
  //   // Create or update the meta
  //   const metaTitle = document.querySelector('meta[name="title"]');
  //   if (metaTitle) {
  //     metaTitle.setAttribute("content", "sstpl content");
  //   }
  //   // else {
  //   //   const newMetaTitle = document.createElement('meta');
  //   //   newMetaTitle.setAttribute('name', 'title');
  //   //   newMetaTitle.setAttribute('content', 'sstpl content');
  //   //   document.head.appendChild(newMetaTitle);
  //   // }

  //   const metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute("content", "Softstorm Techonosys dk");
  //   }
  //   // else {
  //   //   const newMetaDescription = document.createElement('meta');
  //   //   console.log(newMetaDescription)
  //   //   newMetaDescription.setAttribute('name', 'description');
  //   //   newMetaDescription.setAttribute('content', 'Softstorm Techonosys dk');
  //   //   document.head.appendChild(newMetaDescription);
  //   // }
  // }, []);
  


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
                    <h3 className="mb-10">{aboutheading}</h3>
                    <div dangerouslySetInnerHTML={{ __html: aboutcontent }} />
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
