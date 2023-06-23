import React, {useState, useEffect, useRef , useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MailSlice, Mailstate, Mailstatus} from "../MailSlice";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useHistory} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import bullet from "../../assets/images/icon/finalclick1.webp";
import career1 from "../../assets/images/icon/location (1).webp";
import career2 from "../../assets/images/icon/experience.webp";
import career3 from "../../assets/images/icon/position.webp";

const Careerdata = () => {
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
  const mailstate = useSelector(Mailstate);
  const [isVerified, setIsVerified] = useState(false);
  const [careerBtnClick, setCareerBtnClick] = useState(false);

  // const [modelOpennet, setModelOpennet] = useState(0);
  const [file, setFile] = useState("");
  const notify = useCallback(() => {
    toast.success("Email Sent Successfully..", {
      autoClose: 2000,
    });
  }, []);
  const notifyerr = () => toast("error");
  const modalRef = useRef(null);

  useEffect(() => {
    if (careerBtnClick) {
      if (mailstate.status === "loading") {
      } else if (mailstate.status === "succeeded") {
        setName("");
        setEmail("");
        setPhone("");
        setApply("");
        setFile("");
        setFilename('Upload Resume')
        notify();
        dispatch(Mailstatus());
      } else if (mailstate.status === "failed") {
        notifyerr();
        setDberr(mailstate.error);
        dispatch(Mailstatus());
      } else {
      }
    }
  });

  const dispatch = useDispatch();

  const handlesubmit = (e) => {
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
        error.phone = "NUmber Required !";
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
        error.captcha = "Required !!";
      } else {
        error.captcha = "";
      }
      setError({...error, [e.target.name]: e.target.value});
      setTimeout(() => {
        setError([]);
      }, 2000);
    } else {
      dispatch(
        MailSlice({
          file: file,
          name: name,
          email: email,
          phone: phone,
          apply: sendmailview,
        })
      );
    }
  };

  const handlecollaps = (data, tech, techview) => {
    setSendmailview(tech);
    setFormapplyview(techview);
    setApply(data);
  };

  const hgandlefile = (e) => {
    const file = e.target.files[0];
    setFilename(file.name);
    setFile(e.target.files[0]);
  };
  const handleVerify = (response) => {
    setIsVerified(true);
  };
  return (
    <>
      <ToastContainer position="top-right"  style={{marginTop: "55px"}} />
      <div className="card mb-3 grey">
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
        <div className={`collapse  ${apply === "tab1" ? "show" : ""} mt-2`} id="tab1" aria-labelledby="headingOne" style={{transition: "height 0.5s ease 0s"}}>
          <div className="card-body_collpas">
            <p style={{color: "#000000"}}>Your job feed required the following area where you need to perform your best for developing your own future with Softstrom Technosys</p>
            <h6 className="handlecareerrespon">Responsibilities and Duties :</h6>
            <ul>
              <div className="handlediv">
                {/* <img src={bullet} alt='symbol'  className="handlecarrericon "/> */}
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
              {/* <BsCheck2Circle
                className="handlecarrericon "
                style={{ align_tems: "center" }}
              /> */}
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
        <div className={`collapse ${apply === "tab2" ? "show" : ""} mt-2`} id="tab2" aria-labelledby="headingtwo" style={{transition: "height 0.5s ease 0s"}}>
          {/* <div> */}
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
          {/* </div> */}
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
        <div className={`collapse ${apply === "tab4" ? "show" : ""} mt-2`} id="tab4" style={{transition: "height 0.5s ease 0s"}}>
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
              <button className="main-btn_carrer tab3" type="button" data-bs-toggle="collapse" href="#tab3" onClick={() => handlecollaps("tab3", "Mobile Application Developer fresher", "Mobile Application Developer ")}>
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className={`collapse ${apply === "tab3" ? "show" : ""} mt-2`} id="tab3" style={{transition: "height 0.5s ease 0s"}}>
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
      </div>

      <div className="modal fade" id="staticBackdrop" role="dialog" ref={modalRef}>
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
                    // ${ error.phonelength ? "handleinput_error" : "" }
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                  />
                  {dberr.phone && <p className="handledberror ">{dberr.phone}</p>}
                  {error.num_verify && <p className={`handledberror mb-0  ${error.num_verify ? "error_padding_add" : ""}`}>{error.num_verify}</p>}
                </div>
                {/* <div className="col-md-12 ">
                <input className={`${error.file ? "handleinput_error" : ''}`} type="file" name="app-for" onChange={hgandlefile} />
              </div> */}
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
      </div>
    </>
  );
};

export default Careerdata;
