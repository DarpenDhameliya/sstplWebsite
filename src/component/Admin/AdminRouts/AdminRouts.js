import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/Login";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../CommonComponent/Theme";
import AdminMainrous from "./AdminMainrous";
import Hireus from "../pages/Hireus";
// import useStyleMainDisplay from "../sidebar/MainDisplayStyle";
import Sidebar from "../sidebar/Sidebar";
import useStyleAuth from "../auth/AuthuStyle";
import { CssBaseline } from "@mui/material";
// import Index from "../Index";
const AdminRouts = () => {
  // const classes = useStyleAuth();

  return <>
  <ThemeProvider theme={theme}> 
   <CssBaseline />
   <Switch>
        <Route exact path="/admin">
          <AdminMainrous />
        </Route>
          {/* <Route  path="/admin/dashbord" component={AdminMainrous} /> */}
      
      </Switch>
  
  </ThemeProvider>
  </>;
};

export default AdminRouts;
        // <Route path="/admin">
        //   <AdminMainrous />
        // </Route>
