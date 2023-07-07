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
  const classes = useMuiStyle();
  const history = useHistory();

  var token = localStorage.getItem("ssAdmin");
  const handlesenddata = () => {
    history.push("/online-admin/dashboard/aboutvalueadd");
  };

  const fetchHiredata = () => {
    axios
      .get("aboutvalue/aboutvalue_list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        setCareerList(result.data.result);
      })
      .catch((err) => {
        setDbFetcherr(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);

  const handleedit = (e) => {
    history.push(`/online-admin/dashboard/aboutvalueedit/${e}`);
  };

  const handledelete = (e) => {
    axios
      .delete(`aboutvalue/aboutvalue_delete/${e}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((result) => {
        fetchHiredata();
      })
      .catch((err) => {
        setDeleterr(err.response.data.error);
      });
  };
  return (
    <>
      <Container component="main" maxWidth="xl" className={classes.setcontainer}>
        <div className={classes.setpageheading}>
          <Typography variant="h4" gutterBottom className={classes.setheading}>
            About Value List
          </Typography>
          <Button variant="contained" size="medium" className={classes.setsendbtninside} onClick={handlesenddata}>
            Add
          </Button>
        </div>

        <Paper className={classes.setProductpaper} elevation={5}>
          {deleterr && <Typography className={classes.seterrorlabel}>{deleterr} </Typography>}
          {dbFetcherr && <Typography className={classes.seterrorlabel}>{dbFetcherr} </Typography>}
          <TableContainer>
            <Table className={classes.settable} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" className={classes.tableth}>
                    No.
                  </TableCell>
                  <TableCell align="center" className={classes.tableth}>
                    Title
                  </TableCell>
                  <TableCell align="center" className={classes.tableth}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {careerList.map((e, index) => {
                  return (
                    <StyledTableRow>
                      <StyledTableCell align="center" component="th" scope="row" className={classes.tabletd}>
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell className={classes.tabletd} align="center">
                        {e.heading}
                      </StyledTableCell>
                      <StyledTableCell className={classes.tabletdicon} align="center">
                        <div className={classes.seticondiv}>
                          <div>
                            <Tooltip title="Edit">
                              <i
                                aria-hidden="true"
                                className={`${classes.seteditincon} fa fa-pencil fs-17`}
                                onClick={() => handleedit(e._id)}
                              />
                            </Tooltip>
                          </div>
                          <div>
                            <Tooltip title="Remove">
                              <i
                                aria-hidden="true"
                                 className={`${classes.setdeleteincon} fa fa-trash ml-1 fs-17`}
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
      </Container>
    </>
  );
};

export default AboutValueList;
