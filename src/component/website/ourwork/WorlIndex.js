import Drawer from "../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from "../../common/Hooks/useToggle";
import Headers from "../../common/PageHeader";
import Portfoliyo from "./Portfoliyo";
import Footer from "../../common/Footer";
import BackToTop from "../../common/BackToTop";
import Hireus from "../../common/Hireus";
import logo from "../../../assets/images/logo-removebg-preview.webp";
import {useEffect, useState} from "react";
const WorlIndex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [loading, setLoading] = useState(true);

  const cleartimeout = () => {
    setLoading(false)
  }
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
          title="Portfolio"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/ourwork", title: "Portfolio"},
          ]}
        />
        <Portfoliyo loding={cleartimeout}/>
      
        {/* <Footer />
        <BackToTop /> */}
      </div>
    </>
  );
};

export default WorlIndex;
