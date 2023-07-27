import {useState , useEffect , useRef} from "react";
import React from "react";
import {Link} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {useDispatch, useSelector} from "react-redux";
import {Contactusstatus, Contactusstate, ContactusSlice} from "../slice/Contackus";
import axios from '../../common/Axios'
const SidePortion = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextarea] = useState("");
  const [dbError, setDbError] = useState([]);
  const [error, setError] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [serviceside, setServiceside] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [textFocused, setTextFocused] = useState(false);
  const [dbsubmit, setDbsubmit] = useState(false);
  const [captchres, setCaptchres] = useState('')

  const dispatch = useDispatch();
  const states = useSelector(Contactusstate);
  const recaptchaRef = useRef();

  const handleVerify = (response) => {
    setCaptchres(response)
    setIsVerified(true);
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
      setDbsubmit(false);
    }, []);

  useEffect(() => {
    if (serviceside === true) {
      if (states.status === "loading") {
      } else if (states.status === "succeeded") {
        setName('')
        setEmail("");
        setPhone("");
        setTextarea("");
        setCaptchres('');
        setDbError([]);
        setError([]);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setIsVerified(false);
        setDbsubmit(false);
        setServiceside(false);
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
  const handlemessapi = (e) => {
    let number_verify;
    let email_verify;
    let name_verify;
    const regex = /\b\w+\b/g;
    const matches = name.match(regex);
    if (matches && matches.length >= 2) {
      name_verify = true
    } else {
      name_verify = false
    }

    setServiceside(true)
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      email_verify = false;
    } else {
      email_verify = true;
    }
    if (!/^\+?\d{0,3}\s?\d{6,14}$/.test(phone)) {
      number_verify = false;
    } else {
      number_verify = true;
    }

    if (!name || !email || !phone || !textarea || !isVerified || number_verify === false || email_verify === false || name_verify === false) {
      if (!name) {
        error.name = "Required !";
      } else {
        error.name = "";
        if(name_verify === false){
          error.name_verify = 'Minimum Two Word Required' 
        }else {
          error.name_verify = ''
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
        error.textarea = "";
      }
      if (!isVerified) {
        error.captcha = "Required !";
      } else {
        error.captcha = "";
      }

      setError({...error, [e.target.name]: e.target.value});
      setTimeout(() => {
        setError([]);
      }, 3000);
    } else {
      const json1 = {fname:name,  email, phone, lname:textarea};
      const json2 = {ipAddress , captchres};
      setDbsubmit(true);
      dispatch(
        ContactusSlice({
          json1,
          json2,
        })
      );
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
      <div className="blog-sidebar demo">
        <aside className="widget widget-categories">
          <h3 className="widget-title">OUR SERVICES</h3>
          <ul>
            <li>
              <Link to="/web-application-developement" className="handlesideportion">
                <i className="fa fa-angle-right" aria-hidden="true" style={{marginRight: "5px"}}></i>
                Web Application Development
              </Link>
            </li>
            <li>
              <Link to="/mobile-application-developement" className="handlesideportion">
                <i className="fa fa-angle-right" aria-hidden="true" style={{marginRight: "5px"}}></i>
                Mobile Application Development
              </Link>
            </li>
            <li>
              <Link to="/desktop-software-developement" className="handlesideportion">
                <i className="fa fa-angle-right" aria-hidden="true" style={{marginRight: "5px"}}></i>
                Desktop Software Development
              </Link>
            </li>
            <li>
              <Link to="/digital-marketing" className="handlesideportion">
                <i className="fa fa-angle-right" aria-hidden="true" style={{marginRight: "5px"}}></i>
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/web_graphic-designing" className="handlesideportion">
                <i className="fa fa-angle-right" aria-hidden="true" style={{marginRight: "5px"}}></i>
                Web & Graphic Designing
              </Link>
            </li>
            <li>
              <Link to="/enterprise-services" className="handlesideportion">
                <i className="fa fa-angle-right" aria-hidden="true" style={{marginRight: "5px"}}></i>
                Enterprise Services
              </Link>
            </li>
          </ul>
        </aside>
        <aside className="widget widget-search">
          <div className="row">
            <div className="col-md-12 ">
              <div className="contact-form maintian_quick_contact" style={{border: "1px solid #d5d5d5", borderRadius: "10px"}}>
                <h4>QUICK CONTACT</h4>
                <div className="row">
                  <div className="col-md-12">
                    <input type="text" name="name" placeholder="Name" className={`${dbError.fname || error.name_verify? "error_padding" : ""} ${error.name ? "handleinput_error" : ""}`} onBlur={handlefnameBlur} onFocus={() => setNameFocused(true)} value={name} onChange={handlefirstname} />
                    {dbError.fname && <p className={`handledberror mb-0 ${dbError.fname ? "error_padding_add" : ""}`}>{dbError.fname}</p>}
                    {error.name_verify && <p className={`handledberror mb-0  ${error.name_verify ? "error_padding_add" : ""}`}>{error.name_verify}</p>}

                  </div>
                  <div className="col-md-12">
                    <input type="email" name="email" placeholder="Email Address" className={`${dbError.email || error.em_verify? "error_padding" : ""} ${error.email ? "handleinput_error" : ""} ${error.em_verify ? "handleinput_error" : ""}`} onBlur={handleemailBlur} onFocus={() => setEmailFocused(true)} value={email} onChange={handleemail} />
                    {dbError.email && <p className={`handledberror mb-0 ${dbError.email ? "error_padding_add" : ""}`}>{dbError.email}</p>}
                    {error.em_verify && <p className={`handledberror mb-0  ${error.em_verify ? "error_padding_add" : ""}`}>{error.em_verify}</p>}

                  </div>
                  <div className="col-md-12">
                      <input type="text" name="phone" className={`${error.phone ? "handleinput_error" : ""} ${error.num_verify ? 'error_padding' : ''} ${dbError.phone ? "error_padding" : ""}`} placeholder="Phone Number" onBlur={handlephoneBlur} onFocus={() => setPhoneFocused(true)} value={phone} onChange={handlephone} />
                      {error.num_verify && <p className={`handledberror mb-0  ${error.num_verify ? 'error_padding_add' : ''} ` }>{error.num_verify}</p>}
                      {dbError.phone && <p className={`handledberror mb-0 ${dbError.phone ? "error_padding_add" : ""}`}>{dbError.phone}</p>}

                  </div>
                  <div className="col-md-12">
                    <textarea name="message" rows="10" className={`${error.textarea ? "handleinput_error" : ""}`} placeholder="Message" onBlur={handletextBlur} onFocus={() => setTextFocused(true)} value={textarea} onChange={handletextarea} />
                    {dbError.textarea && <p className={`handledberror mb-0 ${dbError.textarea ? "error_padding_add" : ""}`}>{dbError.textarea}</p>}

                  </div>
                  <div className="col-md-12 col-sm-12 ">
                    <div className="recaptcha-container">
                      <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={recaptchaRef} onChange={handleVerify} theme="light" size="normal" />
                    </div>
                    {error.captcha && <p className="handledberror mb-0">{error.captcha}</p>}
                  </div>
                  <div className="col-md-12 text-right mt-3">
                    <button type="button" className="btn main-btn" disabled={dbsubmit === true} style={{width: "100%"}} onClick={handlemessapi}>
                      LET'S CONNECT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default SidePortion;
