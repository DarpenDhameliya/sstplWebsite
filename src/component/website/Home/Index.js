import React, {useEffect, useState} from "react";
import logo from "../../../assets/images/logo-removebg-preview.webp";
import {Suspense} from "react";
// import Footer from "../../common/Footer";
// import Hireus from "../../common/Hireus";
// import Header from "../../common/Header";
// import Drawer from "../Mobile/Drawer";
import useToggle from "../../common/Hooks/useToggle";
import { lazy } from "react";
const Drawer = lazy(() => import("../Mobile/Drawer"))
const Header = lazy(() => import("../../common/Header"))
const Footer = lazy(() => import("../../common/Footer"))
const Hireus = lazy(() => import("../../common/Hireus"))
const Home = React.lazy(() => import("./Home"));
const Discription = React.lazy(() => import("./Discription"));
const WhyChoseUs = React.lazy(() => import("./WhyChoseUs"));
const Services = React.lazy(() => import("./Services"));
const OurWorkService = React.lazy(() => import("./OurWorkService"));
const Technology = React.lazy(() => import("./Technology"));
const Industry = React.lazy(() => import("./Industry"));
const Portfoliyo = React.lazy(() => import("./Portfoliyo"));
const Testimonial = React.lazy(() => import("./Testimonial"));

const Sstpl = ({addheader, action}) => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  });
  useEffect((e) => {
    document.title = "SoftStorm - Custom Software Development Service Provider Company in Surat, India";
    addheader();
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div className="onloadpage" id="page-load">
            <div className="loader-div d-flex justify-content-center ">
              <div className="on-img">
                <img src={logo} alt="loader" style={{width: "100px"}} />
                <div className="loader">Loading ...</div>
              </div>
            </div>
          </div>
        }
      >
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
      <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle} />
        <Header action={drawerAction.toggle} cartToggle={cartAction.toggle} />
        <Hireus value={cart} action={cartAction.toggle} />
          <Home />
          <Discription />
          <WhyChoseUs />
          <Services />
          <OurWorkService />
          <Technology />
          <Industry />
          <Portfoliyo />
          <Testimonial />
        <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default Sstpl;
