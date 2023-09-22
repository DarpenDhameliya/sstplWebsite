import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useHistory} from "react-router-dom";
import useStyleAuth from "./AuthuStyle";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import axios from "../../common/Axios";
import CryptoJS from "crypto-js";
const ariaLabel = {"aria-label": "description"};

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passvisible, setPassvisible] = useState(false);
  const [error, setError] = useState([]);
  const [dberror, setDberror] = useState();
  const classes = useStyleAuth();
  const history = useHistory();

useEffect(() => {
  localStorage.removeItem("ssAdmin");
}, [])


  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handlesenddata();
    }
  };
  const handleClickShowPassword = () => {
    setPassvisible(!passvisible);
  };

  const handlesenddata = (e) => {
    if (!email || !password) {
      if (!email) {
        error.email = "Email is required!";
      }
      if (!password) {
        error.password = "Password is required!";
      }
      setError({...error, [e.target.name]: e.target.value});
      setTimeout(() => {
        setError([])
      }, 3000);
    } else {
      axios
        .post(`auth/login`, {
          email,
          password,
        })
        .then((result) => {
          const secretKey = process.env.REACT_APP_DECRYPT_KEY;
          localStorage.setItem("ssAdmin", result.data.result);
          history.push("/online-admin/dashboard/career");
        })
        .catch((error) => {
          setDberror(error.response.data.error);
          setTimeout(() => {
            setDberror([])
          }, 3000);
        });
    }
  };

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
          <Typography variant="h6" gutterBottom>
            Sign in to start your session
          </Typography>
          {dberror && <p className={classes.seterrorlabel}>{dberror}</p>}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className={classes.setinput}>
                <label className={classes.setlabel}>Email :</label>
                <TextField id="outlined-basic" size="small" type="email" placeholder="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} onKeyPress={handleEnter} />
              </div>
              {error.email && (
                <p className={classes.seterrorlabel}>{error.email}</p>
              )}
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
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end" inputProps={ariaLabel}>
                        {passvisible ? <i className="fa fa-eye fs-15" /> : <i className="fa fa-eye-slash fs-15" />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              {error.password && (
                <p className={classes.seterrorlabel}>{error.password}</p>
              )}
            </Grid>
          </Grid>

          <Button variant="contained" className={classes.setloginbutton} onClick={handlesenddata}>
            Login
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
