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
import { api } from "../../../Axios";
import { useRouter } from "next/router";
import Loader from "@/Component/loader";
import dynamic from "next/dynamic";
import styles from "../../common/common.module.css";
const CareerinqModel = dynamic(() => import("./CareerinqModel"), { ssr: false });
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

const Career = () => {
  const [careerList, setCareerList] = useState([]);
  const [page, setPage] = useState("1");
  const [rowperpage, setRowperpage] = useState("10");
  const [count, setCount] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [viewData, setViewData] = useState([]);

  const [dbDeleteerr, setDbDeleteerr] = useState("");
  const [dberror, setDberror] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const fetchHiredata = async (pagenumber, rowperpage) => {
    setLoading(true);
    api
      .get(`authers/career-list/${pagenumber}/${rowperpage}`, {
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
      .then((result) => {
        setLoading(false);
        if (typeof result.data.result !== "string") {
          setCount(result.data.totalPages);
          setCareerList(result.data.result);
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 401) {
          localStorage.removeItem("ssAdmin");
          router.push("/online-admin");
        }
        setDberror(err.response.data.error);
        setTimeout(() => {
          setDberror("");
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
      .delete(`authers/career_delete/${e.id}`, {
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
        setDbDeleteerr(err.response.data.error);
        setTimeout(() => {
          setDbDeleteerr("");
        }, 3000);
      });
  };

  const handleedit = (data) => {
    setOpen(true);
    setViewData(data);
  };

  const handlesetRowperpageChange = (e) => {
    const onpage = e.target.value;
    setRowperpage(e.target.value);
    setPage(1);
    fetchHiredata("1", onpage);
  };
  return (
    <Container component="main" maxWidth="xl" className={styles.setcontainer}>
      {loading.toString() === "true" && <Loader />}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <div className={styles.setpageheading}>
          <Typography variant="h4" gutterBottom className={styles.setheading}>
            Career
          </Typography>
        </div>
        <Paper className={styles.setProductpaper} elevation={5}>
          {dbDeleteerr && <Typography className={styles.seterrorlabel}>{dbDeleteerr} </Typography>}
          {dberror && <Typography className={styles.seterrorlabel}>{dberror} </Typography>}
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
                    Apply For
                  </TableCell>


                  <TableCell align="center" className={styles.tableth}>
                    view Resume
                  </TableCell>
                  <TableCell align="center" className={styles.tableth}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {careerList.length > 0 &&
                  careerList.map((e, index) => {
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
                          {e.apply_for}
                        </StyledTableCell>

                        <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                          <Button variant="contained" className="setloginbutton" onClick={() => downloadPdf(e.resumedownload)}>
                            Resume
                          </Button>
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>

                          <div className="seticondiv">
                            <div>
                              <Tooltip title="Edit">
                                <i aria-hidden="true" className={` ${styles.seteditincon} fa fa-eye fs-17`} onClick={() => handleedit(e)} />
                              </Tooltip>
                            </div>
                            <div>
                            <Tooltip title="Remove">
                            <i className="fa fa-trash" aria-hidden="true" onClick={() => handledelete(e)} />
                          </Tooltip>
                            </div>
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>

            {careerList.length > 0 && <CommonPagination rowperpage={rowperpage} handlesetRowperpageChange={handlesetRowperpageChange} count={count} page={page} handleChange={handleChange} />}
          </TableContainer>
        </Paper>
      </div>
      <CareerinqModel open={open} handleClose={handleClose} viewData={viewData} />
    </Container>
  );
};

export default Career;
