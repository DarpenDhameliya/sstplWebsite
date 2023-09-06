import React from "react";
import { useEffect, useState } from "react";
import { Servicestate } from "../../../../redux/slice/Service";
import { useSelector } from "react-redux";
import axios from "../../../Axios";
import Loader from "@/Component/loader";
import dynamic from "next/dynamic";
import MobileService from "./MobileService"
const Headers = dynamic(() => import("../../SubComponent/PageHeader"));

const Mobileserviceindex = () => {
  const [loading, setLoading] = useState(true);
  const [serviceContent, setServiceContent] = useState("");
  const [image, setImage] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState("");
  const states = useSelector(Servicestate);

  useEffect(() => {
    if (states.response.result !== undefined) {
      setTimeout(() => {
        setLoading(false);
      }, 100);
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
              if (e.heading === "Mobile Application Developer") {
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

      fetchServiceata();
    }
  }, []);
  return (
    <>
      {loading && <Loader />}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <Headers
          title="MOBILE APPLICATION DEVELOPMENT"
          breadcrumb={[
            { link: "/", title: "Home" },
            { link: "/our-service", title: "Our Service" },
            { link: "/mobile-application-developement", title: "Mobile Application" },
          ]}
        />

        <MobileService images={image} serviceContents={serviceContent} />
      </div>
    </>
  );
};

export default Mobileserviceindex;
