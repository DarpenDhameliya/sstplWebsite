import React, {useState, useEffect} from "react";
import Headers from "../../../common/PageHeader";
import Enterpriseservice from "./Enterpriseservice";
import logo from "../../../../assets/images/logo-removebg-preview.webp";
import {Servicestate} from "../../slice/Service";
import {useSelector} from "react-redux";
import axios from "../../../common/Axios";
const Enterpriseserviceindex = () => {
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
              if (e.heading === "Enterprice Services") {
                setImage(e.servicepageimg);
                setServiceContent(e.content);
              }
            });
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false)
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

        <Headers
          title="ENTERPRISE SERVICES"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/our-service", title: "Our Service"},
            {link: "/enterprise-services", title: "Enterprise Servise"},
          ]}
        />
        <Enterpriseservice images={image} serviceContents={serviceContent} />

      </div>
    </>
  );
};

export default Enterpriseserviceindex;
