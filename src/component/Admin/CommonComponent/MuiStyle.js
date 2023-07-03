import { makeStyles ,useTheme } from "@mui/styles";

const useMuiStyle = makeStyles((theme) => ({
  setcontainer: {
    maxWidth: "100% !important",
    minHeight: "100vh",
    position: "relative",
    overflow: 'hidden',
    zIndex: 1,
    backgroundColor: "#f9fafc",
    paddingTop: "80px",
    paddingBottom: '30px !important'

  },
  setloginbutton: {
    // marginTop: "20px !important",
    backgroundColor: "#367fa9 !important",
  },
  setloginbackpaper: {
    textAlign: "left",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
    maxWidth: "1250px",
    borderRadius: "10px",
    marginTop: "50px",
  },
  setheading: {
    padding: "5px",
    margin: "0 !important",
    color: "#202223",
    fontWeight: "600 !important",
    fontSize: "35px !important",
    lineHeight: "32px",
    fontFamily: ["Poppins", "sans-serif", "!important"],
  },
  setpageheading: {
    maxWidth: "100% !important",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9fafc",
  },
  setproductbtn: {
    fontWeight: 600,
    textTransform: "none",
    padding: "0px 15px",
    height:'40px',
    marginTop: '6px',
    backgroundColor: "#3c8dbc",
    color: "white",
    "&:hover": { backgroundColor: "#3c8dbc !important" },
  },
  setProductpaper: {
    textAlign: "left",
    backgroundColor: theme.palette.background.paper,
    padding: '10px',
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
    maxWidth: "100%",
    borderRadius: "10px",
    marginTop: "30px",
  },
  // setinputlayout: {
  //   display: "grid",
  // },
  setlabel: {
    fontFamily: ["Poppins", "sans-serif", "!important"],
    fontSize: "15px !important",
    lineHeight: "21px !important",
    marginTop: "7px !important",
    marginRight: "10px !important",
    marginBottom: "2px !important",
    fontWeight: '600 !important',
  },
  textField: {
    margin: "0 !important",
    "&:hover": { boxShadow: `${theme.shadows[3]}`, border: 0 },
    '& .MuiInputBase-root':{
      fontFamily: ["Poppins", "sans-serif", "!important"],
    },
  },
  settextfield: {
    '& .MuiInputBase-root':{
      fontFamily: ["Poppins", "sans-serif", "!important"],
    },
    "&:hover": { boxShadow: `${theme.shadows[3]}`, border: 0 },
    '& .MuiTextField-root':{
      width:"100% !important"
    }
  },

  setsendbutton: {
    display: "flex",
    justifyContent: "end",
    marginTop: '7px'

  },
  setsendbtninside: {
    height: "40px",
    fontWeight: "600 !important",
    textTransform: "none",
    padding: "0px 15px",
    backgroundColor: "#3c8dbc !important",
    color: "white",
    "&:hover": { backgroundColor: "#3c8dbccc  !important" },
  },
  tableth:{
    padding:'8px !important',
    fontWeight: '600 !important',
    color:'#353535 !important',
    fontFamily:["Poppins", "sans-serif", "!important"],
  },
  tablethaction:{
    // width: '75px',
    padding:'8px !important',
    fontWeight: '600 !important',
    color:'#353535 !important',
    fontFamily:["Poppins", "sans-serif", "!important"],
  },
  tabletd:{
    fontFamily:["Poppins", "sans-serif", "!important"],
    padding:'8px !important',
    color:'#202223 !important',
    fontSize: '16px !important'
  },
  seteditincon:{
    color:'#353535e0',
    "&:hover": { color: "#3c8dbc !important" , backgroundColor: "#d6efef6e"},
  },
  setdeleteincon:{
    color:'#353535e0',
    // marginRight:'-15px',
    "&:hover": { color: "#7f2121 !important" , backgroundColor: "antiquewhite"},
  },
  setmodeldisplay: {
    position: "absolute",
    height: "150px",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white !important",
    boxShadow: `${theme.shadows[8]}`,
    borderRadius: "9px !important",
    padding: 10,
  },
  setmodeldisplayerr: {
    position: "absolute",
    height: "90px",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white !important",
    boxShadow: `${theme.shadows[8]}`,
    borderRadius: "9px !important",
    padding: 10,
  },
  deletebtn: {
    fontWeight: 600,
    height: '35px',
    textTransform: "none",
    padding: "0px 15px",
    backgroundColor: "#931d1d",
    color: "white",
    "&:hover": { backgroundColor: "#931d1d !important" },
  },
  canclebtn:{
    fontWeight: '600 !important',
    height: '35px',
    textTransform: "none",
    padding: "0px 15px",
    backgroundColor: "#3c8dbc",
    marginRight:'5px',
    color: "white",
    "&:hover": { backgroundColor: "#3c8dbc !important" },
  },
  setbtndeldiv: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: "5px",
  },
  seterrorlabel: {
    fontFamily: ["Poppins", "sans-serif", "!important"],
    fontSize: "15px !important",
    lineHeight: "21px !important",
    marginTop: "7px !important",
    marginRight: "10px",
    color: "#7f2121",
    marginBottom: "20px !important",
    fontWeight: "600 !important",
  },
  setstateclear:{
    height: "40px",
    fontWeight: "600 !important",
    textTransform: "none",
    padding: "0px 15px",
    backgroundColor: "#367fa9 !important",
    color: "white !important",
    marginRight:'15px !important',
    // "&:hover": { backgroundColor: "#3c8dbccc  !important" },
  },
  seticondiv:{
    display:'flex',
    justifyContent:'center'
  },
  tabletdicon:{
    fontFamily:["Poppins", "sans-serif", "!important"],
    justifyContent: 'center',
    padding:'8px !important',
    color:'#202223 !important'
  },

  setcarddiv: {
    display: "flex",
  },
  setImage: {
    height: "180px",
    width: "100%",
    boxShadow: `${theme.shadows[5]}`,
  },
  setGridcard: {
    columnSpacing: '3 !important',
    [theme.breakpoints.down("xs")]: {
      columnSpacing: "1 !important",
    },
  },
  setonegried: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1),
    },
  },
  settypo: {
    fontFamily: ["Poppins", "sans-serif", "!important"],
    fontWeight: "500 !important",
    fontSize: "15px !important",
    marginLeft: "10px !important",
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: "16px !important",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "16px !important",
    // },
    // [theme.breakpoints.down("md")]: {
    //   fontSize: "16px !important",
    // },
  },
  settypohead: {
    fontFamily: ["Poppins", "sans-serif", "!important"],
    fontWeight: "600 !important",
    fontSize: "18px !important",
    // margin: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px !important",
    },
  },
  // setlistdiv: {
  //   display: "flex !important",
  //   justifyContent: "flex-start !important",
  //   alignItems: "center",
  // },
  setbtn: {
    justifyContent: "left",
    padding: "8px 0px !important",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-around !important",
    },
  },
  // setdelbtn: {
  //   width: "100%",
  //   fontWeight: 800,
  //   "&:hover": { color: "#7f2121 !important", backgroundColor: "antiquewhite" },
  // },
  seteditbtn: {
    width: "20%",
    fontWeight: 800,
    "&:hover": { color: "#3c8dbc !important", backgroundColor: "#d6efef" },
  },

  // addproductheader: {
  //   display: "flex",
  //   justifyContent: "left",
  // },
  // setaddproheaderarrow: {
  //   border: "1px solid #202223",
  //   backgroundColor: "transparent !important",
  //   marginTop: "6px !important",
  //   marginRight: "20px",
  //   marginLeft: "4px",
  // },
  // setsercharrow: {
  //   border: "1px solid #202223",
  //   backgroundColor: "transparent !important",
  //   [theme.breakpoints.down("xs")]: {
  //     display :'none !important'
  //    },
  // },
  // setremmoveicon: {
  //   backgroundColor: "transparent !important",
  //   "&:hover": { backgroundColor: "antiquewhite  !important" },
  //   marginTop:"7px !important",
  //   height:"25px !important",
  //   width:"25px !important"
  // },

  // setinputlayout: {
  //   display: "grid",
  // },
  // settopgrid: {
  //   display: "flex",
  // },

  // setdisimage: {
  //   objectFit: "cover !important",
  //   height: "180px",
  // },
  // setImageleftlabel: {
  //   fontFamily: ["Poppins", "sans-serif", "!important"],
  //   fontSize: "15px",
  //   lineHeight: "21px",
  //   fontWeight: "600 !important",
  //   marginBottom: "2px",
  // },
  // setImggrid: {
  //   [theme.breakpoints.down("xs")]: {
  //     padding: "8px",
  //   },
  // },
  // setmodeltypo: {
  //   fontFamily: ["Poppins", "sans-serif", "!important"],
  // },

  setbtndisplay: {
    display: "flex",
    width: "100%",
  },
  // setcardeff: {
  //   "&:hover": { boxShadow: `${theme.shadows[10]}` },
  // },
  // setpagination: {
  //   display: "none",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "flex",
  //     justifyContent: "end !important",
  //   },
  // },
  // setsearch:{
  //   height:"40px !important",
  //   width:'250px',
  //   backgroundColor:"#fff",
  //   borderRadius:'30px !important',
  //   [theme.breakpoints.down("xs")]: {
  //     display :'none !important'
  //    },
  // },
  // setinsideheaddive:{
  //   display:'flex',
  //   justifyContent:'flex-end',
  // },

}))

export default useMuiStyle;
