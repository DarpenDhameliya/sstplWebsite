import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Link, useLocation} from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Divider, Tooltip} from "@mui/material";

import useStyleMainDisplay from "./MainDisplayStyle";

export default function Sidebardata() {
  const location = useLocation();
  const classes = useStyleMainDisplay();
  return (
    <>
      <List className={classes.selectedindex}>
        <Tooltip title={"Career Inquiry"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/career" selected={"/online-admin/dashboard/career" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white" ></i>
            </ListItemIcon>
            <ListItemText primary="Career Inquiry" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>

        <Tooltip title={"Hire Inquiry"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/hire" selected={"/online-admin/dashboard/hire" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Hire Inquiry" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>

        <Tooltip title={"Contact Inquiry"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/contact" selected={"/online-admin/dashboard/contact" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Contact Inquiry" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Meta"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/Meta" selected={"/online-admin/dashboard/Meta" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Meta" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Career"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/careerdetails" selected={"/online-admin/dashboard/careerdetails" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Career Details" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Portfolio"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/portfolio" selected={"/online-admin/dashboard/portfolio" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Portfolio" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"About"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/about" selected={"/online-admin/dashboard/about" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="About" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Aboutvalues"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/aboutvalue" selected={"/online-admin/dashboard/aboutvalue" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="About Values" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Service"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/service" selected={"/online-admin/dashboard/service" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Service" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Testimonial"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/testimonial" selected={"/online-admin/dashboard/testimonial" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Testimonial" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
      </List>
    </>
  );
}
