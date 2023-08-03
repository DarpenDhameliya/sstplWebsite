import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMuiStyle from "../../CommonComponent/MuiStyle";
import JoditEditor from "jodit-react";
import {useHistory} from "react-router-dom";
import logo from "../../../../assets/images/logo-removebg-preview.webp";
import {api} from "../../../common/Axios";
import ReturnPolicy from "./ReturnPolicy";
import Terms_condirion from "./Terms_condition"

const Privacy = () => {
  const [aboutcontent, setAboutcontent] = useState("");
  const [aboutError, setAboutError] = useState("");
  const [dpneResponce, setDpneResponce] = useState("");
  const [id, setId] = useState("");
  const [adddata, setAdddata] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dberr, setDberr] = useState('');
  const [dbAdderr, setDbAdderr] = useState("");
  const classes = useMuiStyle();
  const history = useHistory();
  const contentabout = (data) => {
    setAboutcontent(data);
  };

  const fetchHiredata = () => {
    api
      .get("privacy/privacy_list")
      .then((result) => {
        if (result.data.result.length === 0) {
          setAdddata(true);
        } else {
          setId(result.data.result[0]._id);
          setAboutcontent(result.data.result[0].privacycontent);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 402) {
          localStorage.removeItem("ssAdmin");
          history.push("/online-admin");
        }
        setDberr(err.response.data.error);
        setTimeout(() => {
          setDberr("");
        }, 3000);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);

  const handleeditdata = (e) => {
    var formData = new FormData();
    formData.append("privacycontent", aboutcontent);
    if (adddata) {
      if (!aboutcontent) {
        setAboutError("Required !");

        setTimeout(() => {
          setAboutError();
        }, 3000);
      } else {
        setLoading(true);
        api
          .post(`privacy/privacy_add`, formData)
          .then((result) => {
            setAdddata(false);
            setDpneResponce("Add Successfull");
            fetchHiredata();
            setLoading(false);
            setTimeout(() => {
              setDpneResponce("");
            }, 3000);
          })
          .catch((err) => {
            setLoading(false);
            setDbAdderr(err.response.data.error);
            setTimeout(() => {
              setDbAdderr('')
            }, 3000);
          });
      }
    } else {
      if (!aboutcontent) {
        setAboutError("Required !");
        setTimeout(() => {
          setAboutError();
        }, 3000);
      } else {
        setLoading(true);
        api
          .put(`privacy/privacy_update/${id}`, formData)
          .then((result) => {
            setDpneResponce("Update Successfull");
            fetchHiredata();
            setLoading(false);
            setTimeout(() => {
              setDpneResponce("");
            }, 3000);
          })
          .catch((err) => {
            setLoading(false);
            setDbAdderr(err.response.data.error);
          });
      }
    }
  };

  return (
    <div style={{display:'flex', flexDirection:'column' ,width:'100%'}}>

      <Container component="main" maxWidth="xl" className={classes.setcontainer_return}>
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
              Privacy Policy
            </Typography>
          </div>
          <Paper className={classes.setProductpaper} elevation={5}>
            {dpneResponce && <Typography className={classes.seterrorlabel}>{dpneResponce} </Typography>}
            {dberr && <Typography className={classes.seterrorlabel}>{dberr} </Typography>}
            {dbAdderr && <Typography className={classes.seterrorlabel}>{dbAdderr} </Typography>}
            <div style={{maxHeight: "500px", overflow: "overlay"}}>
              <JoditEditor value={aboutcontent} onChange={(newContent) => contentabout(newContent)} />
              {aboutError && <Typography className={classes.seterrorlabel}>{aboutError} </Typography>}
            </div>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="contained" size="medium" className={classes.setsendbtninside} onClick={handleeditdata}>
                update
              </Button>
            </div>
          </Paper>
        </div>
      </Container>
      <ReturnPolicy />
      <Terms_condirion />
    </div>
  );
};

export default Privacy;
