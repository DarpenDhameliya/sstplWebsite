/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMuiStyle from "../../CommonComponent/MuiStyle";
import TextField from "@mui/material/TextField";
import axios, { api, apiimg } from "../../../common/Axios";
import {useHistory, useParams} from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Select from "react-select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import logo from "../../../../assets/images/logo-removebg-preview.webp";

const PortfolioEdit = () => {
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [team, setTeam] = useState("");
  const [duration, setDuration] = useState("");
  const [country, setCountry] = useState();
  const [technology, setTechnology] = useState([]); //select
  const [category, setCategory] = useState([]); //select
  const [sendImage, setSendImage] = useState("");
  const [image, setImage] = useState("");
  const [imgdisplay, setImgdisplay] = useState([]);
  const [slectImage, setSlectImage] = useState(null);
  const [imgpre, setImgpre] = useState(false);
  const [contentpositionview, setContentpositionview] = useState("");
  const [error, setError] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(true);

  const [dbAdderr, setDbAdderr] = useState("");
  const [dbeditfetch, setDbeditfetch] = useState("");
  const classes = useMuiStyle();
  const history = useHistory();
  var token = localStorage.getItem("ssAdmin");

  let idparam = useParams();
  useEffect(() => {
    const fetchUpdatedata = () => {
      api
        .get(`portfolio/portfolio_update_detail/${idparam.id}`)
        .then((result) => {
          setSelectedValue(result.data.result.contentview);
          setContentpositionview(result.data.result.contentpositionview);
          setName(result.data.result.name);
          setIndustry(result.data.result.industry);
          setTeam(result.data.result.team);
          setDuration(result.data.result.duration);
          setCountry(result.data.result.country);
          setTechnology(result.data.result.technology);
          setCategory(result.data.result.category);
          setSendImage(result.data.result.uploadimg);
          setImgpre(true);
          setLoading(false);
        })
        .catch((err) => {
          setDbeditfetch(err.response.data.error);
        });
    };

    fetchUpdatedata();
  }, [idparam.id, token]);

  var options = [
    {value: "web", label: "Web"},
    {value: "mobile", label: "Mobile"},
    {value: "desktop", label: "Desktop"},
  ];

  const handlesenddata = (e) => {
    
    let formData = new FormData();
    formData.append("name", name);
    formData.append("industry", industry);
    formData.append("team", team);
    formData.append("duration", duration);
    formData.append("country", country);
    formData.append("technology", technology);
    formData.append("category", category);
    formData.append("contentview", selectedValue);
    formData.append("uploadimg", imgdisplay.length > 0 ? image : sendImage);
    formData.append("contentpositionview", contentpositionview);
    if (!name || !industry || !team || !duration || !country || !technology || !category || !contentpositionview) {
      if (!name) {
        error.name = "required !!";
      }
      if (!industry) {
        error.industry = "required !!";
      }
      if (!team) {
        error.team = "required !!";
      }
      if (!duration) {
        error.duration = "required !!";
      }
      if (!country) {
        error.country = "required !!";
      }
      if (!technology) {
        error.technology = "required !!";
      }
      
      if (!contentpositionview) {
        error.contentpositionview = "required !!";
      }
      if (!category) {
        error.category = "required !!";
      }
      
      setError({...error, [e.target.name]: e.target.value});
      setTimeout(() => {
        setError([]);
      }, 3000);
    } else {
      setLoading(true);
      apiimg
        .post(`portfolio/portfolio_update/${idparam.id}`, formData)
        .then((result) => {
          setName("");
          setIndustry("");
          setTeam("");
          setDuration("");
          setCountry("");
          setTechnology("");
          setCategory("");
          setSelectedValue("true");
          setContentpositionview("");
          handlemodel();
          setLoading(false);

          history.push("/online-admin/dashboard/portfolio");
        })
        .catch((err) => {
          setLoading(false);
          setDbAdderr(err.response.data.error);
        });
    }
  };

  const imagehandle = (e) => {
    let addImage = e.target.files[0];
    setImage(addImage);
    let displayImg = URL.createObjectURL(e.target.files[0]);
    setImgdisplay(displayImg);
    setImgpre(true);
  };
  const handlemodel = () => {
    setImage("");
    setImgdisplay("");
    setImgpre(false);
    document.getElementById("handleimagetext").value = null;
  };
  const handleChange = (e) => {
    setCategory(Array.isArray(e) ? e.map((x) => x.value) : []);
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
              Edit Portfolio Details
            </Typography>
          </div>

          <Paper className={classes.setProductpaper} elevation={5}>
            {dbeditfetch && <Typography className={classes.seterrorlabel}>{dbeditfetch} </Typography>}
            {dbAdderr && <Typography className={classes.seterrorlabel}>{dbAdderr} </Typography>}

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} className={classes.setinputlayout}>
                {/* <div className=""> */}
                <Typography className={classes.setlabel}>Name :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} style={{width: "100%"}} placeholder="title" InputLabelProps={{shrink: false}} value={name} onChange={(e) => setName(e.target.value)} />
                {error.title && <Typography className={classes.seterrorlabel}>{error.title} </Typography>}
                {/* </div> */}
                <Typography className={classes.setlabel}>Industry :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} style={{width: "100%"}} placeholder="location" InputLabelProps={{shrink: false}} value={industry} onChange={(e) => setIndustry(e.target.value)} />
                {error.location && <Typography className={classes.seterrorlabel}>{error.location} </Typography>}
                <Typography className={classes.setlabel}>Team :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} style={{width: "100%"}} placeholder="experience" InputLabelProps={{shrink: false}} value={team} onChange={(e) => setTeam(e.target.value)} />
                {error.experience && <Typography className={classes.seterrorlabel}>{error.experience} </Typography>}
                <Typography className={classes.setlabel}>Duration :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} style={{width: "100%"}} placeholder="position" InputLabelProps={{shrink: false}} value={duration} onChange={(e) => setDuration(e.target.value)} />
                {error.position && <Typography className={classes.seterrorlabel}>{error.position} </Typography>}
                <Typography className={classes.setlabel}>Country :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} style={{width: "100%"}} placeholder="description" multiline InputLabelProps={{shrink: false}} value={country} onChange={(e) => setCountry(e.target.value)} />
                {error.description && <Typography className={classes.seterrorlabel}>{error.description} </Typography>}
                <Typography className={classes.setlabel}>Technology :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} style={{width: "100%"}} multiline placeholder="qualification" InputLabelProps={{shrink: false}} value={technology} onChange={(e) => setTechnology(e.target.value)} />
                {error.qualifaction && <Typography className={classes.seterrorlabel}>{error.qualifaction} </Typography>}
                <Typography className={classes.setlabel}>Category :</Typography>
                {/* <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} style={{width: "100%"}} placeholder="position in front" InputLabelProps={{shrink: false}} value={category} onChange={(e) => setCategory(e.target.value)} /> */}
                <Select
                  isMulti
                  maxMenuHeight={"200px"}
                  classNamePrefix="select"
                  name="category"
                  placeholder={category}
                  styles={{background: "white", color: "#000", border: "1px solid #000", borderRadius: "5px", padding: "5px"}}
                  // className={` ${error.selectval ? "handleinput_error" : ''} ${dberr.hiredev ? 'mb-0' : ''}`}
                  value={options.filter((obj) => category.includes(obj.value))}
                  onChange={handleChange}
                  options={options}
                />
                {error.containPositionView && <Typography className={classes.seterrorlabel}>{error.containPositionView} </Typography>}
              </Grid>
              <Grid item xs={12} sm={6} className={classes.setinputlayout}>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" row name="radio-buttons-group" value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                  <FormControlLabel value="true" control={<Radio />} label="true" />
                  <FormControlLabel value="false" control={<Radio />} label="false" />
                </RadioGroup>
                <Typography className={classes.setlabel}>Position in Homepage :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} style={{width: "100%"}} placeholder="position in front" InputLabelProps={{shrink: false}} value={contentpositionview} onChange={(e) => setContentpositionview(e.target.value)} />
                {error.containPositionView && <Typography className={classes.seterrorlabel}>{error.containPositionView} </Typography>}
                <Typography className={classes.setlabel}>image :</Typography>
                {/* <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} style={{width: "100%"}} placeholder="image" InputLabelProps={{shrink: false}} value={image} onChange={(e) => setImage(e.target.value)} /> */}
                <TextField id="handleimagetext" size="small" variant="outlined" onChange={imagehandle} type="file" className={classes.settextfield} style={{width: "100%"}} placeholder="image" value={slectImage} />

                {error.containView && <Typography className={classes.seterrorlabel}>{error.containView} </Typography>}
                {imgpre && (
                  <Card sx={{maxWidth: "250px"}}>
                    <CardMedia component="img" src={imgdisplay.length > 0 ? imgdisplay : sendImage} className={classes.setdisimage} />
                    <Button
                      // endIcon={<DeleteIcon />}
                      className={classes.setdelbtn}
                      onClick={handlemodel}
                    >
                      Delete
                    </Button>
                  </Card>
                )}
              </Grid>
            </Grid>
            <div className={classes.setsendbutton}>
              <Button variant="contained" size="medium" className={classes.setsendbtninside} onClick={handlesenddata}>
                Update
              </Button>
            </div>
          </Paper>
        </div>
      </Container>
    </>
  );
};

export default PortfolioEdit;
