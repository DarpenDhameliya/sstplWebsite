import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { api, apiimg } from "../../../Axios";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import LeftButton from "../../common/LeftButton";
import Loader from "@/Component/loader";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const AboutValueEdit = () => {
  const [error, setError] = useState([]);
  const [titleheading, setTitleheading] = useState("");
  const [content, setContent] = useState("");
  const [slectImage, setSlectImage] = useState(null);
  const [image, setImage] = useState("");
  const [imgdisplay, setImgdisplay] = useState([]);
  const [imgpre, setImgpre] = useState(false);
  const [dbAdderr, setDbAdderr] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { id } = router.query;
  const fetchHiredata = () => {
    api
      .get(`aboutvalue/aboutvalue_update_detail/${id}`, {
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
      .then((result) => {
        // setCareerList(result.data.result);
        setTitleheading(result.data.result[0].heading);
        setContent(result.data.result[0].content);
        setImage(result.data.result[0].file);
        setLoading(false);

        setImgpre(true);
      })
      .catch((err) => {
        setLoading(false);
        setDbFetcherr(err.response.data.error);
        setTimeout(() => {
          setDbFetcherr("");
        }, 3000);
      });
  };

  useEffect(() => {
    if (id) {
      fetchHiredata();
    }
  }, [id]);
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
        .put(`aboutvalue/aboutvalue_update/${id}`, formData, {
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
        <LeftButton link="/online-admin/dashboard/aboutvalue" value="About Value Edit" />
        <Paper className="setProductpaper" elevation={5}>
          {dbFetcherr && <Typography className="seterrorlabel">{dbFetcherr} </Typography>}
          {dbAdderr && <Typography className="seterrorlabel">{dbAdderr} </Typography>}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} className="setinputlayout">
              <Typography className="setlabel">vision heading :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" style={{ width: "100%" }} className="settextfield" placeholder="heading" InputLabelProps={{ shrink: false }} value={titleheading} onChange={(e) => setTitleheading(e.target.value)} />
              {error.head && <Typography className="seterrorlabel">{error.head} </Typography>}
              <Typography className="setlabel">image :</Typography>
              <TextField id="handleimagetext" size="small" variant="outlined" onChange={imagehandle} type="file" className="settextfield" style={{ width: "100%" }} placeholder="image" value={slectImage} />
              {error.file && <Typography className="seterrorlabel">{error.file} </Typography>}
              {imgpre && (
                <Card sx={{ maxWidth: "250px" }} className="mt-3">
                  <CardMedia component="img" src={imgdisplay.length > 0 ? imgdisplay : image} className="setdisimage" />
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
              update
            </Button>
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default AboutValueEdit;
