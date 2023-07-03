import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMuiStyle from "../../CommonComponent/MuiStyle";
import TextField from "@mui/material/TextField";
import axios from "../../../common/Axios";
import {useHistory, useParams} from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const CareerEdit = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [qualifaction, setQualifaction] = useState("");
  const [containPositionView, setContainPositionView] = useState("");
  const [responsibilitys1, setResponsibilitys1] = useState("");
  const [responsibilitys2, setResponsibilitys2] = useState("");
  const [responsibilitys3, setResponsibilitys3] = useState("");
  const [responsibilitys4, setResponsibilitys4] = useState("");
  const [responsibilitys5, setResponsibilitys5] = useState("");
  const [responsibilitys6, setResponsibilitys6] = useState("");
  const [responsibilitys7, setResponsibilitys7] = useState("");
  const [responsibilitys8, setResponsibilitys8] = useState("");
  const [responsibilitys9, setResponsibilitys9] = useState("");
  const [responsibilitys10, setResponsibilitys10] = useState("");
  const [selectedValue, setSelectedValue] = useState('');

  const [dbeditfetch, setDbeditfetch] = useState("");
  const [error, setError] = useState([]);
  const [dbAdderr, setDbAdderr] = useState("");
  const classes = useMuiStyle();
const history = useHistory();
  var token = localStorage.getItem("ssAdmin");

  let idparam = useParams();
  useEffect(() => {
    console.log(idparam.id);
    const fetchUpdatedata = () => {
      axios
        .get(`career/careerdetails_update_detail/${idparam.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((result) => {
          console.log(result.data.result);
          var parsedata;
          if (typeof result.data.result.responsibility === "string") {
            parsedata = JSON.parse(result.data.result.responsibility);
          } else {
            let results = JSON.stringify(result.data.result.responsibility);
            parsedata = JSON.parse(results);
          }
          setTitle(result.data.result.title);
          setLocation(result.data.result.location);
          setExperience(result.data.result.experience);
          setPosition(result.data.result.position);
          setDescription(result.data.result.description);
          setQualifaction(result.data.result.qualification);
          setSelectedValue(result.data.result.contentview);
          setContainPositionView(result.data.result.contentpositionview);
          parsedata.forEach((value, index) => {
            console.log(value);
            if (index === 0) {
              setResponsibilitys1(value);
            } else if (index === 1) {
              setResponsibilitys2(value);
            } else if (index === 2) {
              setResponsibilitys3(value);
            } else if (index === 3) {
              setResponsibilitys4(value);
            } else if (index === 4) {
              setResponsibilitys5(value);
            } else if (index === 5) {
              setResponsibilitys6(value);
            } else if (index === 6) {
              setResponsibilitys7(value);
            } else if (index === 7) {
              setResponsibilitys8(value);
            } else if (index === 8) {
              setResponsibilitys9(value);
            } else if (index === 9) {
              setResponsibilitys10(value);
            }
          });
        })
        .catch((err) => {
          setDbeditfetch(err.response.data.error);
        });
    };

    fetchUpdatedata();
  }, []);
console.log(selectedValue)
  const handlesenddata = (e) => {
    const filledStates = [responsibilitys1, responsibilitys2, responsibilitys3, responsibilitys4, responsibilitys5, responsibilitys6, responsibilitys7, responsibilitys8, responsibilitys9, responsibilitys10].filter((value) => !!value);
    var jsonRepresentation = JSON.stringify(filledStates);

    let formData = new FormData();
    formData.append("title", title);
    formData.append("location", location);
    formData.append("experience", experience);
    formData.append("description", description);
    formData.append("position", position);
    formData.append("qualification", qualifaction);
    formData.append("contentview", selectedValue);
    formData.append("contentpositionview", containPositionView);
    formData.append("responsibility", jsonRepresentation);

    if (!title || !location || !experience || !description || !position || !qualifaction  || !containPositionView) {
      if (!title) {
        error.title = "Require !";
      }
      if (!location) {
        error.location = "Require !";
      }
      if (!experience) {
        error.experience = "Require !";
      }
      if (!description) {
        error.description = "Require !";
      }
      if (!position) {
        error.position = "Require !";
      }
      if (!qualifaction) {
        error.qualifaction = "Require !";
      }

      if (!containPositionView) {
        error.containPositionView = "Require !";
      }
      setError({...error, [e.target.name]: e.target.value});
      setTimeout(() => {
        setError([]);
      }, 3000);
    } else {
      axios
        .put(`career/careerdetails_update/${idparam.id}`, formData, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: token,
          },
        })
        .then((result) => {
          setTitle("");
          setLocation("");
          setExperience("");
          setPosition("");
          setDescription("");
          setQualifaction("");
          setSelectedValue(true);
          setContainPositionView("");
          setResponsibilitys1("");
          setResponsibilitys2("");
          setResponsibilitys3("");
          setResponsibilitys4("");
          setResponsibilitys5("");
          setResponsibilitys6("");
          setResponsibilitys7("");
          setResponsibilitys8("");
          setResponsibilitys9("");
          setResponsibilitys10("");
          jsonRepresentation = "";
          history.push('/admin/dashboard/careerdetails')
        })
        .catch((err) => {
          setDbAdderr(err.response.data.error);
        });
    }
  };
  return (
    <>
      <Container component="main" maxWidth="xl" className={classes.setcontainer}>
        <div className={classes.setpageheading}>
          <Typography variant="h4" gutterBottom className={classes.setheading}>
            Edit Career Details
          </Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} className={classes.setinputlayout}>
            <Paper className={classes.setProductpaper} elevation={5}>
              {dbeditfetch && <Typography className={classes.seterrorlabel}>{dbeditfetch} </Typography>}
              {dbAdderr && <Typography className={classes.seterrorlabel}>{dbAdderr} </Typography>}
              <Typography className={classes.setlabel}>Title :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="title" InputLabelProps={{shrink: false}} value={title} onChange={(e) => setTitle(e.target.value)} />
              {error.title && <Typography className={classes.seterrorlabel}>{error.title} </Typography>}
              <Typography className={classes.setlabel}>Loction :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="location" InputLabelProps={{shrink: false}} value={location} onChange={(e) => setLocation(e.target.value)} />
              {error.location && <Typography className={classes.seterrorlabel}>{error.location} </Typography>}
              <Typography className={classes.setlabel}>Experience :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="experience" InputLabelProps={{shrink: false}} value={experience} onChange={(e) => setExperience(e.target.value)} />
              {error.experience && <Typography className={classes.seterrorlabel}>{error.experience} </Typography>}
              <Typography className={classes.setlabel}>Position :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="position" InputLabelProps={{shrink: false}} value={position} onChange={(e) => setPosition(e.target.value)} />
              {error.position && <Typography className={classes.seterrorlabel}>{error.position} </Typography>}
              <Typography className={classes.setlabel}>Description :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="description" multiline InputLabelProps={{shrink: false}} value={description} onChange={(e) => setDescription(e.target.value)} />
              {error.description && <Typography className={classes.seterrorlabel}>{error.description} </Typography>}
              <Typography className={classes.setlabel}>Qualification :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} multiline placeholder="qualification" InputLabelProps={{shrink: false}} value={qualifaction} onChange={(e) => setQualifaction(e.target.value)} />
              {error.qualifaction && <Typography className={classes.seterrorlabel}>{error.qualifaction} </Typography>}
              {/* <Typography className={classes.setlabel}>View in Front :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="view in front" InputLabelProps={{shrink: false}} value={containView} onChange={(e) => setContainView(e.target.value)} />
              {error.containView && <Typography className={classes.seterrorlabel}>{error.containView} </Typography>} */}
              <RadioGroup aria-labelledby="demo-radio-buttons-group-label"  row name="radio-buttons-group" value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                <FormControlLabel value="true" control={<Radio />} label="true" />
                <FormControlLabel value="false" control={<Radio />} label="false" />
              </RadioGroup>
              <Typography className={classes.setlabel}>Position in Front :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="position in front" InputLabelProps={{shrink: false}} value={containPositionView} onChange={(e) => setContainPositionView(e.target.value)} />
              {error.containPositionView && <Typography className={classes.seterrorlabel}>{error.containPositionView} </Typography>}
              <div className={classes.setsendbutton}>
                <Button variant="contained" size="medium" className={classes.setsendbtninside} onClick={handlesenddata}>
                  Update
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} className={classes.setinputlayout}>
            <Paper className={classes.setProductpaper} elevation={5}>
              <Typography className={classes.setlabel}>Responsibilitys :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys1} onChange={(e) => setResponsibilitys1(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys2} onChange={(e) => setResponsibilitys2(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys3} onChange={(e) => setResponsibilitys3(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys4} onChange={(e) => setResponsibilitys4(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys5} onChange={(e) => setResponsibilitys5(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys6} onChange={(e) => setResponsibilitys6(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys7} onChange={(e) => setResponsibilitys7(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys8} onChange={(e) => setResponsibilitys8(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys9} onChange={(e) => setResponsibilitys9(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`${classes.settextfield} mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys10} onChange={(e) => setResponsibilitys10(e.target.value)} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CareerEdit;
