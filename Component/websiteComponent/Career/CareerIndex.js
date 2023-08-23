import React, { useState } from "react";
import Careerdata from "./Careerdata";
import Sidepoosition from "./Sidepoosition";
import Loader from "@/Component/loader";
import dynamic from "next/dynamic";
const Headers = dynamic(() => import("../SubComponent/PageHeader"), { ssr: false });

const CareerIndex = ({data}) => {
  const [loading, setLoading] = useState(true);

  const cleartimeout = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader />}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <Headers
          title="Careers"
          breadcrumb={[
            { link: "/", title: "Home" },
            { link: "/career", title: "Career" },
          ]}
        />
        <section className="career-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-12">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-12 col-sm-12 ">
                    <Careerdata loding={cleartimeout} data={data}/>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <Sidepoosition />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareerIndex;
