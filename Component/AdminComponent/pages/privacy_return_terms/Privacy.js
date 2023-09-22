import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import axios,{ api } from "../../../Axios";
import ReturnPolicy from "./ReturnPolicy";
import Terms_condirion from "./Terms_condition";
import dynamic from "next/dynamic";
import Loader from "@/Component/loader";
import styles from '../../common/common.module.css'

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const Privacy = () => {
  const [aboutcontent, setAboutcontent] = useState("");
  const [aboutError, setAboutError] = useState("");
  const [dpneResponce, setDpneResponce] = useState("");
  const [id, setId] = useState("");
  const [adddata, setAdddata] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dberr, setDberr] = useState("");
  const [dbAdderr, setDbAdderr] = useState("");
  const router = useRouter();
  const contentabout = (data) => {
    setAboutcontent(data);
  };

  const fetchHiredata = () => {
    axios
      .get("privacy/privacy_list_server",{
        headers: {
          Authorization: localStorage.getItem("ssAdmin"),
        },
      })
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
          .post(`privacy/privacy_add`, formData, {
            headers: {
              Authorization: localStorage.getItem("ssAdmin"),
            },
          })
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
              setDbAdderr("");
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
          .put(`privacy/privacy_update/${id}`, formData, {
            headers: {
              Authorization: localStorage.getItem("ssAdmin"),
            },
          })
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
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Container component="main" maxWidth="xl" className={styles.setcontainer_return}>
        {loading.toString() === "true" && <Loader />}
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
          <div className={styles.setpageheading}>
            <Typography variant="h4" gutterBottom className={styles.setheading}>
              Privacy Policy
            </Typography>
          </div>
          <Paper className={styles.setProductpaper} elevation={5}>
            {dpneResponce && <Typography className={styles.seterrorlabel}>{dpneResponce} </Typography>}
            {dberr && <Typography className={styles.seterrorlabel}>{dberr} </Typography>}
            {dbAdderr && <Typography className={styles.seterrorlabel}>{dbAdderr} </Typography>}
            <div style={{ maxHeight: "500px", overflow: "overlay" }}>
              <JoditEditor value={aboutcontent} onChange={(newContent) => contentabout(newContent)} />
              {aboutError && <Typography className={styles.seterrorlabel}>{aboutError} </Typography>}
            </div>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="contained" size="medium" className={styles.setsendbtninside} onClick={handleeditdata}>
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
{
  /* <div class="container"><div class="handlediv"><img src="/static/media/bullet1_list.ac6b1e1375450f84647c.webp" alt="symbol" class="handlecarrericon "><p class="pb-4 pl-2">Any information you place on SoftStorm Technosys web site is treated with the utmost care. </p></div><div class="handlediv"><img src="/static/media/bullet1_list.ac6b1e1375450f84647c.webp" alt="symbol" class="handlecarrericon "><p class="pb-4 pl-2">Certain information including your IP address, domain name is collected through cookies and similar technologies for a limited purpose. This is to learn which parts of our site you are visiting and to improve user experience next time you visit our site. We do not link the information to anything personally identifiable, meaning while a user’s session is tracked, the users remain anonymous. Only aggregated statistics are captured to make the web site more informative and useful to the visitors.</p></div><div class="handlediv"><img src="/static/media/bullet1_list.ac6b1e1375450f84647c.webp" alt="symbol" class="handlecarrericon "><p class="pb-4 pl-2">Our site’s inquiry form requires you to give us contact information such as your name and email address. We may use this contact information to send you information about our company services and the continuous upgrades in our offerings. In the event that you choose to not receive such emails, please use the unsubscribe button and we will ensure that the information emails are stopped. Of course, you are welcome to opt to reenter our mail list at any time in the future.</p></div><div class="handlediv"><img src="/static/media/bullet1_list.ac6b1e1375450f84647c.webp" alt="symbol" class="handlecarrericon "><p class="pb-4 pl-2">We value your privacy and follow a strict “no-spam” policy! We never give, lease, sell or otherwise disclose your personal information, except under court orders.</p></div></div> */
}
