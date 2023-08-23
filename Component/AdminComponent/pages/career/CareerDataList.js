import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {TableContainer} from "@mui/material";
import {styled} from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { api } from "../../../Axios";
import { useRouter } from "next/router";
import Loader from "@/Component/loader";

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

const CareerDataList = () => {
  const [careerList, setCareerList] = useState([]);
  const [deleterr, setDeleterr] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();


  const handlesenddata = () => {
    router.push("/online-admin/dashboard/careerdetailsadd");
  };

  const fetchHiredata = () => {
    api
      .get("career/careerdetails_list")
      .then((result) => {
        setCareerList(result.data.result);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        if (err.response.status === 401) {
          localStorage.removeItem("ssAdmin");
          router.push("/online-admin");
        }
        setDbFetcherr(err.response.data.error);
        setTimeout(() => {
          setDbFetcherr("");
        }, 3000);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);

  const handleedit = (e) => {
    router.push(`/online-admin/dashboard/careerdetails/${e}`);
  };

  const handledelete = (e) => {
    setLoading(true);
    api
      .delete(`career/careerdetails_delete/${e}`,{
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
      .then((result) => {
        setLoading(false);
        fetchHiredata();
      })
      .catch((err) => {
        setDeleterr(err.response.data.error);
        setTimeout(() => {
          setDeleterr('')
        }, 3000);
      });
  };
  return (
    <>
      <Container component="main" maxWidth="xl" className='setcontainer'>
      {loading.toString() === "true" && <Loader />}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <div className='setpageheading'>
          <Typography variant="h4" gutterBottom className='setheading'>
            Career Details List
          </Typography>
          <Button variant="contained" size="medium" className='setsendbtninside' onClick={handlesenddata}>
            Add
          </Button>
        </div>

        <Paper className='setProductpaper' elevation={5}>
          {deleterr && <Typography className='seterrorlabel'>{deleterr} </Typography>}
          {dbFetcherr && <Typography className='seterrorlabel'>{dbFetcherr} </Typography>}
          <TableContainer>
            <Table className='settable' aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" className='tableth'>
                    No.
                  </TableCell>
                  <TableCell align="center" className='tableth'>
                    Title
                  </TableCell>
                  <TableCell align="center" className='tableth'>
                    Location
                  </TableCell>
                  <TableCell align="center" className='tableth'>
                    Experience
                  </TableCell>
                  <TableCell align="center" className='tableth'>
                    Position
                  </TableCell>
                  <TableCell align="center" className='tableth'>
                    Front View
                  </TableCell>
                  <TableCell align="center" className='tableth'>
                    Front ViewPosition
                  </TableCell>
                  <TableCell align="center" className='tableth'>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {careerList.map((e, index) => {
                  return (
                    <StyledTableRow>
                      <StyledTableCell align="center" component="th" scope="row" className='tabletd'>
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell className='tabletd' align="center">
                        {e.title}
                      </StyledTableCell>
                      <StyledTableCell className='tabletd' align="center">
                        {e.location}
                      </StyledTableCell>
                      <StyledTableCell className='tabletd' align="center">
                        {e.experience}
                      </StyledTableCell>
                      <StyledTableCell className='tabletd' align="center">
                        {e.position}
                      </StyledTableCell>
                      <StyledTableCell className='tabletd' align="center">
                        {e.contentview === true ? "Yes" : "No"}
                      </StyledTableCell>
                      <StyledTableCell className='tabletd' align="center">
                        {e.contentpositionview}
                      </StyledTableCell>

                      <StyledTableCell className='tabletdicon' align="center">
                        <div className='seticondiv'>
                          <div>
                            <Tooltip title="Edit">
                              <i aria-hidden="true" className={`seteditincon' fa fa-pencil fs-17`} onClick={() => handleedit(e._id)} />
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
        </Paper>
      </div>
      </Container>
    </>
  );
};

export default CareerDataList;