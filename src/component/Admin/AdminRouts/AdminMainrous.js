import React, { Suspense, lazy, useEffect } from "react";
import useStyleMainDisplay from "../CommonComponent/sidebar/MainDisplayStyle";
import {Route, Switch, useHistory} from "react-router-dom";
import logo from "../../../assets/images/logo-removebg-preview.webp";
const Sidebar = lazy(() => import("../CommonComponent/sidebar/Sidebar"));
const Hireus = lazy(() => import("../pages/hireus/Hireus"));
const Contact_us = lazy(() => import("../pages/contactus/Contact_us"));
const Career = lazy(() => import("../pages/career/Careerinq"));
const MetaList = lazy(() => import("../pages/meta/MetaList"));
const Profile_forggetpas = lazy(() => import("../pages/profile/Profile_forggetpas"));
const CareerDataList = lazy(() => import("../pages/career/CareerDataList"));
const CareerDetailsAdd = lazy(() => import("../pages/career/CareerDetailsAdd"));
const CareerEdit = lazy(() => import("../pages/career/CareerEdit"));
const PortfolioList = lazy(() => import("../pages/portfolio/PortfolioList"));
const PortfolioAdd = lazy(() => import("../pages/portfolio/PortfolioAdd"));
const PortfolioEdit = lazy(() => import("../pages/portfolio/PortfolioEdit"));
const AboutList = lazy(() => import("../pages/about/AboutList"));
const AboutValueAdd = lazy(() => import("../pages/about/AboutValueAdd"));
const AboutValueEdit = lazy(() => import("../pages/about/AboutValueEdit"));
const AboutValueList = lazy(() => import("../pages/about/AboutValueList"));
const ServiceList = lazy(() => import("../pages/services/ServiceList"));
const Serviceadd = lazy(() => import("../pages/services/Serviceadd"));
const ServiceEdit = lazy(() => import("../pages/services/ServiceEdit"));
const TestimonialList = lazy(() => import("../pages/testimonial/TestimonialList"));
const Icons = lazy(() => import("../pages/HeaderIcon/Icons"));
const Privacy = lazy(() => import("../pages/privacy_return_terms/Privacy"));
const ReturnPolicy = lazy(() => import("../pages/privacy_return_terms/ReturnPolicy"));
const Terms_condition = lazy(() => import("../pages/privacy_return_terms/Terms_condition"));

const AdminMainrous = () => {

  const classes = useStyleMainDisplay();
  const history = useHistory();
  var token = localStorage.getItem("ssAdmin");
  useEffect(() => {
    if (!token) {
      history.push("/online-admin");
    }
  }, []);
  return (
    <>
    <div className={classes.setdisplay}>
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
      <Sidebar />
      <Switch>
        <Route  path="/online-admin/dashboard/hire" component={Hireus} />
        <Route  path="/online-admin/dashboard/contact" component={Contact_us} />
        <Route  path="/online-admin/dashboard/career" component={Career} />
        <Route  path="/online-admin/dashboard/meta" component={MetaList} />
        <Route  path="/online-admin/dashboard/careerdetails" component={CareerDataList} />
        <Route  path="/online-admin/dashboard/careerdetailsadd" component={CareerDetailsAdd} />
        <Route  path="/online-admin/dashboard/careerdetailedit/:id" component={CareerEdit} />
        <Route  path="/online-admin/dashboard/meta" component={MetaList} />
        <Route  path="/online-admin/dashboard/portfolio" component={PortfolioList} />
        <Route  path="/online-admin/dashboard/portfolioadd" component={PortfolioAdd} />
        <Route  path="/online-admin/dashboard/portfolioedit/:id" component={PortfolioEdit} />
        <Route  path="/online-admin/dashboard/profile" component={Profile_forggetpas} />
        <Route  path="/online-admin/dashboard/about" component={AboutList} />
        <Route  path="/online-admin/dashboard/aboutvalue" component={AboutValueList} />
        <Route  path="/online-admin/dashboard/aboutvalueadd" component={AboutValueAdd} />
        <Route  path="/online-admin/dashboard/aboutvalueedit/:id" component={AboutValueEdit} />
        <Route  path="/online-admin/dashboard/service" component={ServiceList} />
        <Route  path="/online-admin/dashboard/serviceadd" component={Serviceadd} />
        <Route  path="/online-admin/dashboard/serviceedit/:id" component={ServiceEdit} />
        <Route  path="/online-admin/dashboard/testimonial" component={TestimonialList} />
        <Route  path="/online-admin/dashboard/icon" component={Icons} />
        <Route  path="/online-admin/dashboard/privacy" component={Privacy} />
        <Route  path="/online-admin/dashboard/return-policy" component={ReturnPolicy} />
        <Route  path="/online-admin/dashboard/terms-and-conditions" component={Terms_condition} />
      </Switch>
      </Suspense>
    </div>
    </>
  );
};

export default AdminMainrous;

