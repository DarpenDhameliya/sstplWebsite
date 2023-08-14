// PortfolioModal.js
import React from "react";
import mob1 from "../../../assets/images/potfoliyo/industry (1).webp";
import mob2 from "../../../assets/images/potfoliyo/team (1).webp";
import mob3 from "../../../assets/images/potfoliyo/duration (2).webp";
import mob4 from "../../../assets/images/potfoliyo/country (1).webp";
import mob5 from "../../../assets/images/potfoliyo/technologies- (1).webp";
import closeimg from "../../../assets/images/close.png";
import Image from "next/image";

const PortfolioModal = ({ sendMsg, handleClose }) => {
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">
          {sendMsg.title}
        </h5>
        <div onClick={handleClose} style={{ cursor: "pointer" }}>
          <Image width={18} height={50} src={closeimg} alt="car1" loading="eager" />
        </div>
      </div>{" "}
      <div className="modal-body" style={{ border: "none", boxShadow: "none" }}>
        <div className="row">
          <div className="col-xl-9 col-lg-8 col-md-8 mob_portfolio_img">
            <div className="thumb">
              <Image width={1000} height={600} src={sendMsg.image} quality={100} loading="eager" alt="" className="handle_portfolio_modal_img" />
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 mob_portfolio_part2">
            <div className="row">
              <div className="col-12 ">
                <div className="d-flex  align-items-center">
                  <Image width={50} height={50} src={mob1} alt="car1" className="handlecareermain_img_portfoliyo" />

                  <div className="ml-3">
                    <h5 className=" handleHeading_portfoliyo"> Industry</h5>
                    <p className="handelmobileh6">{sendMsg.industry}</p>
                  </div>
                </div>
                <hr className="handlehr" />
              </div>
              <div className="col-12 maintaint_pd_portfoliyo">
                <div className="d-flex  align-items-center">
                  <Image width={50} height={50} src={mob2} alt="car1" className="handlecareermain_img_portfoliyo" />

                  <div className="ml-3">
                    <h5 className=" handleHeading_portfoliyo"> Developers / Team</h5>
                    <p className="handelmobileh6">{sendMsg.team}</p>
                  </div>
                </div>
                <hr className="handlehr" />
              </div>
              <div className="col-12 maintaint_pd_portfoliyo">
                <div className="d-flex  align-items-center">
                  <Image width={50} height={50} src={mob3} alt="car1" className="handlecareermain_img_portfoliyo" />

                  <div className="ml-3">
                    <h5 className=" handleHeading_portfoliyo"> Duration</h5>
                    <p className="handelmobileh6">{sendMsg.duration}</p>
                  </div>
                </div>
                <hr className="handlehr" />
              </div>
              <div className="col-12  maintaint_pd_portfoliyo">
                <div className="d-flex  align-items-center">
                  <Image width={50} height={50} src={mob4} alt="car1" className="handlecareermain_img_portfoliyo" />

                  <div className="ml-3">
                    <h5 className=" handleHeading_portfoliyo"> Country</h5>
                    <p className="handelmobileh6">{sendMsg.country}</p>
                  </div>
                </div>
                <hr className="handlehr" />
              </div>
              <div className="col-12  maintaint_pd_portfoliyo">
                <div className="d-flex  align-items-center">
                  <Image width={50} height={50} src={mob5} alt="car1" className="handlecareermain_img_portfoliyo" />

                  <div className="ml-3" style={{ widget: "100%" }}>
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
    </>
  );
};

export default PortfolioModal;
