import React from "react";
import Drawer from "../../Mobile/Drawer";
import Header from "../../../common/Header";
import useToggle from '../../../common/Hooks/useToggle';
import Headers from "../../../common/PageHeader";
import Footer from "../../../common/Footer";
import SidePortion from "../SidePortion";
import Web_graphicservice from "./Web_graphicservice";
import BackToTop from "../../../common/BackToTop";
import Hireus from "../../../common/Hireus";


const Web_graphicIndex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);

  return (<>
                    <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle}/>
            <Header action={drawerAction.toggle} cartToggle={cartAction.toggle}/>
            <Hireus value={cart} action={cartAction.toggle}/>
            <Headers title="WEB & GRAPHIC DESIGNING"
                breadcrumb={[
                    { link: "/", title: "Home" },
                    { link: '/ourservice', title: 'Our Service' },
                    { link: '/graphic', title: 'Web & Graphic' },
                ]}/>
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
                        <Web_graphicservice />
            <Footer />
            <BackToTop />

  </>)
};

export default Web_graphicIndex;
