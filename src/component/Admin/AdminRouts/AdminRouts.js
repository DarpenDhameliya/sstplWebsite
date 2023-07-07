import React ,{useEffect} from "react";
import { Route, Switch} from "react-router-dom";
import Login from "../auth/Login";
import {ThemeProvider} from "@mui/styles";
import {theme} from "../CommonComponent/Theme";
import AdminMainrous from "./AdminMainrous";
const AdminRouts = () => {
  useEffect(() => {
    document.title = "SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  }, [])
  return (
    <>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/online-admin" component={Login} />
          <Route path="/online-admin/dashboard">
            <AdminMainrous />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default AdminRouts;
