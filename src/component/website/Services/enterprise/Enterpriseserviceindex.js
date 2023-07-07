import React, {useState, useEffect} from "react";
import Drawer from "../../Mobile/Drawer";
import Header from "../../../common/Header";
import useToggle from "../../../common/Hooks/useToggle";
import Headers from "../../../common/PageHeader";
import Footer from "../../../common/Footer";
import SidePortion from "../SidePortion";
import Enterpriseservice from "./Enterpriseservice";
import BackToTop from "../../../common/BackToTop";
import Hireus from "../../../common/Hireus";
import logo from "../../../../assets/images/logo-removebg-preview.png";
import { Servicestate } from "../../slice/Service";
import { useSelector } from "react-redux";
import axios from "../../../common/Axios";
const Enterpriseserviceindex = () => {
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
            if(e.heading === 'Enterprice Services'){
              setImage(e.servicepageimg)
              setServiceContent(e.content);
            }
            setLoading(false)
          })
        })
        .catch((err) => {
          setDbFetcherr(err.response.data.error);
        });
    };

    fetchServiceata();
  }
  }, [])
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
        <Headers
          title="ENTERPRISE SERVICES"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/ourservice", title: "Our Service"},
            {link: "/enterprise", title: "Enterprise Servise"},
          ]}
        />
        <Enterpriseservice images={image} serviceContents={serviceContent}/>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Enterpriseserviceindex;
