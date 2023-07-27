import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminRouts from "./component/Admin/AdminRouts/AdminRouts.js";
import ErrorPage from "./component/common/ErrorPage.js";
import Webrouts from "./Webrouts.js";

function Routes() {

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
