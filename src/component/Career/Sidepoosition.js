import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MailSlice, Mailstate, Mailstatus} from "../MailSlice";
import ReCAPTCHA from "react-google-recaptcha";

const Sidepoosition = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [apply, setApply] = useState("");
  const [file, setFile] = useState("");
  const mailstate = useSelector(Mailstate);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState([]);
  const [filename, setFilename] = useState("Upload Resume");
  const [dberr, setDberr] = useState([]);
  const [btnclick, setBtnclick] = useState(false);
  const dispatch = useDispatch();

  const handleVerify = (response) => {
    setIsVerified(true);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setFilename(file.name);
  };

  useEffect(() => {
    if (btnclick === true) {
      if (mailstate.status === "loading") {
      } else if (mailstate.status === "succeeded") {
        setName("");
        setEmail("");
        setPhone("");
        setApply("");
        setFile("");
        setFilename('Upload Resume')
        setBtnclick(false);

        dispatch(Mailstatus());
      } else if (mailstate.status === "failed") {
        setBtnclick(false);
        setDberr(mailstate.error);
      } else {
      }
    }
  }, [btnclick]);

  const handlesubmit = (e) => {
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
    if (!file || !name || !email || !phone || !apply || !isVerified || number_verify === false || email_verify === false) {
      if (!file) {
        error.file = "File Required !";
      }
      if (!name) {
        error.name = "Name Required !";
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
      }

      if (!isVerified) {
        error.captcha = "Required !";
      }
      setError({...error, [e.target.name]: e.target.value});
      setTimeout(() => {
        setError([]);
      }, 2000);
    } else {
      dispatch(
        MailSlice({
          name: name,
          email: email,
          phone: phone,
          apply: apply,
          file: file,
        })
      );
    }
  };

  return (
    <>
      <div className="blog-sidebar demo">
        <aside className="widget widget-search">
          <div className="row">
            <div className="col-md-12 contectformtebview">
              <div className="contact-form">
                <h4 className="contect-form_header mb-2">Apply Now</h4>
                <div className="col-md-12 handlecontact_form mb-2">
                  <input type="text" name="side_name" placeholder="Name" value={name} className={`${error.name ? "handleinput_error" : ""} ${dberr.name ? "error_padding" : ""}`} onChange={(e) => setName(e.target.value)} />
                  {dberr.name && <p className={`handledberror mb-0 ${dberr.name ? "error_padding_add" : ""}`}>{dberr.name}</p>}
                </div>
                <div className="col-md-12 handlecontact_form mb-2">
                  <input type="email" name="side_email" placeholder="Email Address" className={`${error.email ? "handleinput_error" : ""} ${error.em_verify ? "handleinput_error" : ""} ${dberr.email ? "error_padding" : ""}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                {dberr.email && <p className={`handledberror mb-0 ${dberr.email ? "error_padding_add" : ""}`}>{dberr.email}</p>}
                <div className="col-md-12 handlecontact_form mb-2">
                  {/* <label className="mb-0">Contact</label> */}
                  <input
                    type="text"
                    name="side_phone"
                    className={`${error.phone ? "handleinput_error" : ""}
                    ${error.num_verify ? "error_padding" : ""} ${dberr.phone ? "error_padding" : ""}`}
                    // ${error.phonelength ? "handleinput_error" : ""}
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {dberr.phone && <p className={`handledberror mb-0 ${dberr.phone ? "error_padding_add" : ""}`}>{dberr.phone}</p>}
                  {error.num_verify && <p className={`handledberror mb-0  ${error.num_verify ? "error_padding_add" : ""}`}>{error.num_verify}</p>}
                </div>
                <div className="col-md-12 handlecontact_form mb-2">
                  {/* <label className="mb-0">Apply For</label> */}
                  <input className={`${error.apply ? "handleinput_error" : ""}`} type="text" name="side_app-for" placeholder="Apply For" value={apply} onChange={(e) => setApply(e.target.value)} />
                </div>
                <div className="col-md-12 handlecontact_form">
                  <div className={`${error.apply ? "handleinput_error" : ""} ${dberr.file ? "error_padding" : ""} typefiledes`}>
                    <span className="filename">{filename}</span>
                    <input type="file" className="inputfile form-control" name="side_file" onChange={handleFileChange} />
                  </div>
                </div>
                {dberr.file && <p className={`handledberror mb-0 ${dberr.file ? "error_padding_add" : ""}`}>{dberr.file}</p>}
                <div className=" col-md-12  handlecontact_form">
                  <div className="recaptcha-container">
                    <ReCAPTCHA
                      sitekey={process.env.REACT_APP_SITE_KEY}
                      onChange={handleVerify}
                      // className={`${error.captcha ? "handleinput_error" : ""} `}
                      theme="light"
                      size="normal"
                    />
                  </div>
                  {error.captcha && <p className="handledberror mb-0">{error.captcha}</p>}
                </div>
                <div className="col-md-12 text-right handlecontact_form mb-2 mt-3">
                  <button className="main-btn " style={{width: "100%"}} onClick={handlesubmit}>
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
