import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../assets/images/logo.webp";
import Link from "next/link";
import { Logostate, Logostatus } from "@/redux/slice/logoSlice";
import { useDispatch, useSelector } from "react-redux";
import { FooterLink, PrivacyLink, SocialLink, socialMediaLinks } from "../SubComponent/FooterLink";
import { Iconstate, Iconstatus } from "@/redux/slice/IconSlice";


const CommonLowerFooter = () => {
  const [selectedLogo, setSelectedLogo] = useState("");
  const [fields, setFields] = useState([]);

  const dispatch = useDispatch();
  const logostates = useSelector(Logostate);
  const iconstate = useSelector(Iconstate);

  function getCurrentFormattedDate() {
    const currentDate = new Date();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${month}-${day}`;
  }

  useEffect(() => {
    if (logostates.status === "succeeded") {
      let data = logostates.response.result;
      const newFormattedDate = getCurrentFormattedDate();
      let finddatedata = data.find((e) => e.date.slice(5, 10) === newFormattedDate);
      if (finddatedata === undefined) {
        setSelectedLogo("");
      } else {
        setSelectedLogo(finddatedata.image);
      }
      dispatch(Logostatus());
    } else if (logostates.status === "failed") {
      dispatch(Logostatus());
    } else {
    }

    if (iconstate.status === "succeeded") {
      setFields(iconstate.response.result[0].data);
      dispatch(Iconstatus());
    } else if (iconstate.status === "failed") {
      notifyerr();
      dispatch(Iconstatus());
    } else {
    }
  }, [logostates, iconstate]);
  return (
    <>
      <section className="softstormweb-footer-area softstormweb-footer-area-about softstormweb-footer-area-about-1">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-about-widget d-flex justify-content-center mb-2">
                <div>
                  <Link scroll={false} href="/">
                    <Image src={selectedLogo ? selectedLogo : logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-12 d-flex justify-content-center align-items-center mb-2">
                {fields.length > 0
                  ? fields.map((e, index) => {
                      return (
                        <React.Fragment key={index}>
                          <SocialLink href={{ pathname: e.link }} className="social_icon">
                            <i className={`fab ${e.icon} ${e.class}`} style={{ color: "#4f4f4f" }} />
                          </SocialLink>
                          {index < fields.length - 1 && <span> | </span>}
                        </React.Fragment>
                      );
                    })
                  : socialMediaLinks.map((link, index) => (
                      <React.Fragment key={index}>
                        <SocialLink href={{ pathname: link.href }} className={link.className}>
                          <i className={link.iconClass} style={{ color: link.color }} />
                        </SocialLink>
                        {index < socialMediaLinks.length - 1 && <span> | </span>}
                      </React.Fragment>
                    ))}
              </div>
              <div className="col-lg-12  mt-2">
                <div
                  className="row d-flex justify-content-center
                align-items-center"
                >
                  <div className="col-md-6 col-sm-6 align-items-center pr-0 handlemobilfooter handleview_footer">
                    <FooterLink className="footer_bottomLinks mr-2 ml-2" href="/about-us">
                      About Us
                    </FooterLink>
                    <span> | </span>
                    <FooterLink className="footer_bottomLinks mr-2 ml-2" href="/our-work">
                      Our Work
                    </FooterLink>
                    <span> | </span>
                  </div>
                  <div className="col-md-6 col-sm-6 align-items-center pl-0 handlemobilfooter">
                    <FooterLink className="footer_bottomLinks mr-2 ml-2" href="/career">
                      Career
                    </FooterLink>
                    <span> | </span>
                    <FooterLink className="footer_bottomLinks mr-2 ml-2" href="/contact-us">
                      Contact us
                    </FooterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row footer-copyright mt-2 pt-3  pb-2">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div>
                <PrivacyLink href="/terms-and-conditions">Terms and Condition</PrivacyLink>
                <span> | </span>
                <PrivacyLink href="/privacy-policy">Privacy Policy</PrivacyLink>
                <span> | </span>
                <PrivacyLink href="/return-policy">Return Policy</PrivacyLink>
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
