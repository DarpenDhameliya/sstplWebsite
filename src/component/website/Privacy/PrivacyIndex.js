import React from "react";
import Drawer from "../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from "../../common/Hooks/useToggle";
import Footer from "../../common/Footer";
import BackToTop from "../../common/BackToTop";
import Headers from "../../common/PageHeader";
import Hireus from "../../common/Hireus";
import Privacy from "./Privacy";
import {useEffect, useState} from "react";
import logo from "../../../assets/images/logo-removebg-preview.png";

const PrivacyIndex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <>
      {loading && (
        <div className="onloadpage" id="page-load">
          <div className="loader-div d-flex justify-content-center ">
            <div className="on-img">
              <img src={logo} alt="loader" style={{width: "100px"}} />
              <div className="loader">Loading ...</div>
            </div>
          </div>
        </div>
      )}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        {/* <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle} />
        <Header action={drawerAction.toggle} cartToggle={cartAction.toggle} /> */}
              {/* <Hireus value={cart} action={cartAction.toggle} /> */}

        <Headers
          title="PRIVACY POLICY"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/privacy-policy", title: "Privacy Policy"},
          ]}
          className={"handlebredcrumb"}
        />
        <Privacy />
      
        {/* <Footer />
        <BackToTop /> */}
      </div>
    </>
  );
};

export default PrivacyIndex;
