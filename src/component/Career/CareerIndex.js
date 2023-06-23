import React from "react";
import Drawer from "../Mobile/Drawer";
import Header from "../common/Header";
import useToggle from '../common/Hooks/useToggle';
import Headers from "../common/PageHeader";
import Footer from '../common/Footer'
import Careerdata from "./Careerdata";
import Sidepoosition from "./Sidepoosition";
import BackToTop from "../common/BackToTop";
import Hireus from "../common/Hireus";
import ApplyNow from "../common/ApplyNow";

const CareerIndex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [apply, applyAction] = useToggle(false);
  

  return (<>
     <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle}/>
            <Header action={drawerAction.toggle} cartToggle={cartAction.toggle}/>
            <Hireus value={cart} action={cartAction.toggle}/>
            <ApplyNow open={apply} action={applyAction.toggle}/>
            <Headers title="Careers"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/career', title: 'Career' },
                ]}/>
                <section className="career-section">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-12">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 col-sm-12 ">
                        <Careerdata  applyaction={applyAction.toggle}/>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <Sidepoosition />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
                

                <Footer />
                <BackToTop />
  </>)
};

export default CareerIndex;
