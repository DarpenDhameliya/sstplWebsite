import React, {useState, useEffect} from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Link, useLocation} from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import {useDispatch, useSelector} from "react-redux";
import {Divider, Tooltip} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import useStyleMainDisplay from "./MainDisplayStyle";

export default function Sidebardata() {
  const location = useLocation();
  const classes = useStyleMainDisplay();
  return (
    <>
      <List className={classes.selectedindex}>
        <Tooltip title={"Career"} placement="right">
          <ListItemButton button component={Link} to="/admin/dashboard/career" selected={"/admin/dashboard/career" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white" ></i>
            </ListItemIcon>
            <ListItemText primary="Career" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>

        <Tooltip title={"Hire"} placement="right">
          <ListItemButton button component={Link} to="/admin/dashboard/hire" selected={"/admin/dashboard/hire" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Hire" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>

        <Tooltip title={"Contact"} placement="right">
          <ListItemButton button component={Link} to="/admin/dashboard/contact" selected={"/admin/dashboard/contact" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Contact" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Meta"} placement="right">
          <ListItemButton button component={Link} to="/admin/dashboard/Meta" selected={"/admin/dashboard/Meta" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Meta" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Career Details"} placement="right">
          <ListItemButton button component={Link} to="/admin/dashboard/careerdetails" selected={"/admin/dashboard/careerdetails" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Career Details" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Portfolio Details"} placement="right">
          <ListItemButton button component={Link} to="/admin/dashboard/portfolio" selected={"/admin/dashboard/portfolio" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Portfolio" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"About Details"} placement="right">
          <ListItemButton button component={Link} to="/admin/dashboard/about" selected={"/admin/dashboard/about" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="About" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Aboutvalues Details"} placement="right">
          <ListItemButton button component={Link} to="/admin/dashboard/aboutvalue" selected={"/admin/dashboard/aboutvalue" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="About Values" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Service"} placement="right">
          <ListItemButton button component={Link} to="/admin/dashboard/service" selected={"/admin/dashboard/service" === location.pathname} className={classes.effectlist}>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className="fa fa-circle-user fs-25 white"></i>
            </ListItemIcon>
            <ListItemText primary="Service" className={classes.setsidebaricon} />
          </ListItemButton>
        </Tooltip>
      </List>
    </>
  );
}
