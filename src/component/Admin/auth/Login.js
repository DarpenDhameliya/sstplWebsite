import React , {useState, useEffect} from "react";
import Container from "@mui/material/Container";
// import {Paper, Grid} from "@material-ui/core";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import {Link, useHistory} from "react-router-dom";
import useStyleAuth from "./AuthuStyle";
// import { useDispatch, useSelector } from "react-redux";
// import { userLogin, LoginstatusSlice, userstate } from "./slice/LoginRedux";
// import { Userdataslice } from "./slice/UserData";
import OutlinedInput from "@mui/material/OutlinedInput";
// import {Divider} from "@material-ui/core";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "../../common/Axios";
// import UserData from "./slice/UserData";
// import CryptoJS from 'crypto-js';
const ariaLabel = { "aria-label": "description" };

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passvisible, setPassvisible] = useState(false);
  const classes = useStyleAuth();
const history = useHistory();
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handlesenddata();
    }
  };
  const handleClickShowPassword = () => {
    setPassvisible(!passvisible);
  };

  const handlesenddata = () => {
    // const response = axios.post(`auth/login`, {
    //   email: email, password: password
    // }).then((result) => {
    //   console.log(result)
    //   localStorage.setItem('nodeuser',result.data.result)
    //   // history.push('/about-us/home')
    //   console.log(result.data.result);
    // }).catch((error) => {
    //   // setError(error.response.data.message)
    //   console.log(error.response.data.message);
    // })
  }

  return (
    <>
      <Container component="main" maxWidth="xl" className={classes.setcontainer}>
        <div className={classes.setpageheading}>
          <Typography variant="h5" gutterBottom className={classes.setheading}>
            <Typography variant="h5" gutterBottom className={classes.setheadingfront}>
              SSTPL - A
            </Typography>
            dmin
          </Typography>
        </div>

        <Paper className={classes.setloginbackpaper} elevation={5}>
          <Typography
            variant="h6"
            gutterBottom
          >
            Sign in to start your session
          </Typography>
          {/* {dberror && <p className={classes.seterrorlabel}>{dberror}</p>} */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className={classes.setinput}>
                <label className={classes.setlabel}>Email :</label>
                <TextField
                  id="outlined-basic"
                  size="small"
                  type="email"
                  placeholder="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleEnter}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.setinput}>
                <label className={classes.setlabel}>Password :</label>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={passvisible ? "text" : "password"}
                  value={password}
                  size="small"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleEnter}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        inputProps={ariaLabel}
                      >
                        {passvisible ? <i className="fa fa-eye" /> : <i className="fa fa-eye-slash" />}

                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              {/* {errors.password && (
                <p className={classes.seterrorlabel}>{errors.password}</p>
              )} */}
            </Grid>
          </Grid>

          <Button
            variant="contained"
            className={classes.setloginbutton}
            onClick={handlesenddata}
          >
            Login
          </Button>
          
        </Paper>
      </Container>
    </>
  );
};

export default Login;
