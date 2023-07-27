import React, { useEffect } from "react";
import useStyleMainDisplay from "../CommonComponent/sidebar/MainDisplayStyle";
import Sidebar from "../CommonComponent/sidebar/Sidebar";
import {Route, Switch, useHistory} from "react-router-dom";
import Hireus from "../pages/hireus/Hireus";
import Contact_us from "../pages/contactus/Contact_us";
import Career from "../pages/career/Careerinq";
import MetaList from "../pages/meta/MetaList";
import Profile_forggetpas from "../pages/profile/Profile_forggetpas";
import CareerDataList from "../pages/career/CareerDataList";
import CareerDetailsAdd from "../pages/career/CareerDetailsAdd";
import CareerEdit from "../pages/career/CareerEdit";
import PortfolioList from "../pages/portfolio/PortfolioList";
import PortfolioAdd from "../pages/portfolio/PortfolioAdd";
import PortfolioEdit from "../pages/portfolio/PortfolioEdit";
import AboutList from "../pages/about/AboutList";
// import AboutAdd from "../pages/about/AboutAdd";
// import AboutEdit from "../pages/about/AboutEdit";
import AboutValueAdd from "../pages/about/AboutValueAdd";
import AboutValueEdit from "../pages/about/AboutValueEdit";
import AboutValueList from "../pages/about/AboutValueList";
import ServiceList from "../pages/services/ServiceList";
import Serviceadd from "../pages/services/Serviceadd";
import ServiceEdit from "../pages/services/ServiceEdit";
import TestimonialList from "../pages/testimonial/TestimonialList";
import Icons from "../pages/HeaderIcon/Icons";

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

      </Switch>
    </div>
    </>
  );
};

export default AdminMainrous;

