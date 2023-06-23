import {useState , useEffect} from "react";
import React from "react";
import {Link} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {useDispatch, useSelector} from "react-redux";
import {Contactusstatus, Contactusstate, ContactusSlice} from "../Contackus";

const SidePortion = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextarea] = useState("");
  const [dbError, setDbError] = useState([]);
  const [error, setError] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [serviceside, setServiceside] = useState(false);
  const dispatch = useDispatch();
  const states = useSelector(Contactusstate);

  const handleVerify = (response) => {
    setIsVerified(true);
  };


  useEffect(() => {
    if (serviceside === true) {
      if (states.status === "loading") {
      } else if (states.status === "succeeded") {
        console.log('SidePortion')
        setName('')
        setEmail("");
        setPhone("");
        setTextarea("");
        setDbError([]);
        setError([]);
        setIsVerified(false);
        setServiceside(false);
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
  });
  const handlemessapi = (e) => {
    let number_verify;
    let email_verify;
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

    if (!name || !email || !phone || !textarea || !isVerified || number_verify === false || email_verify === false) {
      if (!name) {
        error.name = "Required !";
      } else {
        error.name = "";
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
      dispatch(ContactusSlice({ fname:name,  email, phone, lname:textarea }));
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
                    <input type="text" name="name" placeholder="Name" className={`${dbError.fname ? "error_padding" : ""} ${error.name ? "handleinput_error" : ""}`} value={name} onChange={(e) => setName(e.target.value)} />
                    {dbError.fname && <p className={`handledberror mb-0 ${dbError.fname ? "error_padding_add" : ""}`}>{dbError.fname}</p>}
                  </div>
                  <div className="col-md-12">
                    <input type="email" name="email" placeholder="Email Address" className={`${dbError.email ? "error_padding" : ""} ${error.email ? "handleinput_error" : ""} ${error.em_verify ? "handleinput_error" : ""}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                    {dbError.email && <p className={`handledberror mb-0 ${dbError.email ? "error_padding_add" : ""}`}>{dbError.email}</p>}
                  </div>
                  <div className="col-md-12">
                      <input type="text" name="phone" className={`${error.phone ? "handleinput_error" : ""} ${error.num_verify ? 'error_padding' : ''} ${dbError.phone ? "error_padding" : ""}`} placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                      {error.num_verify && <p className={`handledberror mb-0  ${error.num_verify ? 'error_padding_add' : ''} ` }>{error.num_verify}</p>}
                      {dbError.phone && <p className={`handledberror mb-0 ${dbError.phone ? "error_padding_add" : ""}`}>{dbError.phone}</p>}

                  </div>
                  <div className="col-md-12">
                    <textarea name="message" rows="10" className={`${error.textarea ? "handleinput_error" : ""}`} placeholder="Message" value={textarea} onChange={(e) => setTextarea(e.target.value)} />
                    {/* {dbError.textarea && <p className={`handledberror mb-0 ${dbError.textarea ? "error_padding_add" : ""}`}>{dbError.textarea}</p>} */}

                  </div>
                  <div className="col-md-12 col-sm-12 ">
                    <div className="recaptcha-container">
                      <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleVerify} theme="light" size="normal" />
                    </div>
                    {error.captcha && <p className="handledberror mb-0">{error.captcha}</p>}
                  </div>
                  <div className="col-md-12 text-right mt-3">
                    <button type="button" className="btn main-btn" style={{width: "100%"}} onClick={handlemessapi}>
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
