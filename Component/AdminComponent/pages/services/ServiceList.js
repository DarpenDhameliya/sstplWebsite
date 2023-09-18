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
import styles from '../../common/common.module.css'

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

const ServiceList = () => {
  const [careerList, setCareerList] = useState([]);
  const [deleterr, setDeleterr] = useState("");
  const [dbFetcherr, setDbFetcherr] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handlesenddata = () => {
    router.push("/online-admin/dashboard/serviceadd");
  };

  const fetchHiredata = () => {
    api
      .get("service/service_list",{
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
      .then((result) => {
        let data = result.data.result.sort((a ,b) => a.contentpositionview - b.contentpositionview)
        setCareerList(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem("ssAdmin");
          router.push("/online-admin");
        }
        setLoading(false);
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
    router.push(`/online-admin/dashboard/service/${e}`);
  };

  const handledelete = (e) => {
    setLoading(true);

    api
      .delete(`service/service_delete/${e}`,{
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
        setDeleterr(err.response.data.error);
        setTimeout(() => {
          setDeleterr('')
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
              Service List
            </Typography>
            <Button variant="contained" size="medium" className={styles.setsendbtninside} onClick={handlesenddata}>
              Add
            </Button>
          </div>

          <Paper className={styles.setProductpaper} elevation={5}>
            {deleterr && <Typography className={styles.setProductpaper}>{deleterr} </Typography>}
            {dbFetcherr && <Typography className={styles.setProductpaper}>{dbFetcherr} </Typography>}
            <TableContainer>
              <Table className='settable' aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={styles.tableth}>
                      No.
                    </TableCell>
                    <TableCell align="center" className={styles.tableth}>
                      Title
                    </TableCell>
                    <TableCell align="center" className={styles.tableth}>
                      contentview
                    </TableCell>
                    <TableCell align="center" className={styles.tableth}>
                      View position
                    </TableCell>
                    <TableCell align="center" className={styles.tableth}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {careerList.map((e, index) => {
                    return (
                      <StyledTableRow>
                        <StyledTableCell align="center" component="th" scope="row" className={styles.tabletd}>
                          {index + 1}
                        </StyledTableCell>
                        <StyledTableCell className={styles.tabletd} align="center">
                          {e.heading}
                        </StyledTableCell>
                        <StyledTableCell className={styles.tabletd} align="center">
                          {e.contentview === true ? 'true' : "false"}
                        </StyledTableCell>
                        <StyledTableCell className={styles.tabletd} align="center">
                          {e.contentpositionview}
                        </StyledTableCell>
                        <StyledTableCell className='tabletdicon' align="center">
                          <div className='seticondiv'>
                            <div>
                              <Tooltip title="Edit">
                                <i aria-hidden="true" className={` ${styles.seteditincon} fa fa-pencil fs-17`} onClick={() => handleedit(e._id)} />
                              </Tooltip>
                            </div>
                            <div>
                              <Tooltip title="Remove">
                                <i aria-hidden="true" className={`${styles.setdeleteincon} fa fa-trash ml-1 fs-17`} onClick={() => handledelete(e._id)} />
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

export default ServiceList;
