import React from "react";
import Drawer from "../../Mobile/Drawer";
import Header from "../../../common/Header";
import useToggle from "../../../common/Hooks/useToggle";
import Headers from "../../../common/PageHeader";
import Footer from "../../../common/Footer";
import WebService from "./WebService";
// import SidePortion from "../SidePortion";
import BackToTop from "../../../common/BackToTop";
import Hireus from "../../../common/Hireus";
import {useEffect, useState} from "react";
import logo from "../../../../assets/images/logo-removebg-preview.png";
import axios from "../../../common/Axios";
import {Servicestate} from "../../slice/Service";
import {useSelector} from "react-redux";
const WebserviceIndex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [loading, setLoading] = useState(true);
  const [serviceContent, setServiceContent] = useState("");
  const [image, setImage] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState("");
  const states = useSelector(Servicestate);

  useEffect(() => {
    if (states.response.result !== undefined) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  });

  const fetchServiceata = () => {
    axios
      .get("service/service_list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {

        result.data.result.map((e) => {
          if (e.heading === "Web Application Development") {
            setImage(e.servicepageimg);
            setServiceContent(e.content);
          }
        });
        setLoading(false);
      })
      .catch((err) => {
        setDbFetcherr(err.response.data.error);
      });
  };
  useEffect(() => {
    if (states.response.result === undefined) {
      fetchServiceata();
    }
  }, []);
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
          title="WEB APPLICATION DEVELOPMENT"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/ourservice", title: "Our Service"},
            {link: "/webapp", title: "Web Development"},
          ]}
        />

        <WebService images={image} serviceContents={serviceContent} />

        {/* <Footer />
      <BackToTop /> */}
      </div>
    </>
  );
};

export default WebserviceIndex;
