import React, {useState, useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CareerSlice, Careerstate, Careerstatus} from "../../../redux/slice/MailSlice";
import ReCAPTCHA from "react-google-recaptcha";
import {useRef} from "react";
import axios from "../../Axios";

const Sidepoosition = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [apply, setApply] = useState("");
  const [file, setFile] = useState("");
  const mailstate = useSelector(Careerstate);
  const [isVerified, setIsVerified] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [applyFocused, setApplyFocused] = useState(false);
  const [dbsubmit, setDbsubmit] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  const [captchres, setCaptchres] = useState("");

  const [error, setError] = useState([]);
  const [filename, setFilename] = useState("Upload Resume");
  const [dberr, setDberr] = useState([]);
  const [btnclick, setBtnclick] = useState(false);
  const dispatch = useDispatch();
  const recaptchaRef = useRef();
  const fileInputRef = useRef(null);

  const handleVerify = (response) => {
    setCaptchres(response);
    setIsVerified(true);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFile(file);
    setFilename(file.name);
  };
  const handleTextKeyPress = (event) => {
    if (event.key === "Enter") {
      fileInputRef.current.click();
    }
  };

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

  useEffect(() => {
    setTimeout(() => {
      setDbsubmit(false);
    }, 2000);
    if (btnclick === true) {
      if (mailstate.status === "loading") {
      } else if (mailstate.status === "succeeded") {
        setName("");
        setEmail("");
        setPhone("");
        setApply("");
        setCaptchres("");
        setFile("");
        setFilename("Upload Resume");
        setBtnclick(false);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        dispatch(Careerstatus());
      } else if (mailstate.status === "failed") {
        setBtnclick(false);
        setDberr(mailstate.error);
        setDbsubmit(false);

        setTimeout(() => {
          setDberr([]);
        }, 2000);
        dispatch(Careerstatus());
      } else {
      }
    }
  });

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

      setBtnclick(true);
      if (!file || !name || !email || !phone || !apply || name_verify === false || number_verify === false || email_verify === false || !isVerified) {
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
          if (!email_verify) {
            error.em_verify = "Add Correct email";
          } else {
            error.em_verify = "";
          }
        }
        if (!phone) {
          error.phone = " NUmber Required !";
        } else {
          error.phone = "";
          if (!number_verify) {
            error.num_verify = "Add Correct number";
          } else {
            error.num_verify = "";
          }
        }
        if (!apply) {
          error.apply = "Apply For Required !";
        } else {
          if (apply.length < 4) {
            error.apply = "Required !!";
          }
        }
        if (!isVerified) {
          error.captcha = "Required !";
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
        formData.append("apply", apply);
        formData.append("file", file);
        setDbsubmit(true);

        const json2 = {ipAddress, captchres};
        dispatch(
          CareerSlice({
            formData,
            json2,
          })
        );
      }
    }
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
  const handleappy = (e) => {
    let data = e.target.value;
    setApply(e.target.value);
    if (data.length > 5) {
      error.apply = "";
    }
  };
  const handleappyBlur = () => {
    setApplyFocused(false);
    if (apply.length < 4) {
      error.apply = "Required !!";
    }
  };
  return (
    <>
      <div className="blog-sidebar demo mt-3">
        <aside className="widget widget-search">
          <div className="row">
            <div className="col-md-12 contectformtebview">
              <div className="contact-form">
                <h4 className="contect-form_header mb-2">Apply Now</h4>
                <div className="col-md-12 handlecontact_form mb-2">
                  <input type="text" name="side_name" placeholder="Name" value={name} onBlur={handlefnameBlur} onFocus={() => setNameFocused(true)} className={`${error.name ? "handleinput_error" : ""} ${error.name_verify ? "error_padding" : ""} ${dberr.name ? "error_padding" : ""}`} onChange={handlefirstname} />
                  {dberr.name && <p className={`handledberror mb-0 ${dberr.name ? "error_padding_add" : ""}`}>{dberr.name}</p>}
                  {error.name_verify && <p className={`handledberror mb-0  ${error.name_verify ? "error_padding_add" : ""}`}>{error.name_verify}</p>}
                </div>
                <div className="col-md-12 handlecontact_form mb-2">
                  <input type="email" name="side_email" onBlur={handleemailBlur} onFocus={() => setEmailFocused(true)} placeholder="Email Address" className={`${error.email ? "handleinput_error" : ""} ${error.em_verify ? "handleinput_error" : ""} ${dberr.email || error.em_verify ? "error_padding" : ""}`} value={email} onChange={handleemail} />
                  {dberr.email && <p className={`handledberror mb-0 ${dberr.email ? "error_padding_add" : ""}`}>{dberr.email}</p>}
                  {error.em_verify && <p className={`handledberror mb-0  ${error.em_verify ? "error_padding_add" : ""}`}>{error.em_verify}</p>}
                </div>
                <div className="col-md-12 handlecontact_form mb-2">
                  <input
                    type="text"
                    name="side_phone"
                    className={`${error.phone ? "handleinput_error" : ""}
                    ${error.num_verify ? "error_padding" : ""} ${dberr.phone ? "error_padding" : ""}`}
                    placeholder="Phone Number"
                    value={phone}
                    onBlur={handlephoneBlur}
                    onFocus={() => setPhoneFocused(true)}
                    onChange={handlephone}
                  />
                  {dberr.phone && <p className={`handledberror mb-0 ${dberr.phone ? "error_padding_add" : ""}`}>{dberr.phone}</p>}
                  {error.num_verify && <p className={`handledberror mb-0  ${error.num_verify ? "error_padding_add" : ""}`}>{error.num_verify}</p>}
                </div>
                <div className="col-md-12 handlecontact_form mb-2">
                  {/* <label className="mb-0">Apply For</label> */}
                  <input className={`${error.apply ? "handleinput_error" : ""}`} onBlur={handleappyBlur} onFocus={() => setApplyFocused(true)} type="text" name="side_app-for" placeholder="Apply For" value={apply} onChange={handleappy} />
                </div>
                <div className="col-md-12 handlecontact_form">
                  <div>
                    <input className={`${error.file ? "handleinput_error" : ""} ${dberr.file ? "error_padding" : ""} typefiledes`} type="text" value={filename} onClick={() => fileInputRef.current.click()} onKeyDown={handleTextKeyPress} />
                    <input type="file" ref={fileInputRef} style={{display: "none"}} onChange={handleFileChange} />
                  </div>
                </div>
                {dberr.file && <p className={`handledberror mb-0 ${dberr.file ? "error_padding_add" : ""}`}>{dberr.file}</p>}
                <div className=" col-md-12  handlecontact_form">
                  <div className="recaptcha-container">
                    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_SITE_KEY} ref={recaptchaRef} onChange={handleVerify} theme="light" size="normal" />
                  </div>
                  {error.captcha && <p className="handledberror mb-0">{error.captcha}</p>}
                </div>
                <div className="col-md-12 text-right handlecontact_form mb-2 mt-3">
                  <button className={`main-btn_carrer_side ${dbsubmit ? "disabled" : ""}`} style={{width: "100%"}} onClick={handlesubmit}>
                    SEND RESUME
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidepoosition;
