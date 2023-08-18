import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { api } from "../../../Axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useRouter } from "next/router";
import Loader from "@/Component/loader";
import Link from "next/link";

const CareerDetailsAdd = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [qualifaction, setQualifaction] = useState("");
  const [containPositionView, setContainPositionView] = useState("");
  const [selectedValue, setSelectedValue] = useState("true");
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const [error, setError] = useState([]);
  const [inputs, setInputs] = useState([]);

  const [dbAdderr, setDbAdderr] = useState("");
  const router = useRouter();

  const handlesenddata = (e) => {
    let emptyrecord = inputs.filter((value) => value.trim() !== "");
    let responsibilityfordb = JSON.stringify(emptyrecord);

    let formData = new FormData();
    formData.append("title", title);
    formData.append("location", location);
    formData.append("experience", experience);
    formData.append("description", description);
    formData.append("position", position);
    formData.append("qualification", qualifaction);
    formData.append("contentview", selectedValue);
    formData.append("contentpositionview", containPositionView);
    formData.append("responsibility", responsibilityfordb);

    if (!title || !location || !experience || !description || !position || !qualifaction || !containPositionView) {
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
      setError({ ...error, [e.target.name]: e.target.value });
      setTimeout(() => {
        setError([]);
      }, 3000);
    } else {
      setLoading(true);

      api
        .post("career/careerdetails_add", formData, {
          headers: {
            Authorization: localStorage.getItem("ssAdmin"),
          },
        })
        .then((result) => {
          setTitle("");
          setLocation("");
          setExperience("");
          setPosition("");
          setDescription("");
          setQualifaction("");
          setSelectedValue("true");
          setContainPositionView("");

          setLoading(false);

          setInputs([]);
          router.push("/online-admin/dashboard/careerdetails");
        })
        .catch((err) => {
          setLoading(false);
          setDbAdderr(err.response.data.error);
          setTimeout(() => {
            setDbAdderr('')
          }, 3000);
        });
    }
  };
  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  // Function to add new input field
  const addInputField = () => {
    setInputs([...inputs, ""]);
  };

  // Function to remove input field
  const removeInputField = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <>
      <Container component="main" maxWidth="xl" className="setcontainer">
        {loading.toString() === "true" && <Loader />}
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
          <div className="setpageheading_withback">
          <Link scroll={false} href='/online-admin/dashboard/careerdetails' className="handlebackbutton" >
            <i className="fa fa-arrow-left black fs-25" aria-hidden="true"></i>
            </Link>
            <Typography variant="h4" gutterBottom className="setheading ml-4">
              Add Career Details
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} className="setinputlayout">
              <Paper className="setProductpaper" elevation={5}>
                {dbAdderr && <Typography className="seterrorlabel">{dbAdderr} </Typography>}
                <Typography className="setlabel">Title :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" placeholder="title" InputLabelProps={{ shrink: false }} value={title} onChange={(e) => setTitle(e.target.value)} />
                {error.title && <Typography className="seterrorlabel">{error.title} </Typography>}
                <Typography className="setlabel">Job Loction :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" placeholder="location" InputLabelProps={{ shrink: false }} value={location} onChange={(e) => setLocation(e.target.value)} />
                {error.location && <Typography className="seterrorlabel">{error.location} </Typography>}
                <Typography className="setlabel">Experience :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" placeholder="experience" InputLabelProps={{ shrink: false }} value={experience} onChange={(e) => setExperience(e.target.value)} />
                {error.experience && <Typography className="seterrorlabel">{error.experience} </Typography>}
                <Typography className="setlabel">Position :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" placeholder="position" InputLabelProps={{ shrink: false }} value={position} onChange={(e) => setPosition(e.target.value)} />
                {error.position && <Typography className="seterrorlabel">{error.position} </Typography>}
                <Typography className="setlabel">Description :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" placeholder="description" multiline InputLabelProps={{ shrink: false }} value={description} onChange={(e) => setDescription(e.target.value)} />
                {error.description && <Typography className="seterrorlabel">{error.description} </Typography>}
                <Typography className="setlabel">Qualification :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" multiline placeholder="qualification" InputLabelProps={{ shrink: false }} value={qualifaction} onChange={(e) => setQualifaction(e.target.value)} />
                {error.qualifaction && <Typography className="seterrorlabel">{error.qualifaction} </Typography>}
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="true" row name="radio-buttons-group" value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                  <FormControlLabel value="true" control={<Radio />} label="true" />
                  <FormControlLabel value="false" control={<Radio />} label="false" />
                </RadioGroup>
                <Typography className="setlabel">Position in Front :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" placeholder="position in front" InputLabelProps={{ shrink: false }} value={containPositionView} onChange={(e) => setContainPositionView(e.target.value)} />
                {error.containPositionView && <Typography className="seterrorlabel">{error.containPositionView} </Typography>}
                <div className="setsendbutton">
                  <Button variant="contained" size="medium" className="setsendbtninside" onClick={handlesenddata}>
                    Add
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8} className="setinputlayout">
              <Paper className="setProductpaper" elevation={5}>
                <Typography className="setlabel">Responsibilitys :</Typography>
                {inputs.map((value, index) => (
                  <div key={index} style={{ width: "100%" }} className="d-flex justify-content-between align-items-center">
                    <TextField id="outlined-basic" size="small" variant="outlined" style={{ width: "95%" }} placeholder="responsibilitys" className={`$'settextfield' mt-1 mb-1`} multiline InputLabelProps={{ shrink: false }} value={value} onChange={(event) => handleInputChange(index, event)} />
                    <i aria-hidden="true" className={` fa fa-trash ml-1 fs-17`} onClick={() => removeInputField(index)} />
                  </div>
                ))}
                <Button variant="outlined" color="primary" className="mt-3" onClick={addInputField}>
                  Add responsibilitys
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default CareerDetailsAdd;
