// import React, {useEffect, useState} from "react";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import IndexAbout from "./component/About/IndexAbout.js";
// import Testimonialindex from "./component/About/testimonial/Testimonialindex.js";
// import CareerIndex from "./component/Career/CareerIndex.js";
// import ContactIndex from "./component/Contactus/Index.js";
// import ScrollToTop from "./component/Helper/ScrollToTop";
// import Sstpl from "./component/Home/Index.js";
// import WorlIndex from "./component/ourwork/WorlIndex.js";
// import Desktopserviceindex from "./component/Services/desktop/Desktopserviceindex.js";
// import Digitalserviceindex from "./component/Services/digital/Digitalserviceindex.js";
// import Enterpriseserviceindex from "./component/Services/enterprise/Enterpriseserviceindex.js";
// import Mobileserviceindex from "./component/Services/mobileapp/Mobileserviceindex.js";
// import Serviceindex from "./component/Services/Serviceindex.js";
// import WebserviceIndex from "./component/Services/webapp/WebserviceIndex.js";
// import Web_graphicIndex from "./component/Services/web_graphic/Web_graphicIndex.js";
// import loader from "./assets/images/loader.gif";
// import AOS from "aos";
// import TermandConditionIndex from "./component/tems&consition/Index.js";
// import PrivacyIndex from "./component/Privacy/PrivacyIndex.js";
// import ReturnPolicy from "./component/returnpolicy/ReturnPolicyIndex.js";
// import AdminRouts from "./component/Admin/AdminRouts/AdminRouts.js";
// import Hireus from "./component/Admin/pages/Hireus.js";
// // import {ThemeProvider} from "@material-ui/styles";
// // import {theme} from "./component/Admin/CommonComponent/Theme.js";
// import ErrorPage from "./component/common/ErrorPage.js";
// import { useHistory } from 'react-router-dom';

// function Routes() {

//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   });
//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 200);
//   });
//   useEffect(() => {
//     AOS.init({
//       duration: 100,
//     });
//   }, []);

//   return (
//     <>
//       {loading && (
//         <div className="onloadpage" id="page-load">
//           <div className="loader-div">
//             <div className="on-img">
//               <img src={loader} alt="Logo" />
//             </div>
//           </div>
//         </div>
//       )}
//       <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
//         {/* <ThemeProvider theme={theme}> */}
//           <Router>
//             <ScrollToTop>
//               <Switch>
//                 <Route exact path="/" component={Sstpl} />
//                 <Route exact path="/about-us" component={IndexAbout} />
//                 <Route exact path="/career" component={CareerIndex} />
//                 <Route exact path="/our-work" component={WorlIndex} />
//                 <Route exact path="/our-service" component={Serviceindex} />
//                 <Route exact path="/web-application-developement" component={WebserviceIndex} />
//                 <Route exact path="/desktop-software-developement" component={Desktopserviceindex} />
//                 <Route exact path="/digital-marketing" component={Digitalserviceindex} />
//                 <Route exact path="/mobile-application-developement" component={Mobileserviceindex} />
//                 <Route exact path="/web_graphic-designing" component={Web_graphicIndex} />
//                 <Route exact path="/enterprise-services" component={Enterpriseserviceindex} />
//                 <Route exact path="/testimonial" component={Testimonialindex} />
//                 <Route exact path="/contact-us" component={ContactIndex} />
//                 <Route exact path="/contact" component={ContactIndex} />
//                 <Route exact path="/terms" component={TermandConditionIndex} />
//                 <Route exact path="/privacy" component={PrivacyIndex} />
//                 <Route exact path="/returnpolicy" component={ReturnPolicy} />
//                 {/* <Route exact path="/admin" component={AdminRouts} /> */}
//                 <Route component={ErrorPage} />
//               </Switch>
//             </ScrollToTop>
//           </Router>
//         {/* </ThemeProvider> */}
//       </div>
//     </>
//   );
// }

// export default Routes;

import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminRouts from "./component/Admin/AdminRouts/AdminRouts.js";
import ErrorPage from "./component/common/ErrorPage.js";
import Webrouts from "./Webrouts.js";
import {useDispatch} from "react-redux";
import axios from "./component/common/Axios.js";
import {useEffect} from "react";
import {Metastatus} from "./component/website/slice/Mets.js";

function Routes() {
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
        // setMetaList(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/online-admin" component={AdminRouts} />
          <Route path="/" component={Webrouts} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
