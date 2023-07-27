import React, {useEffect, useState} from "react";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import IndexAbout from "./component/website/About/IndexAbout.js";
import Testimonialindex from "./component/website/About/testimonial/Testimonialindex.js";
import CareerIndex from "./component/website/Career/CareerIndex.js";
import ContactIndex from "./component/website/Contactus/Index.js";
import ScrollToTop from "./component/website/Helper/ScrollToTop.js";
import Sstpl from "./component/website/Home/Index.js";
import WorlIndex from "./component/website/ourwork/WorlIndex.js";
import Desktopserviceindex from "./component/website/Services/desktop/Desktopserviceindex.js";
import Digitalserviceindex from "./component/website/Services/digital/Digitalserviceindex.js";
import Enterpriseserviceindex from "./component/website/Services/enterprise/Enterpriseserviceindex.js";
import Mobileserviceindex from "./component/website/Services/mobileapp/Mobileserviceindex.js";
import Serviceindex from "./component/website/Services/Serviceindex.js";
import WebserviceIndex from "./component/website/Services/webapp/WebserviceIndex.js";
import Web_graphicIndex from "./component/website/Services/web_graphic/Web_graphicIndex.js";
import AOS from "aos";
import TermandConditionIndex from "./component/website/tems&consition/Index.js";
import PrivacyIndex from "./component/website/Privacy/PrivacyIndex.js";
import ReturnPolicy from "./component/website/returnpolicy/ReturnPolicyIndex.js";
import ErrorPage from "./component/common/ErrorPage.js";
import {useDispatch} from "react-redux";
import axios from "./component/common/Axios.js";
import {Metastatus} from "./component/website/slice/Mets.js";
import useToggle from "./component/common/Hooks/useToggle.js";
import Drawer from "./component/website/Mobile/Drawer.js";
import Header from "./component/common/Header.js";
import Footer from "./component/common/Footer.js";
import BackToTop from "./component/common/BackToTop.js";
import Hireus from "./component/common/Hireus.js";
function Webrouts() {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [errorPageActive, setErrorPageActive] = useState(false);
  const [urlfetch, setUrlfetch] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    AOS.init({
      duration: 100,
    });
  }, []);
  const handleCloseDrawer = () => {
    drawerAction.toggle();
  };

  const dispatch = useDispatch();
  const fetchHiredata = () => {
    axios
      .get("meta/meta_list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        dispatch(Metastatus(result.data.result));
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  useEffect(() => {
    // fetchHiredata();
  }, []);

  useEffect(() => {
    let geturl = window.location.pathname.split("/")[1];
    setUrlfetch(geturl);
  });

  const addheader = () => {
    setErrorPageActive(false);
  };
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle}  />
      {errorPageActive === false && <Header action={drawerAction.toggle} cartToggle={cartAction.toggle} />}
      <Hireus value={cart} action={cartAction.toggle} />

      <ScrollToTop>
        <Switch>
          <Route exact path="/" render={(props) => <Sstpl {...props} addheader={addheader} action={drawerAction.toggle}/>} />
          <Route path="/about-us" component={IndexAbout} />
          <Route path="/career" component={CareerIndex} />
          <Route path="/our-work" component={WorlIndex} />
          <Route path="/our-service" component={Serviceindex} />
          <Route path="/web-application-developement" component={WebserviceIndex} />
          <Route path="/desktop-software-developement" component={Desktopserviceindex} />
          <Route path="/digital-marketing" component={Digitalserviceindex} />
          <Route path="/mobile-application-developement" component={Mobileserviceindex} />
          <Route path="/web_graphic-designing" component={Web_graphicIndex} />
          <Route path="/enterprise-services" component={Enterpriseserviceindex} />
          <Route path="/testimonial" component={Testimonialindex} />
          <Route path="/contact-us" component={ContactIndex} />
          <Route exact path="/contact">
            <Redirect to="/contact-us" />
          </Route>
          <Route path="/terms-and-conditions" component={TermandConditionIndex} />
          <Route path="/privacy-policy" component={PrivacyIndex} />
          <Route path="/return-policy" component={ReturnPolicy} />
          <Route
            render={() => {
              setErrorPageActive(true);
              return <ErrorPage />;
            }}
          />
        </Switch>
      </ScrollToTop>
      {urlfetch === "contact-us" || errorPageActive === true || urlfetch === "contact" ? "" : <Footer />}
      <BackToTop />
    </>
  );
}

export default Webrouts;
