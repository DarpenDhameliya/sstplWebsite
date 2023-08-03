import React, { Suspense, lazy } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ErrorPage from "./component/common/ErrorPage.js";
import logo from "./assets/images/logo-removebg-preview.webp"
const AdminRouts = lazy(() => import("./component/Admin/AdminRouts/AdminRouts.js"));
const Webrouts = lazy(() => import("./Webrouts.js"));


function Routes() {

  return (
    <>
      <Router>
      <Suspense fallback={
            <div className="onloadpage" id="page-load">
              <div className="loader-div d-flex justify-content-center ">
                <div className="on-img">
                  <img src={logo} alt="loader" style={{width: "100px"}} />
                  <div className="loader">Loading ...</div>
                </div>
              </div>
            </div>
          }>
        <Switch>
          <Route path="/online-admin" component={AdminRouts} />
          <Route path="/" component={Webrouts} />
          <Route component={ErrorPage} />
        </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default Routes;
