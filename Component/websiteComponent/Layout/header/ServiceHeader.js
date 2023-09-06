import Image from "next/image";
import React from "react";
import image from "../../../../assets/images/services banner.webp";
import dynamic from "next/dynamic";
const DynamicHeaderService = dynamic(() => import("../../SubComponent/FooterLink").then((module) => module.HeaderService));

const ServiceHeader = () => {
  return (
    <div className="menu-dropdown">
      <div className="menu-block-set">
        <div className="container submenuList ">
          <div className="menu-block-a_service">
            <div
              style={{
                borderRight: "1px solid #dee2e6",
                paddingRight: "10px",
              }}
            >
              <div className="menu-block-service pb-2">
                <div className="mega-menu-blocks1">
                  <h6 className="mb-2 pl-1"> Web App</h6>
                  <ul className="menu-li-link ">
                    <DynamicHeaderService href="/web-application-developement#nodejs" leanguage="Node.js" />
                    <DynamicHeaderService href="/web-application-developement#php" leanguage="PHP" />
                    <DynamicHeaderService href="/web-application-developement#laravel" leanguage="Laravel" />
                    <DynamicHeaderService href="/web-application-developement#codeigniter" leanguage="Codeigniter" />
                    <DynamicHeaderService href="/web-application-developement#python" leanguage="Python" />
                  </ul>
                </div>
                <div className="mega-menu-blocks1">
                  <h6 className="mb-2 pl-1"> Desktop & Embeded</h6>
                  <ul className="menu-li-link ">
                    <DynamicHeaderService href="/desktop-software-developement#c" leanguage="C#" />
                    <DynamicHeaderService href="/desktop-software-developement#c++" leanguage="C++" />
                    <DynamicHeaderService href="/desktop-software-developement#mashinlerning" leanguage="Machine Learning" />
                    <DynamicHeaderService href="/desktop-software-developement#controller" leanguage="Controller Based" />
                    <DynamicHeaderService href="/desktop-software-developement#axistravelling" leanguage="Axis Traveling" />
                    <DynamicHeaderService href="/desktop-software-developement#lasersource" leanguage="Laser Source" />
                  </ul>
                </div>
                <div className="mega-menu-blocks">
                  <h6 className="mb-2 pl-1"> Web & Graphic</h6>
                  <ul className="menu-li-link " style={{ marginRight: "12px" }}>
                    <DynamicHeaderService href="/web_graphic-designing#webdesign" leanguage="Web Designing" />
                    <DynamicHeaderService href="/web_graphic-designing#uiux" leanguage="UI/UX" />
                    <DynamicHeaderService href="/web_graphic-designing#reactjs" leanguage="React.js" />
                    <DynamicHeaderService href="/web_graphic-designing#viewjs" leanguage="Vue.js" />
                    <DynamicHeaderService href="/web_graphic-designing#logo" leanguage="Logo & Banner" />
                    <DynamicHeaderService href="/web_graphic-designing#brochur" leanguage="Brochure & Mokeup" />
                  </ul>
                </div>
              </div>
              <div className="menu-block-service pt-2" style={{ borderTop: "1px solid #dee2e6" }}>
                <div className="mega-menu-blocks1">
                  <h6 className="mb-2 pl-1"> Mobile App</h6>
                  <ul className="menu-li-link ">
                    <DynamicHeaderService href="/mobile-application-developement#flutter" leanguage="Flutter" />
                    <DynamicHeaderService href="/mobile-application-developement#android" leanguage="Android" />
                    <DynamicHeaderService href="/mobile-application-developement#ios" leanguage="iOS" />
                  </ul>
                </div>
                <div className="mega-menu-blocks1">
                  <h6 className="mb-2 pl-1"> Digital Marketing</h6>
                  <ul className="menu-li-link ">
                    <DynamicHeaderService href="/digital-marketing#seo" leanguage="SEO" />
                    <DynamicHeaderService href="/digital-marketing#smm" leanguage="SMM" />
                    <DynamicHeaderService href="/digital-marketing#political" leanguage="Political Profile" />
                    <DynamicHeaderService href="/digital-marketing#mobileapp" leanguage="Mobile App Promotion" />
                  </ul>
                </div>
                <div className="mega-menu-blocks">
                  <h6 className="mb-2 pl-1"> Enterprise Services</h6>
                  <ul className="menu-li-link " style={{ marginRight: "12px" }}>
                    <DynamicHeaderService href="/enterprise-services#erp" leanguage="ERP" />
                    <DynamicHeaderService href="/enterprise-services#crm" leanguage="CRM" />
                    <DynamicHeaderService href="/enterprise-services#accounting" leanguage="Customized Accounting" />
                  </ul>
                </div>
              </div>
            </div>
            <Image height={500} width={1000} src={image} alt="sstpl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
