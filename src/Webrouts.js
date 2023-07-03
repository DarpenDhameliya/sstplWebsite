import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
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
import loader from "./assets/images/loader.gif";
import AOS from "aos";
import TermandConditionIndex from "./component/website/tems&consition/Index.js";
import PrivacyIndex from "./component/website/Privacy/PrivacyIndex.js";
import ReturnPolicy from "./component/website/returnpolicy/ReturnPolicyIndex.js";
import ErrorPage from "./component/common/ErrorPage.js";

function Webrouts() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  });
  useEffect(() => {
    AOS.init({
      duration: 100,
    });
  }, []);

  return (
    <>
      {loading && (
        <div className="onloadpage" id="page-load">
          <div className="loader-div">
            <div className="on-img">
              <img src={loader} alt="Logo" />
            </div>
          </div>
        </div>
      )}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Sstpl} />
            <Route  path="/about-us" component={IndexAbout} />
            <Route  path="/career" component={CareerIndex} />
            <Route  path="/our-work" component={WorlIndex} />
            <Route  path="/our-service" component={Serviceindex} />
            <Route  path="/web-application-developement" component={WebserviceIndex} />
            <Route  path="/desktop-software-developement" component={Desktopserviceindex} />
            <Route  path="/digital-marketing" component={Digitalserviceindex} />
            <Route  path="/mobile-application-developement" component={Mobileserviceindex} />
            <Route  path="/web_graphic-designing" component={Web_graphicIndex} />
            <Route  path="/enterprise-services" component={Enterpriseserviceindex} />
            <Route  path="/testimonial" component={Testimonialindex} />
            <Route  path="/contact-us" component={ContactIndex} />
            <Route  path="/contact" component={ContactIndex} />
            <Route  path="/terms" component={TermandConditionIndex} />
            <Route  path="/privacy" component={PrivacyIndex} />
            <Route  path="/returnpolicy" component={ReturnPolicy} />
            <Route component={ErrorPage} />
          </Switch>
        </ScrollToTop>
      </div>
    </>
  );
}

export default Webrouts;
