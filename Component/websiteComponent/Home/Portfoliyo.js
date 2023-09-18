import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import image from "../../../assets/images/logo.jpg";
import Image from "next/image";
import { api } from "../../Axios";

export default function Portfoliyo({ data }) {
  const [workdata, setWorkdata] = useState([]);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [portfolioList, setPortfolioList] = useState([]);
  const [fetchErr, setFetchErr] = useState("");

  const fetchHiredata = () => {
    api
      .post("portfolio/portfolio_list")
      .then((result) => {
        setPortfolioList(result.data.result);
      })
      .catch((err) => {
        setFetchErr(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const articleCarosel = useRef();
  const settingsForArticle = {
    autoplay: true,
    arrows: false,
    dots: false,
    speed: 200,
    swipeToSlide: true,
    slidesToShow: 3,
  };
  const settingsForArticle1 = {
    autoplay: true,
    arrows: true,
    speed: 1000,
    swipeToSlide: true,
    slidesToScroll: 1,
  };
  const settingsForArticleteb = {
    autoplay: true,
    arrows: true,
    speed: 1000,
    swipeToSlide: true,
    slidesToShow: 2,
  };


  return (
    <>
      <div className="softstormweb-portfoliyo-about-area pb-80 pt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <h3>Work Portfolio</h3>
                {fetchErr && <p className={`handledberror mb-0 `}>{fetchErr}</p>}
                <span className="main-header-line_choos"></span>
                <p>See what we do for our valuable clients.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-lg-12">

              <div className="testimonial-about-slider-active ">
                {innerWidth > 992 && (
                  <Slider {...settingsForArticle} ref={articleCarosel}>
                    {portfolioList.map((e, index) => {
                      if (e.contentview === true) {
                        return (
                          <div className="testimonial-parent-item" key={index}>
                            <div className="testimonial-box">
                              <div className="icon">
                                <Image src={e.uploadimg} className="handleportfoliyohomeweb" height={230} width={350} alt="logo" style={{ borderRadius: "15px" }} />
                              </div>
                              <h4 className="pt-4 fs-20">{e.name}</h4>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </Slider>
                )}
                {innerWidth < 992 && innerWidth > 767 && (
                  <Slider {...settingsForArticleteb} ref={articleCarosel}>
                    {portfolioList.map((e, index) => {
                      return (
                        <div className="testimonial-parent-item" key={index}>
                          <div className="testimonial-box">
                            <div className="icon d-flex justify-content-center">
                              <Image src={e.uploadimg} className="handleportfoliyohomeweb" height={230} width={350} alt="logo" style={{ borderRadius: "15px" }} />
                            </div>
                            <p>{e.name}</p>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                )}
                {innerWidth < 767 && (
                  <Slider {...settingsForArticle1} ref={articleCarosel}>
                    {portfolioList.map((e, index) => {
                      return (
                        <div key={index}>
                          <div className="testimonial-box ">
                            <div className="icon d-flex justify-content-center">
                              <Image src={e.uploadimg} className="handleportfoliyohomeweb" height={230} width={350} alt="logo" />
                            </div>
                            <h6 className="mt-3">{e.name}</h6>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
