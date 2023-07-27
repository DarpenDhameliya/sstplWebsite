import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMuiStyle from "../../CommonComponent/MuiStyle";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {TableContainer} from "@mui/material";
import {styled} from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import axios from "../../../common/Axios";
import {useHistory} from "react-router-dom";
import logo from "../../../../assets/images/logo-removebg-preview.png";

// import Textarea from '@mui/joy/Textarea';

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const MetaList = () => {
  const [metaList, seMetaList] = useState([]);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [key, setKey] = useState("");
  const [schema, setSchema] = useState([]);
  const [upurl, setUpUrl] = useState("");
  const [uptitle, setUpTitle] = useState("");
  const [updescription, setUpDescription] = useState("");
  const [upkey, setUpKey] = useState("");
  const [upschema, setUpSchema] = useState([]);
  const [upid, setUpid] = useState("");
  const [error, setError] = useState([]);
  const [dberr, setDberr] = useState("");
  const [dbAdderr, setDbAdderr] = useState("");
  const [dbDeleteerr, setDbDeleteerr] = useState("");
  const [loading, setLoading] = useState(true);

  const [fetcherr, setFetcherr] = useState("");
  const classes = useMuiStyle();
  const history = useHistory();

  var token = localStorage.getItem("ssAdmin");
  const fetchHiredata = () => {
    axios
      .get("meta/meta_list", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",

          Authorization: token,
        },
      })
      .then((result) => {
        setLoading(false);
        seMetaList(result.data.result);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 402) {
          localStorage.removeItem("ssAdmin");
          history.push("/online-admin");
        }
        setFetcherr(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);
  const handleurl = (e) => {
    setUrl(e.target.value);
  };
  const handletitle = (e) => {
    setTitle(e.target.value);
  };
  const handledescription = (e) => {
    setDescription(e.target.value);
  };
  const handlekey = (e) => {
    setKey(e.target.value);
  };
  const handleschema = (e) => {
    setSchema(e.target.value);
  };
  const handleupurl = (e) => {
    setUpUrl(e.target.value);
  };
  const handleuptitle = (e) => {
    setUpTitle(e.target.value);
  };
  const handleupdescription = (e) => {
    setUpDescription(e.target.value);
  };
  const handleupkey = (e) => {
    setUpKey(e.target.value);
  };
  const handleupschema = (e) => {
    setUpSchema(e.target.value);
  };
  const handleedit = (e) => {
    setUpid(e._id);
    setUpUrl(e.url);
    setUpTitle(e.title);
    setUpDescription(e.description);
    setUpKey(e.key);
    setUpSchema(e.schema);
  };

  const handleeditdataremove = () => {
    setUpid("");
    setUpUrl("");
    setUpTitle("");
    setUpDescription("");
    setUpKey("");
    setUpSchema([]);
  };
  const handlesenddata = (e) => {
    if (upid) {
      if (!upurl || !uptitle || !updescription || !upkey || !upschema) {
        if (upurl) {
          error.upurl = "Required !!";
        } else {
          error.upurl = "";
        }
        if (uptitle) {
          error.uptitle = "Required !!";
        } else {
          error.uptitle = "";
        }
        if (updescription) {
          error.updescription = "Required !!";
        } else {
          error.updescription = "";
        }
        if (upkey) {
          error.upkey = "Required !!";
        } else {
          error.upkey = "";
        }
        if (upschema) {
          error.upschema = "Required !!";
        } else {
          error.upschema = "";
        }
        setError({...error, [e.target.name]: e.target.value});
      } else {
        setLoading(true);

        const formData = new FormData();
        formData.append("url", upurl);
        formData.append("title", uptitle);
        formData.append("description", updescription);
        formData.append("key", upkey);
        formData.append("schema", upschema);

        axios
          .put(`meta/meta_update/${upid}`, formData, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: token,
            },
          })
          .then((result) => {
            fetchHiredata();
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setDberr(err.response.data.error);
            setTimeout(() => {
              setDberr([]);
            }, 3000);
          });
      }
    } else {
      if (!url || !title || !description || !key || !schema) {
        if (url) {
          error.url = "Required !!";
        } else {
          error.url = "";
        }
        if (title) {
          error.title = "Required !!";
        } else {
          error.title = "";
        }
        if (description) {
          error.description = "Required !!";
        } else {
          error.description = "";
        }
        if (key) {
          error.key = "Required !!";
        } else {
          error.key = "";
        }
        if (schema) {
          error.schema = "Required !!";
        } else {
          error.schema = "";
        }
        setError({...error, [e.target.name]: e.target.value});
      } else {
        setLoading(true);

        let formData = new FormData();
        formData.append("url", url);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("key", key);
        formData.append("schema", schema);

        axios
          .post("meta/meta_add", formData, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: token,
            },
          })
          .then((result) => {
            fetchHiredata();
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setDbAdderr(err.response.data.error);
          });
      }
    }
  };

  const handledelete = (e) => {
    setLoading(true);

    axios
      .delete(`meta/meta_delete/${e}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: token,
        },
      })
      .then((result) => {
        fetchHiredata();
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setDbDeleteerr(err.response.data.error);
      });
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
              Meta
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} className={classes.setinputlayout}>
              <Paper className={classes.setProductpaper} elevation={5}>
                {dberr && <Typography className={classes.seterrorlabel}>{dberr} </Typography>}
                {fetcherr && <Typography className={classes.seterrorlabel}>{fetcherr} </Typography>}
                {dbAdderr && <Typography className={classes.seterrorlabel}>{dbAdderr} </Typography>}
                {dbDeleteerr && <Typography className={classes.seterrorlabel}>{dbDeleteerr} </Typography>}
                <Typography className={classes.setlabel}>URL :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="url" InputLabelProps={{shrink: false}} value={upid ? upurl : url} onChange={upid ? handleupurl : handleurl} />
                {error.upurl && <Typography className={classes.seterrorlabel}>{error.upurl} </Typography>} {error.url && <Typography className={classes.seterrorlabel}>{error.url} </Typography>} <Typography className={classes.setlabel}>Title :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="title" InputLabelProps={{shrink: false}} value={upid ? uptitle : title} onChange={upid ? handleuptitle : handletitle} />
                {error.uptitle && <Typography className={classes.seterrorlabel}>{error.upurl} </Typography>} {error.title && <Typography className={classes.seterrorlabel}>{error.url} </Typography>} <Typography className={classes.setlabel}>Description :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="description" InputLabelProps={{shrink: false}} value={upid ? updescription : description} onChange={upid ? handleupdescription : handledescription} />
                {error.updescription && <Typography className={classes.seterrorlabel}>{error.updescription} </Typography>} {error.description && <Typography className={classes.description}>{error.url} </Typography>} <Typography className={classes.setlabel}>Key :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="key" InputLabelProps={{shrink: false}} value={upid ? upkey : key} onChange={upid ? handleupkey : handlekey} />
                {error.upkey && <Typography className={classes.seterrorlabel}>{error.upkey} </Typography>} {error.key && <Typography className={classes.seterrorlabel}>{error.key} </Typography>} <Typography className={classes.setlabel}>Schema :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} multiline placeholder="sc" rows={3} rowsMax={5} InputLabelProps={{shrink: false}} value={upid ? upschema : schema} onChange={upid ? handleupschema : handleschema} />
                {error.upschema && <Typography className={classes.seterrorlabel}>{error.upschema} </Typography>} {error.schema && <Typography className={classes.seterrorlabel}>{error.schema} </Typography>}{" "}
                <div className={classes.setsendbutton}>
                  {upid && (
                    <Button className={classes.setstateclear} onClick={handleeditdataremove}>
                      clear
                    </Button>
                  )}
                  {upid ? (
                    <Button variant="contained" size="medium" className={classes.setsendbtninside} onClick={handlesenddata}>
                      update
                    </Button>
                  ) : (
                    <Button variant="contained" size="medium" className={classes.setsendbtninside} onClick={handlesenddata}>
                      Add
                    </Button>
                  )}
                </div>
              </Paper>
            </Grid>
            {/* {courieLIst.length > 0 && ( */}
            <Grid item xs={12} sm={8} className={classes.setinputlayout}>
              <Paper className={classes.setProductpaper} elevation={5}>
                {/* {deleteCou && (
                  <Typography className={classes.seterrorlabel}>
                    {deleteCou}{" "}
                  </Typography>
                )} */}
                <TableContainer>
                  <Table className={classes.settable} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" className={classes.tableth}>
                          No.
                        </TableCell>
                        <TableCell align="center" className={classes.tableth}>
                          URL
                        </TableCell>
                        <TableCell align="center" className={classes.tableth}>
                          Title
                        </TableCell>
                        <TableCell align="center" className={classes.tableth}>
                          Description
                        </TableCell>
                        <TableCell align="center" className={classes.tableth}>
                          Key
                        </TableCell>
                        {/* <TableCell align="center" className={classes.tableth}>
                        Schema
                      </TableCell> */}
                        <TableCell align="center" className={classes.tableth}>
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {metaList.map((e, index) => {
                        return (
                          <StyledTableRow>
                            <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                              {index + 1}
                            </StyledTableCell>
                            <StyledTableCell className={classes.tabletd} align="center">
                              {e.url}
                            </StyledTableCell>
                            <StyledTableCell className={classes.tabletd} align="center">
                              {e.title}
                            </StyledTableCell>
                            <StyledTableCell className={classes.tabletd} align="center">
                              {e.description}
                            </StyledTableCell>
                            <StyledTableCell className={classes.tabletd} align="center">
                              {e.key}
                            </StyledTableCell>
                            {/* <StyledTableCell className={classes.tabletd} align="center">
                            {e.schema}
                          </StyledTableCell> */}
                            <StyledTableCell className={classes.tabletdicon} align="center">
                              <div className={classes.seticondiv}>
                                <div>
                                  <Tooltip title="Edit">
                                    <i
                                      className="fa fa-pencil"
                                      aria-hidden="true"
                                      // className={classes.seteditincon}
                                      onClick={() => handleedit(e)}
                                    />
                                  </Tooltip>
                                </div>
                                <div>
                                  <Tooltip title="Remove">
                                    <i
                                      className="fa fa-trash"
                                      aria-hidden="true"
                                      //  className={classes.setdeleteincon}
                                      onClick={() => handledelete(e._id)}
                                    />
                                  </Tooltip>
                                </div>
                              </div>
                            </StyledTableCell>
                          </StyledTableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            {/* )} */}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default MetaList;
