import React, { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { HireusSlice, Hireusslicestate, Hireusslicestatus } from "../website/slice/HireusSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Hireus = ({ value, action }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectval, setSelectval] = useState([]);
  const [skype, setSkype] = useState("");
  const [work, setWork] = useState("");
  const [error, setError] = useState([]);
  const [dberr, setDberr] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [textFocused, setTextFocused] = useState(false);
  const [dbsubmit, setDbsubmit] = useState(false);
  const [captchres, setCaptchres] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [isToastShown, setIsToastShown] = useState(false);

  const recaptchaRef = useRef();
  const state = useSelector(Hireusslicestate);
  const notify = useCallback(() => {
    toast("Great to touch with you ..", {
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

  const dispatch = useDispatch();

  useEffect(() => {
    const handleClick = () => {
      setName("");
      setEmail("");
      setPhone("");
      setCaptchres("");
      setSelectval([]);
      setSkype("");
      setWork("");
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    };

    const myButton = document.getElementById("closehirebox");

    myButton.addEventListener("click", handleClick);

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
    return () => {
      myButton.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (state.status === "loading") {
    } else if (state.status === "succeeded") {
      document.getElementById("closehirebox").click();
      notify();
      setName("");
      setEmail("");
      setPhone("");
      setCaptchres("");
      setSelectval([]);
      setDbsubmit(false);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setSkype("");
      setWork("");
      dispatch(Hireusslicestatus());
    } else if (state.status === "failed") {
      notifyerr();
      setDbsubmit(false);

      setDberr(state.error);
      setTimeout(() => {
        setTimeout([]);
      }, 2000);
      dispatch(Hireusslicestatus());
    } else {
    }
  }, [state]);

  const colourOptions = [
    { value: "nodejs", label: "Node.js" },
    { value: "php", label: "PHP" },
    { value: "laravel", label: "Laravel" },
    { value: "codegniter", label: "Codegniter" },
    { value: "python", label: "Python" },
    { value: "c#", label: "C#" },
    { value: "ios", label: "iOS" },
    { value: "reactjs", label: "React.js" },
    { value: "angular", label: "Angular" },
    { value: "flutter", label: "Flutter" },
    { value: "vuejs", label: "Vue.js" },
    { value: "salesforce", label: "Salesforce" },
    { value: "android", label: "Android" },
    { value: "oddo", label: "Odoo" },
  ];

  const handleChange = (e) => {
    setSelectval(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const handlehiresubmit = (e) => {
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
      if (!/^\+?\d{0,3}\s?\d{6,16}$/.test(phone)) {
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

      if (!name || !email || !phone || selectval.length === 0 || !work || email_verify === false || number_verify === false || name_verify === false || !isVerified) {
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
            error.email_verify = "Add Correct email";
          } else {
            error.email_verify = "";
          }
        }
        if (!phone) {
          error.phone = " NUmber Required !";
        } else {
          error.phone = "";
          if (number_verify === false) {
            error.num_verify = "Add Correct number";
          } else {
            error.num_verify = "";
          }
        }
        if (selectval.length === 0) {
          error.selectval = "Apply For Required !";
        } else {
          error.selectval = "";
        }
        if (!work) {
          error.work = "Work Details";
        } else {
          if (work.length < 9) {
            error.work = "Required !!";
          }
        }

        if (!isVerified) {
          error.captcha = "Required !";
        }
        setError({ ...error, [e.target.name]: e.target.value });
        setTimeout(() => {
          setError([]);
        }, 2000);
      } else {
        const json1 = { name, email, phone, selectval, skype, work };
        const json2 = { ipAddress, captchres };
        setDbsubmit(true);
        dispatch(
          HireusSlice({
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
    setName(e.target.value);
    if (name.length > 5) {
      error.name = "";
    }
  };
  const handlefnameBlur  = () => {
    setNameFocused(false);
    if (name.length < 4) {
      error.name = "Required !!";
    }
  };

  const handleemail =(e) => {
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

  const handlephone =(e) => {
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
  const handletextarea =(e) => {
    let data = e.target.value;
    setWork(e.target.value);
    if (data.length > 10) {
      error.work = "";
    }
  };
  const handletextBlur = () => {
    setTextFocused(false);
    if (work.length < 9) {
      error.work = "Required !!";
    }
  };

  return (
    <>
      <ToastContainer position="top-right" closeOnClick={false} style={{ marginTop: "55px" }} />
      <div className="amm-shopping-cart-wrapper">
        <div className={`amm-shopping-cart-canvas ${value ? "open" : ""}`}>
          <div className="amm-shopping_cart">
            <div className="amm-shopping_cart-top-bar d-flex justify-content-between">
              <h6>Hire us!</h6>
              <button type="button" onClick={action} className="amm-shopping-cart-close" id="closehirebox">
                <i className="fas fa-times white" />
              </button>
            </div>
            <div className="row hireform mt-3 handlespaces">
              <div className="col-md-12 ">
                <label>Full Name</label>
                <input type="text" className={`${error.name ? "handleinput_error" : ""} ${dberr.name ? "mb-0" : ""}  ${error.name_verify ? "error_padding" : ""}`} name="f-name" placeholder="" onBlur={handlefnameBlur} onFocus={() => setNameFocused(true)} value={name} onChange={handlefirstname} />
                {dberr.name && <p className="handledberror mb-2">{dberr.name}</p>}
                {error.name_verify && <p className={`handledberror mb-0  ${error.name_verify ? "error_padding_add" : ""}`}>{error.name_verify}</p>}
                <label>Email</label>
                <input type="email" className={`${error.email ? "handleinput_error" : ""} ${dberr.email ? "mb-0" : ""} ${error.email_verify ? "error_padding" : ""}`} onBlur={handleemailBlur} onFocus={() => setEmailFocused(true)} value={email} name="email" onChange={handleemail} />
                {dberr.email && <p className="handledberror mb-2">{dberr.email}</p>}
                {error.email_verify && <p className={`handledberror mb-0  ${error.email_verify ? "error_padding_add" : ""}`}>{error.email_verify}</p>}
                <label>Phone</label>
                <input type="text" name="number" className={`${error.phone ? "handleinput_error" : ""} ${dberr.phone ? "mb-0" : ""}  ${error.num_verify ? "error_padding" : ""} `} onBlur={handlephoneBlur} onFocus={() => setPhoneFocused(true)} value={phone} onChange={handlephone} />

                {dberr.phone && <p className="handledberror mb-2">{dberr.phone}</p>}
                {error.num_verify && <p className={`handledberror mb-0  ${error.num_verify ? "error_padding_add" : ""}`}>{error.num_verify}</p>}
                <label>Technology</label>
                <Select isMulti maxMenuHeight={"200px"} classNamePrefix="select" name="color" className={` ${error.selectval ? "handleinput_error" : ""} ${dberr.hiredev ? "mb-0" : ""}`} value={colourOptions.filter((obj) => selectval.includes(obj.value))} onChange={handleChange} options={colourOptions} />
                {dberr.hiredev && <p className="handledberror mb-2">{dberr.hiredev}</p>}
                <label className="mt-3">Skype Id</label>
                <input type="text" name="skype" value={skype} onChange={(e) => setSkype(e.target.value)} />
                <label>Wrok Details</label>
                <textarea style={{ lineHeight: "25px", minHeight: "70px" }} onBlur={handletextBlur} onFocus={() => setTextFocused(true)} name="message" rows="3" className={` ${error.work ? "handleinput_error" : ""} ${dberr.work ? "mb-0" : ""}`} value={work} onChange={handletextarea} />
                {dberr.work && <p className="handledberror mb-2">{dberr.work}</p>}
                <div className="recaptcha-container">
                  <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={recaptchaRef} onChange={handleVerify} theme="light" size="normal" />
                </div>
                {error.captcha && <p className="handledberror mb-0">{error.captcha}</p>}
                <div className="cart-btn mt-3">
                  <button className="main_submit_btn" disabled={dbsubmit === true} style={{ width: "100%", marginTop: "0px" }} onClick={handlehiresubmit}>
                    INQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`overlay ${value ? "open" : ""}`}></div>
      </div>
    </>
  );
};

export default Hireus;
