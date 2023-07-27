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
import {useHistory} from "react-router-dom";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import logo from "../../../../assets/images/logo-removebg-preview.png";

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
const PortfolioList = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [deleterr, setDeleterr] = useState("");
  const [fetcherr, setFetcherr] = useState("");
  const [page, setPage] = useState("1");
  const [count, setCount] = useState("");
  const [rowperpage, setRowperpage] = useState("10");
  const classes = useMuiStyle();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  var token = localStorage.getItem("ssAdmin");
  const handlesenddata = () => {
    history.push("/online-admin/dashboard/portfolioadd");
  };

  const fetchHiredata = (pagenumber, rowperpage) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("pageNumber", pagenumber);
    formData.append("page_size", rowperpage);
    axios
      .post("portfolio/portfolio_list", formData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
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
    history.push(`/online-admin/dashboard/portfolioedit/${e}`);
  };

  const handledelete = (e) => {
    setLoading(true);
    axios
      .delete(`portfolio/portfolio_delete/${e}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
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
              Portfolio List
            </Typography>
            <Button variant="contained" size="medium" className={classes.setsendbtninside} onClick={handlesenddata}>
              Add
            </Button>
          </div>

          <Paper className={classes.setProductpaper} elevation={5}>
            {deleterr && <Typography className={classes.seterrorlabel}>{deleterr} </Typography>}
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
                      Industry
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Team
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Duration
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Country
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Technology
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      Category
                    </TableCell>
                    <TableCell align="center" className={classes.tableth}>
                      HomePage View
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
                          {e.industry}
                        </StyledTableCell>
                        <StyledTableCell className={classes.tabletd} align="center">
                          {e.team}
                        </StyledTableCell>
                        <StyledTableCell className={classes.tabletd} align="center">
                          {e.duration}
                        </StyledTableCell>
                        <StyledTableCell className={classes.tabletd} align="center">
                          {e.country}
                        </StyledTableCell>
                        <StyledTableCell className={classes.tabletd} align="center">
                          {e.technology}
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
                                <i aria-hidden="true" className={`${classes.seteditincon} fa fa-pencil fs-17`} onClick={() => handleedit(e._id)} />
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
        </div>
        {/* )} */}
      </Container>
    </>
  );
};

export default PortfolioList;
