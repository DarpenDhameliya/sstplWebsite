import React from "react";
import Headers from "../../common/PageHeader";
import Servicecontent from "./Servicecontent";
import {useEffect, useState} from "react";
import logo from "../../../assets/images/logo-removebg-preview.webp";
import {Servicestate} from "../slice/Service";
import {useSelector} from "react-redux";
import axios from "../../common/Axios";
const Serviceindex = () => {
  const [loading, setLoading] = useState(true);
  const states = useSelector(Servicestate);
  const [dbFetcherr, setDbFetcherr] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    document.title = "Our-Service | SoftStorm - Custom Software Development Service Provider Company in Surat, India";
    if (states.response.result === undefined) {
      var fetchServiceata = () => {
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
          title="Our Service"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/our-service", title: "Our Service"},
          ]}
          className={"handlebredcrumb"}
        />
        <Servicecontent list={list} />
      </div>
    </>
  );
};

export default Serviceindex;
