import React, { useEffect, useState } from "react";
import Headers from "../../common/PageHeader";
import Privacy from "./Privacy";
import axios from "../../common/Axios";
import logo from "../../../assets/images/logo-removebg-preview.webp";

const PrivacyIndex = () => {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const fetchHiredata = () => {
    axios
      .get("privacy/privacy_list")
      .then((result) => {
        setContent(result.data.result[0].privacycontent);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err)

      });
  };

  useEffect(() => {
    fetchHiredata();
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
          title="PRIVACY POLICY"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/privacy-policy", title: "Privacy Policy"},
          ]}
          className={"handlebredcrumb"}
        />
        <Privacy content={content}/>
        </div>
    </>
  );
};

export default PrivacyIndex;
