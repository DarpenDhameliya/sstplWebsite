import React from "react";
import Headers from "../../SubComponent/PageHeader";
import WebService from "./WebService";
import {useEffect, useState} from "react";
import axios from "../../../Axios";
import {Servicestate} from "../../../../redux/slice/Service";
import {useSelector} from "react-redux";
import Loader from "@/Component/loader";

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
{loading && <Loader />}
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
