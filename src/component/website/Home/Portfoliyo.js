import React, {useRef, useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import roop from "../../../assets/images/blog/roop (1).webp";
import red from "../../../assets/images/blog/redchili.webp";
import food from "../../../assets/images/blog/food.webp";
import dimond from "../../../assets/images/blog/dimond (1).webp";
import dalali from "../../../assets/images/blog/dalali.webp";
import sk from "../../../assets/images/blog/sk.webp";
import battle from "../../../assets/images/blog/battel.webp";
import maktech from "../../../assets/images/blog/maktech.webp";
import macswin from "../../../assets/images/blog/macswin.webp";
import redient from "../../../assets/images/blog/redient.webp";
import axios from "../../common/Axios";
export default function Portfoliyo() {
  const [workdata, setWorkdata] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);
  const [fetchErr, setFetchErr] = useState("");

  useEffect(() => {
    let data = [
      {image: roop, title: "Roop Label", type: ["all", "web"]},
      {image: red, title: "Red Chilli Fast Food", type: ["all", "mob", "web"]},
      {image: food, title: "Food Book", type: ["all", "mob", "web"]},
      {image: dimond, title: "Diamond Inventory Software", type: ["all", "desk"]},
      {image: dalali, title: "DalaliBook", type: ["all", "mob"]},
      {image: sk, title: "S.K. Enterprise", type: ["all", "mob", "web"]},
      {image: battle, title: "Battle Village", type: ["all", "mob", "web"]},
      {image: maktech, title: "MakTech Laser", type: ["all", "desk", "mob", "web"]},
      {image: macswin, title: "MacSwin Technology", type: ["all", "desk", "mob", "web"]},
      {image: redient, title: "The Radiant International School", type: ["all", "web"]},
    ];
    setWorkdata(data);
  }, []);

  const fetchHiredata = () => {
    axios
      .get("portfolio/portfolio_list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
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

  const articleCarosel = useRef();
  const settingsForArticle = {
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settingsForArticle1 = {
    autoplay: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settingsForArticleteb = {
    autoplay: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  // webportfoliyo

  return (
    <>
      {/* web view */}
      <div className="softstormweb-portfoliyo-about-area pb-80 pt-80 webportfoliyo">
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
                <Slider {...settingsForArticle} ref={articleCarosel}>
                  {/* {workdata.map((e , index) => {
                  return <div className="testimonial-parent-item" key={index}>
                    <div className="testimonial-box">
                      <div className="icon" >
                        <img src={e.image} className='handleportfoliyohomeweb' alt='logo' style={{ borderRadius: '15px', height: '230px', width: '350px' }} />
                      </div>
                      <h4 className="pt-4">
                        {e.title}
                      </h4>
                    </div>
                  </div>
                })} */}
                  {portfolioList.map((e, index) => {
                    if (e.contentview === true) {
                      return (
                        <div className="testimonial-parent-item" key={index}>
                          <div className="testimonial-box">
                            <div className="icon">
                              <img src={e.uploadimg} className="handleportfoliyohomeweb" alt="logo" style={{borderRadius: "15px", height: "230px", width: "350px"}} />
                            </div>
                            <h4 className="pt-4">{e.name}</h4>
                          </div>
                        </div>
                      );
                    }
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="softstormweb-portfoliyo-about-area pt-40 pb-45 displayport">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-5">
              <div>
                <h3>Work Portfolio</h3>
                <span className="main-header-line_choos"></span>
                <p>See what we do for our valuable clients.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center handlemobview">
            <div className="col-lg-12 ">
              <div className="testimonial-about-slider-active ">
                <Slider {...settingsForArticle1} ref={articleCarosel}>
                  {/* {workdata.map((e, index) => {
                    return (
                      <div key={index}>
                        <div className="testimonial-box ">
                          <div className="icon d-flex justify-content-center">
                            <img src={e.image} className="handleportfoliyohomeweb" alt="logo" style={{borderRadius: "15px"}} />
                          </div>
                          <p>{e.title}</p>
                        </div>
                      </div>
                    );
                  })} */}
                  {portfolioList.map((e, index) => {
                    return (
                      <div key={index}>
                        <div className="testimonial-box ">
                          <div className="icon d-flex justify-content-center">
                            <img src={e.uploadimg} className="handleportfoliyohomeweb" alt="logo" style={{borderRadius: "15px"}} />
                          </div>
                          <p>{e.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tab view */}
      <div className="softstormweb-portfoliyo-about-area pb-45 displayporttab">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-5">
              <div className="softstormweb-title-main-portfoliyo text-center">
                <h3 className="softstormweb-title-portfoliyo">Work Portfolio</h3>
                <span className="main-header-line_choos"></span>
                <p>See what we do for our valuable clients.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center handlemobview">
            <div className="col-lg-12 col-md-11">
              <div className="testimonial-about-slider-active ">
                <Slider {...settingsForArticleteb} ref={articleCarosel}>
                  {/* {workdata.map((e, index) => {
                    return (
                      <div className="testimonial-parent-item" key={index}>
                        <div className="testimonial-box">
                          <div className="icon d-flex justify-content-center">
                            <img src={e.image} className="handleportfoliyohomeweb" alt="logo" style={{borderRadius: "15px"}} />
                          </div>
                          <p>{e.title}</p>
                        </div>
                      </div>
                    );
                  })} */}
                  {portfolioList.map((e, index) => {
                    return (
                      <div className="testimonial-parent-item" key={index}>
                        <div className="testimonial-box">
                          <div className="icon d-flex justify-content-center">
                            <img src={e.uploadimg} className="handleportfoliyohomeweb" alt="logo" style={{borderRadius: "15px"}} />
                          </div>
                          <p>{e.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
