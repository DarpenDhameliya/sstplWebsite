/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState, useCallback} from "react";
import logo from "../../../assets/images/logo.webp";
import {useDispatch, useSelector} from "react-redux";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Contactusstatus, Contactusstate, ContactusSlice} from "../slice/Contackus";
import {Link} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const ContactForm = () => {
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextarea] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [subFocused, setSubFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [textFocused, setTextFocused] = useState(false);
  const [dbError, setDbError] = useState([]);
  const [error, setError] = useState([]);
  const [dbsubmit, setDbsubmit] = useState(false);
  const [captchres, setCaptchres] = useState("");

  const [recentYear, setRecentYear] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [contactClick, setContactClick] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  const dispatch = useDispatch();
  const states = useSelector(Contactusstate);
  const nameRef = useRef(null);
  const recaptchaRef = useRef();

  useEffect(() => {
    const d = new Date();
    let year = d.getFullYear();
    setRecentYear(year);

    document.title = "Contact-US | SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  }, []);

  const notify = useCallback(() => {
    toast.success("Email Sent Successfully..", {
      autoClose: 2000,
      closeOnClick: false,
    });
  }, []);

  const notifyerr = useCallback(() => {
    toast.success("Internal server ..", {
      autoClose: 2000,
      closeOnClick: false,
    });
  }, []);

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

  const handlesendDATA = (e) => {
    setContactClick(true);
    if (dbsubmit === false) {
      var email_verify;
      var number_verify;
      let name_verify;
      const regex = /\b\w+\b/g;
      const matches = fname.match(regex);
      if (matches && matches.length >= 2) {
        name_verify = true;
      } else {
        name_verify = false;
      }
      if (!/^\+?\d{0,3}\s?\d{6,16}$/.test(phone)) {
        number_verify = false;
      } else {
        number_verify = true;
      }

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        email_verify = false;
      } else {
        email_verify = true;
      }
      if (!fname || !lname || !email || !phone || !textarea || number_verify === false || email_verify === false || name_verify === false || !isVerified) {
        if (!fname) {
          error.fname = "Required !!";
        } else {
          error.fname = "";
          if (name_verify === false) {
            error.name_verify = "Minimum Two Word Required";
          } else {
            error.name_verify = "";
          }
        }
        if (!lname) {
          error.lname = "Required !!";
        } else {
          if (lname.length < 4) {
            error.lname = "Required !!";
          }
        }
        if (!textarea) {
          error.textarea = "Required !!";
        } else {
          if (textarea.length < 9) {
            error.textarea = "Required !!";
          }
        }
        if (!email) {
          error.email = "Required !!";
        } else {
          error.email = "";
          if (!email_verify) {
            error.em_verify = "Add Correct email";
          } else {
            error.em_verify = "";
          }
        }
        if (!phone) {
          error.phone = "Required !!";
        } else {
          error.phone = "";
          if (!number_verify) {
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
        }, 3000);
      } else {
        const json1 = {fname, lname, email, phone, textarea};
        const json2 = {ipAddress, captchres};
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

  useEffect(() => {
    if (contactClick === true) {
      if (states.status === "loading") {
      } else if (states.status === "succeeded") {
        notify();
        setLname("");
        setFname("");
        setEmail("");
        setPhone("");
        setTextarea("");
        setCaptchres("");
        setDbsubmit(false);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setDbError([]);
        setError([]);
        setIsVerified(false);
        setContactClick(false);

        dispatch(Contactusstatus());
      } else if (states.status === "failed") {
        notifyerr();
        setDbError(states.error);
        setDbsubmit(false);

        setTimeout(() => {
          setDbError([]);
        }, 3000);
        dispatch(Contactusstatus());
      } else {
      }
    }
  }, [contactClick, notify, states.status]);

  const handleVerify = (response) => {
    setCaptchres(response);
    setIsVerified(true);
  };

  const handlefirstname = (e) => {
    let name = e.target.value;
    setFname(name);
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
    setTextarea(e.target.value);
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
      <ToastContainer position="top-right" closeOnClick={false} style={{marginTop: "55px"}} />

      <section className=" pt-60 pb-60" id="service">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              {/* 3 cards */}
              <div className="row justify-content-center pb-50">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="sstpl_contact-card r-bg-c mt-40 ">
                    <div className="sstpl_contact-card-img shadows" style={{border: "2px solid #005889"}}>
                      {/* <img src={e.image} alt="services" />{" "} */}
                      <i className="fa fa-location-dot contectus_icon" style={{fontSize: "40px", color: "#4f4f4f"}} aria-hidden="true"></i>
                    </div>
                    <div className="ree-card-content mt40 d-flex align-items-center flex-column">
                      <h4 className=" mb-2" style={{color: "#005889"}}>
                        Address
                      </h4>
                      <a href="https://www.google.com/maps/dir/21.2369408,72.8629248/softstorm/@21.2356059,72.8587446,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04f50264611d1:0x76746ef930af1752!2m2!1d72.8590564!2d21.2349749?entry=ttu" target="_blank" rel="noreferrer" className="pl-0 d-flex ">
                        <div className="ml-1" style={{color: "#005889"}}>
                          305-306, Amby Valley Arcade, Opp. Santosa Height, Manisha Garnala. Uttran, Surat, Gujarat.
                        </div>
                      </a>
                      {/* <p style={{color: "#005889"}}></p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="sstpl_contact-card1 r-bg-c mt-40 ">
                    <div className="sstpl_contact-card-img shadows" style={{border: "2px solid #006308"}}>
                      {/* <img src={e.image} alt="services" />{" "} */}
                      <i className="fa fa-phone contectus_icon" style={{fontSize: "40px", color: "#4f4f4f"}} aria-hidden="true"></i>
                    </div>
                    <div className="ree-card-content mt40 d-flex align-items-center flex-column">
                      <h4 className="mb-2" style={{color: "#006308"}}>
                        Phone Number
                      </h4>
                      <a href="tel:+91261-3560756" className="pl-0 pb-1 d-flex align-items-center">
                        <div className="ml-1" style={{color: "#006308"}}>
                          HR: +91261-3560756
                        </div>
                      </a>
                      <a href="tel:+919099919947" className="pl-0 pb-1 d-flex align-items-center">
                        <div className="ml-1" style={{color: "#006308"}}>
                          Contact: +91 90999 19947
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="sstpl_contact-card2 r-bg-c mt-40 ">
                    <div className="sstpl_contact-card-img shadows" style={{border: "2px solid #a10404"}}>
                      {/* <img src={e.image} alt="services" />{" "} */}
                      <i className="fa fa-envelope contectus_icon" style={{fontSize: "40px", color: "#4f4f4f"}} aria-hidden="true"></i>
                    </div>
                    <div className="ree-card-content mt40 d-flex align-items-center flex-column">
                      <h4 className=" mb-2" style={{color: "#a10404"}}>
                        Email Address
                      </h4>
                      <a href="mailto:contact@softstorm.in" rel="noopener noreferrer" className="pl-0 d-flex align-items-center">
                        <div className="ml-1" style={{color: "#a10404"}}>
                          contact@softstorm.in
                        </div>
                      </a>
                      <a href="mailto:hr.softstorm@gmail.com" rel="noopener noreferrer" className="pl-0 d-flex align-items-center">
                        <div className="ml-1" style={{color: "#a10404"}}>
                          hr.softstorm@gmail.com
                        </div>
                      </a>
                      {/* <p style={{color: "#a10404"}}>contact@softstorm.in</p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* contact form */}
              <div className="row">
                <div className="col-md-12 handlemobile">
                  <div className="contact-form">
                    <h4>Let’s Connect</h4>
                    <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <input type="text" onBlur={handlefnameBlur} onFocus={() => setNameFocused(true)} className={` ${error.fname ? "handleinput_error" : ""} ${error.name_verify ? "error_padding" : ""} ${dbError.fname ? "error_padding" : ""}`} name="f-name" ref={nameRef} placeholder="Full Name " value={fname} onChange={handlefirstname} />
                        {dbError.fname && <p className={`handledberror mb-0 ${dbError.fname ? "error_padding_add" : ""}`}>{dbError.fname}</p>}
                        {error.name_verify && <p className={`handledberror mb-0  ${error.name_verify ? "error_padding_add" : ""}`}>{error.name_verify}</p>}
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <input type="email" name="email" placeholder="Email Address" onBlur={handleemailBlur} onFocus={() => setEmailFocused(true)} value={email} className={` ${error.email ? "handleinput_error" : ""} ${error.em_verify ? "handleinput_error" : ""} ${error.em_verify ? "error_padding" : ""} ${dbError.email ? "error_padding" : ""}`} onChange={handleemail} />
                        {dbError.email && <p className={`handledberror mb-0 ${dbError.email ? "error_padding_add" : ""}`}>{dbError.email}</p>}
                        {error.em_verify && <p className={`handledberror mb-0  ${error.em_verify ? "error_padding_add" : ""}`}>{error.em_verify}</p>}
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <input type="text" name="l-name" className={` ${error.lname ? "handleinput_error" : ""} ${dbError.sub ? "error_padding" : ""}`} onBlur={handlesubjectBlur} onFocus={() => setSubFocused(true)} placeholder="Subject" value={lname} onChange={handlesubject} />
                        {dbError.sub && <p className={`handledberror mb-0 ${dbError.sub ? "error_padding_add" : ""}`}>{dbError.sub}</p>}
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          value={phone}
                          onBlur={handlephoneBlur}
                          onFocus={() => setPhoneFocused(true)}
                          className={`
                        ${error.phone || error.num_verify ? "handleinput_error" : ""}  ${error.num_verify ? "error_padding" : ""}  ${dbError.phone ? "error_padding" : ""}`}
                          onChange={handlephone}
                        />
                        {dbError.phone && <p className={`handledberror mb-0 ${dbError.phone ? "error_padding_add" : ""}`}>{dbError.phone}</p>}
                        {error.num_verify && <p className={`handledberror mb-0  ${error.num_verify ? "error_padding_add" : ""}`}>{error.num_verify}</p>}
                      </div>

                      <div className="col-md-12">
                        <textarea name="message" className={`${error.textarea ? "handleinput_error" : ""}`} onBlur={handletextBlur} onFocus={() => setTextFocused(true)} placeholder="How can we help?" style={{resize: "none"}} rows="5" value={textarea} onChange={handletextarea} />
                        {dbError.textarea && <p className={`handledberror mb-0 ${dbError.textarea ? "error_padding_add" : ""}`}>{dbError.textarea}</p>}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 ">
                        <div className="recaptcha-container">
                          <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={recaptchaRef} onChange={handleVerify} theme="light" size="normal" />
                        </div>
                        {error.captcha && <p className="handledberror mb-0">{error.captcha}</p>}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end align-items-center">
                        <button className="main-btn_footer main-btn-footer" disabled={dbsubmit} name="submit" value="Send Message" onClick={handlesendDATA}>
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
      </section>

      {/* map */}
      <div className="bisylms-map">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2511780843033!2d72.83197811493592!3d21.2218860858941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f50264611d1%3A0x76746ef930af1752!2sSoftStorm%20Technosys%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1585860623345!5m2!1sen!2sin"></iframe>
      </div>

      {/* footer */}
      <section className=" softstormweb-footer-area-about softstormweb-footer-area-about-1">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-about-widget d-flex justify-content-center mb-2">
                <div className="logo">
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-12 d-flex justify-content-center
                align-items-center mb-2"
              >
                <a className="login-btn " target="_blank" href="https://www.facebook.com/softstormtechnosys" rel="noopener noreferrer" style={{marginRight: "7px", marginLeft: "15px"}}>
                  <i className="fab fa-facebook-f hoverefffac" style={{color: "#4f4f4f"}} />
                </a>{" "}
                <span> | </span>
                <a className="login-btn " target="_blank" href="https://twitter.com/softstorm_india" rel="noopener noreferrer" style={{marginRight: "7px", marginLeft: "7px"}}>
                  <i className="fab fa-twitter hoverefftwi" style={{color: "#4f4f4f "}} />
                </a>
                <span> | </span>
                <a className="login-btn " target="_blank" href="https://www.linkedin.com/company/softstorm-technosys" rel="noopener noreferrer" style={{marginRight: "7px", marginLeft: "7px"}}>
                  <i className="fab fa-linkedin-in hoverefflin" style={{color: "#4f4f4f "}} />
                </a>
                <span> | </span>
                <a className="login-btn " target="_blank" href="https://instagram.com/softstorm.in" rel="noopener noreferrer" style={{marginRight: "7px", marginLeft: "7px"}}>
                  <i className="fab fa-instagram hovereffins" style={{color: "#4f4f4f "}} />
                </a>
                <span> | </span>
                <a className="login-btn " target="_blank" href="https://wa.me/912613560756" rel="noopener noreferrer" style={{marginRight: "7px", marginLeft: "7px"}}>
                  <i className="fab fa-whatsapp hovereffwat" style={{color: "#4f4f4f "}} />
                </a>
                <span> | </span>
                <a className="login-btn " target="_blank" href="https://www.softstorm.in/skype:softstorminfosys?chat" rel="noopener noreferrer" style={{marginRight: "15px", marginLeft: "7px"}}>
                  <i className="fab fa-skype hovereffsky" style={{color: "#4f4f4f "}} />
                </a>
              </div>
              <div className="col-lg-12  mt-2 ">
                <div
                  className="row d-flex justify-content-center
                align-items-center"
                >
                  <div
                    className="col-md-6 col-sm-6 d-flex justify-content-end
                align-items-center pr-0 handlemobilfooter"
                  >
                    <Link
                      className="login-btn "
                      to="/about"
                      style={{
                        marginRight: "10px",
                        marginLeft: "10px",
                        color: "#0e1133",
                        fontWeight: 600,
                      }}
                    >
                      About Us
                    </Link>{" "}
                    <span> | </span>
                    <Link
                      className="login-btn "
                      to="/contact"
                      style={{
                        marginRight: "10px",
                        marginLeft: "10px",
                        color: "#0e1133",
                        fontWeight: 600,
                      }}
                    >
                      Contact Us
                    </Link>{" "}
                    <span> | </span>
                  </div>
                  <div className="col-md-6 col-sm-6 d-flex justify-content-start align-items-center pl-0 handlemobilfooter">
                    <Link
                      className="login-btn "
                      to="/ourwork"
                      style={{
                        marginRight: "10px",
                        marginLeft: "10px",
                        color: "#0e1133",
                        fontWeight: 600,
                      }}
                    >
                      Our Work
                    </Link>
                    <span> | </span>
                    <Link
                      className="login-btn "
                      to="/career"
                      style={{
                        marginRight: "10px",
                        marginLeft: "10px",
                        color: "#0e1133",
                        fontWeight: 600,
                      }}
                    >
                      Career
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row footer-copyright mt-2 pt-3  pb-2">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div>
                <Link className="login-btn mr-2 ml-2" to="/terms-and-conditions" style={{marginLeft: "15px", color: "#0e1133"}}>
                  Terms and Condition
                </Link>
                <span> | </span>
                <Link className="login-btn mr-2 ml-2" to="/privacy-policy" style={{color: "#0e1133"}}>
                  Privacy Policy
                </Link>
                <span> | </span>
                <Link className="login-btn mr-2 ml-2" to="/return-policy" style={{marginLeft: "15px", color: "#0e1133"}}>
                  Return Policy
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-text ">
                <p>Copyright © 2018 - {recentYear} Softstorm. All rights reserved.</p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default ContactForm;
