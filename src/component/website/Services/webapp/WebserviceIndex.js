import React from "react";
import Headers from "../../../common/PageHeader";
import WebService from "./WebService";
import {useEffect, useState} from "react";
import logo from "../../../../assets/images/logo-removebg-preview.webp";
import axios from "../../../common/Axios";
import {Servicestate} from "../../slice/Service";
import {useSelector} from "react-redux";
const WebserviceIndex = () => {
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
        setLoading(false);
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
    <Headers
          title="WEB APPLICATION DEVELOPMENT"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/our-service", title: "Our Service"},
            {link: "/web-application-developement", title: "Web Development"},
          ]}
        />

        <WebService images={image} serviceContents={serviceContent} />

      </div>
    </>
  );
};

export default WebserviceIndex;
