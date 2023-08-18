
import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import {api} from "../../../Axios";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const ReturnPolicy = () => {
  const [aboutcontent, setAboutcontent] = useState("");
  const [aboutError, setAboutError] = useState("");
  const [dpneResponce, setDpneResponce] = useState("");
  const [id, setId] = useState("");
  const [adddata, setAdddata] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dberr, setDberr] = useState([]);
  const [dbAdderr, setDbAdderr] = useState("");
  const router = useRouter();
  const contentabout = (data) => {
    setAboutcontent(data);
  };

  const fetchHiredata = () => {
    api
      .get("return/return_list")
      .then((result) => {
        if (result.data.result.length === 0) {
          setAdddata(true);
        } else {
          setId(result.data.result[0]._id);
          setAboutcontent(result.data.result[0].returnpolicycontent);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 401) {
          localStorage.removeItem("ssAdmin");
          router.push("/online-admin");
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
    formData.append("returnpolicycontent", aboutcontent);
    if (adddata) {
      if (!aboutcontent) {
        setAboutError("Required !");

        setTimeout(() => {
          setAboutError();
        }, 3000);
      } else {
        setLoading(true);
        api
          .post(`return/return_add`, formData)
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
          .put(`return/return_update/${id}`, formData)
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
            setTimeout(() => {
              setDbAdderr('')
            }, 3000);
          });
      }
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xl" className='setcontainer_return'>
        {loading.toString() === "true" && <Loader />}
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
          <div className='setpageheading'>
            <Typography variant="h4" gutterBottom className='setheading'>
              Return Policy
            </Typography>
          </div>
          <Paper className='setProductpaper' elevation={5}>
            {dpneResponce && <Typography className='seterrorlabel'>{dpneResponce} </Typography>}
            {dberr && <Typography className='seterrorlabel'>{dberr} </Typography>}
            {dbAdderr && <Typography className='seterrorlabel'>{dbAdderr} </Typography>}
            <div style={{maxHeight: "500px", overflow: "overlay"}}>
              <JoditEditor value={aboutcontent} onChange={(newContent) => contentabout(newContent)} />
              {aboutError && <Typography className='seterrorlabel'>{aboutError} </Typography>}
            </div>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="contained" size="medium" className='setsendbtninside' onClick={handleeditdata}>
                update
              </Button>
            </div>
          </Paper>
        </div>
      </Container>
    </>
  );
};

export default ReturnPolicy;
