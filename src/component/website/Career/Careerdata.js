import React, {useState, useEffect, useRef, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CareerSlice, Careerstate, Careerstatus} from "../slice/MailSlice";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useHistory} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import bullet from "../../../assets/images/icon/finalclick1.webp";
import career1 from "../../../assets/images/icon/location (1).webp";
import career2 from "../../../assets/images/icon/experience.webp";
import career3 from "../../../assets/images/icon/position.webp";
import axios from "../../common/Axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import closeimg from "../../../assets/images/close.png";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  minWidth: 330,
  bgcolor: "background.paper",
  boxShadow: 24,
};

const Careerdata = ({loding}) => {
  // const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [apply, setApply] = useState("");
  const [formapplyview, setFormapplyview] = useState("");
  const [sendmailview, setSendmailview] = useState("");
  const [error, setError] = useState([]);
  const [dberr, setDberr] = useState([]);
  const [filename, setFilename] = useState("Upload Resume");
  const [careerList, setCareerList] = useState([]);
  const [dbFetcherr, setDbFetcherr] = useState([]);
  const mailstate = useSelector(Careerstate);
  const [collaspsOpen, setCollaspsOpen] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [careerBtnClick, setCareerBtnClick] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [captchres, setCaptchres] = useState("");
  const [dbsubmit, setDbsubmit] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [file, setFile] = useState("");
  const recaptchaRef = useRef();
  const fileInputRef = useRef(null);

  const notify = useCallback(() => {
    toast.success(" Apply Successfully..", {
      autoClose: 1000,
      closeOnClick: false,
    });
  }, []);

  const notifyerr = useCallback(() => {
    toast.error("Server Error", {
      autoClose: 1000,
      closeOnClick: false,
    });
  }, []);
  useEffect(() => {
    if (mailstate.status === "succeeded") {
      notify();
    } else if (mailstate.status === "failed") {
      notifyerr();
    }

    if (careerBtnClick) {
      if (mailstate.status === "loading") {
      } else if (mailstate.status === "succeeded") {
        setName("");
        setEmail("");
        setPhone("");
        setApply("");
        setFile("");
        setCaptchres("");
        setFilename("Upload Resume");
        setOpen(false);
        setDbsubmit(false);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        dispatch(Careerstatus());
      } else if (mailstate.status === "failed") {
        setDbsubmit(false);

        setDberr(mailstate.error);
        setTimeout(() => {
          setDberr([]);
        }, 3000);
        dispatch(Careerstatus());
      } else {
      }
    }

  });

  useEffect(() => {
    axios
      .get("https://api.ipify.org/?format=json")
      .then((response) => {
        const ipAddress = response.data.ip;
        setIpAddress(ipAddress);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchHiredata = () => {
    axios
      .get("career/careerdetails_list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        let shortdata = result.data.result.sort((a, b) => a.contentpositionview - b.contentpositionview);
        setCareerList(shortdata);
        loding();
      })

      .catch((err) => {
        setDbFetcherr(err.response);
      });
  };

  useEffect(() => {
    fetchHiredata();
    document.title = "Career | SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  }, []);

  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    if (dbsubmit === false) {
      let name_verify;
      const regex = /\b\w+\b/g;
      const matches = name.match(regex);
      if (matches && matches.length >= 2) {
        name_verify = true;
      } else {
        name_verify = false;
      }

      setCareerBtnClick(true);
      let number_verify;
      if (!/^\+?\d{0,3}\s?\d{6,14}$/.test(phone)) {
        number_verify = false;
      } else {
        number_verify = true;
      }
      let email_verify;
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        email_verify = false;
      } else {
        email_verify = true;
      }
      if (!file || !name || !email || !phone || email_verify === false || number_verify === false || name_verify === false || !isVerified) {
        if (!file) {
          error.file = "File Required !";
        }
        if (!name) {
          error.name = "Name Required !";
        } else {
          error.name = "";
          if (name_verify === false) {
            error.name_verify = "Minimum Two Word Required";
          } else {
            error.name_verify = "";
          }
        }
        if (!email) {
          error.email = "email Required !";
        } else {
          error.email = "";
          if (email_verify === false) {
            error.em_verify = "Add Correct email";
          } else {
            error.em_verify = "";
          }
        }
        if (!phone) {
          error.phone = "NUmber Required !";
        } else {
          error.phone = "";
          if (number_verify === false) {
            error.num_verify = "Add Correct number";
          } else {
            error.num_verify = "";
          }
        }
        if (!isVerified) {
          error.captcha = "Required !!";
        } else {
          error.captcha = "";
        }

        setError({...error, [e.target.name]: e.target.value});
        setTimeout(() => {
          setError([]);
        }, 2000);
      } else {
        let formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("apply", sendmailview);
        formData.append("file", file);
        const json2 = {ipAddress, captchres};
        setDbsubmit(true);
        dispatch(
          CareerSlice({
            formData,
            json2,
          })
        );
        
      }
    }
  };

  const handlecollaps = (data, tech, techview) => {
    setSendmailview(`${data.title} ${data.experience}`);
    setFormapplyview(data.title);
    setApply(data._id);
    setCollaspsOpen(collaspsOpen === data._id ? false : data._id);
  };

  const hgandlefile = (e) => {
    const file = e.target.files[0];
    setFilename(file.name);
    setFile(e.target.files[0]);
  };
  const handleTextKeyPress = (event) => {
    if (event.key === "Enter") {
      fileInputRef.current.click();
    }
  };
  const handleVerify = (response) => {
    setCaptchres(response);
    setIsVerified(true);
  };
  const handlemodalOpen = () => {
    setName("");
    setEmail("");
    setPhone("");
    setApply("");
    setFile("");
    setCaptchres("");
    setFilename("Upload Resume");
    setOpen(true);
  };

  const handlefirstname = (e) => {
    let name = e.target.value;
    setName(e.target.value);
    if (name.length > 5) {
      error.name = "";
    }
  };
  const handlefnameBlur = () => {
    setNameFocused(false);
    if (name.length < 4) {
      error.name = "Required !!";
    }
  };

  const handleemail = (e) => {
    let data = e.target.value;
    setEmail(e.target.value);
    if (data) {
      error.email = "";
    }
  };
  const handleemailBlur = () => {
    setEmailFocused(false);
    if (!email) {
      error.email = "Required !!";
    }
  };

  const handlephone = (e) => {
    let data = e.target.value;
    setPhone(e.target.value);
    if (data.length > 9) {
      error.phone = "";
    }
  };
  const handlephoneBlur = () => {
    setPhoneFocused(false);
    if (phone.length < 10) {
      error.phone = "Required !!";
    }
  };

  return (
    <>
      <ToastContainer position="top-right" closeOnClick={false} style={{marginTop: "55px"}} />

      {dbFetcherr && <p className="handledberror ">{dbFetcherr}</p>}
      {careerList.map((res) => {
        if (res.contentview === true) {
          return (
            <div className="card mt-3 mb-3 grey">
              <div className="card-body grey">
                <h4 className="handlecareerhireinghead">{res.title}</h4>
                <div className="d-flex justify-content-between mt-1">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={career1} alt="car1" className="handlecareermain_img" />
                    <div className="ml-1">
                      <p className="handelmobilep"> Location</p>
                      <h6 className="handelmobileh6">{res.location}</h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center ">
                    <img src={career2} alt="car1" className="handlecareermain_img" />

                    <div className="ml-2">
                      <p className="handelmobilep"> Experience</p>
                      <h6 className="handelmobileh6">{res.experience}</h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center tabrequirement">
                    <img src={career3} alt="car1" className="handlecareermain_img" />
                    <div className="ml-2">
                      <p className="handelmobilep"> Position</p>
                      <h6 className="handelmobileh6">{res.position}</h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="main-btn_carrer tab3" type="button" data-bs-toggle="collapse" href={`#${res._id}`} onClick={() => handlecollaps(res)}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <Collapse in={collaspsOpen === res._id} timeout="auto" unmountOnExit>
                <CardContent>
                  <div className="card-body_collpas">
                    <p style={{color: "#000000"}}>{res.description}</p>
                    <h6 className="handlecareerrespon">Responsibilities and Duties :</h6>
                    <ul className="skill">
                      {res.responsibility.map((e) => {
                        return (
                          <div className="handlediv">
                            <img src={bullet} alt="symbol" className="handlecarrericon " />
                            <li className="handlecareerli">{e}</li>
                          </div>
                        );
                      })}
                    </ul>
                    <h6 className="handlecareerrespon mt-2">Qualification :</h6>
                    <div className="handlediv">
                      <img src={bullet} alt="symbol" className="handlecarrericon " />
                      <p className="handlecareerli" style={{lineHeight: "20px"}}>
                        {res.qualification}
                      </p>
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                      <button className="main-btn_carrer_apply" type="button" onClick={handlemodalOpen}>
                        Apply
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Collapse>
            </div>
          );
        }
      })}

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {formapplyview}
            </h5>
            <div onClick={handleClose} style={{cursor: "pointer"}}>
              <img src={closeimg} alt="car1" />
            </div>
          </div>{" "}
          <div className="modal-body" style={{border: "none", boxShadow: "none"}}>
            <form className="row">
              <div className="col-md-12">
                <input type="text" className={`${error.name ? "handleinput_error" : ""} ${error.name_verify ? "handleinput_error" : ""}`} onBlur={handlefnameBlur} onFocus={() => setNameFocused(true)} name="name" placeholder="Name" value={name} onChange={handlefirstname} />
                {dberr.name && <p className="handledberror ">{dberr.name}</p>}
                {error.name_verify && <p className={`handledberror`}>{error.name_verify}</p>}
              </div>
              <div className="col-md-12">
                <input type="email" name="email" className={`${error.email ? "handleinput_error" : ""} ${error.em_verify ? "handleinput_error" : ""} ${error.em_verify ? "error_padding" : ""}`} onBlur={handleemailBlur} onFocus={() => setEmailFocused(true)} value={email} onChange={handleemail} placeholder="Email Address" />
                {dberr.email && <p className="handledberror ">{dberr.email}</p>}
                {error.em_verify && <p className={`handledberror mb-0 `}>{error.em_verify}</p>}
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name="phone"
                  className={`${error.phone ? "handleinput_error" : ""} mt-15   ${error.num_verify ? "error_padding" : ""}
                    `}
                  value={phone}
                  onBlur={handlephoneBlur}
                  onFocus={() => setPhoneFocused(true)}
                  onChange={handlephone}
                  placeholder="Phone Number"
                />
                {dberr.phone && <p className="handledberror ">{dberr.phone}</p>}
                {error.num_verify && <p className={`handledberror mb-0  `}>{error.num_verify}</p>}
              </div>

              <div className="col-md-12 ">
                {/* <div
                  className={`${error.file ? "handleinput_error" : ""}  ${dberr.file ? "error_padding" : ""} mt-15 typefiledes 
                    `}
                  style={{background: "#f5f5f7"}}
                >
                  <span className="filename">{filename}</span>
                  <input type="file" className="inputfile form-control" name="file" onChange={hgandlefile} />
                </div> */}
                <div>
                  <input
                    className={`${error.file ? "handleinput_error" : ""}  ${dberr.file ? "error_padding" : ""} mt-15 typefiledes 
                    `}
                    type="text"
                    value={filename}
                    onClick={() => fileInputRef.current.click()}
                    onKeyDown={handleTextKeyPress}
                  />
                  <input type="file" ref={fileInputRef} style={{display: "none"}} onChange={hgandlefile} />
                </div>
                {dberr.file && <p className={`handledberror mb-0 ${dberr.file ? "error_padding_add" : ""}`}>{dberr.file}</p>}
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 ">
                <div className="recaptcha-container">
                  <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={recaptchaRef} onChange={handleVerify} theme="light" size="normal" />
                </div>
                {error.captcha && <p className="handledberror mb-0">{error.captcha}</p>}
              </div>
            </form>
          </div>
          <div className="career-footer">
            <button className="main-btn_carrer_apply" disabled={dbsubmit} type="button" onClick={handlesubmit}>
              APPLY NOW
            </button>
          </div>
        </Box>
      </Modal>
      {/* <div className="card mb-3 grey">
        <div className="card-body grey" id="headingOne">
          <h4 className="handlecareerhireinghead">PHP MVC Developer</h4>
          <div className="d-flex justify-content-between mt-1">
            <div className="d-flex justify-content-center align-items-center">
              <img src={career1} alt="car1" className="handlecareermain_img" />

              <div className="ml-1">
                <p className="handelmobilep"> Location</p>
                <h6 className="handelmobileh6">surat</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <img src={career2} alt="car1" className="handlecareermain_img" />
              <div className="ml-2">
                <p className="handelmobilep"> Experience</p>
                <h6 className="handelmobileh6"> 1 to 2 year</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center tabrequirement">
              <img src={career3} alt="car1" className="handlecareermain_img" />
              <div className="ml-2">
                <p className="handelmobilep"> Position</p>
                <h6 className="handelmobileh6">2</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button className="main-btn_carrer tab1" type="button" data-bs-toggle="collapse" data-bs-target="#tab1" onClick={() => handlecollaps("tab1", "PHP MVC Develope with Experience", "PHP MVC Develope")}>
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
        <div className={`collapse  ${apply === "tab1" ? "show" : ""} mt-2`} id="tab1" aria-labelledby="headingOne" style={{transition: "height 0.35s ease 0s"}}>
          <div className="card-body_collpas">
            <p style={{color: "#000000"}}>Your job feed required the following area where you need to perform your best for developing your own future with Softstrom Technosys</p>
            <h6 className="handlecareerrespon">Responsibilities and Duties :</h6>
            <ul>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Minimum 1.5 years of development experience in PHP & MVC (CodeIgniter and/or Laravel )</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Proficient in Core PHP, OOPS, HTML5, Bootstrap, JavaScript, jQuery, Ajax</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Excellent relational database skills with MySQL</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Hands on experience on integration of multiple data sources and databases into one system</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Knowledge of Web Services / REST APIs, such as Facebook, Google maps, Payment Gateway Integration etc.</li>
              </div>
            </ul>
            <h6 className="handlecareerrespon mt-2">Qualification :</h6>
            <div className="handlediv">

              <img src={bullet} alt="symbol" className="handlecarrericon" />
              <p className="handlecareerli" style={{lineHeight: "20px"}}>
                B.E.(Computer,IT), MCA, MSc.IT, Msc.ICT, BCA, Diploma(Computer, IT)
              </p>
            </div>
            <div className="d-flex justify-content-end pt-3">
              <button className="main-btn_carrer_apply " type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-3 mb-3 grey">
        <div className="card-body" id="headingtwo" style={{backgroundColor: "#f8f9fab5"}}>
          <h4 className="handlecareerhireinghead">Mobile Application Developer</h4>
          <div className="d-flex justify-content-between mt-1">
            <div className="d-flex justify-content-center align-items-center">
              <img src={career1} alt="car1" className="handlecareermain_img" />
              <div className="ml-1">
                <p className="handelmobilep"> Location</p>
                <h6 className="handelmobileh6">surat</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <img src={career2} alt="car1" className="handlecareermain_img" />

              <div className="ml-2">
                <p className="handelmobilep"> Experience</p>
                <h6 className="handelmobileh6"> 1 to 2 year</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center tabrequirement">
              <img src={career3} alt="car1" className="handlecareermain_img" />
              <div className="ml-2">
                <p className="handelmobilep"> Position</p>
                <h6 className="handelmobileh6">2</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button className="main-btn_carrer tab2" type="button" data-bs-toggle="collapse" href="#tab2" onClick={() => handlecollaps("tab2", "Mobile Application Developer with experience", "Mobile Application Developer")}>
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className={`collapse ${apply === "tab2" ? "show" : ""} mt-2`} id="tab2" aria-labelledby="headingtwo" style={{transition: "height 0.35s ease 0s"}}>
          <div className="card-body_collpas">
            <p style={{color: "#000000"}}>Your job feed required the following area where you need to perform your best for developing your own future with Softstrom Technosys</p>
            <h6 className="handlecareerrespon">Responsibilities and Duties :</h6>
            <ul className="skill">
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Minimum 1.5 years of development experience in Android (Java / Flutter)</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Proficient in Core Android, OOPS, Firebase and Admob</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Excellent relational database skills with SQLite and Realm</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Hands on experience on integration of multiple data sources and databases into one system</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Knowledge of Web Services / REST APIs, such as Facebook, Google maps, Payment Gateway Integration etc.</li>
              </div>
            </ul>
            <h6 className="handlecareerrespon mt-2">Qualification :</h6>
            <div className="handlediv">
              <img src={bullet} alt="symbol" className="handlecarrericon " />
              <p className="handlecareerli" style={{lineHeight: "20px"}}>
                B.E.(Computer,IT), MCA, MSc.IT, Msc.ICT, BCA, Diploma(Computer, IT)
              </p>
            </div>
            <div className="d-flex justify-content-end pt-3">
              <button className="main-btn_carrer_apply" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-3 mb-3 grey">
        <div className="card-body" style={{backgroundColor: "#f8f9fab5"}}>
          <h4 className="handlecareerhireinghead">PHP MVC Developer</h4>
          <div className="d-flex justify-content-between mt-1">
            <div className="d-flex justify-content-center align-items-center">
              <img src={career1} alt="car1" className="handlecareermain_img" />
              <div className="ml-1">
                <p className="handelmobilep"> Location</p>
                <h6 className="handelmobileh6">surat</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <img src={career2} alt="car1" className="handlecareermain_img" />

              <div className="ml-2">
                <p className="handelmobilep"> Experience</p>
                <h6 className="handelmobileh6"> Fresher</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center tabrequirement">
              <img src={career3} alt="car1" className="handlecareermain_img" />
              <div className="ml-2">
                <p className="handelmobilep"> Position</p>
                <h6 className="handelmobileh6">3</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button className="main-btn_carrer tab4" data-parent="#myGroup" data-bs-toggle="collapse" href="#tab4" type="button" onClick={() => handlecollaps("tab4", "PHP MVC Developer fresher", "PHP MVC Developer")}>
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className={`collapse ${apply === "tab4" ? "show" : ""} mt-2`} id="tab4" style={{transition: "height 0.35s ease 0s"}}>
          <div className="card-body_collpas">
            <p style={{color: "#000000"}}>Your job feed required the following area where you need to perform your best for developing your own future with Softstrom Technosys</p>
            <h6 className="handlecareerrespon">Responsibilities and Duties :</h6>
            <ul className="skill">
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Good Knowledge of development in PHP & MVC (CodeIgniter and/or Laravel )</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Proficient in Core PHP, OOPS, HTML5, Bootstrap, JavaScript, jQuery, Ajax, Angular</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Master in relational database skills with MySQL</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Hands on experience on integration of multiple data sources and databases into one system</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Basic Knowledge of Web Services / REST APIs, such as Facebook, Google maps, Payment Gateway Integration etc.</li>
              </div>
            </ul>
            <h6 className="handlecareerrespon mt-2">Qualification :</h6>
            <div className="handlediv">
              <img src={bullet} alt="symbol" className="handlecarrericon " />
              <p className="handlecareerli" style={{lineHeight: "20px"}}>
                B.E.(Computer,IT), MCA, MSc.IT, Msc.ICT, BCA, Diploma(Computer, IT)
              </p>
            </div>
            <div className="d-flex justify-content-end pt-3">
              <button className="main-btn_carrer_apply" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-3 mb-3 grey">
        <div className="card-body" style={{backgroundColor: "#f8f9fab5"}}>
          <h4 className="handlecareerhireinghead">Mobile Application Developer</h4>
          <div className="d-flex justify-content-between mt-1">
            <div className="d-flex justify-content-center align-items-center">
              <img src={career1} alt="car1" className="handlecareermain_img" />
              <div className="ml-1">
                <p className="handelmobilep"> Location</p>
                <h6 className="handelmobileh6">surat</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <img src={career2} alt="car1" className="handlecareermain_img" />

              <div className="ml-2">
                <p className="handelmobilep"> Experience</p>
                <h6 className="handelmobileh6">Fresher</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center tabrequirement">
              <img src={career3} alt="car1" className="handlecareermain_img" />
              <div className="ml-2">
                <p className="handelmobilep"> Position</p>
                <h6 className="handelmobileh6">3</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button className="main-btn_carrer tab3" type="button" data-bs-toggle="collapse" href="#tab3" onClick={() => handlecollaps("tab3", "Mobile Application Developer fresher", "Mobile Application Developer")}>
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className={`collapse ${apply === "tab3" ? "show" : ""} mt-2`} id="tab3" style={{transition: "height 0.35s ease 0s"}}>
          <div className="card-body_collpas">
            <p style={{color: "#000000"}}>Your job feed required the following area where you need to perform your best for developing your own future with Softstrom Technosys</p>
            <h6 className="handlecareerrespon">Responsibilities and Duties :</h6>
            <ul className="skill">
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Good Knowledge of development in Android (Java / Flutter)</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Proficient in Core Android, OOPS, Firebase and Admob</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Good in relational database skills with SQLite and Realm</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Hands on experience on integration of multiple data sources and databases into one system</li>
              </div>
              <div className="handlediv">
                <img src={bullet} alt="symbol" className="handlecarrericon " />
                <li className="handlecareerli">Basic Knowledge of Web Services / REST APIs, such as Facebook, Google maps, Payment Gateway Integration etc.</li>
              </div>
            </ul>
            <h6 className="handlecareerrespon mt-2">Qualification :</h6>
            <div className="handlediv">
              <img src={bullet} alt="symbol" className="handlecarrericon " />
              <p className="handlecareerli" style={{lineHeight: "20px"}}>
                B.E.(Computer,IT), MCA, MSc.IT, Msc.ICT, BCA, Diploma(Computer, IT)
              </p>
            </div>
            <div className="d-flex justify-content-end pt-3">
              <button className="main-btn_carrer_apply" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="modal fade" id="staticBackdrop" role="dialog" ref={modalRef}>
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {formapplyview}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{border: "none", boxShadow: "none"}}>
              <form className="row">
                <div className="col-md-12">
                  <input type="text" className={`${error.name ? "handleinput_error" : ""}`} name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                {dberr.name && <p className="handledberror ">{dberr.name}</p>}
                <div className="col-md-12">
                  <input type="email" name="email" className={`${error.email ? "handleinput_error" : ""} ${error.em_verify ? "handleinput_error" : ""}`} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                </div>
                {dberr.email && <p className="handledberror ">{dberr.email}</p>}

                <div className="col-md-12">
                  <input
                    type="text"
                    name="phone"
                    className={`${error.phone ? "handleinput_error" : ""} mt-15   ${error.num_verify ? "error_padding" : ""}
                    `}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                  />
                  {dberr.phone && <p className="handledberror ">{dberr.phone}</p>}
                  {error.num_verify && <p className={`handledberror mb-0  ${error.num_verify ? "error_padding_add" : ""}`}>{error.num_verify}</p>}
                </div>

                <div className="col-md-12 ">
                  <div
                    className={`${error.file ? "handleinput_error" : ""}  ${dberr.file ? "error_padding" : ""} mt-15 typefiledes 
                    `}
                    style={{background: "#f5f5f7"}}
                  >
                    <span className="filename">{filename}</span>
                    <input type="file" className="inputfile form-control" name="file" onChange={hgandlefile} />
                  </div>
                </div>
                {dberr.file && <p className={`handledberror mb-0 ${dberr.file ? "error_padding_add" : ""}`}>{dberr.file}</p>}

                <div className="col-lg-6 col-md-12 col-sm-12 ">
                  <div className="recaptcha-container">
                    <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleVerify} theme="light" size="normal" />
                  </div>
                  {error.captcha && <p className="handledberror mb-0">{error.captcha}</p>}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="main-btn_carrer_apply" type="button" onClick={handlesubmit}>
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Careerdata;

// [{contentpositionview: "2";
// contentview: true;
// description: "Your job feed required the following area where you need to perform your best for developing your own future with Softstrom Technosys";
// experience: "1 Year";
// location: "Surat";
// position: "2";
// qualification: "B.E.(Computer,IT), MCA, MSc.IT, Msc.ICT, BCA, Diploma(Computer, IT)";
// responsibility: (5)[("Minimum 1.5 years of development experience in Android (Java / Flutter)", "Proficient in Core Android, OOPS, Firebase and Admob", "Excellent relational database skills with SQLite and Realm", "Hands on experience on integration of multiple data sources and databases into one system", "Knowledge of Web Services / REST APIs, such as Fac…ok, Google maps, Payment Gateway Integration etc.")];
// title: "Mobile Application Developer 1";
// _id: "649c05881b87759666a35cdd";}
// {contentpositionview: "1";
// contentview: true;
// description: "Your job feed required the following area where you need to perform your best for developing your own future with Softstrom Technosys";
// experience: "1 Year";
// location: "Surat";
// position: "2";
// qualification: "B.E.(Computer,IT), MCA, MSc.IT, Msc.ICT, BCA, Diploma(Computer, IT)";
// responsibility: (5)[("Minimum 1.5 years of development experience in Android (Java / Flutter)", "Proficient in Core Android, OOPS, Firebase and Admob", "Excellent relational database skills with SQLite and Realm", "Hands on experience on integration of multiple data sources and databases into one system", "Knowledge of Web Services / REST APIs, such as Fac…ok, Google maps, Payment Gateway Integration etc.")];
// title: "Mobile Application Developer 1";
// _id: "649c05881b87759666a35cdd";}
// {contentpositionview: "3";
// contentview: true;
// description: "Your job feed required the following area where you need to perform your best for developing your own future with Softstrom Technosys";
// experience: "1 Year";
// location: "Surat";
// position: "2";
// qualification: "B.E.(Computer,IT), MCA, MSc.IT, Msc.ICT, BCA, Diploma(Computer, IT)";
// responsibility: (5)[("Minimum 1.5 years of development experience in Android (Java / Flutter)", "Proficient in Core Android, OOPS, Firebase and Admob", "Excellent relational database skills with SQLite and Realm", "Hands on experience on integration of multiple data sources and databases into one system", "Knowledge of Web Services / REST APIs, such as Fac…ok, Google maps, Payment Gateway Integration etc.")];
// title: "Mobile Application Developer 1";
// _id: "649c05881b87759666a35cdd";}]
