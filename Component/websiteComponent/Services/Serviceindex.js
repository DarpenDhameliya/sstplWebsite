import React from "react";
import Servicecontent from "./Servicecontent";
import { useEffect, useState } from "react";
import { Servicestate } from "../../../redux/slice/Service";
import { useSelector } from "react-redux";
import axios from "../../Axios";
import Loader from "@/Component/loader";
import dynamic from "next/dynamic";
const Headers = dynamic(() => import("../SubComponent/PageHeader"), { ssr: false });
const Serviceindex = () => {
  const [loading, setLoading] = useState(true);
  const states = useSelector(Servicestate);
  const [dbFetcherr, setDbFetcherr] = useState("");
  const [list, setList] = useState([]);

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
            let data = result.data.result.sort((a, b) => a.contentpositionview - b.contentpositionview);
            setList(data);
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
          title="Our Service"
          breadcrumb={[
            { link: "/", title: "Home" },
            { link: "/our-service", title: "Our Service" },
          ]}
          className={"handlebredcrumb"}
        />
          <Servicecontent list={list} />
      </div>
    </>
  );
};

export default Serviceindex;
