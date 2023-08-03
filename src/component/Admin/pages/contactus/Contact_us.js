import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useMuiStyle from "../../CommonComponent/MuiStyle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {TableContainer} from "@mui/material";
import {styled} from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import {api} from "../../../common/Axios";
import Pagination from "@mui/material/Pagination";
import {useHistory} from "react-router-dom";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../../assets/images/logo-removebg-preview.webp";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import closeimg from "../../../../assets/images/close.png";

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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const Contact_us = () => {
  const classes = useMuiStyle();
  const [contactList, setContactList] = useState([]);
  const [rowperpage, setRowperpage] = useState("10");
  const [viewData, setViewData] = useState([]);
  const [page, setPage] = useState("1");
  const [count, setCount] = useState("");
  const [dbDeleteerr, setDbDeleteerr] = useState("");
  const [fetcherr, setFetcherr] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const fetchHiredata = (pagenumber, rowperpage) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("pageNumber", pagenumber);
    formData.append("page_size", rowperpage);
    api
      .post("contactus/contact-list", formData)
      .then((result) => {
        setLoading(false);
        setCount(result.data.totalPages);
        setContactList(result.data.result);
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
    fetchHiredata(1, rowperpage);
  }, []);

  const handleChange = (e, value) => {
    setPage(value);
    fetchHiredata(value, rowperpage);
  };

  const handledelete = (e) => {
    setLoading(true);

    api
      .delete(`contactus/contact_delete/${e}`)
      .then((result) => {
        fetchHiredata(page, rowperpage);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setDbDeleteerr(err.response.data.error);
      });
  };
  const handlesetRowperpageChange = (e) => {
    const onpage = e.target.value;
    setRowperpage(e.target.value);
    setPage(1);
    fetchHiredata("1", onpage);
  };

  const handleedit = (data) => {
    setOpen(true);
    setViewData(data);
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
              Contact
            </Typography>
          </div>
          <Paper className={classes.setProductpaper} elevation={5}>
            {dbDeleteerr && <Typography className={classes.seterrorlabel}>{dbDeleteerr} </Typography>}
            {fetcherr && <Typography className={classes.seterrorlabel}>{fetcherr} </Typography>}

            <TableContainer>
              <Table className={classes.settable} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.tableth}>
                      No.
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Date.
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Name
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Email
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Phone
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Subject
                    </TableCell>
                    {/* <TableCell align="center" className={classes.tableth}>
                    Help
                  </TableCell> */}
                    <TableCell align="center" className={classes.tableth}>
                      Ip Address
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Operater
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Browser & version
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contactList.map((e, index) => {
                    return (
                      <StyledTableRow>
                        <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                          {index + 1}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                          {new Date(e.date).toLocaleDateString("en-GB")}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                          {e.name}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                          {e.email}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                          {e.contact}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                          {e.subject}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                          {e.ip}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                          {e.mobile === true ? "Mobile" : "Desktop"}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                          {e.browsernm_browsever}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                          {/* <Tooltip title="Remove">
                          <i className="fa fa-trash" aria-hidden="true" onClick={() => handledelete(e._id)} />
                        </Tooltip> */}
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
            </TableContainer>
          </Paper>
        </div>

        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box className="handle_portfolio_modal_mui contact_modal">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {viewData.name}
              </h5>
              <div onClick={handleClose} style={{cursor: "pointer"}}>
                <img src={closeimg} alt="car1" />
              </div>
            </div>{" "}
            <div className="modal-body" style={{border: "none", boxShadow: "none"}}>
              <div className={classes.handleContactmodel}>
                <h6 style={{minWidth:"120px"}}>Date : </h6>
                <p className={classes.handlep}>{new Date(viewData.date).toLocaleDateString("en-GB")}</p>
              </div>
              <hr />
              <div className={classes.handleContactmodel}>
                <h6 style={{minWidth:"120px"}}>Email : </h6>
                <p className={classes.handlep}>{viewData.email}</p>
              </div>
              <hr />
              <div className={classes.handleContactmodel}>
                <h6 style={{minWidth:"120px"}}>Subject : </h6>
                <p className={classes.handlep}>{viewData.subject}</p>
              </div>
              <hr />
              <div className={classes.handleContactmodel}>
                <h6 style={{minWidth:"120px"}}>Work Detail : </h6>
                <p className={classes.handlep}>{viewData.help}</p>
              </div>
            </div>
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default Contact_us;
