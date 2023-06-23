// import React, { useEffect } from "react";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import CssBaseline from "@mui/material/CssBaseline";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import { AppBar } from "@material-ui/core";
// import Badge from "@mui/material/Badge";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import { Divider, Drawer } from "@mui/material";
// import { useState } from "react";
// import Typography from "@mui/material/Typography";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import MoreIcon from "@mui/icons-material/MoreVert";
// import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
// import Avatar from "@mui/material/Avatar";
// import sstpl from "../../logo.jpg";
// import Sidebardata from "./Sidebardata";
// import { useHistory } from "react-router-dom";
// import useStyleMainDisplay from "./MainDisplayStyle";
// import { useDispatch, useSelector } from "react-redux";
// import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

// import Tooltip from "@mui/material/Tooltip";
// import {
//   WalletBallenceSlice,
//   Walletballencestate,
//   Walletballencestatus,
// } from "./slice/WalletBallenceSlice";
// import CachedIcon from "@mui/icons-material/Cached";

// let DrawerOpenWidth = 260;

// export default function MobileView() {
//   const [mobileMenu, setMobileMenu] = useState(null);
//   const [walletBallences, setWalletBallencers] = useState("");
//   const [spin, setSpin] = useState(false);
//   const mobileMenunBoolean = Boolean(mobileMenu);
//   const [mobileSidebaropen, setMobileSidebaropen] = useState(false);
//   const wallestate = useSelector(Walletballencestate);
//   const dispatch = useDispatch();

//   const classes = useStyleMainDisplay();
//   const history = useHistory();

//   const username = JSON.parse(localStorage.getItem("username"));
//   const capitaluser = username.toUpperCase();
//   const handleLogout = () => {
//     localStorage.removeItem("userdata");
//     localStorage.removeItem("username");
//     localStorage.removeItem('useremail')
//     history.push("/");
//     window.location.reload();
//   };

//   const handleMobiblenenuClose = () => {
//     setMobileMenu(null);
//   };

//   const handleMobileSidebar = () => {
//     setMobileSidebaropen(!mobileSidebaropen);
//   };

//   const handleuserprofile = () => {
//     history.push("/app/profile");
//   };
//   const handlewallet = () => {
//     if (navigator.onLine == true) {
//       setSpin(true);
//       setTimeout(() => {
//         setSpin(false);
//       }, 1000);
//       dispatch(WalletBallenceSlice());
//     }
//   };

//   useEffect(() => {
//     if (navigator.onLine == true) {
//       dispatch(WalletBallenceSlice());
//     }
//   }, []);
//   useEffect(() => {
//     if (wallestate.status === "loading") {
//     } else if (wallestate.status === "succeeded") {
//       setWalletBallencers(wallestate.responce);
//       dispatch(Walletballencestatus());
//     } else if (wallestate.status === "failed") {
//       console.log(wallestate);
//       dispatch(Walletballencestatus());
//     } else {
//     }

//   });

//   const handleopenmenu = (e) => {
//     setMobileMenu(e.currentTarget)
//           if (navigator.onLine == true) {
//         dispatch(WalletBallenceSlice());
//       }
//   }
//   // console.log('yes',mobileMenunBoolean);


//   return (
//     <>
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppBar position="fixed">
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleMobileSidebar}
//               sx={{
//                 marginRight: 3,
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               className={classes.settypomobile}
//             >
//               Online Order Management
//             </Typography>
//             <Box sx={{ flexGrow: 1 }} />
//             {/* below code for mobile */}
//             <Avatar className={classes.setsercharrow} variant="rounded">
//               <div >
//                 <div className={classes.setlabelbal}>balence</div>
//                 <span
//                   style={{
//                     fontSize: "18px",
//                     fontFamily: " Poppins, sans-serif",
//                   }}
//                 >
//                   {!walletBallences? 0 :walletBallences}
//                 </span>
//               </div>
//               <Tooltip title="Refresh" arrow>
//                 <CachedIcon sx={{ color: "white" }} onClick={handlewallet} spin={spin} className={spin && classes.spin }/>
//               </Tooltip>
//             </Avatar>
//             <Box className={classes.mobilerightmenu}>
//               <IconButton
//                 size="large"
//                 onClick={handleopenmenu}
//                 aria-controls={mobileMenunBoolean ? "Open_Menu" : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={mobileMenunBoolean ? "true" : undefined}
//                 color="inherit"
//               >
//                 <MoreIcon />
//               </IconButton>
//             </Box>
//             {/* end mobile code */}
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <Box
//         component="nav"
//         sx={{ width: { xs: DrawerOpenWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         <Drawer
//           variant="temporary"
//           anchor="left"
//           open={mobileSidebaropen}
//           onClose={handleMobileSidebar}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: DrawerOpenWidth,
//             },
//             "& .MuiPaper-root": { backgroundColor: "#222d32" },
//           }}
//         >
//           <div className={classes.setavatrhandle}>
//             <Avatar
//               src={sstpl}
//               className={classes.setheaderavtar}
//               sx={{ width: "75px" }}
//             />
//           </div>
//           <Typography className={classes.setheadertypomobile}>
//             {capitaluser}
//           </Typography>
//           <Divider variant="middle" style={{ borderColor: "#fff0f045" }} />
//           <Sidebardata />
//         </Drawer>
//       </Box>

//       {/* mobile Menu */}
//       <Menu
//         anchorEl={mobileMenu}
//         id="Open_Menu"
//         open={mobileMenunBoolean}
//         onClose={handleMobiblenenuClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: "hidden",
//             filter: "drop-shadow(0px 5px 8px rgba(0,0,0,0.32))",
//             mt: 1.5,

//             "& .MuiMenu-list": {
//               padding: "5px",
//             },
//             "& .MuiAvatar-root": {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             "&:before": {
//               content: '""',
//               display: "block",
//               position: "absolute",
//               top: 0,
//               right: 16,
//               width: 10,
//               height: 10,
//               bgcolor: "background.paper",
//               transform: "translateY(-50%) rotate(45deg)",
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: "right", vertical: "top" }}
//         anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//       >
//         <MenuItem onClick={handleuserprofile}>
//           <MailOutlineOutlinedIcon className={classes.setmobileicon} />
//           <div className={classes.setbox}>Profile</div>
//         </MenuItem>
//         <MenuItem className={classes.setmobilewallet}>
//             <AccountBalanceWalletOutlinedIcon  className={classes.setmobileicon}/>
//           <div className={classes.setbox}>{!walletBallences ? 0 : walletBallences}</div>
//         </MenuItem>
//         <Divider style={{ marginTop: '0px' , marginBottom:'0px'}}/>
//         <MenuItem onClick={handleLogout} >
//           <ExitToAppIcon className={classes.setmobileicon} />
//           <div className={classes.setbox}>Logout</div>
//         </MenuItem>
//       </Menu>

//       {/* menu end */}
//     </>
//   );
// }
