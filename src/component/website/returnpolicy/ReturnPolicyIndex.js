import React from "react";
import Headers from "../../common/PageHeader";
import ReturnPolicy from "./ReturnPolicy";
import {useEffect, useState} from "react";
import logo from "../../../assets/images/logo-removebg-preview.webp";
import axios from "../../common/Axios";

const ReturnPolicyIndex = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchHiredata();
  }, []);

  const fetchHiredata = () => {
    axios
      .get("return/return_list")
      .then((result) => {
        setContent(result.data.result[0].returnpolicycontent);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

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
          title="RETURN POLICY"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/return-policy", title: "Return Policy"},
          ]}
          className={"handlebredcrumb"}
        />
        <ReturnPolicy content={content} />
      </div>
    </>
  );
};

export default ReturnPolicyIndex;
