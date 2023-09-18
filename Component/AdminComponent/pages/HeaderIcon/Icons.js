import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import axios ,{ api } from "@/Component/Axios";
import Loader from "@/Component/loader";
import styles from '../../common/common.module.css'

const Icons = () => {
  const [fields, setFields] = useState([]);
  const [updateId, setUpdateId] = useState("");
  const [dberr, setDberr] = useState("");
  const [addIcon, setAddIcon] = useState(false);
  const [addError, setAddError] = useState("");
  const [updtaeError, setUpdtaeError] = useState("");
  const [loading, setLoading] = useState(true);

  // Function to handle adding a new field
  const addField = () => {
    setFields([...fields, {icon: "", link: "", class:""}]);
  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };
  const fetchHiredata = () => {
    axios
      .get("icon/icon_list", )
      .then((result) => {
        setLoading(false);
        if (result.data.result[0].data.length === 0) {
          setAddIcon(true);
        } else {
          setUpdateId(result.data.result[0]._id);
          setFields(result.data.result[0].data);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem("ssAdmin");
          router.push("/online-admin");
        }
        setLoading(false);
        setDberr(err.response.data.error);
        setTimeout(() => {
          setDberr("");
        }, 3000);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);

  const handleadd = () => {
    if (addIcon) {
      setLoading(true);
      api
        .put(`icon/icon_add`, fields, {
          headers: {
            Authorization: localStorage.getItem("ssAdmin"),
          },
        })
        .then((result) => {
          setFields([]);
          setLoading(false);
          fetchHiredata();
          setAddIcon(false);
        })
        .catch((err) => {
          setAddError(err.response.data.error);
          setTimeout(() => {
            setAddError("");
          }, 3000);
          setLoading(false);
        });
    } else {
      setLoading(true);
      api
        .put(`icon/icon_update/${updateId}`, fields, {
          headers: {
            Authorization: localStorage.getItem("ssAdmin"),
          },
        })
        .then((result) => {
          setFields([]);
          fetchHiredata();
          setAddIcon(false);
          setLoading(false);
        })
        .catch((err) => {
          setUpdtaeError(err.response.data.error);
          setTimeout(() => {
            setUpdtaeError("");
          }, 3000);
          setLoading(false);
        });
    }
  };
  return (
    <>
      <Container component="main" maxWidth="xl" className={styles.setcontainer}>
        {loading.toString() === "true" && <Loader />}
        <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
          <div className={styles.setpageheading}>
            <Typography variant="h4" gutterBottom className={styles.setheading}>
              Icons
            </Typography>
          </div>

          <Paper className={styles.setProductpaper} elevation={5}>
            <div className='setlistfiltericon'>
              <Avatar className={`setavtarback mb-3 ml-3`} onClick={addField} variant="rounded">
                <i className="fa fa-plus" style={{color:'black' , fontSize:"23px"}}  aria-hidden="true" />
              </Avatar>
            </div>
            {addError && <Typography className={styles.setProductpaper}>{addError} </Typography>}
            {updtaeError && <Typography className={styles.setProductpaper}>{updtaeError} </Typography>}
            {fields.map((field, index) => (
              <div key={index} className="d-flex align-items-center justify-content-around">
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "25%"}} placeholder="icon name" className={`$'settextfield' mt-1 mb-1`} multiline InputLabelProps={{shrink: false}} value={field.icon} onChange={(e) => handleChange(index, "icon", e.target.value)} />
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "50%"}} placeholder="Link" className={`$'settextfield' mt-1 mb-1 ml-2`} multiline InputLabelProps={{shrink: false}} value={field.link} onChange={(e) => handleChange(index, "link", e.target.value)} />
                <TextField id="outlined-basic" size="small" variant="outlined" style={{width: "15%"}} placeholder="class" className={`$'settextfield' mt-1 mb-1 ml-2`} multiline InputLabelProps={{shrink: false}} value={field.class} onChange={(e) => handleChange(index, "class", e.target.value)} />
                <i aria-hidden="true" className={` fa fa-trash`}  onClick={() => removeField(index)} />
              </div>
            ))}

            <Button variant="contained" size="medium" className={`${styles.setsendbtninside} mt-3`} onClick={handleadd}>
              update
            </Button>
          </Paper>
        </div>
      </Container>
    </>
  );
};

export default Icons;
