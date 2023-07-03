import React, {useEffect} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../auth/Login";
import {ThemeProvider} from "@mui/styles";
import {theme} from "../CommonComponent/Theme";
import AdminMainrous from "./AdminMainrous";
import {useHistory} from "react-router-dom";
const AdminRouts = () => {
  // const classes = useStyleAuth();


  return (
    <>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/admin" component={Login} />
          <Route path="/admin/dashboard">
            <AdminMainrous />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default AdminRouts;
