import React from "react";
import Drawer from "../../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from "../../common/Hooks/useToggle";
import Headers from "../../common/PageHeader";
import Footer from "../../common/Footer";
import SidePortion from "../SidePortion";
import Desktipservice from "./Desktipservice";
import BackToTop from "../../common/BackToTop";
import Hireus from "../../common/Hireus";

const Desktopserviceindex = () => {
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
        title="DESKTOP SOFTWARE DEVELOPMENT"
        breadcrumb={[
          { link: "/", title: "Home" },
          { link: "/ourservice", title: "Our Service" },
          { link: "/desktop", title: "Desktop Software" },
        ]}
      />
      {/* <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6 ">
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <SidePortion />
                        </div>
                    </div>
                </div>
            </section> */}
      <Desktipservice />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Desktopserviceindex;
