import { makeStyles } from '@mui/styles';

const useStyleMainDisplay = makeStyles((theme) => ({
  // setdisplay: {
  //   display: "flex",
  //   // [theme.breakpoints.down("sm")]: {
  //   //   display: "block",
  //   // },
  // },
  // "@media (max-width: 992px)": {
  //   ".setdisplay": {
  //     display: "block",
  //   }
  // },
  // setsidebaricon: {
  //   color: "#b8c7ce",
  //   "&:hover": {
  //     color: "white",
  //   },
  // },
  // setmenusetting: {
  //   "&:hover": {
  //     color: "white",
  //   },
  // },
  // setwebdisplay: {

  // },
  // setmobileview: {

  // },
  // customBadgemail: {
  //   backgroundColor: "#00a65a",
  //   color: "white",
  // },
  // custombadgeicon: {
  //   color: "white",
  //   "&:hover": {
  //     color: "rgb(31, 38, 31,0.50)",
  //   },
  // },
  // customBadgenoty: {
  //   backgroundColor: "#f39c12",
  //   color: "white",
  // },
  // seticonbtn: {
  //   padding: "12px !important",

  // },
  // settypo: {
  //   fontSize: "25px !important",
  //   fontFamily: " Poppins, sans-serif !important",
  // },
  // settypomobile: {
  //   fontSize: "20px !important",
  //   fontFamily: " Poppins, sans-serif !important",

  // },
  // customBadgemail: {
  //   backgroundColor: "#00a65a",
  //   color: "white",
  // },
  // customBadgenoty: {
  //   backgroundColor: "#f39c12",
  //   color: "white",
  // },
  // custombadgeicon: {
  //   color: "white",
  //   "&:hover": {
  //     color: "rgb(31, 38, 31,0.50)",
  //   },
  // },
  // custombadgeMobileicon: {
  //   color: "black",
  //   "&:hover": {
  //     color: "rgb(31, 38, 31,0.50)",
  //   },
  // },
  // setnotyfication: {
  //   display: "flex",
  // },
  // mobilerightmenu: {
  //   display: "none",

  // },
  // hideiconformobile: {
  //   display: "flex",

  // },
  // sidebarmobile: {
  //   display: "none",

  // },
  // mobiledrawer: {
  //   display: "none",
  // },
  // listitemeffect: {
  //   "&:hover": {
  //     color: "rgb(31, 38, 31,0.50)",
  //   },
  //   "&:focus": {
  //     backgroundColor: theme.palette.primary.main,
  //   },
  // },
  // setsidebaricon: {
  //   color: "#b8c7ce",
  //   "&:hover": {
  //     color: "white",
  //   },
  // },
  // setdrawerHeader: {
  //   height: "55px",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "flex-start",
  //   padding: theme.spacing(0, 1),
  //   color: "#b8c7ce",
  //   ...theme.mixins.toolbar,
  // },
  // setsidebarheader: {
  //   display: "flex !important",
  //   paddingLeft: "10px !important",
  //   position: "fixed !important",
  //   zIndex: 1,
  //   width: "100% !important",
  // },
  // setheadertypo: {
  //   fontFamily: ["Poppins", "sans-serif", "!important"],
  //   paddingLeft: "16px !important",
  //   fontSize: "22px !important",
  //   color: "white !important",
  // },
  // setheadertypomobile: {
  //   fontFamily: ["Poppins", "sans-serif", "!important"],
  //   fontSize: "22px !important",
  //   color: "#c2c7d0 !important",
  //   display: "flex !important",
  //   justifyContent: "center !important",
  // },
  // setheadertypoweb: {
  //   fontFamily: ["Poppins", "sans-serif", "!important"],
  //   fontSize: "18px !important",
  //   color: "#c2c7d0 !important",
  //   display: "flex !important",
  //   justifyContent: "center !important",
  //   alignItems: "center !important",
  //   marginLeft: "10px !important",
  // },
  // setheaderavtar: {
  //   height: "75px !important",
  //   marginTop: "15px !important",
  //   marginBottom: "15px !important",
  // },
  // setheaderavtarweb: {
  //   marginTop: "5px !important",
  //   marginBottom: "5px !important",
  //   marginLeft: "10px",
  //   backgroundColor: "transparent !important",
  //   border: "1px solid #c2c7d0 !important",
  // },
  // setavatrhandle: {
  //   display: "flex !important",
  //   justifyContent: "center !important",
  // },
  // seticonwithname: {
  //   display: "flex !important",
  //   justifyContent: "flex-start !important",
  //   width: "100%",
  // },

  // setviewforweb: {
  //   display: "flex !important",
  //   justifyContent: "flex-start !important",
  //   height: "50px",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "none !important",
  //   },
  // },
  // setviewforwebdivider: {
  //   [theme.breakpoints.down("sm")]: {
  //     display: "none !important",
  //   },
  // },
  // setsidebaricon: {
  //   color: "#c2c7d0",
  //   "& .MuiTypography-root": {
  //     fontFamily: ["Poppins", "sans-serif", "!important"],
  //   },
  // },
  // selectedindex: {
  //   paddingTop: "65px !important",
  //   [theme.breakpoints.down("sm")]: {
  //     paddingTop: "5px !important",
  //   },
  //   "& .Mui-selected": {
  //     backgroundColor: "rgb(43 123 203 / 45%) !important",
  //     borderRadius: "0 25px 25px 0",
  //     borderLeft: "4px solid #00BFA5",
  //     "&:hover": {
  //       backgroundColor: "rgb(43 123 203 / 45%) !important",
  //     },
  //   },
  // },
  // selectedsubindex: {
  //   "& .Mui-selected": {
  //     backgroundColor: "#ffffff1a !important",
  //     borderRadius: "0 25px 25px 0",
  //     borderLeft: "4px solid #fff",
  //     "&:hover": {
  //       backgroundColor: "#ffffff1a !important",
  //     },
  //   },
  // },
  // effectlist: {
  //   "&:hover": {
  //     backgroundColor: "rgba(255,255,255,.1) !important",
  //     borderRadius: "0 25px 25px 0",
  //   },
  // },
  // setbox: {
  //   marginLeft: "10px",
  //   fontSize: "18px",
  //   fontFamily: " Poppins, sans-serif !important",
  //   [theme.breakpoints.down("xs")]: {
  //     marginLeft: "7px !important",
  //     fontSize: "15px !important",
  //     fontFamily: " Poppins, sans-serif !important",
  //   },
  // },
  // setmobileicon:{
  //   fontSize:"25px !important"
  // },
  // setboxwallet:{
  //   display:'flex',
  //   alignItems:'center'
  // },
  // setwallet:{
  //   display:'flex ',
  //   alignItems: 'center',

  // },
  // setsercharrow: {
  //   justifyContent: 'space-around !important',
  //   display:"flex",
  //   border: "1px solid white",
  //   backgroundColor: "transparent !important",
  //   width:'150px !important',
  //   // [theme.breakpoints.down("xs")]: {
  //   //   display:'none !important'
  //   // },
  // },
  // setlabelbal:{
  //   fontSize:'12px',
  //   fontFamily: " Poppins, sans-serif !important",
  // },
  // setmobilewallet:{
  //   display:'none !important',
  //   // [theme.breakpoints.down("xs")]: {
  //   //   display:'flex !important'
  //   // },
  // },
  // // refresh: {
  // //   margin: "auto",
  // // },
  // spin: {
  //   animation: "$spin 1s 1",
  // },
  // "@keyframes spin": {
  //   "0%": {
  //     transform: "rotate(0deg)",
  //   },
  //   "100%": {
  //     transform: "rotate(360deg)",
  //   },
  // }
}));

export default useStyleMainDisplay;
