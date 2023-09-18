import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios, { apiimg } from "../../../Axios";
import Select from "react-select";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Loader from "@/Component/loader";
import Link from "next/link";
import styles from '../../common/common.module.css'

const PortfolioAdd = () => {
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [team, setTeam] = useState("");
  const [duration, setDuration] = useState("");
  const [country, setCountry] = useState();
  const [technology, setTechnology] = useState([]);
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState("");
  const [contentpositionview, setContentpositionview] = useState("");
  const [selectedValue, setSelectedValue] = useState("true");

  const [sendImage, setSendImage] = useState("");
  const [imgpre, setImgpre] = useState(false);
  const [imgdisplay, setImgdisplay] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState([]);
  const [dbAdderr, setDbAdderr] = useState("");
  const router = useRouter();

  var options = [
    { value: "webapplication", label: "Web" },
    { value: "mobileapplication", label: "Mobile" },
    { value: "desktopsoftware", label: "Desktop" },
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
    formData.append("uploadimg", sendImage);
    formData.append("contentpositionview", contentpositionview);
    if (!name || !industry || !team || !duration || !country || !technology || !category || !sendImage || !contentpositionview) {
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
      if (!image) {
        error.image = "required !!";
      }
      setError({ ...error, [e.target.name]: e.target.value });
      setTimeout(() => {
        setError([]);
      }, 3000);
    } else {
      setLoading(true);
      apiimg
        .post("portfolio/portfolio_add", formData,{
          headers: {
            Authorization: localStorage.getItem("ssAdmin"),
          },
        })
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
          router.push("/online-admin/dashboard/portfolio");
        })
        .catch((err) => {
          setLoading(false);
          setDbAdderr(err.response.data.error);
        });
    }
  };

  const handleChange = (e) => {
    setCategory(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  var addImage, displayImg;
  const imagehandle = (e) => {
    addImage = e.target.files[0];
    setSendImage(addImage);
    displayImg = URL.createObjectURL(e.target.files[0]);
    setImgdisplay(displayImg);
    setImgpre(true);
  };
  const handlemodel = () => {
    setSendImage("");
    setImgdisplay("");
    setImgpre(false);
  };
  return (
    <>
        {loading.toString() === "true" && <Loader />}
      <Container component="main" maxWidth="xl" className={styles.setcontainer}>
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
          <div className="setpageheading_withback">
            <Link scroll={false} href="/online-admin/dashboard/portfolio" className={styles.handlebackbutton}>
              <i className="fa fa-arrow-left black fs-25" aria-hidden="true"></i>
            </Link>
            <Typography variant="h4" gutterBottom className={` ${styles.setheading} ml-3`}>
              Add Portfolio Details
            </Typography>
          </div>

          <Paper className={styles.setProductpaper} elevation={5}>
            {dbAdderr && <Typography className={styles.seterrorlabel}>{dbAdderr} </Typography>}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} className="setinputlayout">
                <Typography className={styles.setlabel}>Name :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} placeholder="name" InputLabelProps={{ shrink: false }} value={name} onChange={(e) => setName(e.target.value)} />
                {error.title && <Typography className={styles.seterrorlabel}>{error.title} </Typography>}
                <Typography className={styles.setlabel}>Industry :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} placeholder="industry" InputLabelProps={{ shrink: false }} value={industry} onChange={(e) => setIndustry(e.target.value)} />
                {error.location && <Typography className={styles.seterrorlabel}>{error.location} </Typography>}
                <Typography className={styles.setlabel}>Team :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} placeholder="team" InputLabelProps={{ shrink: false }} value={team} onChange={(e) => setTeam(e.target.value)} />
                {error.team && <Typography className={styles.seterrorlabel}>{error.team} </Typography>}
                <Typography className={styles.setlabel}>Duration :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} placeholder="duration" InputLabelProps={{ shrink: false }} value={duration} onChange={(e) => setDuration(e.target.value)} />
                {error.technology && <Typography className={styles.seterrorlabel}>{error.technology} </Typography>}
                <Typography className={styles.setlabel}>Country :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} placeholder="country" multiline InputLabelProps={{ shrink: false }} value={country} onChange={(e) => setCountry(e.target.value)} />
                {error.duration && <Typography className={styles.seterrorlabel}>{error.duration} </Typography>}
                <Typography className={styles.setlabel}>Technology :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} multiline placeholder="Technology" InputLabelProps={{ shrink: false }} value={technology} onChange={(e) => setTechnology(e.target.value)} />
                {error.technology && <Typography className={styles.seterrorlabel}>{error.technology} </Typography>}
                <Typography className={styles.setlabel}>Category :</Typography>
                <Select isMulti maxMenuHeight={"200px"} classNamePrefix="select" name="category" styles={{ background: "white", color: "#000", border: "1px solid #000", borderRadius: "5px", padding: "5px" }} value={options.filter((obj) => category.includes(obj.value))} onChange={handleChange} options={options} />
                {error.category && <Typography className={styles.seterrorlabel}>{error.category} </Typography>}
              </Grid>
              <Grid item xs={12} sm={6} className="setinputlayout">
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" row name="radio-buttons-group" value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                  <FormControlLabel value="true" control={<Radio />} label="true" />
                  <FormControlLabel value="false" control={<Radio />} label="false" />
                </RadioGroup>
                <Typography className={styles.setlabel}>Position in Homepage :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} placeholder="position in front" InputLabelProps={{ shrink: false }} value={contentpositionview} onChange={(e) => setContentpositionview(e.target.value)} />
                {error.containPositionView && <Typography className={styles.seterrorlabel}>{error.containPositionView} </Typography>}
                <Typography className={styles.setlabel}>image :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" onChange={imagehandle} type="file" className="settextfield" style={{ width: "100%" }} placeholder="image" value={image} />
                {error.containView && <Typography className={styles.seterrorlabel}>{error.containView} </Typography>}
                {imgpre && (
                  <Card sx={{ maxWidth: "250px" }}>
                    <CardMedia component="img" src={imgdisplay} className="setdisimage" />
                    <Button className="setdelbtn" onClick={handlemodel}>
                      Delete
                    </Button>
                  </Card>
                )}
              </Grid>
            </Grid>
            <div className={styles.setsendbutton}>
              <Button variant="contained" size="medium" className={styles.setsendbtninside} onClick={handlesenddata}>
                Add
              </Button>
            </div>
          </Paper>
        </div>
      </Container>
    </>
  );
};

export default PortfolioAdd;
