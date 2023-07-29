import React from "react";
import Drawer from "../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from "../../common/Hooks/useToggle";
import Headers from "../../common/PageHeader";
import Footer from "../../common/Footer";
import Servicecontent from "./Servicecontent";
import BackToTop from "../../common/BackToTop";
import Hireus from "../../common/Hireus";
import {useEffect, useState} from "react";
import logo from "../../../assets/images/logo-removebg-preview.webp";
import {Servicestate} from "../slice/Service";
import {useSelector} from "react-redux";
import axios from "../../common/Axios";
const Serviceindex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [loading, setLoading] = useState(true);
  const states = useSelector(Servicestate);
  const [dbFetcherr, setDbFetcherr] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    if (states.response.result !== undefined) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  });

  useEffect(() => {
    document.title = "Our-Service | SoftStorm - Custom Software Development Service Provider Company in Surat, India";
    if (states.response.result === undefined) {
      var fetchServiceata = () => {
        axios
          .get("service/service_list", {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((result) => {
            let data = result.data.result.sort((a, b) => a.contentpositionview - b.contentpositionview);
            setList(data);
            setLoading(false);
            // setWebappimg(result.data.result[0].frontpageimg);
            // setWebapptitle(result.data.result[0].heading);
            // setMobppimg(result.data.result[1].frontpageimg);
            // setMobpptitle(result.data.result[1].heading);
            // setDeskappimg(result.data.result[2].frontpageimg);
            // setDeskapptitle(result.data.result[2].heading);
            // setDigitalappimg(result.data.result[3].frontpageimg);
            // setDigitalapptitle(result.data.result[3].heading);
            // setWebgraappimg(result.data.result[4].frontpageimg);
            // setWebgraapptitle(result.data.result[4].heading);
            // setErpappimg(result.data.result[5].frontpageimg);
            // setErpapptitle(result.data.result[5].heading);
          })
          .catch((err) => {
            setDbFetcherr(err.response.data.error);
          });
      };
      fetchServiceata();
    }
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
      )}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        {/* <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle} />
        <Header action={drawerAction.toggle} cartToggle={cartAction.toggle} /> */}
        {/* <Hireus value={cart} action={cartAction.toggle} /> */}

        <Headers
          title="Our Service"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/ourservice", title: "Our Service"},
          ]}
          className={"handlebredcrumb"}
        />
        <Servicecontent list={list} />
        {/* <Footer />
        <BackToTop /> */}
      </div>
    </>
  );
};

export default Serviceindex;
