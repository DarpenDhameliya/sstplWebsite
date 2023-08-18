import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios, { api, apiimg } from "../../../Axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useRouter } from "next/router";
import Loader from "@/Component/loader";
import Link from "next/link";

const CareerEdit = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [qualifaction, setQualifaction] = useState("");
  const [containPositionView, setContainPositionView] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  const [dbeditfetch, setDbeditfetch] = useState("");
  const [error, setError] = useState([]);
  const [dbAdderr, setDbAdderr] = useState("");
  const [inputs, setInputs] = useState([]);
  const router = useRouter();
  const { id } = router.query;


  // Function to handle input value changes
  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  // Function to add a new input field
  const addInputField = () => {
    setInputs([...inputs, ""]);
  };

  // Function to remove an input field
  const removeInputField = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  // Function to handle form submission
  useEffect(() => {
    const fetchUpdatedata = () => {
      api
        .get(`career/careerdetails_update_detail/${id}`, {
          headers: {
            Authorization: localStorage.getItem("ssAdmin"),
          },
        })
        .then((result) => {
          setLoading(false);

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
          setInputs(parsedata);
        })
        .catch((err) => {
          setLoading(false);
          setDbeditfetch(err.response.data.error);
          setTimeout(() => {
            setDbeditfetch("");
          }, 3000);
        });
    };

    fetchUpdatedata();
  }, []);
  const handlesenddata = (e) => {
    let emptyrecord = inputs.filter((value) => value.trim() !== "");
    var jsonRepresentation = JSON.stringify(emptyrecord);
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
        .put(`career/careerdetails_update/${id}`, formData)
        .then((result) => {
          setTitle("");
          setLocation("");
          setExperience("");
          setPosition("");
          setDescription("");
          setQualifaction("");
          setSelectedValue(true);
          setContainPositionView("");
          jsonRepresentation = "";
          setLoading(false);
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
              Edit Career Details
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} className="setinputlayout">
              <Paper className="setProductpaper" elevation={5}>
                {dbeditfetch && <Typography className="seterrorlabel">{dbeditfetch} </Typography>}
                {dbAdderr && <Typography className="seterrorlabel">{dbAdderr} </Typography>}
                <Typography className="setlabel">Title :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" placeholder="title" InputLabelProps={{ shrink: false }} value={title} onChange={(e) => setTitle(e.target.value)} />
                {error.title && <Typography className="seterrorlabel">{error.title} </Typography>}
                <Typography className="setlabel">Loction :</Typography>
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
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" row name="radio-buttons-group" value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                  <FormControlLabel value="true" control={<Radio />} label="true" />
                  <FormControlLabel value="false" control={<Radio />} label="false" />
                </RadioGroup>
                <Typography className="setlabel">Position in Front :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" placeholder="position in front" InputLabelProps={{ shrink: false }} value={containPositionView} onChange={(e) => setContainPositionView(e.target.value)} />
                {error.containPositionView && <Typography className="seterrorlabel">{error.containPositionView} </Typography>}
                <div className="setsendbutton">
                  <Button variant="contained" size="medium" className="setsendbtninside" onClick={handlesenddata}>
                    Update
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8} className="setinputlayout">
              <Paper className="setProductpaper" elevation={5}>
                <Typography className="setlabel">Responsibilitys :</Typography>
                {/* <TextField id="outlined-basic" size="small" variant="outlined" className={`$'settextfield' mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys1} onChange={(e) => setResponsibilitys1(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`$'settextfield' mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys2} onChange={(e) => setResponsibilitys2(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`$'settextfield' mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys3} onChange={(e) => setResponsibilitys3(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`$'settextfield' mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys4} onChange={(e) => setResponsibilitys4(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`$'settextfield' mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys5} onChange={(e) => setResponsibilitys5(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`$'settextfield' mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys6} onChange={(e) => setResponsibilitys6(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`$'settextfield' mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys7} onChange={(e) => setResponsibilitys7(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`$'settextfield' mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys8} onChange={(e) => setResponsibilitys8(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`$'settextfield' mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys9} onChange={(e) => setResponsibilitys9(e.target.value)} />
              <TextField id="outlined-basic" size="small" variant="outlined" className={`$'settextfield' mt-1 mb-1`} multiline placeholder="responsibilitys" InputLabelProps={{shrink: false}} value={responsibilitys10} onChange={(e) => setResponsibilitys10(e.target.value)} /> */}
                {inputs.map((value, index) => (
                  <div key={index} style={{ width: "100%" }} className="d-flex justify-content-between align-items-center">
                    <TextField id="outlined-basic" size="small" variant="outlined" style={{ width: "95%" }} placeholder="responsibilitys" className={`$'settextfield' mt-1 mb-1`} multiline InputLabelProps={{ shrink: false }} value={value} onChange={(event) => handleInputChange(index, event)} />

                    <i aria-hidden="true" className={` fa fa-trash ml-1 fs-17`} onClick={() => removeInputField(index)} />
                  </div>
                ))}
                <Button variant="outlined" color="primary" className="mt-3" onClick={addInputField}>
                  Add responsibilitys
                </Button>
                {/* <Button variant="contained" color="primary" type="submit">
                Submit
              </Button> */}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default CareerEdit;
