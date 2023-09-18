import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { apiimg } from "../../../Axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import dynamic from "next/dynamic";
import Loader from "@/Component/loader";
import LeftButton from "../../common/LeftButton";
import styles from '../../common/common.module.css'

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const Serviceadd = () => {
  const [error, setError] = useState([]);
  const [titleheading, setTitleheading] = useState("");
  const [content, setContent] = useState("");
  const [slectImage, setSlectImage] = useState(null);
  const [image, setImage] = useState("");
  const [imgdisplay, setImgdisplay] = useState([]);
  const [imgpre, setImgpre] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  const [viewpo, setViewpo] = useState("");
  const [slectImage1, setSlectImage1] = useState(null);
  const [image1, setImage1] = useState("");
  const [imgdisplay1, setImgdisplay1] = useState([]);
  const [imgpre1, setImgpre1] = useState(false);
  const [dbAdderr, setDbAdderr] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState("");
  const router = useRouter();

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const handleviewpo = (e) => {
    setViewpo(e.target.value);
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
  const imagehandle1 = (e) => {
    let addImage1 = e.target.files[0];
    setImage1(addImage1);
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
    let formData = new FormData();
    formData.append("heading", titleheading);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("image", image1);
    formData.append("contentview", selectedValue);
    formData.append("contentpositionview",viewpo );

    if (!titleheading || !content || !image || !image1) {
      if (!titleheading) {
        error.head = "Require !";
      }
      if (!content) {
        error.value = "Require !";
      }
      if (!image) {
        error.image = "Require !";
      }
      if (!image1) {
        error.image1 = "Require !";
      }

      setError({...error, [e.target.name]: e.target.value});
      setTimeout(() => {
        setError([]);
      }, 3000);
    } else {
      setLoading(true);
      apiimg
        .post("service/service_add", formData,{
          headers: {
            Authorization: localStorage.getItem("ssAdmin"),
          },
        })
        .then((result) => {
          setTitleheading("");
          setContent("");
          setImage("");
          setLoading(false);

          router.push("/online-admin/dashboard/service");
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
      <Container component="main" maxWidth="xl" className={styles.setcontainer}>
        {loading.toString() === "true" && <Loader />}
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <LeftButton link='/online-admin/dashboard/service' value='Add Service Details' />
          <Paper className={styles.setProductpaper} elevation={5}>
            {dbAdderr && <Typography className={styles.setProductpaper}>{dbAdderr} </Typography>}
            <Typography className={styles.setlabel}>heading :</Typography>
            <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "100%"}} className='settextfield' placeholder="heading" InputLabelProps={{shrink: false}} value={titleheading} onChange={(e) => setTitleheading(e.target.value)} />
            {error.head && <Typography className={styles.setProductpaper}>{error.head} </Typography>}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} className='setinputlayout'>
                <Typography className={styles.setlabel}>Home page image :</Typography>
                <TextField id="handleimagetext" size="small" variant="outlined" onChange={imagehandle} type="file" className='settextfield' style={{width: "100%"}} placeholder="image" value={slectImage} />
                {error.image && <Typography className={styles.setProductpaper}>{error.image} </Typography>}
                {imgpre && (
                  <Card sx={{maxWidth: "250px"}} className="mt-2 mb-2">
                    <CardMedia component="img" src={imgdisplay} className='setdisimage' />
                    <Button
                      className='setdelbtn'
                      onClick={handlemodel}
                    >
                      Delete
                    </Button>
                  </Card>
                )}
              </Grid>

              <Grid item xs={12} sm={6} className='setinputlayout'>
                <Typography className={styles.setlabel}>service page image :</Typography>
                <TextField id="handleimagetext" size="small" variant="outlined" onChange={imagehandle1} type="file" className='settextfield' style={{width: "100%"}} placeholder="image" value={slectImage1} />
                {error.image1 && <Typography className={styles.setProductpaper}>{error.image1} </Typography>}
                {imgpre1 && (
                  <Card sx={{maxWidth: "250px"}} className="mt-2 mb-2">
                    <CardMedia component="img" src={imgdisplay1} className='setdisimage' />
                    <Button className='setdelbtn' onClick={handlemodel1}>
                      Delete
                    </Button>
                  </Card>
                )}
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} className='setinputlayout'>
                <Typography className={styles.setlabel}>View position in home :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className='settextfield' style={{width: "100%"}} placeholder="position for homr" InputLabelProps={{shrink: false}} value={viewpo} onChange={handleviewpo} />
                {error.upviewpo && <Typography className={styles.setProductpaper}>{error.upviewpo} </Typography>}
                {error.viewpo && <Typography className={styles.setProductpaper}>{error.viewpo} </Typography>}
              </Grid>
              <Grid item xs={12} sm={6} className='setinputlayout'>
                <Typography className={styles.setlabel}>view in home :</Typography>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" row name="radio-buttons-group" sty value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                  <FormControlLabel value="true" control={<Radio />} label="true" />
                  <FormControlLabel value="false" control={<Radio />} label="false" />
                </RadioGroup>
                {error.upimage && <Typography className={styles.setProductpaper}>{error.upimage} </Typography>}
                {error.addimage && <Typography className={styles.setProductpaper}>{error.addimage} </Typography>}
              </Grid>
            </Grid>
          </Paper>

          <Paper className={styles.setProductpaper} elevation={5}>
            <div style={{maxHeight: "600px", overflow: "overlay"}}>
              <JoditEditor value={content} onChange={(newContent) => contentvision(newContent)} />
            </div>

            <div className={`${styles.setsendbutton} mt-3`}>
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

export default Serviceadd;
