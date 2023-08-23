import React from "react";
import { SocialLink, socialMediaLinks } from "../SubComponent/FooterLink";

const TopHeader = ({ fields }) => {
  return (
    <header className="softstormweb-header_1 hidebtn">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-6">
            {/* {fields.length > 0 ? (
            fields.map((e, index) => {
              return (
                <React.Fragment key={index}>
                  <SocialLink href={{ pathname: e.link }} className="ml-15">
                    <i className={`fab ${e.icon}`} />
                  </SocialLink>
                </React.Fragment>
              );
            })
          ) : (
            socialMediaLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <SocialLink href={{ pathname: link.href }} className={link.className}>
                    <i className={link.iconClass} />
                  </SocialLink>
                </React.Fragment>
              ))
          )} */}
            {fields.map((e, index) => {
              return (
                <React.Fragment key={index}>
                  <SocialLink href={{ pathname: e.link }} className="ml-15">
                    <i className={`fab ${e.icon}`} />
                  </SocialLink>
                </React.Fragment>
              );
            })}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 order-3 order-sm-2 handlerightheader">
            <a href="mailto:contact@softstorm.in" rel="noopener noreferrer" className="pl-0 d-flex align-items-center" style={{ color: "#f1f1f1" }}>
              <i className="fa fa-envelope mr-2" style={{ fontSize: "18px", color: "#f1f1f1" }} />
              <div className="ml-1 fw-600">contact@softstorm.in</div>
            </a>
            <span style={{ marginLeft: "20px", color: "#fff" }}> | </span>

            <a href="tel:+91261-3560756" className="pl-0  d-flex align-items-center ml-20">
              <i className="fa fa-phone mr-2 " style={{ fontSize: "18px", color: "#f1f1f1" }} />
              <div className="ml-1 fs-16 fw-600" style={{ color: "#f1f1f1" }}>
                +91261-3560756
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
