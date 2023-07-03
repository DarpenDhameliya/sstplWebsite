import React, {useState , useEffect} from "react";
import Drawer from "../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from "../../common/Hooks/useToggle";
import About from "./About";
import Footer from "../../common/Footer";
import BackToTop from "../../common/BackToTop";
import Headers from "../../common/PageHeader";
import Hireus from "../../common/Hireus";
import AboutPart2 from "./AboutPart2";
import Lottie from "lottie-react";
import homedata from "./Aboutpath.json";
import axios from "../../common/Axios";

const IndexAbout = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [aboutList, setAboutList] = useState([]);
  const [dberr, setDberr] = useState([]);

  const fetchHiredata = () => {
    axios
      .get("about/about_list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        setAboutList(result.data.result);
      })
      .catch((err) => {
        setDberr(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);


  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle} />
      <Header action={drawerAction.toggle} cartToggle={cartAction.toggle} />
      <Hireus value={cart} action={cartAction.toggle} />
      <Headers
        title="ABOUT US"
        breadcrumb={[
          {link: "/", title: "Home"},
          {link: "/about", title: "About Us"},
        ]}
        className={"handlebredcrumb"}
      />
      <About list={aboutList} error={dberr}/>
      <AboutPart2 list={aboutList}/>
      {/* <div className="container mt-3 mb-3">
        <Lottie animationData={homedata} />
      </div> */}
      <Footer />
      <BackToTop />
    </>
  );
};

export default IndexAbout;
