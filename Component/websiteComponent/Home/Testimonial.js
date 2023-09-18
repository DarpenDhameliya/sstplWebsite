import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { api } from "../../Axios";
import dynamic from "next/dynamic";
import style from "./cssComponent/Testimonial.module.css";
const HeaderImage = dynamic(() => import("../Layout/HeaderImage"), {
  ssr: false,
});

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


  return (
    <>
      <section className={`${style.softstormweb_testimoial} pt-70 pb-80 ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className={style.softstormweb_left_testimoial}>
                <div className={style.handletestimnoal_teb}>
                  <h3 className={` ${style.title} ${style.mobiletitle_testimonial} `}>Testimonial</h3>
                  <div className={style.testimonial_line}>
                    <span className="main-header-line_choos "></span>{" "}
                  </div>
                  <p>We believe in the rewards of hard work. Our exceptional services are validated by positive ratings and reviews on various platforms. Explore customer testimonials to make an informed decision based on their experiences, feedback, and success stories.</p>
                  <div className={`col-lg-12 col-md-12 mt-3 mb-3  ${style.award_testimonal}`}>
                    <HeaderImage />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className={` ${style.softstormweb_right_testimoial} ${style.handleview} `}>
                <Slider ref={sliderRef} {...settings}>
                  {workdata.length > 0
                    && workdata.map((e, index) => {
                        return (
                          <div className={` ${style.item}  ${style.doublequate} `} key={index}>
                            <p className="pb-3 pl-10">
                              <sup>
                                {" "}
                                <i className={`fa fa-quote-left ${style.fafaquatsstart} `} aria-hidden="true"></i>
                              </sup>
                              {e.discription}
                              <i className={`fa fa-quote-right ${style.fafaquatsend} `} aria-hidden="true"></i>
                            </p>
                            <div className="d-flex justify-content-start">
                              <Image src={e.image} alt="" width={75} height={75} className={style.handle_hometestimonialimg} layout="fixed" />
                              <div>
                                <span className={style.testimonialspan}>{e.name}</span>
                                <span className="d-flex ml-3">{e.position}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    }
                </Slider>
                <span onClick={sliderPrev} className={` ${style.prev} ${style.slick_arrow} d-block`}>
                  <i className="fa fa-arrow-left" />
                </span>
                <span onClick={sliderNext} className={` ${style.next} ${style.slick_arrow} d-block`}>
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
