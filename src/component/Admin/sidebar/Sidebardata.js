import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Tooltip } from "@mui/material";
// import { SidebartrueSlice, SidebarfalseSlice } from "./slice/SidebarDataReducer";
// import { userstate } from "../authenticate/slice/LoginRedux";
// import { data } from "./slice/AppReducer";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import useStyleMainDisplay from "./MainDisplayStyle";


export default function Sidebardata() {
  const [sublistOpenmaster, setSublistOpenmaster] = useState(false);
  const [sublistOpenreport, setSublistOpenReport] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();
  const dispatch = useDispatch();
  // const loginstatus = useSelector(userstate);
  // const opensidebarstatsu = useSelector(data);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handlemasterList = () => {
    setSelectedIndex(0);
    setSublistOpenReport(false);
    setSublistOpenmaster(false);
  };

  const hendlesublistmaster = (event, index) => {
    setSublistOpenmaster(!sublistOpenmaster);
    setSelectedIndex(index);
    setSublistOpenReport(false);
  };
  const hendlesublistreport = (event, index) => {
    setSublistOpenmaster(false);
    setSublistOpenReport(!sublistOpenreport);
    setSelectedIndex(index);
  };

  // useEffect(() => {
  //   if (
  //     "/app/productlist" === location.pathname ||
  //     "/app/website" === location.pathname ||
  //     "/app/courier" === location.pathname ||
  //     "/app/bank" === location.pathname
  //   ) {
  //     setSelectedIndex(1);
  //   }
  //   if (
  //     "/app/order" === location.pathname ||
  //     "/app/payment" === location.pathname ||
  //     "/app/post_transaction" === location.pathname
  //   ) {
  //     setSelectedIndex(2);
  //   }
  // });



  const classes = useStyleMainDisplay(selectedIndex);
  // const username = JSON.parse(localStorage.getItem("username"));
  // const capitaluser = username.toUpperCase();
  // let letter = capitaluser.charAt(0);
  return (
    <>
      <List className={classes.selectedindex}>
        <div className={classes.setviewforweb}>
          <div className={classes.seticonwithname}>
            {/* <Avatar className={classes.setheaderavtarweb}>{letter}</Avatar>
            <Typography className={classes.setheadertypoweb}>
              {capitaluser}
            </Typography> */}
          </div>
        </div>
        <div className={classes.setviewforwebdivider}>
          <Divider
            variant="middle"
            style={{ borderColor: "#fff0f045", margin: "5px 5px" }}
          />{" "}
        </div>
        {/* <Tooltip
          title={opensidebarstatsu.status ? "" : "Master"}
          placement="right"
        >
          <ListItemButton
            onClick={(event) => hendlesublistmaster(event)}
            className={classes.effectlist}
            selected={selectedIndex === 1}
          >
            <ListItemIcon style={{ minWidth: "45px" }}>
            <i class="fa fa-circle-user"></i>
              {/* <LibraryBooksIcon className={classes.setsidebaricon} /> *}
            </ListItemIcon>
            <ListItemText primary="Master" className={classes.setsidebaricon} />
            {sublistOpenmaster ? (
              <i class="fa fa-chevron-down"></i>
            ) : (
              <i class="fa fa-chevron-up"></i>
            )}
          </ListItemButton>
        </Tooltip> */}
        {/* <Collapse
          in={sublistOpenmaster}
          timeout="auto"
          unmountOnExit
          sx={{ backgroundColor: "#2c3b41" }}
        >
          <List
            component="div"
            disablePadding
            className={classes.selectedsubindex}
          >
            <Tooltip
              title={opensidebarstatsu.status ? "" : "Product"}
              placement="right"
            >
              <ListItemButton
                button
                component={Link}
                // to="/app/productlist"
                // selected={"/app/productlist" === location.pathname ||'/app/productadd' === location.pathname}
                onClick={(event) => handleListItemClick(event, 1)}
                className={classes.effectlist}
              >
                <ListItemIcon style={{ minWidth: "45px" }}>
                <i class="fa fa-circle-user"></i>
                </ListItemIcon>
                <ListItemText
                  primary="Product"
                  className={classes.setsidebaricon}
                />
              </ListItemButton>
            </Tooltip>
            <Divider sx={{ paddingTop: 0.1 }} />
            <Tooltip
              title={opensidebarstatsu.status ? "" : "Website"}
              placement="right"
            >
              <ListItemButton
                button
                component={Link}
                to="/app/website"
                selected={"/app/website" === location.pathname}
                onClick={(event) => handleListItemClick(event, 1)}
                className={classes.effectlist}
              >
                <ListItemIcon style={{ minWidth: "45px" }}>
                  <PanoramaFishEyeIcon className={classes.setsidebaricon} />
                </ListItemIcon>
                <ListItemText
                  primary="Website"
                  className={classes.setsidebaricon}
                />
              </ListItemButton>
            </Tooltip>
            <Divider sx={{ paddingTop: 0.1 }} />
            <Tooltip
              title={opensidebarstatsu.status ? "" : "Courier"}
              placement="right"
            >
              <ListItemButton
                button
                component={Link}
                to="/app/courier"
                selected={"/app/courier" === location.pathname}
                onClick={(event) => handleListItemClick(event, 1)}
                className={classes.effectlist}
              >
                <ListItemIcon style={{ minWidth: "45px" }}>
                  <PanoramaFishEyeIcon className={classes.setsidebaricon} />
                </ListItemIcon>
                <ListItemText
                  primary="Courier"
                  className={classes.setsidebaricon}
                />
              </ListItemButton>
            </Tooltip>

            <Divider sx={{ paddingTop: 0.1 }} />
            <Tooltip
              title={opensidebarstatsu.status ? "" : "Bank Master"}
              placement="right"
            >
              <ListItemButton
                button
                component={Link}
                to="/app/bank"
                selected={"/app/bank" === location.pathname}
                onClick={(event) => handleListItemClick(event, 1)}
                className={classes.effectlist}
              >
                <ListItemIcon style={{ minWidth: "45px" }}>
                  <PanoramaFishEyeIcon className={classes.setsidebaricon} />
                </ListItemIcon>
                <ListItemText
                  primary="Bank Master"
                  className={classes.setsidebaricon}
                />
              </ListItemButton>
            </Tooltip>
          </List>
        </Collapse> */}
        {/* master end ------- */}

        {/* order entry */}
        <Tooltip
          title={"Order Entry"}
          placement="right"
        >
          <ListItemButton
            button
            component={Link}
            // to="/app/orderadd"
            // selected={"/app/orderadd" === location.pathname}
            // onClick={handleOrderClick}
            className={classes.effectlist}
          >
            <ListItemIcon style={{ minWidth: "45px" }}>
            <i class="fa fa-circle-user"></i>
            </ListItemIcon>
            <ListItemText
              primary="Order Entry"
              className={classes.setsidebaricon}
            />
          </ListItemButton>
        </Tooltip>

        {/* order Detail */}
        <Tooltip
          title={"Order Detail"}
          placement="right"
        >
          <ListItemButton
            button
            component={Link}
            // to="/app/orderdata"
            // selected={"/app/orderdata" === location.pathname}
            onClick={handlemasterList}
            className={classes.effectlist}
          >
            <ListItemIcon style={{ minWidth: "45px" }}>
            <i class="fa fa-circle-user"></i>
            </ListItemIcon>
            <ListItemText
              primary="Order Detail"
              className={classes.setsidebaricon}
            />
          </ListItemButton>
        </Tooltip>

        {/* pickup entry */}
        <Tooltip
          title={ "Pickup Entry"}
          placement="right"
        >
          <ListItemButton
            button
            component={Link}
            // to="/app/pickup"
            // selected={"/app/pickup" === location.pathname}
            onClick={handlemasterList}
            className={classes.effectlist}
          >
            <ListItemIcon style={{ minWidth: "45px" }}>
            <i class="fa fa-circle-user"></i>
            </ListItemIcon>
            <ListItemText
              primary="Pickup Entry"
              className={classes.setsidebaricon}
            />
          </ListItemButton>
        </Tooltip>

        {/* payment receive */}
        <Tooltip
          title={"Payment Receive"}
          placement="right"
        >
          <ListItemButton
            button
            component={Link}
            // to="/app/paymentreceive"
            // selected={"/app/paymentreceive" === location.pathname}
            onClick={handlemasterList}
            className={classes.effectlist}
          >
            <ListItemIcon style={{ minWidth: "45px" }}>
            <i class="fa fa-circle-user"></i>
            </ListItemIcon>
            <ListItemText
              primary="Payment Receive"
              className={classes.setsidebaricon}
            />
          </ListItemButton>
        </Tooltip>

      
        {/* report end */}
        {/* <Tooltip
          title={opensidebarstatsu.status ? "" : "Pickup Entry"}
          placement="right"
        >
          <ListItemButton
            button
            component={Link}
            to="/"
            onClick={handlelogout}
            className={classes.effectlistlogout}
          >
            <ListItemIcon style={{ minWidth: "45px" }}>
              <MailOutlineOutlinedIcon className={classes.setsidebaricon} />
            </ListItemIcon>
            <ListItemText
              primary="Log Out"
              className={classes.setsidebaricon}
            />
          </ListItemButton>
        </Tooltip> */}
      </List>
    </>
  );
}
