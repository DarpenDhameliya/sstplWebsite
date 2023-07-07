import React, {useRef, useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import battel from "../../../assets/images/testimonial/battel.webp";
import sk from "../../../assets/images/testimonial/sk.webp";
import macswin from "../../../assets/images/testimonial/macswin.webp";
import mectech from "../../../assets/images/testimonial/mectech.webp";
import redient from "../../../assets/images/testimonial/redient.webp";
import aboutheader1 from "../../../assets/images/aboutus_header/appfutura.webp";
import aboutheader2 from "../../../assets/images/aboutus_header/clutch.webp";
import aboutheader3 from "../../../assets/images/aboutus_header/glassdoor.webp";
import aboutheader4 from "../../../assets/images/aboutus_header/goodfirms.webp";
import aboutheader5 from "../../../assets/images/aboutus_header/upwork.webp";
import axios from "../../common/Axios";
export default function Testimonial(className) {
  const sliderRef = useRef();
  const settings = {
    autoplay: false,
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
  const [fetcherr, setFetcherr] = useState('')

  const fetchHiredata = () => {
    axios
      .get("testimonial/testimonial_list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        let data = result.data.result.sort((a ,b) => a.contentpositionview - b.contentpositionview)
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
    let data = [
      {
        image: battel,
        title: "Team has a Expert of technical knowledge and SoftStorm can work any thing which is hard in technology, I have experienced solving any difficult problem with very carefully.",
        owner: "Rakesh Patil",
        title1: "Owner, Battle Village",
      },
      {
        image: sk,
        title: "Softstrom has Convert our complex business process to very easy and calculative. if we talk about the support of the team then i am giving 100% performance. Thank you softstorm.",
        owner: "Keyur Sukhadiya",
        title1: "Owner, SK Air Conditioner",
      },
      {
        image: macswin,
        title: "The SSTPL team has a unique strength that easily understands our Ideas and implements it with Application.",
        owner: "Kartik Donda",
        title1: "Owner, MacSwin Technology",
      },
      {
        image: mectech,
        title: "Looking at the knowledge that both partner of Softstorm, I would say that they are the new Tony Stark of the world of technology.",
        owner: "Anil Tarpara",
        title1: "Owner, MAK Tech",
      },
      {
        image: redient,
        title: "Looking at the technical knowledge and innovative ideas of Softstorm, everyone can say that the company will make great strides in the future.",
        owner: "Kishan Mangukiya",
        title1: "Trustee, The Radiant International School",
      },
    ];
    // setWorkdata(data);
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
                  <div className="col-lg-12 col-md-12 mt-3 mb-3 d-flex justify-content-between flex-sm-wrap award_testimonal">
                    <ul style={{display: "contents"}}>
                      <li>
                        <img src={aboutheader5} alt="award" className="setAward" />
                      </li>
                      <li>
                        <img src={aboutheader1} alt="award" className="setAward" />
                      </li>
                      <li>
                        <img src={aboutheader4} alt="award" className="setAward" />
                      </li>
                      <li>
                        <img src={aboutheader3} alt="award" className="setAward" />
                      </li>
                      <li>
                        <img src={aboutheader2} alt="award" className="setAward" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="softstormweb-right-testimoial handleview" style={{position: "relative", minHeight: "200px"}}>
                <Slider ref={sliderRef} {...settings}>
                  {workdata.map((e, index) => {
                    return (
                      <div className="item doublequate" key={index}>
                        <p className="pb-3 pl-10">
                          <sup>
                            {" "}
                            <i className="fa fa-quote-left fafaquatsstart" aria-hidden="true"></i>
                          </sup>
                          {e.discription}
                          {/* <sup> <i className="fa fa-quote-right" aria-hidden="true" ></i></sup> */}
                          <i className="fa fa-quote-right fafaquatsend" aria-hidden="true"></i>
                        </p>
                        <div className="d-flex justify-content-start">
                          <img
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
                            <span className="testimonialspan">{e.name}</span>
                            <span className="d-flex ml-3">{e.position}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
                <span onClick={sliderPrev} className="prev slick-arrow" style={{display: "block"}}>
                  <i className="fa fa-arrow-left" />
                </span>
                <span onClick={sliderNext} className="next slick-arrow" style={{display: "block"}}>
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
