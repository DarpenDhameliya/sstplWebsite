import React, {Suspense, useEffect, useState, lazy} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import useToggle from "./component/common/Hooks/useToggle.js";
import AOS from "aos";
import logo from "./assets/images/logo-removebg-preview.webp";

const ScrollToTop = lazy(() => import("./component/website/Helper/ScrollToTop.js"));
const Drawer = lazy(() => import("./component/website/Mobile/Drawer.js"));
const Header = lazy(() => import("./component/common/Header.js"));
const Footer = lazy(() => import("./component/common/Footer.js"));
const Hireus = lazy(() => import("./component/common/Hireus.js"));
const BackToTop = lazy(() => import("./component/common/BackToTop.js"));
const IndexAbout = lazy(() => import("./component/website/About/IndexAbout.js"));
const Testimonialindex = lazy(() => import("./component/website/About/testimonial/Testimonialindex.js"));
const CareerIndex = lazy(() => import("./component/website/Career/CareerIndex.js"));
const ContactIndex = lazy(() => import("./component/website/Contactus/Index.js"));
const Sstpl = lazy(() => import("./component/website/Home/Index.js"));
const WorlIndex = lazy(() => import("./component/website/ourwork/WorlIndex.js"));
const Desktopserviceindex = lazy(() => import("./component/website/Services/desktop/Desktopserviceindex.js"));
const Digitalserviceindex = lazy(() => import("./component/website/Services/digital/Digitalserviceindex.js"));
const Enterpriseserviceindex = lazy(() => import("./component/website/Services/enterprise/Enterpriseserviceindex.js"));
const Mobileserviceindex = lazy(() => import("./component/website/Services/mobileapp/Mobileserviceindex.js"));
const Serviceindex = lazy(() => import("./component/website/Services/Serviceindex.js"));
const WebserviceIndex = lazy(() => import("./component/website/Services/webapp/WebserviceIndex.js"));
const Web_graphicIndex = lazy(() => import("./component/website/Services/web_graphic/Web_graphicIndex.js"));
const TermandConditionIndex = lazy(() => import("./component/website/tems&consition/Index.js"));
const PrivacyIndex = lazy(() => import("./component/website/Privacy/PrivacyIndex.js"));
const ReturnPolicy = lazy(() => import("./component/website/returnpolicy/ReturnPolicyIndex.js"));
const ErrorPage = lazy(() => import("./component/common/ErrorPage.js"));

function Webrouts() {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [errorPageActive, setErrorPageActive] = useState(false);
  const [urlfetch, setUrlfetch] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 10,
    });
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
      <Suspense
        fallback={
          <div className="onloadpage" id="page-load">
            <div className="loader-div d-flex justify-content-center ">
              <div className="on-img">
                <img src={logo} alt="loader" style={{width: "100px"}} />
                <div className="loader">Loading ...</div>
              </div>
            </div>
          </div>
        }
      >
        {urlfetch === "" ? "" : <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle} />}
        {urlfetch === "" ? "" : errorPageActive === false && <Header action={drawerAction.toggle} cartToggle={cartAction.toggle} />}
        <Hireus value={cart} action={cartAction.toggle} />
        {/* <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle} /> */}
        {/* {errorPageActive === false && <Header action={drawerAction.toggle} cartToggle={cartAction.toggle} />} */}
        <ScrollToTop>
          <Switch>
            <Route exact path="/" render={(props) => <Sstpl {...props} addheader={addheader} action={drawerAction.toggle} />} />
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
        {urlfetch === "contact-us" || errorPageActive === true || urlfetch === "contact" || urlfetch === "" ? "" : <Footer />}
        <BackToTop />
      </Suspense>
    </>
  );
}

export default Webrouts;
