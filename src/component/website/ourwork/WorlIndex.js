import Headers from "../../common/PageHeader";
import Portfoliyo from "./Portfoliyo";
import logo from "../../../assets/images/logo-removebg-preview.webp";
import { useState} from "react";
const WorlIndex = () => {
  const [loading, setLoading] = useState(true);

  const cleartimeout = () => {
    setLoading(false)
  }
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
          title="Portfolio"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/ourwork", title: "Portfolio"},
          ]}
        />
        <Portfoliyo loding={cleartimeout}/>

      </div>
    </>
  );
};

export default WorlIndex;
