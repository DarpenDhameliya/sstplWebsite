import React from "react";
const Headers = dynamic(() => import("../SubComponent/PageHeader"), { ssr: false });
import ReturnPolicy from "./ReturnPolicy";
import {useEffect, useState} from "react";
import axios from "../../Axios";
import Loader from "@/Component/loader";

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
      {loading && <Loader />}

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
