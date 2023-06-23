/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState, useCallback} from "react";
import logo from "../../assets/images/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Contactusstatus, Contactusstate, ContactusSlice} from "../Contackus";
import {Link} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextarea] = useState("");
  const [dbError, setDbError] = useState([]);
  const [error, setError] = useState([]);
  const [recentYear, setRecentYear] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [contactClick, setContactClick] = useState(false);
  const dispatch = useDispatch();
  const states = useSelector(Contactusstate);
  const nameRef = useRef(null);
  var capchakey 
  useEffect(() => {
    const d = new Date();
    let year = d.getFullYear();
    setRecentYear(year);

  }, []);

  const notify = useCallback(() => {
    console.log("done");
    toast.success("Email Sent Successfully..", {
      autoClose: 2000,
      closeOnClick: false,
    });
  }, []);

  const handlesendDATA = (e) => {
    e.preventDefault();
    setContactClick(true);
    var number_verify;
    if (!/^\+?\d{0,3}\s?\d{6,14}$/.test(phone)) {
      number_verify = false;
    } else {
      number_verify = true;
    }

    var email_verify;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      email_verify = false;
    } else {
      email_verify = true;
    }

    if (!fname || !lname || !email || !phone || number_verify === false || email_verify === false) {
      if (!fname) {
        error.fname = "Required !!";
      } else {
        error.fname = "";
      }
      if (!lname) {
        error.lname = "Required !!";
      } else {
        error.lname = "";
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
      dispatch(ContactusSlice({fname, lname, email, phone, textarea}));
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
        setDbError([]);
        setError([]);
        setIsVerified(false);
        setContactClick(false);

        dispatch(Contactusstatus());
      } else if (states.status === "failed") {
        setDbError(states.error);
        setTimeout(() => {
          setDbError([]);
        }, 3000);
        dispatch(Contactusstatus());
      } else {
      }
    }
  }, [contactClick, notify, states.status]);

  const handleVerify = (response) => {
    setIsVerified(true);
  };
  return (
    <>
      <ToastContainer position="top-right" style={{marginTop: "55px"}} />
      
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
                      <i className="fa fa-map-marker contectus_icon" style={{fontSize: "40px", color: "#4f4f4f"}} aria-hidden="true"></i>
                    </div>
                    <div className="ree-card-content mt40">
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
                      <i className="fa fa-phone-alt contectus_icon" style={{fontSize: "40px", color: "#4f4f4f"}} aria-hidden="true"></i>
                    </div>
                    <div className="ree-card-content mt40">
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
                      <i className="fa fa-envelope-o contectus_icon" style={{fontSize: "40px", color: "#4f4f4f"}} aria-hidden="true"></i>
                    </div>
                    <div className="ree-card-content mt40">
                      <h4 className=" mb-2" style={{color: "#a10404"}}>
                        Email Address
                      </h4>
                      <a href="mailto:contact@softstorm.in@gmail.com" rel="noopener noreferrer" className="pl-0 d-flex align-items-center">
                        <div className="ml-1" style={{color: "#a10404"}}>
                          contact@softstorm.in
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
                        <input type="text" className={` ${error.fname ? "handleinput_error" : ""}  ${dbError.fname ? "error_padding" : ""}`} name="f-name" ref={nameRef} placeholder="Full Name" value={fname} onChange={(e) => setFname(e.target.value)} />
                        {dbError.fname && <p className={`handledberror mb-0 ${dbError.fname ? "error_padding_add" : ""}`}>{dbError.fname}</p>}
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <input type="email" name="email" placeholder="Email Address" value={email} className={` ${error.email ? "handleinput_error" : ""} ${error.em_verify ? "handleinput_error" : ""}  ${dbError.email ? "error_padding" : ""}`} onChange={(e) => setEmail(e.target.value)} />
                        {dbError.email && <p className={`handledberror mb-0 ${dbError.email ? "error_padding_add" : ""}`}>{dbError.email}</p>}
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <input type="text" name="l-name" className={` ${error.lname ? "handleinput_error" : ""} ${dbError.sub ? "error_padding" : ""}`} placeholder="Subject" value={lname} onChange={(e) => setLname(e.target.value)} />
                        {dbError.sub && <p className={`handledberror mb-0 ${dbError.sub ? "error_padding_add" : ""}`}>{dbError.sub}</p>}
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          value={phone}
                          className={`
                        ${error.phone ? "handleinput_error" : ""}  ${error.num_verify ? "error_padding" : ""}  ${dbError.phone ? "error_padding" : ""}`}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        {dbError.phone && <p className={`handledberror mb-0 ${dbError.phone ? "error_padding_add" : ""}`}>{dbError.phone}</p>}
                        {error.num_verify && <p className={`handledberror mb-0  ${error.num_verify ? "error_padding_add" : ""}`}>{error.num_verify}</p>}
                      </div>

                      <div className="col-md-12">
                        <textarea name="message" placeholder="How can we help?" style={{resize: "none"}} rows="5" value={textarea} onChange={(e) => setTextarea(e.target.value)} />
                        {dbError.textarea && <p className={`handledberror mb-0 ${dbError.textarea ? "error_padding_add" : ""}`}>{dbError.textarea}</p>}
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 ">
                        <div className="recaptcha-container">
                          <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleVerify} theme="light" size="normal" />
                        </div>
                        {error.captcha && <p className="handledberror mb-0">{error.captcha}</p>}
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end">
                        <input type="submit" className="main-btn main-btn-footer" name="submit" value="Send Message" onClick={handlesendDATA} />
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
                <Link className="login-btn mr-2 ml-2" to="/terms" style={{marginLeft: "15px", color: "#0e1133"}}>
                  Terms and Condition
                </Link>
                <span> | </span>
                <Link className="login-btn mr-2 ml-2" to="/privacy" style={{color: "#0e1133"}}>
                  Privacy Policy
                </Link>
                <span> | </span>
                <Link className="login-btn mr-2 ml-2" to="/returnpolicy" style={{marginLeft: "15px", color: "#0e1133"}}>
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
