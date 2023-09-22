/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "../../common/Axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import images from "../../common/Images";
import PortfolioItem from "./ViewImages";
import PortfolioModal from "./portfolioModel";

const Portfoliyo = ({ loding }) => {
  const [tab, setTab] = useState("all");
  const [workdata, setWorkdata] = useState([]);
  const [portfolioList, setportfolioList] = useState([]);
  const [sendMsg, setSendMsg] = useState({
    id: "",
    title: "",
    image: "",
    team: "",
    country: "",
    duration: "",
    industry: "",
    technology: [],
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [fetchErr, setFetchErr] = useState("");

  const handleClick = (e, value) => {
    e.preventDefault();
    setTab(value);
  };
  useEffect(() => {
    let data = [
      // {id: 1, image:images.roop, title: "Roop Label", type: ["all", "web"], team: "2 Person", country: "India", duration: "2 month", industry: "Retail & E-Commerce", technology: "React, PHP"},
      {
        _id: 1,
        uploadimg: images.roop,
        name: "Roop Label",
        type: ["all", "web"],
        team: "2 Person",
        country: "India",
        duration: "2 month",
        industry: "Retail & E-Commerce",
        technology: "React, PHP",
      },
      {
        _id: 2,
        uploadimg: images.red,
        name: "Red Chilli Fast Food",
        type: ["all", "mob", "web"],
        team: "2 Person",
        country: "India",
        duration: "2 month",
        industry: "Retail & E-Commerce",
        technology: "Flutter, php",
      },
      {
        _id: 3,
        uploadimg: images.food,
        name: "Food Book",
        type: ["all", "mob", "web"],
        team: "2 Person",
        country: "India",
        duration: "2 month",
        industry: "Retail & E-Commerce",
        technology: "Flutter, php",
      },
      {
        _id: 4,
        uploadimg: images.dimond,
        name: "Diamond Inventory Software",
        type: ["all", "desk"],
        team: "3 Person",
        country: "India",
        duration: "2 month",
        industry: "Enterprise Solution",
        technology: "PHP",
      },
      {
        _id: 5,
        uploadimg: images.dalali,
        name: "DalaliBook",
        type: ["all", "mob"],
        team: "3 Person",
        country: "India",
        duration: "2 month",
        industry: "Enterprise Solution",
        technology: "Flutter, PHP",
      },
      {
        _id: 6,
        uploadimg: images.sk,
        name: "S.K. Enterprise",
        type: ["all", "mob", "web"],
        team: "2 Person",
        country: "India",
        duration: "3 month",
        industry: "Enterprise Solution",
        technology: "Flutter, PHP",
      },
      {
        _id: 7,
        uploadimg: images.battle,
        name: "Battle Village",
        type: ["all", "mob", "web"],
        team: "2 Person",
        country: "India",
        duration: "2 month",
        industry: "Media & Entertainment",
        technology: "Flutter, PHP",
      },
      {
        _id: 8,
        uploadimg: images.maktech,
        name: "MakTech Laser",
        type: ["all", "desk", "mob", "web"],
        team: "2 Person",
        country: "India",
        duration: "1.5 month",
        industry: "Enterprise Solution",
        technology: "Flutter, PHP",
      },
      {
        _id: 9,
        uploadimg: images.macswin,
        name: "MacSwin Technology",
        type: ["all", "desk", "mob", "web"],
        team: "2 Person",
        country: "India",
        duration: "2 month",
        industry: "Enterprise Solution",
        technology: "Flutter, PHP",
      },
      {
        _id: 10,
        uploadimg: images.redient,
        name: "The Radiant International School",
        type: ["all", "web"],
        team: "2 Person",
        country: "India",
        duration: "1 month",
        industry: "Education",
        technology: "React, PHP",
      },
    ];
    setWorkdata(data);

    document.title = "Our-Work | SoftStorm - Custom Software Development Service Provider Company in Surat, India";
    fetchHiredata();
  }, []);

  const fetchHiredata = () => {
    axios
      .post("portfolio/portfolio_list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        let shortdata = result.data.result.sort((a, b) => b.contentpositionview - a.contentpositionview);
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

  const handle_modal = (e, data) => {
    setOpen(true);
    var dynamicState;
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
                <li className="nav-item col-md-3 pl-2 pr-2 text-center" role="presentation">
                  <a className={`nav-link ${tab === "all" ? "active" : ""}`} onClick={(e) => handleClick(e, "all")} id="pills-home-tab" data-toggle="pill" href="" role="tab" aria-controls="pills-home">
                    All
                  </a>
                </li>
                <li className="nav-item col-md-3 pl-2 pr-2 text-center" role="presentation">
                  <a className={`nav-link ${tab === "webapplication" ? "active" : ""}`} onClick={(e) => handleClick(e, "webapplication")} id="pills-home-tab" data-toggle="pill" href="" role="tab" aria-controls="pills-home">
                    Web Application
                  </a>
                </li>
                <li className="nav-item col-md-3 pl-2 pr-2" role="presentation" style={{ textAlign: "center" }}>
                  <a className={`nav-link ${tab === "mobileapplication" ? "active" : ""}`} onClick={(e) => handleClick(e, "mobileapplication")} id="pills-home-tab" data-toggle="pill" href="" role="tab" aria-controls="pills-home">
                    Mobile Application
                  </a>
                </li>
                <li className="nav-item col-md-3 pl-2 pr-2" role="presentation" style={{ textAlign: "center" }}>
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
                          if (e.contentview) {
                            return <PortfolioItem key={index} data={e} handleModal={handle_modal} />;
                          }
                        })
                      : workdata.map((e) => {
                          return e.type.map((ea, index) => {
                            if (ea === "all") {
                              return <PortfolioItem key={index} data={e} handleModal={handle_modal} />;
                            }
                          });
                        })}
                  </div>
                </div>

                <div className={`tab-pane fade show ${tab === "desktopsoftware" ? "show active" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="row">
                    {portfolioList.length > 0
                      ? portfolioList.map((e, index) => {
                        if (e.contentview) {
                          let data = e.category.split(",");
                          for (let i = 0; i < data.length; i++) {
                            if (data[i] === "desktopsoftware") {
                              return <PortfolioItem key={index} data={e} handleModal={handle_modal} />;
                            }
                          }}
                        })
                      : workdata.map((e, index) => {
                          return e.type.map((ea) => {
                            if (ea === "desk") {
                              return <PortfolioItem key={index} data={e} handleModal={handle_modal} />;
                            }
                          });
                        })}
                  </div>
                </div>
                <div className={`tab-pane fade show ${tab === "mobileapplication" ? "show active" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="row">
                    {portfolioList.length > 0
                      ? portfolioList.map((e, index) => {
                        if (e.contentview) {
                          let data = e.category.split(",");
                          for (let i = 0; i < data.length; i++) {
                            if (data[i] === "mobileapplication") {
                              return <PortfolioItem key={index} data={e} handleModal={handle_modal} />;
                            }
                          }}
                        })
                      : workdata.map((e, index) => {
                          return e.type.map((ea) => {
                            if (ea === "mob") {
                              return <PortfolioItem key={index} data={e} handleModal={handle_modal} />;
                            }
                          });
                        })}
                  </div>
                </div>
                <div className={`tab-pane fade show ${tab === "webapplication" ? "show active" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="row">
                    {portfolioList.length > 0
                      ? portfolioList.map((e, index) => {
                        if (e.contentview) {
                          let data = e.category.split(",");
                          for (let i = 0; i < data.length; i++) {
                            if (data[i] === "webapplication") {
                              return <PortfolioItem key={index} data={e} handleModal={handle_modal} />;
                            }
                          }}
                        })
                      : workdata.map((e) => {
                          return e.type.map((ea, index) => {
                            if (ea === "web") {
                              return <PortfolioItem key={index} data={e} handleModal={handle_modal} />;
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
              <PortfolioModal sendMsg={sendMsg} handleClose={handleClose} />
            </Box>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Portfoliyo;
