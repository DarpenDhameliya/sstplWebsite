import React, { useState, useEffect } from "react";
import Testimonial from "./Testimonial";
import Headers from "../../SubComponent/PageHeader";
import Loader from "@/Component/loader";

const Testimonialindex = ({data}) => {
  const [loading, setLoading] = useState(true);

  const cleartimeout = () => {
    setLoading(false);
  };
  return (
    <>
      {loading && <Loader />}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <Headers
          title="TESTIMONIAL"
          breadcrumb={[
            { link: "/", title: "Home" },
            { link: "/testimonial", title: "Testimonial" },
          ]}
          className={"handlebredcrumb"}
        />
        <Testimonial loding={cleartimeout} data={data}/>
      </div>
    </>
  );
};

export default Testimonialindex;
