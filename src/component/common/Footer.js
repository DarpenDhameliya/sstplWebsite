import React, { useState, useEffect ,useRef , useCallback} from "react";
import logo from "../../assets/images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ContactusSlice, Contactusstate, Contactusstatus } from "../Contackus";
import ReCAPTCHA from "react-google-recaptcha";

export default function Footer(className) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, settextarea] = useState("");
  const [dbError, setDbError] = useState([]);
  const [recentYear, setRecentYear] = useState("");
  const [error, setError] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [footerClick, setFooterClick] = useState(false)

  const dispatch = useDispatch();
  const states = useSelector(Contactusstate);
  const captchaRef = useRef(null)
  const notify = useCallback(() => {
    console.log('footer')
    toast.success("Email Sent Successfully..", {
      autoClose: 2000,
    });
  }, []);

  useEffect(() => {
    if(footerClick){
      if (states.status === "loading") {
      } else if (states.status === "succeeded") {
        setFname('')
        setLname('')
        setEmail('')
        setPhone('')
        settextarea('')
        setDbError([])
        setError([])
        setFooterClick(false)
        setIsVerified(false)
        notify();
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
  },[footerClick]);

  useEffect(() => {
    const d = new Date();
    let year = d.getFullYear();
    setRecentYear(year);
  }, []);

  const handleVerify = (response) => {
    setIsVerified(true);
    const token = captchaRef.current.getValue();

  };

  const handlecontectform = (e) => {
    e.preventDefault();
    captchaRef.current.reset();
    setFooterClick(true)
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

    if (!fname || !lname || !email || !phone  || !isVerified || number_verify === false || email_verify === false) {
      if (!fname) {
        error.fname = "Required !";
      } else {
        error.fname = "";
      }
      if (!lname) {
        error.lname = "Required !";
      } else {
        error.lname = "";
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
      // if (!textarea) {
      //   error.textarea = "Required !";
      // } else {
      //   error.textarea = "";
      // }
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
      dispatch(ContactusSlice({ fname, lname, email, phone, textarea }));
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        
        style={{ marginTop: "55px" }}
      />

      <div
        className={`softstormweb-footer ${className || ""}`}
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="handleimage">
          <div className="footer_bg">
            <div className="container">
              <div className="softstormweb-footer-signupbox">
                <div className="row handlebg">
                  <div className="col-lg-4  handlecontactimg">
                    <div
                      className={`contact--info-area maintainformhw handlefootertab ${
                        dbError.fname ||
                        dbError.lname ||
                        dbError.email ||
                        dbError.phone ||
                        dbError.textarea
                          ? "handleerrorbg"
                          : ""
                      }`}
                    >
                      <h3>CONTACT US</h3>
                      <div className="single-info">
                        <h5>ADDRESS</h5>
                        <a
                          href="https://www.google.com/maps/dir/21.2369408,72.8629248/softstorm/@21.2356059,72.8587446,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04f50264611d1:0x76746ef930af1752!2m2!1d72.8590564!2d21.2349749?entry=ttu"
                          target="_blank"
                          rel="noreferrer"
                          className="pl-0 d-flex "
                        >
                          <i className="fa fa-home-lg mr-2" />
                          <div className="ml-1">
                            305-306, Amby Valley Arcade, Opp. Santosa Height,
                            Manisha Garnala. Uttran, Surat, Gujarat
                          </div>
                        </a>
                      </div>
                      <div className="single-info">
                        <h5>Phone</h5>
                        <a
                          href="tel:+91261-3560756"
                          className="pl-0 pb-1 d-flex align-items-center"
                        >
                          <i className="fa fa-phone-alt mr-2" />
                          <div className="ml-1">+91261-3560756</div>
                        </a>
                        <a
                          href="tel:+919099919947"
                          className="pl-0 d-flex align-items-center"
                        >
                          <i className="fa fa-phone-alt mr-2" />
                          <div className="ml-1">+91 90999 19947</div>
                        </a>
                      </div>
                      <div className="single-info">
                        <h5>Support</h5>
                        <a
                          href="mailto:contact@softstorm.in@gmail.com"
                          rel="noopener noreferrer"
                          className="pl-0 d-flex align-items-center"
                        >
                          <i className="fa fa-envelope mr-2" />
                          <div className="ml-1">contact@softstorm.in</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 pl-0 handlemobileset">
                    <div className="contact-form">
                      <h4>Let’s Connect</h4>
                      <p>
                        Integer at lorem eget diam facilisis lacinia ac id
                        massa.
                      </p>
                      <form onSubmit={handlecontectform}>
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <input
                              className={`${
                                error.fname ? "handleinput_error" : ""
                              } ${dbError.fname ? 'error_padding' :''}`}
                              type="text"
                              name="f-name"
                              placeholder="Full Name"
                              value={fname}
                              onChange={(e) => setFname(e.target.value)}
                            />
                            {dbError.fname && (
                              <p className={`handledberror mb-0 ${dbError.fname ? 'error_padding_add' :''}`}>
                                {dbError.fname}
                              </p>
                            )}
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <input
                              className={`${
                                error.email ? "handleinput_error" : ""
                              } ${error.em_verify ? "handleinput_error" : ""}
                              ${dbError.email ? 'error_padding' :''}`}
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            {dbError.email && (
                              <p className={`handledberror mb-0 ${dbError.email ? 'error_padding_add' :''}`}>
                                {dbError.email}
                              </p>
                            )}
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <input
                              className={`${
                                error.lname ? "handleinput_error" : ""
                              }  ${dbError.sub ? 'error_padding' :''}`}
                              type="text"
                              name="l-name"
                              placeholder="Subject"
                              value={lname}
                              onChange={(e) => setLname(e.target.value)}
                            />
                            {dbError.sub && (
                              <p className={`handledberror mb-0 ${dbError.sub ? 'error_padding_add' :''}`}>
                                {dbError.sub}
                              </p>
                            )}
                          </div>

                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <input
                              className={`${
                                error.phone ? "handleinput_error" : ""
                              }  ${error.num_verify ? 'error_padding' : ''}
                              ${dbError.phone  ? 'error_padding' :''}`}
                              type="text"
                              name="phone"
                              placeholder="Phone Number"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                            {dbError.phone && (
                              <p className={`handledberror mb-0 ${dbError.phone ? 'error_padding_add' :''}`}>
                                {dbError.phone}
                              </p>
                            )}
                            {error.num_verify && <p className={`handledberror mb-0  ${error.num_verify ? 'error_padding_add' : ''}` }>{error.num_verify}</p>}

                          </div>
                          <div className="col-md-12 col-sm-12">
                            <textarea
                              style={{ background: "#fff", resize: "none" }}
                              className={`${
                                error.textarea ? "handleinput_error" : ""
                              }  ${dbError.textarea ? 'error_padding' :''}`}
                              name="message"
                              placeholder="How can we help?"
                              value={textarea}
                              onChange={(e) => settextarea(e.target.value)}
                            />
                            {dbError.textarea && (
                              <p className={`handledberror mb-0 ${dbError.textarea ? 'error_padding_add' :''}`}>
                                {dbError.textarea}
                              </p>
                            )}
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12 ">
                            <div className="recaptcha-container">
                              <ReCAPTCHA
                                sitekey={process.env.REACT_APP_SITE_KEY}
                                onChange={handleVerify}
                                theme="light"
                                size="normal"
                                ref={captchaRef}
                              />
                            </div>
                            { error.captcha && (
                              <p className="handledberror mb-0">
                                { error.captcha}
                              </p>
                            )}
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end">
                            <input
                              type="submit"
                              className="main-btn main-btn-footer"
                              name="submit"
                              value="Send Message"
                              onClick={handlecontectform}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="softstormweb-footer-area softstormweb-footer-area-about softstormweb-footer-area-about-1">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-about-widget d-flex justify-content-center mb-2">
                <div>
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-12 d-flex justify-content-center align-items-center mb-2">
                <a
                  className="social_icon ml-3"
                  target="_blank"
                  href="https://www.facebook.com/softstormtechnosys"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-facebook-f hoverefffac"
                    style={{ color: "#4f4f4f" }}
                  />
                </a>{" "}
                <span> | </span>
                <a
                  className="social_icon"
                  target="_blank"
                  href="https://twitter.com/softstorm_india"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-twitter hoverefftwi"
                    style={{ color: "#4f4f4f " }}
                  />
                </a>
                <span> | </span>
                <a
                  className="social_icon"
                  target="_blank"
                  href="https://www.linkedin.com/company/softstorm-technosys"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-linkedin-in hoverefflin"
                    style={{ color: "#4f4f4f " }}
                  />
                </a>
                <span> | </span>
                <a
                  className="social_icon"
                  target="_blank"
                  href="https://instagram.com/softstorm.in"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-instagram hovereffins"
                    style={{ color: "#4f4f4f " }}
                  />
                </a>
                <span> | </span>
                <a
                  className="social_icon"
                  target="_blank"
                  href="https://wa.me/912613560756"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-whatsapp hovereffwat"
                    style={{ color: "#4f4f4f " }}
                  />
                </a>
                <span> | </span>
                <a
                  className="social_icon"
                  target="_blank"
                  href="skype:softstorminfosys?chat"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-skype hovereffsky"
                    style={{ color: "#4f4f4f " }}
                  />
                </a>
              </div>
              <div className="col-lg-12  mt-2">
                <div
                  className="row d-flex justify-content-center
                align-items-center"
                >
                  <div className="col-md-6 col-sm-6 d-flex justify-content-end align-items-center pr-0 handlemobilfooter">
                    <Link className="footer_bottomLinks mr-2 ml-2" to="/about-us">
                      About Us
                    </Link>
                    <span> | </span>
                    <Link
                      className="footer_bottomLinks mr-2 ml-2"
                      to="/contact-us"
                    >
                      Contact us
                    </Link>
                    <span> | </span>
                  </div>
                  <div
                    className="col-md-6 col-sm-6 d-flex justify-content-start
                align-items-center pl-0 handlemobilfooter"
                  >
                    <Link
                      className="footer_bottomLinks mr-2 ml-2"
                      to="/our-work"
                    >
                      Our Work
                    </Link>
                    <span> | </span>
                    <Link className="footer_bottomLinks mr-2 ml-2" to="/career">
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
                <Link
                  className="footer_conditions  mr-2 ml-2"
                  to="/terms"
                >
                  Terms and Condition
                </Link>
                <span> | </span>
                <Link
                  className="footer_conditions mr-2 ml-2"
                  to="/privacy"
                >
                  Privacy Policy
                </Link>
                <span> | </span>
                <Link
                  className="footer_conditions mr-2 ml-2"
                  to="/returnpolicy"
                >
                  Return Policy
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-text ">
                <p>
                  Copyright © 2018 - {recentYear} Softstorm. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
