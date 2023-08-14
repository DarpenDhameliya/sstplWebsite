import React, {useState, useEffect} from "react";
import About from "./About";
import Headers from '../SubComponent/PageHeader'
import AboutPart2 from "./AboutPart2";
import axios from "../../Axios";
import Loader from "@/Component/loader";

const IndexAbout = () => {
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
{loading && <Loader />}
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
