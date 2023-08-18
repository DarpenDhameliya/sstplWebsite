import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import axioss from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { ContactusSlice, Contactusstate, Contactusstatus } from "@/redux/slice/Contackus";
import { Iconstate, Iconstatus } from "@/redux/slice/IconSlice";

export default function Footer(className) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, settextarea] = useState("");
  const [dbsubmit, setDbsubmit] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [subFocused, setSubFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [textFocused, setTextFocused] = useState(false);
  const [dbError, setDbError] = useState([]);
  const [recentYear, setRecentYear] = useState("");
  const [error, setError] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [footerClick, setFooterClick] = useState(false);
  const [fields, setFields] = useState([]);
  const [dataLength, setDataLength] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [captchres, setCaptchres] = useState("");
  const recaptchaRef = useRef();
  const dispatch = useDispatch();
  const states = useSelector(Contactusstate);
  const iconstate = useSelector(Iconstate);

  const notify = useCallback(() => {
    toast.success("Apply Successfully..", {
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
    axioss
      .get("https://api.ipify.org/?format=json")
      .then((response) => {
        const ipAddress = response.data.ip;
        setIpAddress(ipAddress);
      })
      .catch((error) => {
        console.log(error);
      });

    const d = new Date();
    let year = d.getFullYear();
    setRecentYear(year);
  }, []);

  useEffect(() => {
    if (footerClick) {
      if (states.status === "loading") {
      } else if (states.status === "succeeded") {
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        settextarea("");
        setDbsubmit(false);
        setCaptchres("");
        setDbError([]);
        setError([]);
        setFooterClick(false);
        setIsVerified(false);
        notify();
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        dispatch(Contactusstatus());
      } else if (states.status === "failed") {
        setDbError(states.error);
        setDbsubmit(false);
        setTimeout(() => {
          setDbError([]);
        }, 3000);
        dispatch(Contactusstatus());
      } else {
      }
    }

  });

  useEffect(() => {
    if (iconstate.status === "loading") {
    } else if (iconstate.status === "succeeded") {
      setFields(iconstate.response.result[0].data);
      setDataLength(iconstate.response.result[0].data.length);
      dispatch(Iconstatus());
    } else if (iconstate.status === "failed") {
      notifyerr();
      dispatch(Iconstatus());
    } else {
    }

  }, [ iconstate])
  

  const handlecontectform = (e) => {
    e.preventDefault();
    if (dbsubmit === false) {
      setFooterClick(true);
      let name_verify;
      const regex = /\b\w+\b/g;
      const matches = fname.match(regex);
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

      if (!fname || !lname || !email || !phone || !isVerified || number_verify === false || email_verify === false || !textarea || name_verify === false) {
        if (!fname) {
          error.fname = "Required !";
        } else {
          error.fname = "";
          if (name_verify === false) {
            error.name_verify = "Minimum Two Word Required";
          } else {
            error.name_verify = "";
          }
        }
        if (!lname) {
          error.lname = "Required !";
        } else {
          if (lname.length < 4) {
            error.lname = "Required !!";
          }
        }
        if (!email) {
          error.email = "Required !";
        } else {
          error.email = "";
          if (!email_verify) {
            error.em_verify = "Add Correct email";
          } else {
            error.em_verify = "";
          }
        }
        if (!phone) {
          error.phone = "Required !";
        } else {
          error.phone = ""; 
          if (!number_verify) {
            error.num_verify = "Add Correct number";
          } else {
            error.num_verify = "";
          }
        }
        if (!textarea) {
          error.textarea = "Required !";
        } else {
          if (textarea.length < 9) {
            error.textarea = "Required !!";
          }
        }
        if (!isVerified) {
          error.captcha = "Required !";
        } else {
          error.captcha = "";
        }
        setError({ ...error, [e.target.name]: e.target.value });
        setTimeout(() => {
          setError([]);
        }, 2000);
      } else {
        const json1 = { fname, lname, email, phone, textarea };
        const json2 = { ipAddress, captchres };
        setDbsubmit(true);
        dispatch(
          ContactusSlice({
            json1,
            json2,
          })
        );
      }
    }
  };
  const handleVerify = (response) => {
    setCaptchres(response);
    setIsVerified(true);
  };
  const handlefirstname = (e) => {
    let name = e.target.value;
    setFname(e.target.value);
    if (name.length > 5) {
      error.fname = "";
    }
  };
  const handlefnameBlur = () => {
    setNameFocused(false);
    if (fname.length < 4) {
      error.fname = "Required !!";
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

  const handlesubject = (e) => {
    let data = e.target.value;
    setLname(e.target.value);
    if (data.length > 4) {
      error.lname = "";
    }
  };
  const handlesubjectBlur = () => {
    setSubFocused(false);
    if (lname.length < 4) {
      error.lname = "Required !!";
    }
  };

  const handletextarea = (e) => {
    let data = e.target.value;
    settextarea(e.target.value);
    if (data.length > 10) {
      error.textarea = "";
    }
  };
  const handletextBlur = () => {
    setTextFocused(false);
    if (textarea.length < 9) {
      error.textarea = "Required !!";
    }
  };
  return (
    <>
      <ToastContainer position="top-right" closeOnClick={false} style={{ marginTop: "55px" }} />
      <div className={`softstormweb-footer ${className || ""}`} style={{ backgroundColor: "#f8f9fa" }}>
        <div className="handleimage">
          <div className="footer_bg">
            <div className="container">
              <div className="softstormweb-footer-signupbox">
                <div className="row handlebg">
                  <div className="col-lg-4  handlecontactimg">
                    <div className={`contact--info-area maintainformhw handlefootertab `}>
                      <h3>CONTACT US</h3>
                      <div className="single-info">
                        <h5>ADDRESS</h5>
                        <Link
                          href={{
                            pathname: "https://www.google.com/maps/dir/21.2369408,72.8629248/softstorm/@21.2356059,72.8587446,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04f50264611d1:0x76746ef930af1752!2m2!1d72.8590564!2d21.2349749?entry=ttu",
                          }}
                          target="_blank"
                          rel="noreferrer"
                          className="pl-0 d-flex"
                        >
                          <i className="fa fa-home-lg mr-2" />
                          <div className="ml-1">305-306, Amby Valley Arcade, Opp. Santosa Height, Manisha Garnala. Uttran, Surat, Gujarat</div>
                        </Link>
                      </div>
                      <div className="single-info">
                        <h5>Phone</h5>
                        <a href="tel:+91261-3560756" className="pl-0 pb-1 d-flex align-items-center">
                          <i className="fa fa-phone mr-2" />
                          <div className="ml-1">+91261-3560756</div>
                        </a>
                        <a href="tel:+919099919947" className="pl-0 d-flex align-items-center">
                          <i className="fa fa-phone mr-2" />
                          <div className="ml-1">+91 90999 19947</div>
                        </a>
                      </div>
                      <div className="single-info">
                        <h5>Support</h5>
                        <a href="mailto:contact@softstorm.in" rel="noopener noreferrer" className="pl-0 d-flex align-items-center">
                          <i className="fa fa-envelope mr-2" />
                          <div className="ml-1">contact@softstorm.in</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 pl-0 handlemobileset">
                    <div className="contact-form">
                      <h4>Let’s Connect</h4>
                      <p>Reach out today to spark innovation and unleash digital solutions in collaboration with us.</p>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <input className={`${error.fname ? "handleinput_error" : ""} ${dbError.fname ? "error_padding" : ""}`} onBlur={handlefnameBlur} onFocus={() => setNameFocused(true)} type="text" name="f-name" placeholder="Full Name" value={fname} onChange={handlefirstname} />
                          {dbError.fname && <p className={`handledberror mb-0 ${dbError.fname ? "error_padding_add" : ""}`}>{dbError.fname}</p>}
                          {error.name_verify && <p className={`handledberror mb-0  ${error.name_verify ? "error_padding_add" : ""}`}>{error.name_verify}</p>}
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <input
                            className={`${error.email ? "handleinput_error" : ""} ${error.em_verify ? "handleinput_error" : ""}
                              ${dbError.email || error.em_verify ? "error_padding" : ""}`}
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onBlur={handleemailBlur}
                            onFocus={() => setEmailFocused(true)}
                            value={email}
                            onChange={handleemail}
                          />
                          {dbError.email && <p className={`handledberror mb-0 ${dbError.email ? "error_padding_add" : ""}`}>{dbError.email}</p>}
                          {error.em_verify && <p className={`handledberror mb-0  ${error.em_verify ? "error_padding_add" : ""}`}>{error.em_verify}</p>}
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <input className={`${error.lname ? "handleinput_error" : ""}  ${dbError.sub ? "error_padding" : ""}`} onBlur={handlesubjectBlur} onFocus={() => setSubFocused(true)} type="text" name="l-name" placeholder="Subject" value={lname} onChange={handlesubject} />
                          {dbError.sub && <p className={`handledberror mb-0 ${dbError.sub ? "error_padding_add" : ""}`}>{dbError.sub}</p>}
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <input
                            className={`${error.phone ? "handleinput_error" : ""}  ${error.num_verify ? "error_padding" : ""}
                              ${dbError.phone ? "error_padding" : ""}`}
                            type="text"
                            name="phone"
                            onBlur={handlephoneBlur}
                            onFocus={() => setPhoneFocused(true)}
                            placeholder="Phone Number"
                            value={phone}
                            onChange={handlephone}
                          />
                          {dbError.phone && <p className={`handledberror mb-0 ${dbError.phone ? "error_padding_add" : ""}`}>{dbError.phone}</p>}
                          {error.num_verify && <p className={`handledberror mb-0  ${error.num_verify ? "error_padding_add" : ""}`}>{error.num_verify}</p>}
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <textarea style={{ background: "#fff", resize: "none" }} className={`${error.textarea ? "handleinput_error" : ""}  ${dbError.textarea ? "error_padding" : ""}`} onBlur={handletextBlur} onFocus={() => setTextFocused(true)} name="message" placeholder="How can we help?" value={textarea} onChange={handletextarea} />
                          {dbError.textarea && <p className={`handledberror mb-0 ${dbError.textarea ? "error_padding_add" : ""}`}>{dbError.textarea}</p>}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                          <div className="recaptcha-container">
                            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_SITE_KEY} onChange={handleVerify} theme="light" size="normal" />
                          </div>
                          {error.captcha && <p className="handledberror mb-0">{error.captcha}</p>}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end align-items-center">
                          <button className="main-btn_footers main-btn-footer" name="submit" disabled={dbsubmit} onClick={handlecontectform}>
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
