import Image from "next/image";
import React from "react";
import logo from "../../../assets/images/logo.webp";
import Link from "next/link";

const CommonLowerFooter = () => {
  return (
    <>
      <section className="softstormweb-footer-area softstormweb-footer-area-about softstormweb-footer-area-about-1">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-about-widget d-flex justify-content-center mb-2">
                <div>
                  <Link href="/">
                    <Image src={logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-12 d-flex justify-content-center align-items-center mb-2">
                <Link className="social_icon ml-3" target="_blank" href={{ pathname: "https://www.facebook.com/softstorm.in" }} rel="noopener noreferrer">
                  <i className="fab fa-facebook-f hoverefffac" style={{ color: "#4f4f4f" }} />
                </Link>{" "}
                <span> | </span>
                <Link className="social_icon" target="_blank" href={{ pathname: "https://twitter.com/softstorm_in" }} rel="noopener noreferrer">
                  <i className="fab fa-twitter hoverefftwi" style={{ color: "#4f4f4f " }} />
                </Link>
                <span> | </span>
                <Link className="social_icon" target="_blank" href={{ pathname: "https://www.linkedin.com/company/softstorm-in" }} rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in hoverefflin" style={{ color: "#4f4f4f " }} />
                </Link>
                <span> | </span>
                <Link className="social_icon" target="_blank" href={{ pathname: "https://www.instagram.com/softstorm.in" }} rel="noopener noreferrer">
                  <i className="fab fa-instagram hovereffins" style={{ color: "#4f4f4f " }} />
                </Link>
                <span> | </span>
                <Link className="social_icon" target="_blank" href={{ pathname: "https://wa.me/912613560756" }} rel="noopener noreferrer">
                  <i className="fab fa-whatsapp hovereffwat" style={{ color: "#4f4f4f " }} />
                </Link>
                <span> | </span>
                <Link className="social_icon" target="_blank" href={{ pathname: "skype:softstorminfosys?chat" }} rel="noopener noreferrer">
                  <i className="fab fa-skype hovereffsky" style={{ color: "#4f4f4f " }} />
                </Link>
              </div>
              <div className="col-lg-12  mt-2">
                <div
                  className="row d-flex justify-content-center
                align-items-center"
                >
                  <div className="col-md-6 col-sm-6 align-items-center pr-0 handlemobilfooter handleview_footer">
                    <Link className="footer_bottomLinks mr-2 ml-2" href="/about-us">
                      About Us
                    </Link>
                    <span> | </span>
                    <Link className="footer_bottomLinks mr-2 ml-2" href="/our-work">
                      Our Work
                    </Link>

                    <span> | </span>
                  </div>
                  <div
                    className="col-md-6 col-sm-6 
                align-items-center pl-0 handlemobilfooter"
                  >
                    <Link className="footer_bottomLinks mr-2 ml-2" href="/career">
                      Career
                    </Link>
                    <span> | </span>
                    <Link className="footer_bottomLinks mr-2 ml-2" href="/contact-us">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row footer-copyright mt-2 pt-3  pb-2">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div>
                <Link className="footer_conditions  mr-2 ml-2" href="/terms-and-conditions">
                  Terms and Condition
                </Link>
                <span> | </span>
                <Link className="footer_conditions mr-2 ml-2" href="/privacy-policy">
                  Privacy Policy
                </Link>
                <span> | </span>
                <Link className="footer_conditions mr-2 ml-2" href="/return-policy">
                  Return Policy
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-text ">
                <p>Copyright © 2018 Softstorm. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonLowerFooter;
