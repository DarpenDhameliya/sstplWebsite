/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { api, apiimg } from "../../../Axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Select from "react-select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useRouter } from "next/router";
import Loader from "@/Component/loader";
import Link from "next/link";

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
  const router = useRouter();
  let { id } = router.query;
  useEffect(() => {
    const fetchUpdatedata = () => {
      api
        .get(`portfolio/portfolio_update_detail/${id}`, {
          headers: {
            Authorization: localStorage.getItem("ssAdmin"),
          },
        })
        .then((result) => {
          console.log(result.data.result);
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
          setTimeout(() => {
            setDbeditfetch("");
          }, 3000);
        });
    };
    if (id) {
      fetchUpdatedata();
    }
  }, [id]);

  var options = [
    { value: "web", label: "Web" },
    { value: "mobile", label: "Mobile" },
    { value: "desktop", label: "Desktop" },
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

      setError({ ...error, [e.target.name]: e.target.value });
      setTimeout(() => {
        setError([]);
      }, 3000);
    } else {
      setLoading(true);
      apiimg
        .post(`portfolio/portfolio_update/${id}`, formData, {
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
          setTimeout(() => {
            setDbAdderr('')
          }, 3000);
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
      <Container component="main" maxWidth="xl" className="setcontainer">
        {loading.toString() === "true" && <Loader />}
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
          <div className="setpageheading_withback">
            <Link scroll={false} href="/online-admin/dashboard/portfolio" className="handlebackbutton">
              <i className="fa fa-arrow-left black fs-25" aria-hidden="true"></i>
            </Link>
            <Typography variant="h4" gutterBottom className="setheading ml-3">
              Edit Portfolio Details
            </Typography>
          </div>

          <Paper className="setProductpaper" elevation={5}>
            {dbeditfetch && <Typography className="seterrorlabel">{dbeditfetch} </Typography>}
            {dbAdderr && <Typography className="seterrorlabel">{dbAdderr} </Typography>}

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} className="setinputlayout">
                <Typography className="setlabel">Name :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} placeholder="title" InputLabelProps={{ shrink: false }} value={name} onChange={(e) => setName(e.target.value)} />
                {error.title && <Typography className="seterrorlabel">{error.title} </Typography>}
                <Typography className="setlabel">Industry :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} placeholder="location" InputLabelProps={{ shrink: false }} value={industry} onChange={(e) => setIndustry(e.target.value)} />
                {error.location && <Typography className="seterrorlabel">{error.location} </Typography>}
                <Typography className="setlabel">Team :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} placeholder="experience" InputLabelProps={{ shrink: false }} value={team} onChange={(e) => setTeam(e.target.value)} />
                {error.experience && <Typography className="seterrorlabel">{error.experience} </Typography>}
                <Typography className="setlabel">Duration :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} placeholder="position" InputLabelProps={{ shrink: false }} value={duration} onChange={(e) => setDuration(e.target.value)} />
                {error.position && <Typography className="seterrorlabel">{error.position} </Typography>}
                <Typography className="setlabel">Country :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} placeholder="description" multiline InputLabelProps={{ shrink: false }} value={country} onChange={(e) => setCountry(e.target.value)} />
                {error.description && <Typography className="seterrorlabel">{error.description} </Typography>}
                <Typography className="setlabel">Technology :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} multiline placeholder="qualification" InputLabelProps={{ shrink: false }} value={technology} onChange={(e) => setTechnology(e.target.value)} />
                {error.qualifaction && <Typography className="seterrorlabel">{error.qualifaction} </Typography>}
                <Typography className="setlabel">Category :</Typography>
                <Select
                  isMulti
                  maxMenuHeight={"200px"}
                  classNamePrefix="select"
                  name="category"
                  placeholder={category}
                  styles={{ background: "white", color: "#000", border: "1px solid #000", borderRadius: "5px", padding: "5px" }}
                  className={` ${error.selectval ? "handleinput_error" : ''} `}
                  value={options.filter((obj) => category.includes(obj.value))}
                  onChange={handleChange}
                  options={options}
                />
                {error.containPositionView && <Typography className="seterrorlabel">{error.containPositionView} </Typography>}
              </Grid>
              <Grid item xs={12} sm={6} className="setinputlayout">
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" row name="radio-buttons-group" value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                  <FormControlLabel value="true" control={<Radio />} label="true" />
                  <FormControlLabel value="false" control={<Radio />} label="false" />
                </RadioGroup>
                <Typography className="setlabel">Position in Homepage :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" style={{ width: "100%" }} placeholder="position in front" InputLabelProps={{ shrink: false }} value={contentpositionview} onChange={(e) => setContentpositionview(e.target.value)} />
                {error.containPositionView && <Typography className="seterrorlabel">{error.containPositionView} </Typography>}
                <Typography className="setlabel">image :</Typography>
                <TextField id="handleimagetext" size="small" variant="outlined" onChange={imagehandle} type="file" className="settextfield" style={{ width: "100%" }} placeholder="image" value={slectImage} />

                {error.containView && <Typography className="seterrorlabel">{error.containView} </Typography>}
                {imgpre && (
                  <Card sx={{ maxWidth: "350px" }} className="mt-4">
                    <CardMedia component="img" src={imgdisplay.length > 0 ? imgdisplay : sendImage} className="setdisimage" />
                    <Button
                      // endIcon={<DeleteIcon />}
                      className="setdelbtn"
                      onClick={handlemodel}
                    >
                      Delete
                    </Button>
                  </Card>
                )}
              </Grid>
            </Grid>
            <div className="setsendbutton">
              <Button variant="contained" size="medium" className="setsendbtninside" onClick={handlesenddata}>
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
