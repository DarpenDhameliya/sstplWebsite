import React, {useState, useEffect} from "react";
import Drawer from "../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from "../../common/Hooks/useToggle";
import About from "./About";
import Footer from "../../common/Footer";
import BackToTop from "../../common/BackToTop";
import Headers from "../../common/PageHeader";
import Hireus from "../../common/Hireus";
import AboutPart2 from "./AboutPart2";
// import Lottie from "lottie-react";
// import homedata from "./Aboutpath.json";
import axios from "../../common/Axios";
import logo from "../../../assets/images/logo-removebg-preview.webp";
const IndexAbout = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [aboutList, setAboutList] = useState([]);
  const [dberr, setDberr] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHiredata = () => {
    axios
      .get("about/about_list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        setAboutList(result.data.result);
        cleartimeout();
      })
      .catch((err) => {
        cleartimeout();
        setDberr(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);

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
          title="ABOUT US"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/about", title: "About Us"},
          ]}
          className={"handlebredcrumb"}
        />
        <About list={aboutList} error={dberr} />
        <AboutPart2 list={aboutList} loding={cleartimeout} />
      </div>
    </>
  );
};

export default IndexAbout;
