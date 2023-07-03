// import React, {useState, useEffect} from "react";
// import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import useMuiStyle from "../../CommonComponent/MuiStyle";
// import TextField from "@mui/material/TextField";
// import axios from "../../../common/Axios";
// import {useHistory} from "react-router-dom";

// const AboutAdd = () => {
//   const [abouthead, setAbouthead] = useState("");
//   const [aboutcontent, setAboutcontent] = useState("");
//   const [visionheading, setVisionheading] = useState("");
//   const [visioncontent, setVisioncontent] = useState("");
//   const [missionheading, setMissionheading] = useState("");
//   const [missioncontent, setMissioncontent] = useState("");
//   const [valheading, setValheading] = useState("");
//   const [responsibilitys1, setResponsibilitys1] = useState("");
//   const [responsibilitys2, setResponsibilitys2] = useState("");
//   const [responsibilitys3, setResponsibilitys3] = useState("");
//   const [responsibilitys4, setResponsibilitys4] = useState("");
//   const [responsibilitys5, setResponsibilitys5] = useState("");
//   const [responsibilitys6, setResponsibilitys6] = useState("");
//   const [responsibilitys7, setResponsibilitys7] = useState("");
//   const [responsibilitys8, setResponsibilitys8] = useState("");
//   const [responsibilitys9, setResponsibilitys9] = useState("");
//   const [responsibilitys10, setResponsibilitys10] = useState("");
//   const [responsibilitys11, setResponsibilitys11] = useState("");
//   const [responsibilitys12, setResponsibilitys12] = useState("");
//   const [subvalheading1, setSubvalheading1] = useState("");
//   const [subvalheading2, setSubvalheading2] = useState("");
//   const [subvalheading3, setSubvalheading3] = useState("");
//   const [subvalheading4, setSubvalheading4] = useState("");
//   const [subvalheading5, setSubvalheading5] = useState("");
//   const [subvalheading6, setSubvalheading6] = useState("");
//   const [subvalheading7, setSubvalheading7] = useState("");
//   const [subvalheading8, setSubvalheading8] = useState("");
//   const [subvalheading9, setSubvalheading9] = useState("");
//   const [subvalheading10, setSubvalheading10] = useState("");
//   const [subvalheading11, setSubvalheading11] = useState("");
//   const [subvalheading12, setSubvalheading12] = useState("");
//   const [error, setError] = useState([]);
//   const [dbAdderr, setDbAdderr] = useState("");
//   const classes = useMuiStyle();
//   const history = useHistory();
//   var token = localStorage.getItem("ssAdmin");

//   const handlesenddata = (e) => {
//     const combinedArray = [];
//     var value1 = {
//       head: subvalheading1,
//       value: responsibilitys1,
//     };
//     var value2 = {
//       head: subvalheading2,
//       value: responsibilitys2,
//     };
//     var value3 = {
//       head: subvalheading3,
//       value: responsibilitys3,
//     };
//     var value4 = {
//       head: subvalheading4,
//       value: responsibilitys4,
//     };
//     var value5 = {
//       head: subvalheading5,
//       value: responsibilitys5,
//     };
//     var value6 = {
//       head: subvalheading6,
//       value: responsibilitys6,
//     };
//     var value7 = {
//       head: subvalheading7,
//       value: responsibilitys7,
//     };
//     var value8 = {
//       head: subvalheading8,
//       value: responsibilitys8,
//     };
//     var value9 = {
//       head: subvalheading9,
//       value: responsibilitys9,
//     };
//     var value10 = {
//       head: subvalheading10,
//       value: responsibilitys10,
//     };
//     var value11 = {
//       head: subvalheading11,
//       value: responsibilitys11,
//     };
//     var value12 = {
//       head: subvalheading12,
//       value: responsibilitys12,
//     };
//     combinedArray.push(value1);
//     combinedArray.push(value2);
//     combinedArray.push(value3);
//     combinedArray.push(value4);
//     combinedArray.push(value5);
//     combinedArray.push(value6);
//     combinedArray.push(value7);
//     combinedArray.push(value8);
//     combinedArray.push(value9);
//     combinedArray.push(value10);
//     combinedArray.push(value11);
//     combinedArray.push(value12);
//     var jsonRepresentation = JSON.stringify(combinedArray);
//     console.log(jsonRepresentation);
//     let formData = new FormData();
//     formData.append("abouthead", abouthead);
//     formData.append("aboutcontent", aboutcontent);
//     formData.append("visionheading", visionheading);
//     formData.append("visioncontent", visioncontent);
//     formData.append("missionheading", missionheading);
//     formData.append("missioncontent", missioncontent);
//     formData.append("valheading", valheading);
//     formData.append("valuecontent", jsonRepresentation);
//     if (!abouthead || !aboutcontent || !visionheading || !visioncontent || !missionheading || !missioncontent || !valheading) {
//       if (!abouthead) {
//         error.abheading = "Require !";
//       }
//       if (!aboutcontent) {
//         error.abcontent = "Require !";
//       }
//       if (!visionheading) {
//         error.viheading = "Require !";
//       }
//       if (!visioncontent) {
//         error.vicontent = "Require !";
//       }
//       if (!missionheading) {
//         error.miheading = "Require !";
//       }
//       if (!missioncontent) {
//         error.micontent = "Require !";
//       }
//       if (!valheading) {
//         error.containView = "Require !";
//       }

//       setError({...error, [e.target.name]: e.target.value});
//       setTimeout(() => {
//         setError([]);
//       }, 3000);
//     } else {
//       axios
//         .post("about/about_add", formData, {
//           headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//             Authorization: token,
//           },
//         })
//         .then((result) => {
//           setAbouthead("");
//           setAboutcontent("");
//           setVisionheading("");
//           setVisioncontent("");
//           setMissionheading("");
//           setMissioncontent("");
//           setValheading("");
//           setResponsibilitys1("");
//           setResponsibilitys2("");
//           setResponsibilitys3("");
//           setResponsibilitys4("");
//           setResponsibilitys5("");
//           setResponsibilitys6("");
//           setResponsibilitys7("");
//           setResponsibilitys8("");
//           setResponsibilitys9("");
//           setResponsibilitys10("");
//           setResponsibilitys11("");
//           setResponsibilitys12("");
//           setSubvalheading1("");
//           setSubvalheading2("");
//           setSubvalheading3("");
//           setSubvalheading4("");
//           setSubvalheading5("");
//           setSubvalheading6("");
//           setSubvalheading7("");
//           setSubvalheading8("");
//           setSubvalheading9("");
//           setSubvalheading10("");
//           setSubvalheading11("");
//           setSubvalheading12("");
//           jsonRepresentation = "";
//           history.push("/admin/dashboard/about");
//         })
//         .catch((err) => {
//           console.log(err);
//           setDbAdderr(err.response.data.error);
//         });
//     }
//   };
//   return (
//     <>
//       <Container component="main" maxWidth="xl" className={classes.setcontainer}>
//         <div className={classes.setpageheading}>
//           <Typography variant="h4" gutterBottom className={classes.setheading}>
//             Add About Details
//           </Typography>
//         </div>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={4} className={classes.setinputlayout}>
//             <Paper className={classes.setProductpaper} elevation={5}>
//               {dbAdderr && <Typography className={classes.seterrorlabel}>{dbAdderr} </Typography>}
//               <Typography className={classes.setlabel}>about main heading :</Typography>
//               <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="heading" InputLabelProps={{shrink: false}} value={abouthead} onChange={(e) => setAbouthead(e.target.value)} />
//               {error.abheading && <Typography className={classes.seterrorlabel}>{error.abheading} </Typography>}
//               <Typography className={classes.setlabel}>about main content :</Typography>
//               <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="content" InputLabelProps={{shrink: false}} value={aboutcontent} onChange={(e) => setAboutcontent(e.target.value)} />
//               {error.abcontent && <Typography className={classes.seterrorlabel}>{error.abcontent} </Typography>}
//               <Typography className={classes.setlabel}>vision heading :</Typography>
//               <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="heading" InputLabelProps={{shrink: false}} value={visionheading} onChange={(e) => setVisionheading(e.target.value)} />
//               {error.viheading && <Typography className={classes.seterrorlabel}>{error.viheading} </Typography>}
//               <Typography className={classes.setlabel}>vision content :</Typography>
//               <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="content" InputLabelProps={{shrink: false}} value={visioncontent} onChange={(e) => setVisioncontent(e.target.value)} />
//               {error.vicontent && <Typography className={classes.seterrorlabel}>{error.vicontent} </Typography>}
//               <Typography className={classes.setlabel}>mission heading :</Typography>
//               <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="heading" InputLabelProps={{shrink: false}} value={missionheading} onChange={(e) => setMissionheading(e.target.value)} />
//               {error.miheading && <Typography className={classes.seterrorlabel}>{error.miheading} </Typography>}
//               <Typography className={classes.setlabel}>mission content :</Typography>
//               <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="content" InputLabelProps={{shrink: false}} value={missioncontent} onChange={(e) => setMissioncontent(e.target.value)} />
//               {error.micontent && <Typography className={classes.seterrorlabel}>{error.micontent} </Typography>}
//               <Typography className={classes.setlabel}>Value Heading :</Typography>
//               <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="content" InputLabelProps={{shrink: false}} value={valheading} onChange={(e) => setValheading(e.target.value)} />
//               {error.valheading && <Typography className={classes.seterrorlabel}>{error.valheading} </Typography>}
//               <div className={classes.setsendbutton}>
//                 <Button variant="contained" size="medium" className={classes.setsendbtninside} onClick={handlesenddata}>
//                   Add
//                 </Button>
//               </div>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={8} className={classes.setinputlayout}>
//             <Paper className={classes.setProductpaper} elevation={5}>
//             <Typography className={classes.setlabel}>values heading  :</Typography>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6} className={classes.setinputlayout}>
//                   <TextField id="outlined-basic" size="small" variant="outlined" style={{width: '100%'}} className={classes.settextfield} placeholder="heading1" InputLabelProps={{shrink: false}} value={subvalheading1} onChange={(e) => setSubvalheading1(e.target.value)} />
//                 </Grid>
//                 <Grid item xs={12} sm={6} className={classes.setinputlayout}>
//                   <TextField id="outlined-basic" size="small" variant="outlined" style={{width: '100%'}} className={classes.settextfield} placeholder="heading2" InputLabelProps={{shrink: false}} value={subvalheading2} onChange={(e) => setSubvalheading2(e.target.value)} />
//                 </Grid>
//                 <Grid item xs={12} sm={6} className={classes.setinputlayout}>
//                   <TextField id="outlined-basic" size="small" variant="outlined" style={{width: '100%'}} className={classes.settextfield} placeholder="heading3" InputLabelProps={{shrink: false}} value={subvalheading3} onChange={(e) => setSubvalheading3(e.target.value)} />
//                 </Grid>
//                 <Grid item xs={12} sm={6} className={classes.setinputlayout}>
//                   <TextField id="outlined-basic" size="small" variant="outlined" style={{width: '100%'}} className={classes.settextfield} placeholder="heading4" InputLabelProps={{shrink: false}} value={subvalheading4} onChange={(e) => setSubvalheading4(e.target.value)} />
//                 </Grid>
//                 <Grid item xs={12} sm={6} className={classes.setinputlayout}>
//                   <TextField id="outlined-basic" size="small" variant="outlined" style={{width: '100%'}} className={classes.settextfield} placeholder="heading5" InputLabelProps={{shrink: false}} value={subvalheading5} onChange={(e) => setSubvalheading5(e.target.value)} />
//                 </Grid>
//                 <Grid item xs={12} sm={6} className={classes.setinputlayout}>
//                   <TextField id="outlined-basic" size="small" variant="outlined" style={{width: '100%'}} className={classes.settextfield} placeholder="heading6" InputLabelProps={{shrink: false}} value={subvalheading6} onChange={(e) => setSubvalheading6(e.target.value)} />
//                 </Grid>
//                 <Grid item xs={12} sm={6} className={classes.setinputlayout}>
//                   <TextField id="outlined-basic" size="small" variant="outlined" style={{width: '100%'}} className={classes.settextfield} placeholder="heading7" InputLabelProps={{shrink: false}} value={subvalheading7} onChange={(e) => setSubvalheading7(e.target.value)} />
//                 </Grid>
//                 <Grid item xs={12} sm={6} className={classes.setinputlayout}>
//                   <TextField id="outlined-basic" size="small" variant="outlined" style={{width: '100%'}} className={classes.settextfield} placeholder="heading8" InputLabelProps={{shrink: false}} value={subvalheading8} onChange={(e) => setSubvalheading8(e.target.value)} />
//                 </Grid>
//                 <Grid item xs={12} sm={6} className={classes.setinputlayout}>
//                   <TextField id="outlined-basic" size="small" variant="outlined" style={{width: '100%'}} className={classes.settextfield} placeholder="heading9" InputLabelProps={{shrink: false}} value={subvalheading9} onChange={(e) => setSubvalheading9(e.target.value)} />
//                 </Grid>
//                 <Grid item xs={12} sm={6} className={classes.setinputlayout}>
//                   <TextField id="outlined-basic" size="small" variant="outlined" style={{width: '100%'}} className={classes.settextfield} placeholder="heading10" InputLabelProps={{shrink: false}} value={subvalheading10} onChange={(e) => setSubvalheading10(e.target.value)} />
//                 </Grid>
//                 <Grid item xs={12} sm={6} className={classes.setinputlayout}>
//                   <TextField id="outlined-basic" size="small" variant="outlined" style={{width: '100%'}} className={classes.settextfield} placeholder="heading11" InputLabelProps={{shrink: false}} value={subvalheading11} onChange={(e) => setSubvalheading11(e.target.value)} />
//                 </Grid>
//                 <Grid item xs={12} sm={6} className={classes.setinputlayout}>
//                   <TextField id="outlined-basic" size="small" variant="outlined" style={{width: '100%'}} className={classes.settextfield} placeholder="heading12" InputLabelProps={{shrink: false}} value={subvalheading12} onChange={(e) => setSubvalheading12(e.target.value)} />
//                 </Grid>
//               </Grid>
//               <Typography className={classes.setlabel}>values content  :</Typography>
//               <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="content" InputLabelProps={{shrink: false}} value={responsibilitys1} onChange={(e) => setResponsibilitys1(e.target.value)} />
//               <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="content" InputLabelProps={{shrink: false}} value={responsibilitys2} onChange={(e) => setResponsibilitys2(e.target.value)} />
//               <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="content" InputLabelProps={{shrink: false}} value={responsibilitys3} onChange={(e) => setResponsibilitys3(e.target.value)} />
//               <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="content" InputLabelProps={{shrink: false}} value={responsibilitys4} onChange={(e) => setResponsibilitys4(e.target.value)} />
//               <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="content" InputLabelProps={{shrink: false}} value={responsibilitys5} onChange={(e) => setResponsibilitys5(e.target.value)} />
//               <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="content" InputLabelProps={{shrink: false}} value={responsibilitys6} onChange={(e) => setResponsibilitys6(e.target.value)} />
//               <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="content" InputLabelProps={{shrink: false}} value={responsibilitys7} onChange={(e) => setResponsibilitys7(e.target.value)} />
//               <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="content" InputLabelProps={{shrink: false}} value={responsibilitys8} onChange={(e) => setResponsibilitys8(e.target.value)} />
//               <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="content" InputLabelProps={{shrink: false}} value={responsibilitys9} onChange={(e) => setResponsibilitys9(e.target.value)} />
//               <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="content" InputLabelProps={{shrink: false}} value={responsibilitys10} onChange={(e) => setResponsibilitys10(e.target.value)} />
//               <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="content" InputLabelProps={{shrink: false}} value={responsibilitys11} onChange={(e) => setResponsibilitys11(e.target.value)} />
//               <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="content" InputLabelProps={{shrink: false}} value={responsibilitys12} onChange={(e) => setResponsibilitys12(e.target.value)} />
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default AboutAdd;
