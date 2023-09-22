import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableContainer } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { api } from "../../../Axios";
import Loader from "@/Component/loader";
import { useRouter } from "next/router";
import styles from "../../common/common.module.css";

// import Textarea from '@mui/joy/Textarea';

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
  const router = useRouter();
  const fetchHiredata = () => {
    api
      .get("meta/meta_list_server",{
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
      .then((result) => {
        setLoading(false);
        seMetaList(result.data.result);
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
    setError([]);
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
    setError([]);
  };
  const handlesenddata = (e) => {
    if (upid) {
      if (!upurl || !uptitle || !updescription || !upkey || !upschema) {
        if (!upurl) {
          error.upurl = "Required !!";
        } else {
          error.upurl = "";
        }
        if (!uptitle) {
          error.uptitle = "Required !!";
        } else {
          error.uptitle = "";
        }
        if (!updescription) {
          error.updescription = "Required !!";
        } else {
          error.updescription = "";
        }
        if (!upkey) {
          error.upkey = "Required !!";
        } else {
          error.upkey = "";
        }

        setError({ ...error, [e.target.name]: e.target.value });
        setTimeout(() => {
          setError([]);
        }, 3000);
      } else {
        setLoading(true);

        const formData = new FormData();
        formData.append("url", upurl);
        formData.append("title", uptitle);
        formData.append("description", updescription);
        formData.append("key", upkey);
        formData.append("schema", upschema);

        api
          .put(`meta/meta_update/${upid}`, formData, {
            headers: {
              Authorization: localStorage.getItem("ssAdmin"),
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
      if (!url || !title || !description || !key) {
        if (!url) {
          error.url = "Required !!";
        } else {
          error.url = "";
        }
        if (!title) {
          error.title = "Required !!";
        } else {
          error.title = "";
        }
        if (!description) {
          error.description = "Required !!";
        } else {
          error.description = "";
        }
        if (!key) {
          error.key = "Required !!";
        } else {
          error.key = "";
        }

        setError({ ...error, [e.target.name]: e.target.value });
        setTimeout(() => {
          setError([]);
        }, 3000);
      } else {
        setLoading(true);

        let formData = new FormData();
        formData.append("url", url);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("key", key);
        formData.append("schema", schema);

        api
          .post("meta/meta_add", formData, {
            headers: {
              Authorization: localStorage.getItem("ssAdmin"),
            },
          })
          .then((result) => {
            fetchHiredata();
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setDbAdderr(err.response.data.error);
            setTimeout(() => {
              setDbAdderr("");
            }, 3000);
          });
      }
    }
  };

  const handledelete = (e) => {
    setLoading(true);

    api
      .delete(`meta/meta_delete/${e}`, {
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
      .then((result) => {
        fetchHiredata();
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setDbDeleteerr(err.response.data.error);
        setTimeout(() => {
          setDbDeleteerr("");
        }, 3000);
      });
  };
  return (
    <>
      <Container component="main" maxWidth="xl" className={styles.setcontainer}>
        {loading.toString() === "true" && <Loader />}
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
          <div className={styles.setpageheading}>
            <Typography variant="h4" gutterBottom className={styles.setheading}>
              Meta
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} className="setinputlayout">
              <Paper className={styles.setProductpaper} elevation={5}>
                {dberr && <Typography className={styles.setProductpaper}>{dberr} </Typography>}
                {fetcherr && <Typography className={styles.setProductpaper}>{fetcherr} </Typography>}
                {dbAdderr && <Typography className={styles.setProductpaper}>{dbAdderr} </Typography>}
                {dbDeleteerr && <Typography className={styles.setProductpaper}>{dbDeleteerr} </Typography>}
                <Typography className={styles.setlabel}>URL :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" placeholder="url" InputLabelProps={{ shrink: false }} value={upid ? upurl : url} onChange={upid ? handleupurl : handleurl} />
                {error.upurl && <Typography className={styles.setProductpaper}>{error.upurl} </Typography>} {error.url && <Typography className={styles.setProductpaper}>{error.url} </Typography>}
                <Typography className={styles.setlabel}>Title :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" placeholder="title" InputLabelProps={{ shrink: false }} value={upid ? uptitle : title} onChange={upid ? handleuptitle : handletitle} />
                {error.uptitle && <Typography className={styles.setProductpaper}>{error.uptitle} </Typography>} {error.title && <Typography className={styles.setProductpaper}>{error.title} </Typography>}
                <Typography className={styles.setlabel}>Description :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" placeholder="description" InputLabelProps={{ shrink: false }} value={upid ? updescription : description} onChange={upid ? handleupdescription : handledescription} />
                {error.updescription && <Typography className={styles.setProductpaper}>{error.updescription} </Typography>} {error.description && <Typography className={styles.setProductpaper}>{error.description} </Typography>}
                <Typography className={styles.setlabel}>Key :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" placeholder="key" InputLabelProps={{ shrink: false }} value={upid ? upkey : key} onChange={upid ? handleupkey : handlekey} />
                {error.upkey && <Typography className={styles.setProductpaper}>{error.upkey} </Typography>} {error.key && <Typography className={styles.setProductpaper}>{error.key} </Typography>}
                <Typography className={styles.setlabel}>Schema :</Typography>
                <TextField id="outlined-basic" size="small" variant="outlined" className="settextfield" multiline placeholder="sc" rows={3} rowsMax={5} InputLabelProps={{ shrink: false }} value={upid ? upschema : schema} onChange={upid ? handleupschema : handleschema} />
                {error.upschema && <Typography className={styles.setProductpaper}>{error.upschema} </Typography>} {error.schema && <Typography className={styles.setProductpaper}>{error.schema} </Typography>}{" "}
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
            <Grid item xs={12} sm={8} className="setinputlayout">
              <Paper className={styles.setProductpaper} elevation={5}>
                <TableContainer>
                  <Table className="settable" aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" className={styles.tableth}>
                          No.
                        </TableCell>
                        <TableCell align="center" className={styles.tableth}>
                          URL
                        </TableCell>
                        <TableCell align="center" className={styles.tableth}>
                          Title
                        </TableCell>
                        <TableCell align="center" className={styles.tableth}>
                          Description
                        </TableCell>
                        <TableCell align="center" className={styles.tableth}>
                          Key
                        </TableCell>
                        <TableCell align="center" className={styles.tableth}>
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {metaList.map((e, index) => {
                        return (
                          <StyledTableRow>
                            <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                              {index + 1}
                            </StyledTableCell>
                            <StyledTableCell className={styles.tabletd} align="center">
                              {e.url}
                            </StyledTableCell>
                            <StyledTableCell className={styles.tabletd} align="center">
                              {e.title}
                            </StyledTableCell>
                            <StyledTableCell className={styles.tabletd} align="center">
                              {e.description}
                            </StyledTableCell>
                            <StyledTableCell className={styles.tabletd} align="center">
                              {e.key}
                            </StyledTableCell>
                            <StyledTableCell className="tabletdicon" align="center">
                              <div className="seticondiv">
                                <div>
                                  <Tooltip title="Edit">
                                    <i className="fa fa-pencil" aria-hidden="true" onClick={() => handleedit(e)} />
                                  </Tooltip>
                                </div>
                                <div>
                                  <Tooltip title="Remove">
                                    <i className="fa fa-trash" aria-hidden="true" onClick={() => handledelete(e._id)} />
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
