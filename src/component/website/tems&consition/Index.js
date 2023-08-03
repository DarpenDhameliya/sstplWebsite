import React, {useState, useEffect} from "react";
import Headers from "../../common/PageHeader";
import Temsandconsition from "./Tems&consition";
import logo from "../../../assets/images/logo-removebg-preview.webp";
import axios from "../../common/Axios";

const TermandConditionIndex = () => {
  const [content, setContent] = useState('')

  const [loading, setLoading] = useState(true);

  const fetchHiredata = () => {
    axios
      .get("terms/terms_list")
      .then((result) => {
        setContent(result.data.result[0].termscontent);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      })
      .catch((err) => {
        setLoading(false);
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
      )}{" "}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <Headers
          title="TERMS & CONDITIONS"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/terms-and-conditions", title: "TERMS & CONDITIONS"},
          ]}
          className={"handlebredcrumb"}
        />
        <Temsandconsition />
      </div>
    </>
  );
};

export default TermandConditionIndex;
