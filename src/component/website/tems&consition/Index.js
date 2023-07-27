import React, {useState, useEffect} from "react";
import Drawer from "../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from "../../common/Hooks/useToggle";
import Footer from "../../common/Footer";
import BackToTop from "../../common/BackToTop";
import Headers from "../../common/PageHeader";
import Hireus from "../../common/Hireus";
import Temsandconsition from "./Tems&consition";
import logo from "../../../assets/images/logo-removebg-preview.png";

const TermandConditionIndex = () => {
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
          title="TERMS & CONDITIONS"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/terms-and-conditions", title: "TERMS & CONDITIONS"},
          ]}
          className={"handlebredcrumb"}
        />
        <Temsandconsition />
        {/* <Footer />
        <BackToTop /> */}
      </div>
    </>
  );
};

export default TermandConditionIndex;
