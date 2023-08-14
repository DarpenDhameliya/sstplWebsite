import React from "react";
import IconOne from "../../../assets/images/icon/pencil.svg";
import IconTwo from "../../../assets/images/icon/creativity.svg";
import IconThree from "../../../assets/images/icon/prototype.svg";
import IconFour from "../../../assets/images/icon/computer.svg";
import IconFive from "../../../assets/images/icon/quality-check.svg";
import IconSix from "../../../assets/images/icon/start-up.svg";
import IconSeven from "../../../assets/images/icon/customer-support.svg";
import PropTypes from "prop-types";
import OurWork_Service from "../SubComponent/homeSubComponent/OurWork_Service";

export default function OurWorkService(className) {
  return (
    <React.Fragment>
      <section className={`softstormweb-service handleworkservice pt-70 pb-80 ${className} `} id="service">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              <div className=" text-center">
                <h3>We Follow Agile Development Process.</h3>
                <span className="main-header-line_choos"></span>
                <p>Our design a process follows a proven approach. We begin with a deep understanding of your needs and deliver a complete solution. </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              <div className="row justify-content-center">
                <OurWork_Service image={IconOne} number="1" style="item-1" title="Requirement Gathering" discription="Requirement gathering involves collecting and documenting the needs of stakeholders to define project goals." />
                <OurWork_Service image={IconTwo} number="2" style="item-2" title="Design" discription="Design phase focuses on creating a visual and structural plan to meet the identified requirements." />
                <OurWork_Service image={IconThree} number="3" style="item-3" title="Prototype" discription="A prototype is developed to provide a working model that demonstrates key features and functionalities." />
                <OurWork_Service image={IconFour} number="4" style="item-4" title="Development" discription="During the development stage, software engineers write code to bring the design and prototype to life." />
                <OurWork_Service image={IconFive} number="5" style="item-1" title="Quality Assurance" discription="Quality assurance ensures that the developed software meets quality standards and performs as expected." />
                <OurWork_Service image={IconSix} number="6" style="item-2" title="Deployment" discription="Deployment involves releasing the developed software for end-users to access and utilize." />
                <OurWork_Service image={IconSeven} number="7" style="item-3" title="Support & Maintenance" discription="Support and maintenance involve providing ongoing assistance and updates to ensure the software's smooth operation." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
OurWorkService.propTypes = {
  className: PropTypes.string,
};
