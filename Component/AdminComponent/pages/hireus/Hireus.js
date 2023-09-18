import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableContainer } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { api } from "../../../Axios";
import { useRouter } from "next/router";
import Loader from "@/Component/loader";
import dynamic from "next/dynamic";
import styles from '../../common/common.module.css'

const CommonPagination = dynamic(() => import("../../common/pagination"), { ssr: false });
const Model = dynamic(() => import("./Model"), { ssr: false });

// import Model from "./Model";

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

const Hireus = () => {
  const [hireList, setHireList] = useState([]);
  const [perpage, setPerPage] = useState("10");
  const [page, setPage] = useState("1");
  const [count, setCount] = useState("");
  const [dbDeleteerr, setDbDeleteerr] = useState("");
  const [rowperpage, setRowperpage] = useState("10");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [fetcherr, setFetcherr] = useState("");
  const [viewData, setViewData] = useState([]);
  const router = useRouter();
  const fetchHiredata = (pagenumber, rowperpage) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("pageNumber", pagenumber);
    formData.append("page_size", rowperpage);
    api
      .post("hire/hire-list", formData, {
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
      .then((result) => {
        setLoading(false);
        setHireList(result.data.result);
        setCount(result.data.totalPages);
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
    fetchHiredata(1, rowperpage);
  }, []);

  const handleChange = (e, value) => {
    setPage(value);
    fetchHiredata(value, rowperpage);
  };
  const handledelete = (e) => {
    setLoading(true);

    api
      .delete(`hire/hire_delete/${e}`, {
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
      .then((result) => {
        fetchHiredata(page, rowperpage);
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
    <Container component="main" maxWidth="xl" className={styles.setcontainer}>
      {loading.toString() === "true" && <Loader />}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <div className={styles.setpageheading}>
          <Typography variant="h4" gutterBottom className={styles.setheading}>
            Hire
          </Typography>
        </div>
        <Paper className={styles.setProductpaper} elevation={5}>
          {dbDeleteerr && <Typography className={styles.seterrorlabel}>{dbDeleteerr} </Typography>}
          {fetcherr && <Typography className={styles.seterrorlabel}>{fetcherr} </Typography>}

          <TableContainer>
            <Table className="settable" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" className={styles.tableth}>
                    No.
                  </TableCell>
                  <TableCell align="center" className={styles.tableth}>
                    Date
                  </TableCell>
                  <TableCell align="center" className={styles.tableth}>
                    Name
                  </TableCell>
                  <TableCell align="center" className={styles.tableth}>
                    Email
                  </TableCell>
                  <TableCell align="center" className={styles.tableth}>
                    Phone
                  </TableCell>
                  <TableCell align="center" className={styles.tableth}>
                    Language
                  </TableCell>

                  <TableCell align="center" className={styles.tableth}>
                    Ip Address
                  </TableCell>
                  <TableCell align="center" className={styles.tableth}>
                    Operater
                  </TableCell>
                  <TableCell align="center" className={styles.tableth}>
                    Browser & version
                  </TableCell>
                  <TableCell align="center" className={styles.tableth}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hireList.map((e, index) => {
                  let technolenght = e.technology.length - 1;
                  return (
                    <StyledTableRow>
                      <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                        {page == 1 ? index + 1 : page * rowperpage - rowperpage + (index + 1)}
                      </StyledTableCell>
                      <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                        {new Date(e.date).toLocaleDateString("en-GB")}
                      </StyledTableCell>
                      <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                        {e.name}
                      </StyledTableCell>
                      <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                        {e.email}
                      </StyledTableCell>
                      <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                        {e.contact}
                      </StyledTableCell>
                      <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
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
                      <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                        {e.ip}
                      </StyledTableCell>
                      <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                        {e.mobile === true ? "Mobile" : "Desktop"}
                      </StyledTableCell>
                      <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                        {e.browsernm_browsever}
                      </StyledTableCell>

                      <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                        <div className="seticondiv">
                          <div>
                            <Tooltip title="Edit">
                              <i aria-hidden="true" className={` ${styles.seteditincon} fa fa-pencil fs-17`} onClick={() => handleedit(e)} />
                            </Tooltip>
                          </div>
                          <div>
                            <Tooltip title="Remove">
                              <i aria-hidden="true" className={`setdeleteincon fa fa-trash ml-1 fs-17`} onClick={() => handledelete(e._id)} />
                            </Tooltip>
                          </div>
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
            <CommonPagination rowperpage={rowperpage} handlesetRowperpageChange={handlesetRowperpageChange} count={count} page={page} handleChange={handleChange} />
          </TableContainer>
        </Paper>
      </div>
      <Model open={open} handleClose={handleClose} viewData={viewData} />
    </Container>
  );
};

export default Hireus;
