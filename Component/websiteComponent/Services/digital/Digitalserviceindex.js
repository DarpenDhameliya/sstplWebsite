import React from "react";

import Headers from "../../SubComponent/PageHeader";
import Digitalservice from "./Digitalservice";
import logo from "../../../../assets/images/logo-removebg-preview.webp";
import { useEffect, useState } from "react";
import { Servicestate } from "../../../../redux/slice/Service";
import { useSelector } from "react-redux";
import axios from "../../../Axios";
import Loader from "@/Component/loader";
const Digitalserviceindex = () => {
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
              if (e.heading === "Digital Marketing") {
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
          title="DIGITAL MARKETING"
          breadcrumb={[
            { link: "/", title: "Home" },
            { link: "/our-service", title: "Our Service" },
            { link: "/digital-marketing", title: "Degital Marketing" },
          ]}
        />
        <Digitalservice images={image} serviceContents={serviceContent} />
      </div>
    </>
  );
};

export default Digitalserviceindex;
