import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import JoditEditor from "jodit-react";
import useMuiStyle from "../../CommonComponent/MuiStyle";
import {useHistory, useParams} from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import axios from "../../../common/Axios";
import { useDispatch } from "react-redux";
const AboutValueEdit = () => {
  const [error, setError] = useState([]);
  const [titleheading, setTitleheading] = useState("");
  const [content, setContent] = useState("");
  const [slectImage, setSlectImage] = useState(null);
  const [image, setImage] = useState("");
  const [imgdisplay, setImgdisplay] = useState([]);
  const [imgpre, setImgpre] = useState(false);
  const [dbAdderr, setDbAdderr] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState('')
  const classes = useMuiStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  var token = localStorage.getItem("ssAdmin");
  var idparam = useParams();
  const fetchHiredata = () => {
    axios
      .get(`aboutvalue/aboutvalue_update_detail/${idparam.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((result) => {
      // setCareerList(result.data.result);
        setTitleheading(result.data.result[0].heading)
        setContent(result.data.result[0].content)
        setImage(result.data.result[0].file)
        setImgpre(true)
      })
      .catch((err) => {
        setDbFetcherr(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);
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

  const contentvision = (data) => {
    setContent(data);
  };

  const handlesenddata = (e) => {
    let formData = new FormData();
    formData.append("heading", titleheading);
    formData.append("value", content);
    formData.append("file", image);

    if (!titleheading || !content || !image) {
      if (!titleheading) {
        error.head = "Require !";
      }
      if (!content) {
        error.value = "Require !";
      }
      if (!image) {
        error.file = "Require !";
      }

      setError({...error, [e.target.name]: e.target.value});
      setTimeout(() => {
        setError([]);
      }, 3000);
    } else {
      axios
        .put(`aboutvalue/aboutvalue_update/${idparam.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            Authorization: token,
          },
        })
        .then((result) => {
          setTitleheading("");
          setContent("");
          setImage("");

          history.push("/admin/dashboard/aboutvalue");
        })
        .catch((err) => {
          console.log(err);
          setDbAdderr(err.response.data.error);
        });
        // dispatch(AboutValueSlice({heading: titleheading, value: content, file: image , "id":idparam.id}))
    }
  };
  return (
    <>
      <Container component="main" maxWidth="xl" className={classes.setcontainer}>
        <div className={classes.setpageheading}>
          <Typography variant="h4" gutterBottom className={classes.setheading}>
            About Value Edit
          </Typography>
        </div>
        <Paper className={classes.setProductpaper} elevation={5}>
        {dbFetcherr && <Typography className={classes.seterrorlabel}>{dbFetcherr} </Typography>}
        {dbAdderr && <Typography className={classes.seterrorlabel}>{dbAdderr} </Typography>}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} className={classes.setinputlayout}>
              <Typography className={classes.setlabel}>vision heading :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "100%"}} className={classes.settextfield} placeholder="heading" InputLabelProps={{shrink: false}} value={titleheading} onChange={(e) => setTitleheading(e.target.value)} />
              {error.head && <Typography className={classes.seterrorlabel}>{error.head} </Typography>}
              <Typography className={classes.setlabel}>image :</Typography>
              <TextField id="handleimagetext" size="small" variant="outlined" onChange={imagehandle} type="file" className={classes.settextfield} style={{width: "100%"}} placeholder="image" value={slectImage} />
              {error.file && <Typography className={classes.seterrorlabel}>{error.file} </Typography>}
              {imgpre && (
                <Card sx={{maxWidth: "250px"}}>
                  <CardMedia component="img" src={imgdisplay.length > 0 ? imgdisplay : image} className={classes.setdisimage} />
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
            <Grid item xs={12} sm={8} className={classes.setinputlayout}>
              <div style={{maxHeight: "300px", overflow: "overlay"}}>
                <JoditEditor value={content} onChange={(newContent) => contentvision(newContent)} />
              </div>
            </Grid>
          </Grid>
          <div className={`${classes.setsendbutton} mt-3`}>
            <Button variant="contained" size="medium" className={classes.setsendbtninside} onClick={handlesenddata}>
              update
            </Button>
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default AboutValueEdit;
