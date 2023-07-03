import React from "react";
import Drawer from "../../Mobile/Drawer";
import Header from "../../../common/Header";
import useToggle from "../../../common/Hooks/useToggle";
import Headers from "../../../common/PageHeader";
import Footer from "../../../common/Footer";
import SidePortion from "../SidePortion";
import MobileService from "./MobileService";
import BackToTop from "../../../common/BackToTop";
import Hireus from "../../../common/Hireus";

const Mobileserviceindex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);

  return (
    <>
      <Drawer
        drawer={drawer}
        action={drawerAction.toggle}
        cartToggle={cartAction.toggle}
      />
      <Header action={drawerAction.toggle} cartToggle={cartAction.toggle} />
      <Hireus value={cart} action={cartAction.toggle} />
      <Headers
        title="MOBILE APPLICATION DEVELOPMENT"
        breadcrumb={[
          { link: "/", title: "Home" },
          { link: "/ourservice", title: "Our Service" },
          { link: "/mobile", title: "Mobile Application" },
        ]}
      />
      {/* <section className="blogpage-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 ">
            <MobileService />
          </div>
          <div className="col-lg-4 col-md-6">
            <SidePortion />
          </div>
        </div>
      </div>
    </section> */}
      <MobileService />

      <Footer />
      <BackToTop />
    </>
  );
};

export default Mobileserviceindex;
