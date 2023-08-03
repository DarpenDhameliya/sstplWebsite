import React, {useState, useEffect} from "react";
import Testimonial from "./Testimonial";
import Headers from "../../../common/PageHeader";
import logo from "../../../../assets/images/logo-removebg-preview.webp";
const Testimonialindex = () => {
  const [loading, setLoading] = useState(true);

  const cleartimeout = () => {
    setLoading(false);
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
          title="TESTIMONIAL"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/testimonial", title: "Testimonial"},
          ]}
          className={"handlebredcrumb"}
        />
        <Testimonial loding={cleartimeout}/>
      </div>
    </>
  );
};

export default Testimonialindex;
