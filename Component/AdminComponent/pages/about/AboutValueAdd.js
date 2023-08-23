import React, { useState, useEffect } from "react";
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
import dynamic from "next/dynamic";
import Loader from "@/Component/loader";
const LeftButton = dynamic(() => import("../../common/LeftButton"), {
  ssr: false,
});
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});
const AboutValueAdd = () => {
  const [error, setError] = useState([]);
  const [titleheading, setTitleheading] = useState("");
  const [content, setContent] = useState("");
  const [slectImage, setSlectImage] = useState(null);
  const [image, setImage] = useState("");
  const [imgdisplay, setImgdisplay] = useState([]);
  const [imgpre, setImgpre] = useState(false);
  const [dbAdderr, setDbAdderr] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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

      setError({ ...error, [e.target.name]: e.target.value });
      setTimeout(() => {
        setError([]);
      }, 3000);
    } else {
      setLoading(true);
      apiimg
        .post("aboutvalue/aboutvalue_add", formData, {
          headers: {
            Authorization: localStorage.getItem("ssAdmin"),
          },
        })
        .then((result) => {
          setTitleheading("");
          setContent("");
          setImage("");
          setLoading(false);

          router.push("/online-admin/dashboard/aboutvalue");
        })
        .catch((err) => {
          setLoading(false);
          setDbAdderr(err.response.data.error);
          setTimeout(() => {
            setDbAdderr("");
          }, 3000);
        });
    }
  };
  return (
    <>
      <Container component="main" maxWidth="xl" className="setcontainer">
        {loading.toString() === "true" && <Loader />}
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
          <LeftButton link="/online-admin/dashboard/aboutvalue" value="About Value Add" />
          <Paper className="setProductpaper" elevation={5}>
            {dbAdderr && <Typography className="seterrorlabel">{dbAdderr} </Typography>}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} className="setinputlayout">
                <Typography className="setlabel">Value heading :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" style={{ width: "100%" }} className="settextfield" placeholder="heading" InputLabelProps={{ shrink: false }} value={titleheading} onChange={(e) => setTitleheading(e.target.value)} />
                {error.head && <Typography className="seterrorlabel">{error.head} </Typography>}
                <Typography className="setlabel">image :</Typography>
                <TextField id="handleimagetext" size="small" variant="outlined" onChange={imagehandle} type="file" className="settextfield" style={{ width: "100%" }} placeholder="image" value={slectImage} />
                {error.file && <Typography className="seterrorlabel">{error.file} </Typography>}
                {imgpre && (
                  <Card sx={{ maxWidth: "350px" }} className="mt-3">
                    <CardMedia component="img" src={imgdisplay} className="setdisimage" />
                    <Button className="setdelbtn" onClick={handlemodel}>
                      Delete
                    </Button>
                  </Card>
                )}
              </Grid>
              <Grid item xs={12} sm={8} className="setinputlayout">
                <div style={{ maxHeight: "300px", overflow: "overlay" }}>
                  <JoditEditor value={content} onChange={(newContent) => contentvision(newContent)} />
                </div>
              </Grid>
            </Grid>
            <div className={`$'setsendbutton' mt-3`}>
              <Button variant="contained" size="medium" className="setsendbtninside" onClick={handlesenddata}>
                Add
              </Button>
            </div>
          </Paper>
        </div>
      </Container>
    </>
  );
};

export default AboutValueAdd;