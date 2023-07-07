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
import axios from "../../../common/Axios";
import Pagination from "@mui/material/Pagination";
import { useHistory } from 'react-router-dom';
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

const Hireus = () => {
  const [hireList, setHireList] = useState([]);
  const [perpage, setPerPage] = useState("10");
  const [page, setPage] = useState("1");
  const [count, setCount] = useState("");
  const [dbDeleteerr, setDbDeleteerr] = useState('');
  const [fetcherr, setFetcherr] = useState('')
  const classes = useMuiStyle();
  var token = localStorage.getItem("ssAdmin");

  const fetchHiredata = (pagenumber, pagesize) => {
    const formData = new FormData();
    formData.append("pageNumber", pagenumber);
    formData.append("page_size", pagesize);
    axios
      .post("hire/hire-list", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((result) => {
        setHireList(result.data.result);
        setCount(result.data.totalPages);
      })
      .catch((err) => {
        setFetcherr(err.response.data.error)
      });
  };

  useEffect(() => {
    fetchHiredata(1, perpage);
  }, []);

  const handleChange = (e, value) => {
    setPage(value);
    fetchHiredata(value, perpage);
  };
  const handledelete = (e) => {
    axios
      .delete(`hire/hire_delete/${e}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: token,
        },
      })
      .then((result) => {
        fetchHiredata(page, perpage);
      })
      .catch((err) => {
        setDbDeleteerr(err.response.data.error);
      });
  };
  return (
    <>
      <Container component="main" maxWidth="xl" className={classes.setcontainer}>
        <div className={classes.setpageheading}>
          <Typography variant="h4" gutterBottom className={classes.setheading}>
            Hire
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
                    Name
                  </TableCell>
                  <TableCell align="center" className={classes.tableth}>
                    Email
                  </TableCell>
                  <TableCell align="center" className={classes.tableth}>
                    Phone
                  </TableCell>
                  <TableCell align="center" className={classes.tableth}>
                    Language
                  </TableCell>
                  <TableCell align="center" className={classes.tableth}>
                    Work Details
                  </TableCell>
                  <TableCell align="center" className={classes.tableth}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hireList.map((e, index) => {
                  let technolenght = e.technology.length - 1;
                  return (
                    <StyledTableRow>
                      <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                        {index + 1}
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
                      <StyledTableCell align="center" component="th" scope="row" className={`${classes.tabletd} d-flex justify-content-center`}>
                        {e.technology.map((data, index) => {
                          if (technolenght === index) {
                            return (
                              <>
                                <p className="handelmobileh6">{data}</p>
                              </>
                            );
                          } else {
                            return (
                              <>
                                <p className="handelmobileh6">{data} ,</p>
                              </>
                            );
                          }
                        })}
                      </StyledTableCell>
                      <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                        {e.work_detai}
                      </StyledTableCell>
                      <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                        <Tooltip title="Remove">
                          <i
                            className="fa fa-trash"
                            aria-hidden="true"
                            //  className={classes.setdeleteincon}
                            onClick={() => handledelete(e._id)}
                          />
                        </Tooltip>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
            <div className="d-flex justify-content-end mt-3">
              <Pagination count={count} page={page} onChange={handleChange} variant="outlined" shape="rounded" color="primary" />
            </div>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
};

export default Hireus;
