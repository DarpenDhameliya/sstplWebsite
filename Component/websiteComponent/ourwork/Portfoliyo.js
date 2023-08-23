/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
const PortfolioItem = dynamic(() => import("./ViewImages"));
const PortfolioModal = dynamic(() => import("./portfolioModel"));

const Portfoliyo = ({ loding, data }) => {
  const [tab, setTab] = useState("all");
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
    // fetchHiredata();
    let fillterdata = data.sort(() => Math.random() - 0.5);
    setportfolioList(fillterdata);
    setTimeout(() => {
      loding();
    }, 200);
  }, [data]);


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
                    {portfolioList.map((e, index) => {
                      return <PortfolioItem key={index} data={e} handleModal={handle_modal} />;
                    })}
                  </div>
                </div>

                <div className={`tab-pane fade show ${tab === "desktopsoftware" ? "show active" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="row">
                    {portfolioList.map((e, index) => {
                      let data = e.category.split(",");
                      for (let i = 0; i < data.length; i++) {
                        if (data[i] === "desktopsoftware") {
                          return <PortfolioItem key={index} data={e} handleModal={handle_modal} />;
                        }
                      }
                    })}
                  </div>
                </div>
                <div className={`tab-pane fade show ${tab === "mobileapplication" ? "show active" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="row">
                    {portfolioList.map((e, index) => {
                      let data = e.category.split(",");
                      for (let i = 0; i < data.length; i++) {
                        if (data[i] === "mobileapplication") {
                          return <PortfolioItem key={index} data={e} handleModal={handle_modal} />;
                        }
                      }
                    })}
                  </div>
                </div>
                <div className={`tab-pane fade show ${tab === "webapplication" ? "show active" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="row">
                    {portfolioList.map((e, index) => {
                      let data = e.category.split(",");
                      for (let i = 0; i < data.length; i++) {
                        if (data[i] === "webapplication") {
                          return <PortfolioItem key={index} data={e} handleModal={handle_modal} />;
                        }
                      }
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
