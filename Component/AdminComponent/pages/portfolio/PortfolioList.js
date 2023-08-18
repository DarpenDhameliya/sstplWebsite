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
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlesenddata = () => {
    router.push("/online-admin/dashboard/portfolioadd");
  };

  const fetchHiredata = (pagenumber, rowperpage) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("pageNumber", pagenumber);
    formData.append("page_size", rowperpage);
    api
      .post("portfolio/portfolio_list", formData)
      .then((result) => {
        setLoading(false);
        setCount(result.data.totalPages);
        setPortfolioList(result.data.result);
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
    router.push(`/online-admin/dashboard/portfolio/${e}`);
  };

  const handledelete = (e) => {
    setLoading(true);
    api
      .delete(`portfolio/portfolio_delete/${e}`,{
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
        setTimeout(() => {
          setDeleterr('')
        }, 3000);
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
      <Container component="main" maxWidth="xl" className="setcontainer">
        {loading.toString() === "true" && <Loader />}
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
          <div className="setpageheading">
            <Typography variant="h4" gutterBottom className="setheading">
              Portfolio List
            </Typography>
            <Button variant="contained" size="medium" className="setsendbtninside" onClick={handlesenddata}>
              Add
            </Button>
          </div>

          <Paper className="setProductpaper" elevation={5}>
            {deleterr && <Typography className="seterrorlabel">{deleterr} </Typography>}
            {fetcherr && <Typography className="seterrorlabel">{fetcherr} </Typography>}

            <TableContainer>
              <Table className="settable" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className="tableth">
                      No.
                    </TableCell>
                    <TableCell align="center" className="tableth">
                      Name
                    </TableCell>
                    <TableCell align="center" className="tableth">
                      Industry
                    </TableCell>
                    <TableCell align="center" className="tableth">
                      Team
                    </TableCell>
                    <TableCell align="center" className="tableth">
                      Duration
                    </TableCell>
                    <TableCell align="center" className="tableth">
                      Country
                    </TableCell>
                    <TableCell align="center" className="tableth">
                      Technology
                    </TableCell>
                    <TableCell align="center" className="tableth">
                      Category
                    </TableCell>
                    <TableCell align="center" className="tableth">
                      HomePage View
                    </TableCell>
                    <TableCell align="center" className="tableth">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {portfolioList.map((e, index) => {
                    return (
                      <StyledTableRow>
                        <StyledTableCell align="center" component="th" scope="row" className="tabletd">
                          {page == 1 ? index + 1 : page * rowperpage - rowperpage + (index + 1)}
                        </StyledTableCell>
                        <StyledTableCell className="tabletd" align="center">
                          {e.name}
                        </StyledTableCell>
                        <StyledTableCell className="tabletd" align="center">
                          {e.industry}
                        </StyledTableCell>
                        <StyledTableCell className="tabletd" align="center">
                          {e.team}
                        </StyledTableCell>
                        <StyledTableCell className="tabletd" align="center">
                          {e.duration}
                        </StyledTableCell>
                        <StyledTableCell className="tabletd" align="center">
                          {e.country}
                        </StyledTableCell>
                        <StyledTableCell className="tabletd" align="center">
                          {e.technology}
                        </StyledTableCell>

                        <StyledTableCell className="tabletd" align="center">
                          {e.contentview === true ? "Yes" : "No"}
                        </StyledTableCell>
                        <StyledTableCell className="tabletd" align="center">
                          {e.contentpositionview}
                        </StyledTableCell>

                        <StyledTableCell className="tabletdicon" align="center">
                          <div className="seticondiv">
                            <div>
                              <Tooltip title="Edit">
                                <i aria-hidden="true" className={`seteditincon fa fa-pencil fs-17`} onClick={() => handleedit(e._id)} />
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
        </div>
        {/* )} */}
      </Container>
    </>
  );
};

export default PortfolioList;
