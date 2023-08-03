/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import mob1 from "../../../assets/images/potfoliyo/industry (1).webp";
import mob2 from "../../../assets/images/potfoliyo/team (1).webp";
import mob3 from "../../../assets/images/potfoliyo/duration (2).webp";
import mob4 from "../../../assets/images/potfoliyo/country (1).webp";
import mob5 from "../../../assets/images/potfoliyo/technologies- (1).webp";
import axios from "../../common/Axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import closeimg from "../../../assets/images/close.png";
import images from '../../common/Images'

const Portfoliyo = ({loding}) => {
  const [tab, setTab] = useState("all");
  const [workdata, setWorkdata] = useState([]);
  const [portfolioList, setportfolioList] = useState([]);
  const [sendMsg, setSendMsg] = useState({id: "", title: "", image: "", team: "", country: "", duration: "", industry: "", technology: []});
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [fetchErr, setFetchErr] = useState("");
  const handleClick = (e, value) => {
    e.preventDefault();
    setTab(value);
  };

  useEffect(() => {
    let data = [
      {id: 1, image:images.roop, title: "Roop Label", type: ["all", "web"], team: "2 Person", country: "India", duration: "2 month", industry: "Retail & E-Commerce", technology: "React, PHP"},
      {id: 2, image: images.red, title: "Red Chilli Fast Food", type: ["all", "mob", "web"], team: "2 Person", country: "India", duration: "2 month", industry: "Retail & E-Commerce", technology: "Flutter, php"},
      {id: 3, image: images.food, title: "Food Book", type: ["all", "mob", "web"], team: "2 Person", country: "India", duration: "2 month", industry: "Retail & E-Commerce", technology: "Flutter, php"},
      {id: 4, image: images.dimond, title: "Diamond Inventory Software", type: ["all", "desk"], team: "3 Person", country: "India", duration: "2 month", industry: "Enterprise Solution", technology: "PHP"},
      {id: 5, image: images.dalali, title: "DalaliBook", type: ["all", "mob"], team: "3 Person", country: "India", duration: "2 month", industry: "Enterprise Solution", technology: "Flutter, PHP"},
      {id: 6, image: images.sk, title: "S.K. Enterprise", type: ["all", "mob", "web"], team: "2 Person", country: "India", duration: "3 month", industry: "Enterprise Solution", technology: "Flutter, PHP"},
      {id: 7, image: images.battle, title: "Battle Village", type: ["all", "mob", "web"], team: "2 Person", country: "India", duration: "2 month", industry: "Media & Entertainment", technology: "Flutter, PHP"},
      {id: 8, image: images.maktech, title: "MakTech Laser", type: ["all", "desk", "mob", "web"], team: "2 Person", country: "India", duration: "1.5 month", industry: "Enterprise Solution", technology: "Flutter, PHP"},
      {id: 9, image: images.macswin, title: "MacSwin Technology", type: ["all", "desk", "mob", "web"], team: "2 Person", country: "India", duration: "2 month", industry: "Enterprise Solution", technology: "Flutter, PHP"},
      {id: 10, image: images.redient, title: "The Radiant International School", type: ["all", "web"], team: "2 Person", country: "India", duration: "1 month", industry: "Education", technology: "React, PHP"},
    ];
    setWorkdata(data);

    document.title = "Our-Work | SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  }, []);

  const fetchHiredata = () => {
    axios
      .post("portfolio/portfolio_list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        let shortdata = result.data.result.sort((a, b) => a.contentpositionview - b.contentpositionview);
        setportfolioList(shortdata);
        setTimeout(() => {
          loding();
        }, 300);
      })
      .catch((err) => {
        loding();
        setFetchErr(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);

  const handle_modal = (e, data) => {
    setOpen(true);
    var dynamicState;
    if (portfolioList.length > 0) {
      dynamicState = {
        id: e._id,
        title: e.name,
        image: e.uploadimg,
        team: e.team,
        country: e.country,
        duration: e.duration,
        industry: e.industry,
        technology: e.technology,
      };
    } else {
      dynamicState = {
        id: e._id,
        title: e.title,
        image: e.image,
        team: e.team,
        country: e.country,
        duration: e.duration,
        industry: e.industry,
        technology: e.technology,
      };
    }
    setSendMsg(dynamicState);
  };

  return (
    <>
      <section className="shop-details-info-area pt-70 pb-80 ">
        <div className="container">
          <div className="row justify-content-center">
            {fetchErr && <p className={`handledberror mb-0 `}>{fetchErr}</p>}

            <div className="col-lg-12 col-md-11 shop-details-box">
              <ul className="nav nav-pills mb-15" id="pills-tab" role="tablist">
                <li className="nav-item col-md-3 pl-2 pr-2" role="presentation" style={{textAlign: "center"}}>
                  <a className={`nav-link ${tab === "all" ? "active" : ""}`} onClick={(e) => handleClick(e, "all")} id="pills-home-tab" data-toggle="pill" href="" role="tab" aria-controls="pills-home">
                    All
                  </a>
                </li>
                <li className="nav-item col-md-3 pl-2 pr-2" role="presentation" style={{textAlign: "center"}}>
                  <a className={`nav-link ${tab === "webapplication" ? "active" : ""}`} onClick={(e) => handleClick(e, "webapplication")} id="pills-home-tab" data-toggle="pill" href="" role="tab" aria-controls="pills-home">
                    Web Application
                  </a>
                </li>
                <li className="nav-item col-md-3 pl-2 pr-2" role="presentation" style={{textAlign: "center"}}>
                  <a className={`nav-link ${tab === "mobileapplication" ? "active" : ""}`} onClick={(e) => handleClick(e, "mobileapplication")} id="pills-home-tab" data-toggle="pill" href="" role="tab" aria-controls="pills-home">
                    Mobile Application
                  </a>
                </li>
                <li className="nav-item col-md-3 pl-2 pr-2" role="presentation" style={{textAlign: "center"}}>
                  <a className={`nav-link ${tab === "desktopsoftware" ? "active" : ""}`} onClick={(e) => handleClick(e, "desktopsoftware")} id="pills-home-tab" data-toggle="pill" href="" role="tab" aria-controls="pills-home">
                    Desktop Software
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-11 col-lg-12">
              <div className="tab-content" id="pills-tabContent">
                <div className={`tab-pane fade show ${tab === "all" ? "show active" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="row">
                    {portfolioList.length > 0
                      ? portfolioList.map((e, index) => {
                          return (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                              <div className="softstormweb-ourwork-main-teb mt-30 ">
                                <div className="thumb" onClick={() => handle_modal(e)}>
                                  <img src={e.uploadimg} alt="" />
                                </div>
                                <div className="content text-center">
                                  <h5 className="title">{e.name}</h5>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : workdata.map((e, index) => {
                          return e.type.map((ea, index) => {
                            if (ea === "all") {
                              return (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                  <div className="softstormweb-ourwork-main-teb mt-30 ">
                                    <div className="thumb" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handle_modal(e)}>
                                      <img src={e.image} alt="" />
                                    </div>
                                    <div className="content text-center">
                                      <h5 className="title">{e.title}</h5>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          });
                        })}
                  </div>
                </div>

                <div className={`tab-pane fade show ${tab === "desktopsoftware" ? "show active" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="row">
                    {portfolioList.length > 0
                      ? portfolioList.map((e, index) => {
                          let data = e.category.split(",");
                          for (let i = 0; i < data.length; i++) {
                            if (data[i] === "desktopsoftware") {
                              return (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                  <div className="softstormweb-ourwork-main-teb mt-30 ">
                                    <div className="thumb" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handle_modal(e)}>
                                      <img src={e.uploadimg} alt="" />
                                    </div>
                                    <div className="content text-center">
                                      <h5 className="title">{e.name}</h5>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          }
                        })
                      : workdata.map((e, index) => {
                          return e.type.map((ea) => {
                            if (ea === "desk") {
                              return (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                  <div className="softstormweb-ourwork-main-teb mt-30">
                                    <div className="thumb" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handle_modal(e)}>
                                      <img src={e.image} alt="" />
                                    </div>
                                    <div className="content text-center">
                                      <h5 className="title">{e.title}</h5>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          });
                        })}
                  </div>
                </div>
                <div className={`tab-pane fade show ${tab === "mobileapplication" ? "show active" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="row">
                    {portfolioList.length > 0
                      ? portfolioList.map((e, index) => {
                          let data = e.category.split(",");
                          for (let i = 0; i < data.length; i++) {
                            if (data[i] === "mobileapplication") {
                              return (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                  <div className="softstormweb-ourwork-main-teb mt-30 ">
                                    <div className="thumb" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handle_modal(e)}>
                                      <img src={e.uploadimg} alt="" />
                                    </div>
                                    <div className="content text-center">
                                      <h5 className="title">{e.name}</h5>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          }
                        })
                      : workdata.map((e, index) => {
                          return e.type.map((ea) => {
                            if (ea === "mob") {
                              return (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                  <div className="softstormweb-ourwork-main-teb mt-30">
                                    <div className="thumb" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handle_modal(e)}>
                                      <img src={e.image} alt="" />
                                    </div>
                                    <div className="content text-center">
                                      <h5 className="title">{e.title}</h5>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          });
                        })}
                  </div>
                </div>
                <div className={`tab-pane fade show ${tab === "webapplication" ? "show active" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="row">
                    {portfolioList.length > 0
                      ? portfolioList.map((e, index) => {
                          let data = e.category.split(",");
                          for (let i = 0; i < data.length; i++) {
                            if (data[i] === "webapplication") {
                              return (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                  <div className="softstormweb-ourwork-main-teb mt-30 ">
                                    <div className="thumb" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handle_modal(e)}>
                                      <img src={e.uploadimg} alt="" />
                                    </div>
                                    <div className="content text-center">
                                      <h5 className="title">{e.name}</h5>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          }
                        })
                      : workdata.map((e) => {
                          return e.type.map((ea, index) => {
                            if (ea === "web") {
                              return (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                  <div className="softstormweb-ourwork-main-teb mt-30">
                                    <div className="thumb" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handle_modal(e)}>
                                      <img src={e.image} alt="" />
                                    </div>
                                    <div className="content text-center">
                                      <h5 className="title">{e.title}</h5>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          });
                        })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box className="handle_portfolio_modal_mui">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  {sendMsg.title}
                </h5>
                <div onClick={handleClose} style={{cursor: "pointer"}}>
                  <img src={closeimg} alt="car1" />
                </div>
              </div>{" "}
              <div className="modal-body" style={{border: "none", boxShadow: "none"}}>
                <div className="row">
                  <div className="col-xl-9 col-lg-8 col-md-8 mob_portfolio_img">
                    <div className="thumb">
                      <img src={sendMsg.image} alt="" className="handle_portfolio_modal_img" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-4 mob_portfolio_part2">
                    <div className="row">
                      <div className="col-12 ">
                        <div className="d-flex  align-items-center">
                          <img src={mob1} alt="car1" className="handlecareermain_img_portfoliyo" />

                          <div className="ml-3">
                            <h5 className=" handleHeading_portfoliyo"> Industry</h5>
                            <p className="handelmobileh6">{sendMsg.industry}</p>
                          </div>
                        </div>
                        <hr className="handlehr" />
                      </div>
                      <div className="col-12 maintaint_pd_portfoliyo">
                        <div className="d-flex  align-items-center">
                          <img src={mob2} alt="car1" className="handlecareermain_img_portfoliyo" />

                          <div className="ml-3">
                            <h5 className=" handleHeading_portfoliyo"> Developers / Team</h5>
                            <p className="handelmobileh6">{sendMsg.team}</p>
                          </div>
                        </div>
                        <hr className="handlehr" />
                      </div>
                      <div className="col-12 maintaint_pd_portfoliyo">
                        <div className="d-flex  align-items-center">
                          <img src={mob3} alt="car1" className="handlecareermain_img_portfoliyo" />

                          <div className="ml-3">
                            <h5 className=" handleHeading_portfoliyo"> Duration</h5>
                            <p className="handelmobileh6">{sendMsg.duration}</p>
                          </div>
                        </div>
                        <hr className="handlehr" />
                      </div>
                      <div className="col-12  maintaint_pd_portfoliyo">
                        <div className="d-flex  align-items-center">
                          <img src={mob4} alt="car1" className="handlecareermain_img_portfoliyo" />

                          <div className="ml-3">
                            <h5 className=" handleHeading_portfoliyo"> Country</h5>
                            <p className="handelmobileh6">{sendMsg.country}</p>
                          </div>
                        </div>
                        <hr className="handlehr" />
                      </div>
                      <div className="col-12  maintaint_pd_portfoliyo">
                        <div className="d-flex  align-items-center">
                          <img src={mob5} alt="car1" className="handlecareermain_img_portfoliyo" />

                          <div className="ml-3" style={{widget: "100%"}}>
                            <h5 className=" handleHeading_portfoliyo"> Technology</h5>
                            <div className="d-flex">
                              <p className="handelmobileh6">{sendMsg.technology}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Portfoliyo;
