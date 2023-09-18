/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableContainer } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import  { api, apiimg } from "../../../Axios";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useRouter } from "next/router";
import Loader from "@/Component/loader";
import dynamic from "next/dynamic";
import styles from '../../common/common.module.css'

const CommonPagination = dynamic(() => import("../../common/pagination"), { ssr: false });

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DynemicLogo = () => {
  const [logoList, setLogoList] = useState([]);
  const [upid, setUpid] = useState("");
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
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState("1");
  const [count, setCount] = useState("");
  const [rowperpage, setRowperpage] = useState("10");
  const [dberr, setDberr] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [dbAdderr, setDbAdderr] = useState("");
  const [deleterr, setDeleterr] = useState("");
  const [fetcherr, setFetcherr] = useState("");
  const router = useRouter();

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
  };

  const handlesenddata = (e) => {
    if (upid) {
      let formData = new FormData();
      formData.append("date", selectedDate);
      formData.append("file", upImgdisplay.length > 0 ? upSendImage : upImage);
      if (!selectedDate) {
        if (!selectedDate) {
          error.date = "required !!";
        }
        setError({ ...error, [e.target.name]: e.target.value });
        setTimeout(() => {
          setError([]);
        }, 3000);
      } else {
        setLoading(true);

        apiimg
          .post(`logo/logo_update/${upid}`, formData , {
            headers: {
              Authorization: localStorage.getItem("ssAdmin"),
            },
          })
          .then((result) => {
            fetchHiredata(page, rowperpage);
            setSelectedDate("");
            setUpSendImage("");
            handleupmodel();
            setUpImage("");
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setDberr(err.response.data.error);
            setTimeout(() => {
              setDberr('')
            }, 3000);
          });
      }
    } else {
      let formData = new FormData();
      formData.append("date", selectedDate);
      formData.append("file", sendImage);
      if (!selectedDate || !sendImage) {
        if (!selectedDate) {
          error.date = "required !!";
        }
        if (!sendImage) {
          error.image = "required !!";
        }

        setError({ ...error, [e.target.name]: e.target.value });
        setTimeout(() => {
          setError([]);
        }, 3000);
      } else {
        setLoading(true);
        apiimg
          .post("logo/logo_add", formData,{
            headers: {
              Authorization: localStorage.getItem("ssAdmin"),
            },
          })
          .then((result) => {
            fetchHiredata(page, rowperpage);
            setSelectedDate("");
            handlemodel();
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            // setDbAdderr(err.response.data.error);
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
      .post("logo/logo_list", formData,{
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
      .then((result) => {
        setLoading(false);
        setCount(result.data.totalPages);
        setLogoList(result.data.result);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 401) {
          localStorage.removeItem("ssAdmin");
          router.push("/online-admin");
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
    setSelectedDate(e.date.slice(0, 10));
    setUpImage(e.image);
  };

  const handledelete = (e) => {
    setLoading(true);
    api
      .delete(`logo/logo_delete/${e}`,{
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
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
    setSelectedDate("");
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
      <Container component="main" maxWidth="xl" className={styles.setcontainer}>
        {loading.toString() === "true" && <Loader />}
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
          <div className={styles.setpageheading}>
            <Typography variant="h4" gutterBottom className={styles.setheading}>
              Festval Details
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} className='setinputlayout'>
              <Paper className={styles.setProductpaper} elevation={5}>
                {dberr && <Typography className={styles.setProductpaper}>{dberr} </Typography>}
                {fetcherr && <Typography className={styles.setProductpaper}>{fetcherr} </Typography>}
                {dbAdderr && <Typography className={styles.setProductpaper}>{dbAdderr} </Typography>}
                {deleterr && <Typography className={styles.setProductpaper}>{deleterr} </Typography>}
                <Typography className={styles.setlabel}>Date :</Typography>
                <input type="date" value={selectedDate} style={{ height: "45px" }} className='settextfielddate' onChange={handleDateChange} /> {error.name && <Typography className={styles.setProductpaper}>{error.name} </Typography>}
                <Typography className={styles.setlabel}>image :</Typography>
                {upid ? (
                  <>
                    <TextField id="outlined-basic" size="small" variant="outlined" onChange={imageuphandle} type="file" className='settextfield' style={{ width: "100%" }} placeholder="image" value={selectedImage} />
                    {error.containView && <Typography className={styles.setProductpaper}>{error.containView} </Typography>}
                    {upimgpre && (
                      <Card sx={{ maxWidth: "250px" }}>
                        <CardMedia component="img" src={upImgdisplay.length > 0 ? upImgdisplay : upImage} className='setdisimage' />
                        <Button className='setdelbtn' onClick={handleupmodel}>
                          Delete
                        </Button>
                      </Card>
                    )}{" "}
                  </>
                ) : (
                  <>
                    <TextField id="outlined-basic" size="small" variant="outlined" onChange={imagehandle} type="file" className='settextfield' style={{ width: "100%" }} placeholder="image" value={image} />
                    {error.containView && <Typography className={styles.setProductpaper}>{error.containView} </Typography>}
                    {imgpre && (
                      <Card sx={{ maxWidth: "250px" }}>
                        <CardMedia component="img" src={imgdisplay} className='setdisimage' />
                        <Button
                          // endIcon={<DeleteIcon />}
                          className='setdelbtn'
                          onClick={handlemodel}
                        >
                          Delete
                        </Button>
                      </Card>
                    )}
                  </>
                )}
                <div className={styles.setsendbutton}>
                  {upid && (
                    <Button className={styles.setstateclear} onClick={handleeditdataremove}>
                      clear
                    </Button>
                  )}
                  {upid ? (
                    <Button variant="contained" size="medium" className={styles.setsendbtninside} onClick={handlesenddata}>
                      update
                    </Button>
                  ) : (
                    <Button variant="contained" size="medium" className={styles.setsendbtninside} onClick={handlesenddata}>
                      Add
                    </Button>
                  )}
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8} className='setinputlayout'>
              <Paper className={styles.setProductpaper} elevation={5}>
                {fetcherr && <Typography className={styles.setProductpaper}>{fetcherr} </Typography>}

                <TableContainer>
                  <Table className='settable' aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" className={styles.tableth}>
                          No.
                        </TableCell>
                        <TableCell align="center" className={styles.tableth}>
                          Date
                        </TableCell>
                        <TableCell align="center" className={styles.tableth}>
                          Image
                        </TableCell>
                        <TableCell align="center" className={styles.tableth}>
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {logoList.map((e, index) => {
                        return (
                          <StyledTableRow>
                            <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                              {index + 1}
                            </StyledTableCell>
                            <StyledTableCell className={styles.tabletd} align="center">
                              {e.date.slice(0, 10)}
                            </StyledTableCell>
                            <StyledTableCell className={styles.tabletd} align="center">
                              <img src={e.image} alt="logo" />
                            </StyledTableCell>
                            <StyledTableCell className='tabletdicon' align="center">
                              <div className='seticondiv'>
                                <div>
                                  <Tooltip title="Edit">
                                    <i aria-hidden="true" className={` ${styles.seteditincon} fa fa-pencil fs-17`} onClick={() => handleedit(e)} />
                                  </Tooltip>
                                </div>
                                <div>
                                  <Tooltip title="Remove">
                                    <i aria-hidden="true" className={`'setdeleteincon' fa fa-trash ml-1 fs-17`} onClick={() => handledelete(e._id)} />
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
                <CommonPagination rowperpage={rowperpage}  handlesetRowperpageChange={handlesetRowperpageChange}  count={count}  page={page}  handleChange={handleChange}/>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default DynemicLogo;
