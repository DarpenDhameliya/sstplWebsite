import React from "react";
import Drawer from "../../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from '../../common/Hooks/useToggle';
import Headers from "../../common/PageHeader";
import Footer from "../../common/Footer";
import WebService from "./WebService";
import SidePortion from "../SidePortion";
import BackToTop from "../../common/BackToTop";
import Hireus from "../../common/Hireus";

const WebserviceIndex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);

  return (<>
                <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle}/>
                <Hireus value={cart} action={cartAction.toggle}/>
            <Header action={drawerAction.toggle} cartToggle={cartAction.toggle}/>
            <Headers title="WEB APPLICATION DEVELOPMENT"
                breadcrumb={[
                    { link: "/", title: "Home" },
                    { link: '/ourservice', title: 'Our Service' },
                    { link: '/webapp', title: 'Web Development' },
                ]} />
                {/* <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 ">
                        <WebService />
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <SidePortion />
                        </div>
                    </div>
                </div>
            </section> */}
            <WebService />
            <Footer />
            <BackToTop />
  </>)
};

export default WebserviceIndex;

