import React from "react";
import Drawer from "../../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from "../../common/Hooks/useToggle";
import Headers from "../../common/PageHeader";
import Footer from "../../common/Footer";
import SidePortion from "../SidePortion";
import Enterpriseservice from "./Enterpriseservice";
import BackToTop from "../../common/BackToTop";
import Hireus from "../../common/Hireus";

const Enterpriseserviceindex = () => {
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
        title="ENTERPRISE SERVICES"
        breadcrumb={[
          { link: "/", title: "Home" },
          { link: "/ourservice", title: "Our Service" },
          { link: "/enterprise", title: "Enterprise Servise" },
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
      <Enterpriseservice />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Enterpriseserviceindex;
