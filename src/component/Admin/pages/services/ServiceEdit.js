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
import logo from "../../../../assets/images/logo-removebg-preview.png";

const ServiceEdit = () => {
  const [error, setError] = useState([]);
  const [titleheading, setTitleheading] = useState("");
  const [content, setContent] = useState("");
  const [slectImage, setSlectImage] = useState(null);
  const [image, setImage] = useState("");
  const [updated, setUpdated] = useState("");
  const [imgdisplay, setImgdisplay] = useState([]);
  const [imgpre, setImgpre] = useState(false);
  const [loading, setLoading] = useState(true);

  const [slectImage1, setSlectImage1] = useState(null);
  const [image1, setImage1] = useState("");
  const [updated1, setUpdated1] = useState("");
  const [imgdisplay1, setImgdisplay1] = useState([]);
  const [imgpre1, setImgpre1] = useState(false);
  const [dbAdderr, setDbAdderr] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState("");
  const classes = useMuiStyle();
  const history = useHistory();
  var idparam = useParams();

  var token = localStorage.getItem("ssAdmin");

  const fetchHiredata = () => {
    axios
      .get(`service/service_update_detail/${idparam.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((result) => {
        setTitleheading(result.data.result[0].heading);
        setContent(result.data.result[0].content);
        setImage(result.data.result[0].frontpageimg);
        setImage1(result.data.result[0].servicepageimg);
        setImgpre(true);
        setImgpre1(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        setDbFetcherr(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);

  const imagehandle = (e) => {
    let addImage = e.target.files[0];
    setImage(addImage);
    setUpdated(addImage);
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
  const imagehandle1 = (e) => {
    let addImage1 = e.target.files[0];
    setUpdated1(addImage1);
    let displayImg1 = URL.createObjectURL(e.target.files[0]);
    setImgdisplay1(displayImg1);
    setImgpre1(true);
  };
  const handlemodel1 = () => {
    setImage1("");
    setImgdisplay1("");
    setImgpre1(false);
    document.getElementById("handleimagetext").value = null;
  };
  const contentvision = (data) => {
    setContent(data);
  };

  const handlesenddata = (e) => {
    setLoading(true);

    let formData = new FormData();
    formData.append("heading", titleheading);
    formData.append("content", content);
    formData.append("image", imgdisplay.length > 0 ? updated : image);
    formData.append("image", imgdisplay1.length > 0 ? updated1 : image1);

    if (!titleheading || !content) {
      if (!titleheading) {
        error.head = "Require !";
      }
      if (!content) {
        error.value = "Require !";
      }

      setError({...error, [e.target.name]: e.target.value});
      setTimeout(() => {
        setError([]);
      }, 3000);
    } else {
      axios
        .put(`service/service_update/${idparam.id}`, formData, {
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
          setLoading(false);
          history.push("/online-admin/dashboard/service");
        })
        .catch((err) => {
          setLoading(false);
          setDbAdderr(err.response.data.error);
        });
    }
  };
  return (
    <>
      <Container component="main" maxWidth="xl" className={classes.setcontainer}>
      {loading.toString() === 'true' && (
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
            Edit Service Details
          </Typography>
        </div>

        <Paper className={classes.setProductpaper} elevation={5}>
          {dbAdderr && <Typography className={classes.seterrorlabel}>{dbAdderr} </Typography>}
          {dbFetcherr && <Typography className={classes.seterrorlabel}>{dbFetcherr} </Typography>}

          <h4 className="mb-3">{titleheading}</h4>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} className={classes.setinputlayout}>
              <Typography className={classes.setlabel}>image :</Typography>
              <TextField id="handleimagetext" size="small" variant="outlined" onChange={imagehandle} type="file" className={classes.settextfield} style={{width: "100%"}} placeholder="image" value={slectImage} />
              {imgpre && (
                <Card sx={{maxWidth: "250px"}}>
                  <CardMedia component="img" src={imgdisplay.length > 0 ? imgdisplay : image} className={classes.setdisimage} />
                  <Button className={classes.setdelbtn} onClick={handlemodel}>
                    Delete
                  </Button>
                </Card>
              )}
            </Grid>
            <Grid item xs={12} sm={6} className={classes.setinputlayout}>
              <Typography className={classes.setlabel}>image :</Typography>
              <TextField id="handleimagetext" size="small" variant="outlined" onChange={imagehandle1} type="file" className={classes.settextfield} style={{width: "100%"}} placeholder="image" value={slectImage1} />
              {imgpre1 && (
                <Card sx={{maxWidth: "250px"}}>
                  <CardMedia component="img" src={imgdisplay1.length > 0 ? imgdisplay1 : image1} className={classes.setdisimage} />
                  <Button className={classes.setdelbtn} onClick={handlemodel1}>
                    Delete
                  </Button>
                </Card>
              )}
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.setProductpaper} elevation={5}>
          <div style={{maxHeight: "600px", overflow: "overlay"}}>
            <JoditEditor value={content} onChange={(newContent) => contentvision(newContent)} />
          </div>

          <div className={`${classes.setsendbutton} mt-3`}>
            <Button variant="contained" size="medium" className={classes.setsendbtninside} onClick={handlesenddata}>
              update
            </Button>
          </div>
        </Paper>
        </div>
      </Container>
    </>
  );
};

export default ServiceEdit;
