import React from "react";
import Drawer from "../../Mobile/Drawer";
import Header from "../../../common/Header";
import useToggle from "../../../common/Hooks/useToggle";
import Headers from "../../../common/PageHeader";
import Footer from "../../../common/Footer";
import Desktipservice from "./Desktipservice";
import BackToTop from "../../../common/BackToTop";
import Hireus from "../../../common/Hireus";
import logo from "../../../../assets/images/logo-removebg-preview.webp";
import {useEffect, useState} from "react";
import { Servicestate } from "../../slice/Service";
import { useSelector } from "react-redux";
import axios from "../../../common/Axios";
const Desktopserviceindex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [loading, setLoading] = useState(true);
  const [serviceContent, setServiceContent] = useState("");
  const [image, setImage] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState('')
  const states = useSelector(Servicestate);

  useEffect(() => {
    if(states.response.result !== undefined){
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  });

  
  useEffect(() => {
    if (states.response.result === undefined) {
      const fetchServiceata = () => {
        axios
          .get("service/service_list", {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((result) => {
            result.data.result.map((e) => {
              if (e.heading === "Desktop Software Developement") {
                setImage(e.servicepageimg);
                setServiceContent(e.content);
              }
            });
            setLoading(false)
          })
          .catch((err) => {
            setDbFetcherr(err.response.data.error);
          });
      };

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
          title="DESKTOP SOFTWARE DEVELOPMENT"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/ourservice", title: "Our Service"},
            {link: "/desktop", title: "Desktop Software"},
          ]}
        />

        <Desktipservice images={image} serviceContents={serviceContent}/>
      
        {/* <Footer />
        <BackToTop /> */}
      </div>
    </>
  );
};

export default Desktopserviceindex;
