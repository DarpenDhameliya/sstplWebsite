import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import axios from "../../Axios";
import { useRouter } from "next/router";
const ariaLabel = { "aria-label": "description" };

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passvisible, setPassvisible] = useState(false);
  const [error, setError] = useState([]);
  const [dberror, setDberror] = useState();
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("ssAdmin");
  }, []);

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
      setError({ ...error, [e.target.name]: e.target.value });
      setTimeout(() => {
        setError([]);
      }, 3000);
    } else {
      axios
        .post(`auth/login`, {
          email,
          password,
        })
        .then((result) => {
          router.push("/online-admin/dashboard/career");
          localStorage.setItem("ssAdmin", result.data.result);
        })
        .catch((error) => {
          console.log(error);
          setDberror(error.response.data.error);
          setTimeout(() => {
            setDberror([]);
          }, 2000);
        });
    }
  };

  return (
    <Container component="main" maxWidth="xl" className="setcontainerLogin">
      <div className="setpageheading_login">
        <Typography gutterBottom className="setheading">
          <span gutterBottom className="setheadingfront">
            SSTPL - A
          </span>
          dmin
        </Typography>
      </div>

      <Paper className="setloginbackpaperLogin" elevation={5}>
        <Typography variant="h6" gutterBottom>
          Sign in to start your session
        </Typography>
        {dberror && (
          <>
            <Typography className="seterrorlabel">{dberror}</Typography>
          </>
        )}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="setinput">
              <label className="setlabel">Email :</label>
              <TextField id="outlined-basic" size="small" type="email" placeholder="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} onKeyPress={handleEnter} />
            </div>
            {error.email && <Typography className="seterrorlabel">{error.email}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <div className="setinput">
              <label className="setlabel">Password :</label>
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
              <>
                <Typography className="seterrorlabel">{error.password}</Typography>
              </>
            )}
          </Grid>
        </Grid>

        <Button variant="contained" className="setloginbutton" onClick={handlesenddata}>
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
