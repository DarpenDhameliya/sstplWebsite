import React, {Suspense, lazy, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {ThemeProvider} from "@mui/styles";
import {theme} from "../CommonComponent/Theme";
import "../../../assets/css/Fonts.css";
import logo from "../../../assets/images/logo-removebg-preview.webp";
const Login = lazy(() => import("../auth/Login"));
const AdminMainrous = lazy(() => import("./AdminMainrous"));

const AdminRouts = () => {
  useEffect(() => {
    document.title = "SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
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
          <Switch>
            <Route exact path="/online-admin" component={Login} />
            <Route path="/online-admin/dashboard">
              <AdminMainrous />
            </Route>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default AdminRouts;
