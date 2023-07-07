import React, {useEffect, useState} from "react";
import Drawer from "../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from "../../common/Hooks/useToggle";
import Home from "./Home";
import Discription from "./Discription";
import WhyChoseUs from "./WhyChoseUs";
import Services from "./Services";
import OurWorkService from "./OurWorkService";
import Technology from "./Technology";
import Industry from "./Industry";
import Portfoliyo from "./Portfoliyo";
import Testimonial from "./Testimonial";
import BackToTop from "../../common/BackToTop";
import Footer from "../../common/Footer";
import Hireus from "../../common/Hireus";
import logo from "../../../assets/images/logo-removebg-preview.png";

const Sstpl = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });
  useEffect(() => {
    document.title = "SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  }, []);

  return (
    <>
      {loading && (
        <div className="onloadpage" id="page-load">
          <div className="loader-div d-flex justify-content-center ">
            <div className="on-img">
              <img src={logo} alt="loader" style={{width: "100px"}} />
              <div class="loader">Loading ...</div>
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
        <BackToTop />
      </div>
    </>
  );
};

export default Sstpl;
