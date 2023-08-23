import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aboutheader1 from "../../../assets/images/aboutus_header/appfutura.webp";
import aboutheader2 from "../../../assets/images/aboutus_header/clutch.webp";
import aboutheader3 from "../../../assets/images/aboutus_header/glassdoor.webp";
import aboutheader4 from "../../../assets/images/aboutus_header/goodfirms.webp";
import aboutheader5 from "../../../assets/images/aboutus_header/upwork.webp";
import Image from "next/image";
import { api } from "../../Axios";


export default function Testimonial(className) {
  const sliderRef = useRef();
  const settings = {
    autoplay: true,
    arrows: false,
    dots: false,
  };
  const sliderNext = () => {
    sliderRef.current.slickNext();
  };
  const sliderPrev = () => {
    sliderRef.current.slickPrev();
  };
  const [staticdata, setStaticdata] = useState([]);
  const [workdata, setWorkdata] = useState([]);
  const [fetcherr, setFetcherr] = useState("");

  const fetchHiredata = () => {
    api
      .post("testimonial/testimonial_list")
      .then((result) => {
        let data = result.data.result.sort((a, b) => a.contentpositionview - b.contentpositionview);
        setWorkdata(data);
      })
      .catch((err) => {
        setFetcherr(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);

  useEffect(() => {
    const importData = async () => {
      const TechnologyData = await import("./TestimonialStaticData");
      const sortedData = TechnologyData.default;
      setStaticdata(sortedData);
    };
    setTimeout(() => {
      if(workdata.length === 0 ){
        importData();
      }
    }, 2000);
  }, []);
  return (
    <>
      <section className={`softstormweb-testimoial pt-70 pb-80 ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="softstormweb-left-testimoial">
                <div className="handletestimnoal_teb">
                  <h3 className="title mobiletitle_testimonial ">Testimonial</h3>
                  <div className="testimonial_line">
                    <span className="main-header-line_choos "></span>{" "}
                  </div>
                  <p>We believe in the rewards of hard work. Our exceptional services are validated by positive ratings and reviews on various platforms. Explore customer testimonials to make an informed decision based on their experiences, feedback, and success stories.</p>
                  <div className="col-lg-12 col-md-12 mt-3 mb-3  award_testimonal">
                    <ul style={{ display: "contents" }}>
                      <li>
                        <Image src={aboutheader5} alt="award" className="setAward" />
                      </li>
                      <li>
                        <Image src={aboutheader1} alt="award" className="setAward" />
                      </li>
                      <li>
                        <Image src={aboutheader4} alt="award" className="setAward" />
                      </li>
                      <li>
                        <Image src={aboutheader3} alt="award" className="setAward" />
                      </li>
                      <li>
                        <Image src={aboutheader2} alt="award" className="setAward" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="softstormweb-right-testimoial handleview">
                <Slider ref={sliderRef} {...settings}>
                  {workdata.length > 0
                    ? workdata.map((e, index) => {
                        return (
                          <div className="item doublequate" key={index}>
                            <p className="pb-3 pl-10">
                              <sup>
                                {" "}
                                <i className="fa fa-quote-left fafaquatsstart" aria-hidden="true"></i>
                              </sup>
                              {e.discription}
                              <i className="fa fa-quote-right fafaquatsend" aria-hidden="true"></i>
                            </p>
                            <div className="d-flex justify-content-start">
                              <Image src={e.image} alt="" width={75} height={75} className="handle_hometestimonialimg" layout="fixed" />
                              <div>
                                <span className="testimonialspan">{e.name}</span>
                                <span className="d-flex ml-3">{e.position}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : staticdata.map((e, index) => {
                        return (
                          <div className="item doublequate" key={index}>
                            <p className="pb-3 pl-10">
                              <sup>
                                {" "}
                                <i className="fa fa-quote-left fafaquatsstart" aria-hidden="true"></i>
                              </sup>
                              {e.title}
                              <i className="fa fa-quote-right fafaquatsend" aria-hidden="true"></i>
                            </p>
                            <div className="d-flex justify-content-start">
                              <Image
                                src={e.image}
                                alt=""
                                style={{
                                  maxWidth: "75px",
                                  height: "75px",
                                  borderRadius: "50%",
                                  marginLeft: "15px",
                                }}
                              />
                              <div>
                                <span className="testimonialspan">{e.owner}</span>
                                <span className="d-flex ml-3">{e.title1}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                </Slider>
                <span onClick={sliderPrev} className="prev slick-arrow" style={{ display: "block" }}>
                  <i className="fa fa-arrow-left" />
                </span>
                <span onClick={sliderNext} className="next slick-arrow" style={{ display: "block" }}>
                  <i className="fa fa-arrow-right" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}