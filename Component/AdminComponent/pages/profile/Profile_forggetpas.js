import React, {useState} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import  { api } from "../../../Axios";


const Profile_forggetpas = () => {
  const [currentpass, setCurrentpass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [conformPass, setConformPass] = useState("");
  const [dberr, setDberr] = useState("");
  const [error, setError] = useState([]);
  const [dbresponce, setDbresponce] = useState("");

  const handlesenddata = (e) => {
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
      api
        .post(`forget/forgetpass`, formData,{
          headers: {
            Authorization: localStorage.getItem("ssAdmin"),
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
      <Container component="main" maxWidth="xl" className='setcontainer'>
        <div className='setpageheading'>
          <Typography variant="h4" gutterBottom className='setheading'>
            Profile
          </Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} className='setinputlayout'>
            <Paper className='setProductpaper' elevation={5}>
              {dbresponce && <Typography className='seterrorlabel'>{dbresponce} </Typography>}
              {dberr && <Typography className='seterrorlabel'>{dberr} </Typography>}
              <Typography className='setlabel'>Current Password :</Typography>
              <TextField id="outlined-basic" type="password" size="small" variant="outlined" className='settextfield' placeholder="current password" InputLabelProps={{shrink: false}} value={currentpass} onChange={(e) => setCurrentpass(e.target.value)} />
              {error.currentpass && <Typography className='seterrorlabel'>{error.currentpass} </Typography>}
              <Typography className='setlabel'>New Password :</Typography>
              <TextField id="outlined-basic" type="password" size="small" variant="outlined" className='settextfield' placeholder="current password" InputLabelProps={{shrink: false}} value={newPass} onChange={(e) => setNewPass(e.target.value)} />
              {error.newPass && <Typography className='seterrorlabel'>{error.newPass} </Typography>}
              <Typography className='setlabel'>Conform NewPassword :</Typography>
              <TextField id="outlined-basic" type="password" size="small" variant="outlined" className='settextfield' placeholder="current password" InputLabelProps={{shrink: false}} value={conformPass} onChange={(e) => setConformPass(e.target.value)} />
              {error.conformPass && <Typography className='seterrorlabel'>{error.conformPass} </Typography>}
              {error.passmismatch && <Typography className='seterrorlabel'>{error.passmismatch} </Typography>}
              <div className="mt-2 d-flex justify-content-end">
                <Button variant="contained" size="medium" className='setsendbtninside' onClick={handlesenddata}>
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
