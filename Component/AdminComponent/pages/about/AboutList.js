import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { api } from "../../../Axios";
import Loader from "@/Component/loader";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import('jodit-react'), {
  ssr: false
});
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
  const [dberr, setDberr] = useState([]);
  const [dbAdderr, setDbAdderr] = useState("");
  const router = useRouter();

  //firstfetchdata
  const fetchHiredata = () => {
    api
      .get("about/about_list", {
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
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
        if (err.response.status === 401) {
          localStorage.removeItem("ssAdmin");
          router.push("/online-admin");
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
            Authorization: localStorage.getItem("ssAdmin"),
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
            setTimeout(() => {
              setDbAdderr('')
            }, 3000);
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
              Authorization: localStorage.getItem("ssAdmin"),
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
            setTimeout(() => {
              setDbAdderr('')
            }, 3000);
          });
      }
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xl" className='setcontainer'>
        {loading.toString() === "true" && <Loader />}
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
          <div className='setpageheading'>
            <Typography variant="h4" gutterBottom className='setheading'>
              About List
            </Typography>
          </div>
           <Paper className='setProductpaper' elevation={5}>
            {doneResponce && <Typography className='seterrorlabel'>{doneResponce} </Typography>}

            {dberr && <Typography className='seterrorlabel'>{dberr} </Typography>}
            {dbAdderr && <Typography className='seterrorlabel'>{dbAdderr} </Typography>}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} className='setinputlayout'>
                <Typography className='setlabel'>about main heading :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "100%"}} className='settextfield' placeholder="heading" InputLabelProps={{shrink: false}} value={abouthead} onChange={(e) => setAbouthead(e.target.value)} />
                {error.abheading && <Typography className='seterrorlabel'>{error.abheading} </Typography>}
              </Grid>
              <Grid item xs={12} sm={9} className='setinputlayout'>
                <div style={{maxHeight: "300px", overflow: "overlay"}}>
                  <JoditEditor value={aboutcontent} onChange={(newContent) => contentabout(newContent)} />
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper className='setProductpaper' elevation={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} className='setinputlayout'>
                <Typography className='setlabel'>vision heading :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "100%"}} className='settextfield' placeholder="heading" InputLabelProps={{shrink: false}} value={visionheading} onChange={(e) => setVisionheading(e.target.value)} />
                {error.viheading && <Typography className='seterrorlabel'>{error.viheading} </Typography>}
              </Grid>
              <Grid item xs={12} sm={9} className='setinputlayout'>
                <div style={{maxHeight: "300px", overflow: "overlay"}}>
                  <JoditEditor value={visioncontent} onChange={(newContent) => contentvision(newContent)} />
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper className='setProductpaper' elevation={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} className='setinputlayout'>
                <Typography className='setlabel'>mission heading :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "100%"}} className='settextfield' placeholder="heading" InputLabelProps={{shrink: false}} value={missionheading} onChange={(e) => setMissionheading(e.target.value)} />
                {error.miheading && <Typography className='seterrorlabel'>{error.miheading} </Typography>}
              </Grid>
              <Grid item xs={12} sm={9} className='setinputlayout'>
                <div style={{maxHeight: "300px", overflow: "overlay"}}>
                  <JoditEditor value={missioncontent} onChange={(newContent) => contentmission(newContent)} />
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper className='setProductpaper' elevation={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} className='setinputlayout'>
                <Typography className='setlabel'>value heading :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "100%"}} className='settextfield' placeholder="heading" InputLabelProps={{shrink: false}} value={valheading} onChange={(e) => setValheading(e.target.value)} />
                {error.miheading && <Typography className='seterrorlabel'>{error.miheading} </Typography>}
              </Grid>
              <Grid item xs={12} sm={9} className='setinputlayout'>
                <div style={{maxHeight: "300px", overflow: "overlay"}}>
                  <JoditEditor value={valuecontent} onChange={(newContent) => contentvalue(newContent)} />
                </div>
              </Grid>
            </Grid>
          </Paper>

          <div className="d-flex justify-content-end mt-3">
            <Button variant="contained" size="medium" className='setsendbtninside' onClick={handleeditdata}>
              update
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutList;
