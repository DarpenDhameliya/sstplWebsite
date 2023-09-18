import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Tooltip} from "@mui/material";
import { useRouter } from "next/router";
import styles from '../../common/common.module.css'

export default function Sidebardata() {
  const router = useRouter()
  return (
    <>
      <List className='selectedindex'>
        <Tooltip title={"Career Inquiry"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/career" selected={"/online-admin/dashboard/career" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="Career Inquiry" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>

        <Tooltip title={"Hire Inquiry"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/hire" selected={"/online-admin/dashboard/hire" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
               <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="Hire Inquiry" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>

        <Tooltip title={"Contact Inquiry"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/contact" selected={"/online-admin/dashboard/contact" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
               <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="Contact Inquiry" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Meta"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/meta" selected={"/online-admin/dashboard/meta" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="Meta" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Career"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/careerdetails" selected={"/online-admin/dashboard/careerdetails" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
               <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="Career Details" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Portfolio"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/portfolio" selected={"/online-admin/dashboard/portfolio" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
               <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="Portfolio" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"About"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/about" selected={"/online-admin/dashboard/about" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
               <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="About" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Aboutvalues"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/aboutvalue" selected={"/online-admin/dashboard/aboutvalue" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="About Values" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Service"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/service" selected={"/online-admin/dashboard/service" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="Service" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Testimonial"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/testimonial" selected={"/online-admin/dashboard/testimonial" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="Testimonial" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Header Icons"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/icon" selected={"/online-admin/dashboard/icon" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="Icons" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Privacy"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/privacy" selected={"/online-admin/dashboard/privacy" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="Policys" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>
        <Tooltip title={"Festival Logo"} placement="right">
          <ListItemButton button component={Link} to="/online-admin/dashboard/festival" selected={"/online-admin/dashboard/festival" === router.pathname} className='effectlist'>
            <ListItemIcon style={{minWidth: "45px"}}>
              <i className={`fa fa-circle-user ${styles.SidebarImg}`}></i>
            </ListItemIcon>
            <ListItemText primary="Festival Logo" className='setsidebaricon' />
          </ListItemButton>
        </Tooltip>

      </List>
    </>
  );
}
