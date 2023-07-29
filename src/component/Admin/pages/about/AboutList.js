import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMuiStyle from "../../CommonComponent/MuiStyle";
import TextField from "@mui/material/TextField";
import axios from "../../../common/Axios";
import JoditEditor from "jodit-react";
import {useHistory} from "react-router-dom";
import logo from "../../../../assets/images/logo-removebg-preview.webp";
import { api } from "../../../common/Axios";
const AboutList = () => {
  const [abouthead, setAbouthead] = useState("");
  const [aboutcontent, setAboutcontent] = useState("");
  const [visionheading, setVisionheading] = useState("");
  const [visioncontent, setVisioncontent] = useState("");
  const [missionheading, setMissionheading] = useState("");
  const [missioncontent, setMissioncontent] = useState("");
  const [valheading, setValheading] = useState("");
  const [valuecontent, setvaluecontent] = useState("");
  const [doneResponce, setDpneResponce] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState([]);
  const [adddata, setAdddata] = useState(false);
  const [loading, setLoading] = useState(true);

  // const [deleterr, setDeleterr] = useState([]);
  // const [about, setAbout] = useState("");
  // const [vision, setVision] = useState("");
  // const [mission, setMission] = useState("");
  // const [aboutList, setAboutList] = useState([]);
  // const [id, setId] = useState("");
  const [dberr, setDberr] = useState([]);
  // const [content, setContent] = useState("");
  const [dbAdderr, setDbAdderr] = useState("");
  // const [cardView, setCardView] = useState(false);
  const classes = useMuiStyle();
  const history = useHistory();
  //firstfetchdata
  const fetchHiredata = () => {
    api
      .get("about/about_list", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((result) => {
        if (result.data.result.length === 0) {
          setAdddata(true);
        } else {
          setId(result.data.result[0]._id);
          setAbouthead(result.data.result[0].about);
          setAboutcontent(result.data.result[0].aboutcontent);
          setVisionheading(result.data.result[0].ourevision);
          setVisioncontent(result.data.result[0].visionconten);
          setMissionheading(result.data.result[0].ouremission);
          setMissioncontent(result.data.result[0].missionconten);
          setValheading(result.data.result[0].ourecorevalue);
          setvaluecontent(result.data.result[0].corevalueconten);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 402) {
          localStorage.removeItem("ssAdmin");
          history.push("/online-admin");
        }
        setDberr(err.response.data.error);
        setTimeout(() => {
          setDberr("");
        }, 3000);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);
  var token = localStorage.getItem("ssAdmin");

  const contentabout = (data) => {
    setAboutcontent(data);
  };
  const contentvision = (data) => {
    setVisioncontent(data);
  };
  const contentmission = (data) => {
    setMissioncontent(data);
  };
  const contentvalue = (data) => {
    setvaluecontent(data);
  };

  const handleeditdata = (e) => {
    if (adddata) {
      let emptydata = valuecontent;
      let formData = new FormData();
      formData.append("abouthead", abouthead);
      formData.append("aboutcontent", aboutcontent);
      formData.append("visionheading", visionheading);
      formData.append("visioncontent", visioncontent);
      formData.append("missionheading", missionheading);
      formData.append("missioncontent", missioncontent);
      formData.append("valheading", valheading);
      formData.append("valuecontent", emptydata);
      
      if (!abouthead || !aboutcontent || !visionheading || !visioncontent || !missionheading || !missioncontent || !valheading) {
        if (!abouthead) {
          error.abheading = "Require !";
        }
        if (!aboutcontent) {
          error.abcontent = "Require !";
        }
        if (!visionheading) {
          error.viheading = "Require !";
        }
        if (!visioncontent) {
          error.vicontent = "Require !";
        }
        if (!missionheading) {
          error.miheading = "Require !";
        }
        if (!missioncontent) {
          error.micontent = "Require !";
        }
        if (!valheading) {
          error.containView = "Require !";
        }
        
        setError({...error, [e.target.name]: e.target.value});
        setTimeout(() => {
          setError([]);
        }, 3000);
      } else {
        setLoading(true);
        api
        .post(`about/about_add`, formData, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: token,
            },
          })
          .then((result) => {
            setAdddata(false);
            setDpneResponce("Add Successfull");
            fetchHiredata();
            setLoading(false);
            setTimeout(() => {
              setDpneResponce("");
            }, 3000);
          })
          .catch((err) => {
            setLoading(false);
            setDbAdderr(err.response.data.error);
          });
      }
    } else {
      
      let emptydata = valuecontent;
      let formData = new FormData();
      formData.append("abouthead", abouthead);
      formData.append("aboutcontent", aboutcontent);
      formData.append("visionheading", visionheading);
      formData.append("visioncontent", visioncontent);
      formData.append("missionheading", missionheading);
      formData.append("missioncontent", missioncontent);
      formData.append("valheading", valheading);
      formData.append("valuecontent", emptydata);
      
      if (!abouthead || !aboutcontent || !visionheading || !visioncontent || !missionheading || !missioncontent || !valheading) {
        if (!abouthead) {
          error.abheading = "Require !";
        }
        if (!aboutcontent) {
          error.abcontent = "Require !";
        }
        if (!visionheading) {
          error.viheading = "Require !";
        }
        if (!visioncontent) {
          error.vicontent = "Require !";
        }
        if (!missionheading) {
          error.miheading = "Require !";
        }
        if (!missioncontent) {
          error.micontent = "Require !";
        }
        if (!valheading) {
          error.containView = "Require !";
        }

        setError({...error, [e.target.name]: e.target.value});
        setTimeout(() => {
          setError([]);
        }, 3000);
      } else {
        setLoading(true);
        api
          .put(`about/about_update/${id}`, formData, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: token,
            },
          })
          .then((result) => {
            setDpneResponce("Update Successfull");
            fetchHiredata();
            setLoading(false);
            setTimeout(() => {
              setDpneResponce("");
            }, 3000);
          })
          .catch((err) => {
            setLoading(false);
            setDbAdderr(err.response.data.error);
          });
      }
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xl" className={classes.setcontainer}>
        {loading.toString() === "true" && (
          <div className="onloadpage" id="page-load">
            <div className="loader-div d-flex justify-content-center ">
              <div className="on-img">
                <img src={logo} alt="loader" style={{width: "100px"}} />
                <div className="loader">Loading ...</div>
              </div>
            </div>
          </div>
        )}
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
          <div className={classes.setpageheading}>
            <Typography variant="h4" gutterBottom className={classes.setheading}>
              About List
            </Typography>
          </div>
          <Paper className={classes.setProductpaper} elevation={5}>
            {doneResponce && <Typography className={classes.seterrorlabel}>{doneResponce} </Typography>}

            {dberr && <Typography className={classes.seterrorlabel}>{dberr} </Typography>}
            {dbAdderr && <Typography className={classes.seterrorlabel}>{dbAdderr} </Typography>}
            {/* <Grid container className={classes.setGridcard}>
              {aboutList.map((e) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4} className={classes.setonegried}>
                    <Card style={{position: "relative", width: "100%"}} className={classes.setcardeff}>
                      <CardContent sx={{padding: "5px 10px"}}>
                        <div className={classes.setlistdiv}>
                          <Typography gutterBottom variant="h5" component="div" className={classes.settypohead}>
                            title :<span className={classes.settypo}>{e.about}</span>
                          </Typography>
                        </div>
                        <Typography gutterBottom variant="h6" component="div" className={classes.settypohead}>
                          vision:
                          <span className={classes.settypo}>{e.ourevision}</span>
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" className={classes.settypohead}>
                          mission:
                          <span className={classes.settypo}>{e.ouremission}</span>
                        </Typography>
                      </CardContent>
                      <Divider />
                      <CardActions className={classes.setbtn} sx={{justifyContent: "left"}}>
                        <Grid className={classes.setbtndisplay}>
                          <Grid item xs={12}>
                            <Button className={classes.seteditbtn} onClick={() => handleeditdata(e._id)}>
                              Edit
                            </Button>
                          </Grid>
                          <Divider orientation="vertical" flexItem />

                          <Grid item xs={12}>
                            <Button className={classes.setdelbtn} onClick={() => handledelete(e._id)}>
                              Delete
                            </Button>
                          </Grid>
                        </Grid>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid> */}

            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} className={classes.setinputlayout}>
                <Typography className={classes.setlabel}>about main heading :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "100%"}} className={classes.settextfield} placeholder="heading" InputLabelProps={{shrink: false}} value={abouthead} onChange={(e) => setAbouthead(e.target.value)} />
                {error.abheading && <Typography className={classes.seterrorlabel}>{error.abheading} </Typography>}
              </Grid>
              <Grid item xs={12} sm={9} className={classes.setinputlayout}>
                <div style={{maxHeight: "300px", overflow: "overlay"}}>
                  <JoditEditor value={aboutcontent} onChange={(newContent) => contentabout(newContent)} />
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.setProductpaper} elevation={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} className={classes.setinputlayout}>
                <Typography className={classes.setlabel}>vision heading :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "100%"}} className={classes.settextfield} placeholder="heading" InputLabelProps={{shrink: false}} value={visionheading} onChange={(e) => setVisionheading(e.target.value)} />
                {error.viheading && <Typography className={classes.seterrorlabel}>{error.viheading} </Typography>}
              </Grid>
              <Grid item xs={12} sm={9} className={classes.setinputlayout}>
                <div style={{maxHeight: "300px", overflow: "overlay"}}>
                  <JoditEditor value={visioncontent} onChange={(newContent) => contentvision(newContent)} />
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.setProductpaper} elevation={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} className={classes.setinputlayout}>
                <Typography className={classes.setlabel}>mission heading :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "100%"}} className={classes.settextfield} placeholder="heading" InputLabelProps={{shrink: false}} value={missionheading} onChange={(e) => setMissionheading(e.target.value)} />
                {error.miheading && <Typography className={classes.seterrorlabel}>{error.miheading} </Typography>}
              </Grid>
              <Grid item xs={12} sm={9} className={classes.setinputlayout}>
                <div style={{maxHeight: "300px", overflow: "overlay"}}>
                  <JoditEditor value={missioncontent} onChange={(newContent) => contentmission(newContent)} />
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.setProductpaper} elevation={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} className={classes.setinputlayout}>
                <Typography className={classes.setlabel}>value heading :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "100%"}} className={classes.settextfield} placeholder="heading" InputLabelProps={{shrink: false}} value={valheading} onChange={(e) => setValheading(e.target.value)} />
                {error.miheading && <Typography className={classes.seterrorlabel}>{error.miheading} </Typography>}
              </Grid>
              <Grid item xs={12} sm={9} className={classes.setinputlayout}>
                <div style={{maxHeight: "300px", overflow: "overlay"}}>
                  <JoditEditor value={valuecontent} onChange={(newContent) => contentvalue(newContent)} />
                </div>
              </Grid>
            </Grid>
          </Paper>

          <div className="d-flex justify-content-end mt-3">
            <Button variant="contained" size="medium" className={classes.setsendbtninside} onClick={handleeditdata}>
              update
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutList;
