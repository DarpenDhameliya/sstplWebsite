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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const AboutValueList = () => {
  const [careerList, setCareerList] = useState([]);
  const [deleterr, setDeleterr] = useState('');
  const [dbFetcherr, setDbFetcherr] = useState('');
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const handlesenddata = () => {
    router.push("/online-admin/dashboard/aboutvalueadd");
  };

  const fetchHiredata = () => {
    api
      .get("aboutvalue/aboutvalue_list_server",{
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
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
          setDbFetcherr('')
        }, 3000);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);

  const handleedit = (e) => {
    router.push(`/online-admin/dashboard/aboutvalue/${e}`);
  };

  const handledelete = (e) => {
    setLoading(true);
    api
      .delete(`aboutvalue/aboutvalue_delete/${e}`,{
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
      .then((result) => {
        setLoading(false);
        fetchHiredata();
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
            About Value List
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
                      <StyledTableCell className='tabletdicon' align="center">
                        <div className='seticondiv'>
                          <div>
                            <Tooltip title="Edit">
                              <i
                                aria-hidden="true"
                                className={` ${styles.seteditincon} fa fa-pencil fs-17`}
                                onClick={() => handleedit(e._id)}
                              />
                            </Tooltip>
                          </div>
                          <div>
                            <Tooltip title="Remove">
                              <i
                                aria-hidden="true"
                                 className={`'setdeleteincon' fa fa-trash ml-1 fs-17`}
                                onClick={() => handledelete(e._id)}
                              />
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

export default AboutValueList;
