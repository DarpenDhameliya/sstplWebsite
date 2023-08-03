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
import axios, {api} from "../../../common/Axios";
import Pagination from "@mui/material/Pagination";
import {useHistory} from "react-router-dom";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../../assets/images/logo-removebg-preview.webp";
import {fetchDataFromApi} from "../Apicall";
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

const Career = () => {
  const classes = useMuiStyle();
  const [careerList, setCareerList] = useState([]);
  const [page, setPage] = useState("1");
  const [rowperpage, setRowperpage] = useState("10");
  const [count, setCount] = useState("");

  const [dbDeleteerr, setDbDeleteerr] = useState("");
  const [dberror, setDberror] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const fetchHiredata = async (pagenumber, rowperpage) => {
    setLoading(true);
    api
    .get(`authers/career-list/${pagenumber}/${rowperpage}`)
      .then((result) => {
        setLoading(false);
        if(typeof result.data.result !== 'string'){
          setCount(result.data.totalPages);
          setCareerList(result.data.result);
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 402) {
          localStorage.removeItem("ssAdmin");
          history.push("/online-admin");
        }
        setDberror(err.response.data.error);
        setTimeout(() => {
          setDberror('')
        }, 3000);
      });

    // const careerinq = await fetchDataFromApi({pagenumber, rowperpage});
    // if (careerinq.status === "done") {
    //   setLoading(false);
    //   if (typeof careerinq.result === "string") {
    //     console.log("string", careerList.length);
    //   } else {
    //     console.log("obj");
    //     setCount(careerinq.totalPages);
    //     setCareerList(careerinq.result);
    //   }
    // } else {
    //   setLoading(false);
    //   if (careerinq.status === 402) {
    //     localStorage.removeItem("ssAdmin");
    //     history.push("/online-admin");
    //   }
    //   setDberror(careerinq.data.error);
    //   setTimeout(() => {
    //     setDberror("");
    //   }, 3000);
    // }
  };

  useEffect(() => {
    fetchHiredata(1, rowperpage);
  }, []);

  const handleChange = (e, value) => {
    setPage(value);
    fetchHiredata(value, rowperpage);
  };
  const downloadPdf = (e) => {
    const pdfPath = e;

    const link = document.createElement("a");
    link.href = pdfPath;
    window.open(pdfPath, "_blank");
    link.download = ".pdf";
  };

  const handledelete = (e) => {
    setLoading(true);
    api
      .delete(`authers/career_delete/${e.id}`)
      .then((result) => {
        setLoading(false);
        fetchHiredata(page, rowperpage);
      })
      .catch((err) => {
        setLoading(false);
        setDbDeleteerr(err.response.data.error);
        setTimeout(() => {
          setDbDeleteerr("");
        }, 3000);
      });
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
              Career
            </Typography>
          </div>
          <Paper className={classes.setProductpaper} elevation={5}>
            {dbDeleteerr && <Typography className={classes.seterrorlabel}>{dbDeleteerr} </Typography>}
            {dberror && <Typography className={classes.seterrorlabel}>{dberror} </Typography>}
            <TableContainer>
              <Table className={classes.settable} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.tableth}>
                      No.
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                     Date
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
                      Apply For
                    </TableCell>
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
                      view Resume
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {careerList.length > 0 &&
                    careerList.map((e, index) => {
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
                            {e.apply_for}
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
                            <Button variant="contained" className={classes.setloginbutton} onClick={() => downloadPdf(e.resumedownload)}>
                              Resume
                            </Button>
                          </StyledTableCell>
                          <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                            <Tooltip title="Remove">
                              <i className="fa fa-trash" aria-hidden="true" onClick={() => handledelete(e)} />
                            </Tooltip>
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                </TableBody>
              </Table>

              {careerList.length > 0 && (
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
              )}
            </TableContainer>
          </Paper>
        </div>
      </Container>
    </>
  );
};

export default Career;
