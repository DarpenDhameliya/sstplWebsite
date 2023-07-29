/* eslint-disable no-unused-vars */
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
import axios, { api, apiimg } from "../../../common/Axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {useHistory} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import logo from "../../../../assets/images/logo-removebg-preview.webp";

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
const TestimonialList = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [upid, setUpid] = useState("");
  const [name, setName] = useState("");
  const [upname, setUpname] = useState("");
  const [position, setPosition] = useState("");
  const [upposition, setUpposition] = useState("");
  const [upviewpo, setUpviewpo] = useState("");
  const [viewpo, setViewpo] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [discription, setDiscription] = useState("");
  const [updiscription, setUpdiscription] = useState("");
  const [sendImage, setSendImage] = useState("");
  const [imgpre, setImgpre] = useState(false);
  const [image, setImage] = useState("");
  const [upImage, setUpImage] = useState("");
  const [imgdisplay, setImgdisplay] = useState([]);
  const [upImgdisplay, setUpImgdisplay] = useState([]);
  const [upimgpre, setUpImgpre] = useState(true);
  const [selectedImage, setselectedImage] = useState("");
  const [upSendImage, setUpSendImage] = useState("");
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState("1");
  const [count, setCount] = useState("");
  const [rowperpage, setRowperpage] = useState("10");
  const [dberr, setDberr] = useState("");
  const [dbAdderr, setDbAdderr] = useState("");
  const [deleterr, setDeleterr] = useState("");
  const [fetcherr, setFetcherr] = useState("");
  const classes = useMuiStyle();
  const history = useHistory();

  var token = localStorage.getItem("ssAdmin");
  const handlesenddata = (e) => {
    if (upid) {
      let formData = new FormData();
      formData.append("name", upname);
      formData.append("position", upposition);
      formData.append("discription", updiscription);
      formData.append("contentview", selectedValue);
      formData.append("contentpositionview", upviewpo);
      formData.append("file", upImgdisplay.length > 0 ? upSendImage : upImage);
      if (!upname || !upposition || !updiscription || !upviewpo || !selectedValue) {
        if (!upname) {
          error.upname = "required !!";
        }
        if (!upposition) {
          error.upposition = "required !!";
        }
        if (!updiscription) {
          error.updiscription = "required !!";
        }
        if (!upviewpo) {
          error.upviewpo = "required !!";
        }
        if (!selectedValue) {
          error.upimage = "Required !!";
        }
        setError({...error, [e.target.name]: e.target.value});
        setTimeout(() => {
          setError([]);
        }, 3000);
      } else {
        setLoading(true);

        apiimg
          .post(`testimonial/testimonial_update/${upid}`, formData)
          .then((result) => {
            fetchHiredata(page, rowperpage);
            setName("");
            setPosition("");
            setDiscription("");
            setSelectedValue("");
            setViewpo("");
            setUpid("");
            upImage("");
            setSendImage("");
            setLoading(false);

          })
          .catch((err) => {
            setLoading(false);
            setDberr(err.response.data.error);
          });
      }
    } else {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("position", position);
      formData.append("discription", discription);
      formData.append("contentview", selectedValue);
      formData.append("contentpositionview", viewpo);
      formData.append("file", sendImage);
      if (!name || !position || !discription || !viewpo || !sendImage || !selectedValue) {
        if (!name) {
          error.name = "required !!";
        }
        if (!position) {
          error.position = "required !!";
        }
        if (!discription) {
          error.discription = "required !!";
        }
        if (!viewpo) {
          error.viewpo = "required !!";
        }
        if (!sendImage) {
          error.sendImage = "required !!";
        }
        if (!selectedValue) {
          error.addimage = "Required !!";
        }

        setError({...error, [e.target.name]: e.target.value});
        setTimeout(() => {
          setError([]);
        }, 3000);
      } else {
        setLoading(true);

        apiimg
          .post("testimonial/testimonial_add", formData)
          .then((result) => {
            fetchHiredata(page, rowperpage);
            setName("");
            setPosition("");
            setDiscription("");
            setSelectedValue("");
            setViewpo("");
            handlemodel();
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setDbAdderr(err.response.data.error);
          });
      }
    }
  };

  const fetchHiredata = (pagenumber, rowperpage) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("pageNumber", pagenumber);
    formData.append("page_size", rowperpage);
    api
      .post("testimonial/testimonial_list", formData)
      .then((result) => {
        setLoading(false);
        setCount(result.data.totalPages);
        setPortfolioList(result.data.result);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 402) {
          localStorage.removeItem("ssAdmin");
          history.push("/online-admin");
        }
        setFetcherr(err.response.data.error);
        setTimeout(() => {
          setFetcherr("");
        }, 3000);
      });
  };

  useEffect(() => {
    fetchHiredata("1", rowperpage);
  }, []);

  const handleedit = (e) => {
    setUpid(e._id);
    setUpname(e.name);
    setUpposition(e.position);
    setUpdiscription(e.discription);
    setSelectedValue(e.contentview);
    setUpviewpo(e.contentpositionview);
    setUpImage(e.image);
  };

  const handledelete = (e) => {
    setLoading(true);
    api
      .delete(`testimonial/testimonial_delete/${e}`)
      .then((result) => {
        setLoading(false);
        fetchHiredata(page, rowperpage);
      })
      .catch((err) => {
        setLoading(false);
        setDeleterr(err.response.data.error);
      });
  };
  const handleeditdataremove = () => {
    setUpid("");
    setSelectedValue("");
  };
  const handleviewpo = (e) => {
    setViewpo(e.target.value);
  };
  const handleposition = (e) => {
    setPosition(e.target.value);
  };
  const handlename = (e) => {
    setName(e.target.value);
  };
  const handleupviewpo = (e) => {
    setUpviewpo(e.target.value);
  };
  const handleupposition = (e) => {
    setUpposition(e.target.value);
  };
  const handleupname = (e) => {
    setUpname(e.target.value);
  };
  const handlepdiscription = (e) => {
    setDiscription(e.target.value);
  };
  const handlepupdiscription = (e) => {
    setUpdiscription(e.target.value);
  };
  const imagehandle = (e) => {
    let addImage = e.target.files[0];
    setSendImage(addImage);
    let displayImg = URL.createObjectURL(e.target.files[0]);
    setImgdisplay(displayImg);
    setImgpre(true);
  };
  const imageuphandle = (e) => {
    let addImage = e.target.files[0];
    setUpSendImage(addImage);
    let displayImg = URL.createObjectURL(e.target.files[0]);
    setUpImgdisplay(displayImg);
    setUpImgpre(true);
  };
  const handlemodel = () => {
    setSendImage("");
    setImgdisplay("");
    setImgpre(false);
    // document.getElementById("handleimagetext").value = null;
  };
  const handleupmodel = () => {
    setUpSendImage("");
    setUpImgdisplay("");
    setUpImgpre(false);
  };

  const handleChange = (e, value) => {
    setPage(value);
    fetchHiredata(value, rowperpage);
  };

  const handlesetRowperpageChange = (e) => {
    const onpage = e.target.value;
    setRowperpage(e.target.value);
    setPage(1);
    fetchHiredata("1", onpage);
  };
  return (
    <>
      <Container component="main" maxWidth="xl" className={classes.setcontainer}>
      {loading.toString() === 'true' && (
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
            Testimonial
          </Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} className={classes.setinputlayout}>
            <Paper className={classes.setProductpaper} elevation={5}>
              {dberr && <Typography className={classes.seterrorlabel}>{dberr} </Typography>}
              {fetcherr && <Typography className={classes.seterrorlabel}>{fetcherr} </Typography>}
              {dbAdderr && <Typography className={classes.seterrorlabel}>{dbAdderr} </Typography>}
              {deleterr && <Typography className={classes.seterrorlabel}>{deleterr} </Typography>}
              <Typography className={classes.setlabel}>Name :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="name" InputLabelProps={{shrink: false}} value={upid ? upname : name} onChange={upid ? handleupname : handlename} />
              {error.upname && <Typography className={classes.seterrorlabel}>{error.upname} </Typography>}
              {error.name && <Typography className={classes.seterrorlabel}>{error.name} </Typography>}
              <Typography className={classes.setlabel}>position :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="position" InputLabelProps={{shrink: false}} value={upid ? upposition : position} onChange={upid ? handleupposition : handleposition} />
              {error.position && <Typography className={classes.seterrorlabel}>{error.position} </Typography>}
              {error.upposition && <Typography className={classes.seterrorlabel}>{error.upposition} </Typography>}
              <Typography className={classes.setlabel}>Discription :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="discription" multiline InputLabelProps={{shrink: false}} value={upid ? updiscription : discription} onChange={upid ? handlepupdiscription : handlepdiscription} />
              {error.updiscription && <Typography className={classes.seterrorlabel}>{error.updiscription} </Typography>}
              {error.discription && <Typography className={classes.seterrorlabel}>{error.discription} </Typography>}
              <Typography className={classes.setlabel}>view in home :</Typography>
              <RadioGroup aria-labelledby="demo-radio-buttons-group-label" row name="radio-buttons-group" value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                <FormControlLabel value="true" control={<Radio />} label="true" />
                <FormControlLabel value="false" control={<Radio />} label="false" />
              </RadioGroup>
              {error.upimage && <Typography className={classes.seterrorlabel}>{error.upimage} </Typography>}
              {error.addimage && <Typography className={classes.seterrorlabel}>{error.addimage} </Typography>}
              <Typography className={classes.setlabel}>View position in home :</Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" className={classes.settextfield} placeholder="position for homr" InputLabelProps={{shrink: false}} value={upid ? upviewpo : viewpo} onChange={upid ? handleupviewpo : handleviewpo} />
              {error.upviewpo && <Typography className={classes.seterrorlabel}>{error.upviewpo} </Typography>}
              {error.viewpo && <Typography className={classes.seterrorlabel}>{error.viewpo} </Typography>}
              <Typography className={classes.setlabel}>image :</Typography>
              {upid ? (
                <>
                  <TextField id="outlined-basic" size="small" variant="outlined" onChange={imageuphandle} type="file" className={classes.settextfield} style={{width: "100%"}} placeholder="image" value={selectedImage} />
                  {error.containView && <Typography className={classes.seterrorlabel}>{error.containView} </Typography>}
                  {upimgpre && (
                    <Card sx={{maxWidth: "250px"}}>
                      <CardMedia component="img" src={upImgdisplay.length > 0 ? upImgdisplay : upImage} className={classes.setdisimage} />
                      <Button className={classes.setdelbtn} onClick={handleupmodel}>
                        Delete
                      </Button>
                    </Card>
                  )}{" "}
                </>
              ) : (
                <>
                  <TextField id="outlined-basic" size="small" variant="outlined" onChange={imagehandle} type="file" className={classes.settextfield} style={{width: "100%"}} placeholder="image" value={image} />
                  {error.containView && <Typography className={classes.seterrorlabel}>{error.containView} </Typography>}
                  {imgpre && (
                    <Card sx={{maxWidth: "250px"}}>
                      <CardMedia component="img" src={imgdisplay} className={classes.setdisimage} />
                      <Button
                        // endIcon={<DeleteIcon />}
                        className={classes.setdelbtn}
                        onClick={handlemodel}
                      >
                        Delete
                      </Button>
                    </Card>
                  )}
                </>
              )}
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
          <Grid item xs={12} sm={8} className={classes.setinputlayout}>
            <Paper className={classes.setProductpaper} elevation={5}>
              {fetcherr && <Typography className={classes.seterrorlabel}>{fetcherr} </Typography>}

              <TableContainer>
                <Table className={classes.settable} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" className={classes.tableth}>
                        No.
                      </TableCell>
                      <TableCell align="center" className={classes.tableth}>
                        Name
                      </TableCell>
                      <TableCell align="center" className={classes.tableth}>
                        position
                      </TableCell>
                      <TableCell align="center" className={classes.tableth}>
                        contentview
                      </TableCell>
                      <TableCell align="center" className={classes.tableth}>
                        View position
                      </TableCell>
                      <TableCell align="center" className={classes.tableth}>
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {portfolioList.map((e, index) => {
                      return (
                        <StyledTableRow>
                          <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell className={classes.tabletd} align="center">
                            {e.name}
                          </StyledTableCell>
                          <StyledTableCell className={classes.tabletd} align="center">
                            {e.position}
                          </StyledTableCell>
                          <StyledTableCell className={classes.tabletd} align="center">
                            {e.contentview === true ? "Yes" : "No"}
                          </StyledTableCell>
                          <StyledTableCell className={classes.tabletd} align="center">
                            {e.contentpositionview}
                          </StyledTableCell>

                          <StyledTableCell className={classes.tabletdicon} align="center">
                            <div className={classes.seticondiv}>
                              <div>
                                <Tooltip title="Edit">
                                  <i aria-hidden="true" className={`${classes.seteditincon} fa fa-pencil fs-17`} onClick={() => handleedit(e)} />
                                </Tooltip>
                              </div>
                              <div>
                                <Tooltip title="Remove">
                                  <i aria-hidden="true" className={`${classes.setdeleteincon} fa fa-trash ml-1 fs-17`} onClick={() => handledelete(e._id)} />
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
              <div className={classes.setpaginationdiv}>
                <div className={classes.setrowperpage}>
                  <Typography className={classes.setlabelrow}>Rows per page :</Typography>
                  <TextField size="small" select className={classes.textField} value={rowperpage} onChange={handlesetRowperpageChange} InputLabelProps={{shrink: false}} margin="normal" variant="outlined">
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="20">20.</MenuItem>
                    <MenuItem value="50">50.</MenuItem>
                  </TextField>
                </div>
                <Pagination count={count} page={page} onChange={handleChange} variant="outlined" shape="rounded" color="primary" />
              </div>
            </Paper>
          </Grid>
        </Grid>
        </div>
        {/* )} */}
      </Container>
    </>
  );
};

export default TestimonialList;
