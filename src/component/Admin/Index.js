import React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./auth/Login";
import AdminMainrous from "./AdminRouts/AdminMainrous";

const Index = () => {
  return (
    <>
      {/* <Switch>
        <Route path="/admin/as">
          <AdminMainrous />
        </Route>
        <Route path="/admin/login">
          <Login />
        </Route>
      </Switch> */}
    </>
  );
};

export default Index;
