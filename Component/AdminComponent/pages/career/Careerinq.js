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
      .delete(`authers/career_delete/${e.id}`,{
        headers: {
          Authorization:localStorage.getItem('ssAdmin')
        }
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

  const handlesetRowperpageChange = (e) => {
    const onpage = e.target.value;
    setRowperpage(e.target.value);
    setPage(1);
    fetchHiredata("1", onpage);
  };
  return (
    <Container component="main" maxWidth="xl" className="setcontainer">
      {loading.toString() === "true" && <Loader />}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <div className="setpageheading">
          <Typography variant="h4" gutterBottom className="setheading">
            Career
          </Typography>
        </div>
        <Paper className="setProductpaper" elevation={5}>
          {dbDeleteerr && <Typography className="seterrorlabel">{dbDeleteerr} </Typography>}
          {dberror && <Typography className="seterrorlabel">{dberror} </Typography>}
          <TableContainer>
            <Table className="settable" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" className="tableth">
                    No.
                  </TableCell>
                  <TableCell align="center" className="tableth">
                    Date
                  </TableCell>
                  <TableCell align="center" className="tableth">
                    Name
                  </TableCell>
                  <TableCell align="center" className="tableth">
                    Email
                  </TableCell>
                  <TableCell align="center" className="tableth">
                    Phone
                  </TableCell>
                  <TableCell align="center" className="tableth">
                    Apply For
                  </TableCell>
                  <TableCell align="center" className="tableth">
                    Ip Address
                  </TableCell>
                  <TableCell align="center" className="tableth">
                    Operater
                  </TableCell>
                  <TableCell align="center" className="tableth">
                    Browser & version
                  </TableCell>
                  <TableCell align="center" className="tableth">
                    view Resume
                  </TableCell>
                  <TableCell align="center" className="tableth">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {careerList.length > 0 &&
                  careerList.map((e, index) => {
                    return (
                      <StyledTableRow>
                        <StyledTableCell align="center" component="th" scope="row" className="tabletd">
                          {page == 1 ? index + 1 : page * rowperpage - rowperpage + (index + 1)}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className="tabletd">
                          {new Date(e.date).toLocaleDateString("en-GB")}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className="tabletd">
                          {e.name}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className="tabletd">
                          {e.email}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className="tabletd">
                          {e.contact}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className="tabletd">
                          {e.apply_for}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className="tabletd">
                          {e.ip}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className="tabletd">
                          {e.mobile === true ? "Mobile" : "Desktop"}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className="tabletd">
                          {e.browsernm_browsever}
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className="tabletd">
                          <Button variant="contained" className="setloginbutton" onClick={() => downloadPdf(e.resumedownload)}>
                            Resume
                          </Button>
                        </StyledTableCell>
                        <StyledTableCell align="center" component="th" scope="row" className="tabletd">
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
              // <div className="setpaginationdiv">
              //   <div className="setrowperpage">
              //     <Typography className="setlabelrow">Rows per page :</Typography>
              //     <TextField size="small" select className="textField" value={rowperpage} onChange={handlesetRowperpageChange} InputLabelProps={{ shrink: false }} margin="normal" variant="outlined">
              //       <MenuItem value="10">10</MenuItem>
              //       <MenuItem value="20">20.</MenuItem>
              //       <MenuItem value="50">50.</MenuItem>
              //     </TextField>
              //   </div>
              //   <Pagination count={count} page={page} onChange={handleChange} variant="outlined" shape="rounded" color="primary" />
              // </div>
              <CommonPagination rowperpage={rowperpage}  handlesetRowperpageChange={handlesetRowperpageChange}  count={count}  page={page}  handleChange={handleChange}/>
            )}
          </TableContainer>
        </Paper>
      </div>
    </Container>
  );
};

export default Career;
