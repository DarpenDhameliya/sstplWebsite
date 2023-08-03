import React, {useState} from "react";
import useToggle from "../../common/Hooks/useToggle";
import Headers from "../../common/PageHeader";
import Careerdata from "./Careerdata";
import Sidepoosition from "./Sidepoosition";
import ApplyNow from "../../common/ApplyNow";
import logo from "../../../assets/images/logo-removebg-preview.webp";

const CareerIndex = () => {
  const [apply, applyAction] = useToggle(false);
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
        <ApplyNow open={apply} action={applyAction.toggle} />
        <Headers
          title="Careers"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/career", title: "Career"},
          ]}
        />
        <section className="career-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-12">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-12 col-sm-12 ">
                    <Careerdata loding={cleartimeout} />
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
