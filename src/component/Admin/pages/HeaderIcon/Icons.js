import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMuiStyle from "../../CommonComponent/MuiStyle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {TableContainer} from "@mui/material";
import {styled} from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import axios from "../../../common/Axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import {useHistory} from "react-router-dom";
import logo from "../../../../assets/images/logo-removebg-preview.webp";

const Icons = () => {
  const [icons, setIcons] = useState([]);
  const [links, setLinks] = useState([]);
  const classes = useMuiStyle();
  const [fields, setFields] = useState([]);
  const [updateId, setUpdateId] = useState("");
  const [dberr, setDberr] = useState("");
  const [addIcon, setAddIcon] = useState(false);
  const [addError, setAddError] = useState("");
  const [updtaeError, setUpdtaeError] = useState("");
  var token = localStorage.getItem("ssAdmin");
  const [loading, setLoading] = useState(true);

  var history = useHistory();
  // Function to handle adding a new field
  const addField = () => {
    setFields([...fields, {icon: "", link: ""}]);
  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };
  const fetchHiredata = () => {
    axios
      .get("icon/icon_list", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((result) => {
        setLoading(false);
        if (result.data.result[0].data.length === 0) {
          setAddIcon(true);
        } else {
          setUpdateId(result.data.result[0]._id);
          setFields(result.data.result[0].data);
        }
      })
      .catch((err) => {
        if (err.response.status === 402) {
          localStorage.removeItem("ssAdmin");
          history.push("/online-admin");
        }
        setLoading(false);
        setDberr(err.response.data.error);
        setTimeout(() => {
          setDberr("");
        }, 3000);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);

  const handleadd = () => {
    if (addIcon) {
      setLoading(true);
      axios
        .put(`icon/icon_add`, fields, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: token,
          },
        })
        .then((result) => {
          setFields([]);
          setLoading(false);
          fetchHiredata();
          setAddIcon(false);
        })
        .catch((err) => {
          setAddError(err.response.data.error);
          setTimeout(() => {
            setAddError("");
          }, 3000);
          setLoading(false);
        });
    } else {
      setLoading(true);
      axios
        .put(`icon/icon_update/${updateId}`, fields, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: token,
          },
        })
        .then((result) => {
          setFields([]);
          fetchHiredata();
          setAddIcon(false);
          setLoading(false);
        })
        .catch((err) => {
          setUpdtaeError(err.response.data.error);
          setTimeout(() => {
            setUpdtaeError("");
          }, 3000);
          setLoading(false);
        });
    }
  };
  return (
    <>
      <Container component="main" maxWidth="xl" className={classes.setcontainer}>
        {loading.toString() === "true" && (
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
              Icons
            </Typography>
          </div>

          <Paper className={classes.setProductpaper} elevation={5}>
            <div className={classes.setlistfiltericon}>
              <Avatar className={`${classes.setavtarback} mb-3`} onClick={addField} variant="rounded">
                <i className="fa fa-plus black" aria-hidden="true" />
              </Avatar>
            </div>
            {addError && <Typography className={classes.seterrorlabel}>{addError} </Typography>}
            {updtaeError && <Typography className={classes.seterrorlabel}>{updtaeError} </Typography>}
            {fields.map((field, index) => (
              <div key={index} className="d-flex align-items-center justify-content-around">
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "48%"}} placeholder="icon name" className={`${classes.settextfield} mt-1 mb-1`} multiline InputLabelProps={{shrink: false}} value={field.icon} onChange={(e) => handleChange(index, "icon", e.target.value)} />
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "48%"}} placeholder="Link" className={`${classes.settextfield} mt-1 mb-1 ml-2`} multiline InputLabelProps={{shrink: false}} value={field.link} onChange={(e) => handleChange(index, "link", e.target.value)} />

                <i aria-hidden="true" className={` fa fa-trash ml-1 fs-17`} onClick={() => removeField(index)} />
              </div>
            ))}

            <Button variant="contained" size="medium" className={`${classes.setsendbtninside} mt-3`} onClick={handleadd}>
              update
            </Button>
          </Paper>
        </div>
      </Container>
    </>
  );
};

export default Icons;
