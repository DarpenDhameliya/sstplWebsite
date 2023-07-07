import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMuiStyle from "../../CommonComponent/MuiStyle";
import TextField from "@mui/material/TextField";
import axios from "../../../common/Axios";


const Profile_forggetpas = () => {
  const [currentpass, setCurrentpass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [conformPass, setConformPass] = useState("");
  const [dberr, setDberr] = useState("");
  const [error, setError] = useState([]);
  const [dbresponce, setDbresponce] = useState("");
  const classes = useMuiStyle();

  const handlesenddata = (e) => {
    let token = localStorage.getItem("ssAdmin");
    const formData = new FormData();
    formData.append("current_password", currentpass);
    formData.append("new_password", newPass);

    if (!currentpass || !newPass || !conformPass || newPass !== conformPass) {
      if (!currentpass) {
        error.currentpass = "Current Password is Required";
      }
      if (!newPass) {
        error.newPass = "New Password is Required";
      }
      if (!conformPass) {
        error.conformPass = "Conform Password is Required";
      }
      if (newPass !== conformPass) {
        error.passmismatch = "new password and conform password is not match";
      }

      setError({...error, [e.target.name]: e.target.value});
      setTimeout(() => {
        setError([]);
      }, 3000);
    } else {
      axios
        .post(`forget/forgetpass`, formData, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: token,
          },
        })
        .then((result) => {
          setDbresponce("password updated successfully");
          setCurrentpass("");
          setNewPass("");
          setConformPass("");
          setTimeout(() => {
            setDbresponce("");
          }, 3000);
        })
        .catch((err) => {
          setDberr(err.response.data.error);
          setTimeout(() => {
            setDberr([]);
          }, 3000);
        });
    }
  };
  return (
    <>
      <Container component="main" maxWidth="xl" className={classes.setcontainer}>
        <div className={classes.setpageheading}>
          <Typography variant="h4" gutterBottom className={classes.setheading}>
            Profile
          </Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} className={classes.setinputlayout}>
            <Paper className={classes.setProductpaper} elevation={5}>
              {dbresponce && <Typography className={classes.seterrorlabel}>{dbresponce} </Typography>}
              {dberr && <Typography className={classes.seterrorlabel}>{dberr} </Typography>}
              <Typography className={classes.setlabel}>Current Password :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="current password" InputLabelProps={{shrink: false}} value={currentpass} onChange={(e) => setCurrentpass(e.target.value)} />
              {error.currentpass && <Typography className={classes.seterrorlabel}>{error.currentpass} </Typography>}
              <Typography className={classes.setlabel}>New Password :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="current password" InputLabelProps={{shrink: false}} value={newPass} onChange={(e) => setNewPass(e.target.value)} />
              {error.newPass && <Typography className={classes.seterrorlabel}>{error.newPass} </Typography>}
              <Typography className={classes.setlabel}>Conform NewPassword :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="current password" InputLabelProps={{shrink: false}} value={conformPass} onChange={(e) => setConformPass(e.target.value)} />
              {error.conformPass && <Typography className={classes.seterrorlabel}>{error.conformPass} </Typography>}
              {error.passmismatch && <Typography className={classes.seterrorlabel}>{error.passmismatch} </Typography>}
              <div className="mt-2 d-flex justify-content-end">
                <Button variant="contained" size="medium" className={classes.setsendbtninside} onClick={handlesenddata}>
                  update
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile_forggetpas;
