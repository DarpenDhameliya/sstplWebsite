import React, { useEffect, useState } from "react";
import Headers from "../SubComponent/PageHeader";
import Privacy from "./Privacy";
import axios from "../../Axios";
import Loader from "@/Component/loader";

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
   {loading && <Loader />}

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
