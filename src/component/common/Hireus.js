import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import Select from 'react-select'
import {HireusSlice , Hireusslicestate , Hireusslicestatus} from "../website/slice/HireusSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";


const Hireus = ({ value, action }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [selectval, setSelectval] = useState([]);
  const [skype, setSkype] = useState('');
  const [work, setWork] = useState('');
  const [error, setError] = useState([]);
  const [dberr, setDberr] = useState([]);
  const [isVerified, setIsVerified] = useState(false);

  
  const state  = useSelector(Hireusslicestate)
  const notify = () => toast("Great to touch with you ..");
  const dispatch = useDispatch();
  if (state.status === "loading") {
  } else if (state.status === "succeeded") {
    notify()
    document.getElementById('closehirebox').click();
    setName('')
    setEmail('')
    setPhone('')
    setSelectval([])
    setSkype('')
    setWork('')
    dispatch(Hireusslicestatus())
  } else if (state.status === "failed") {
    setDberr(state.error)
    dispatch(Hireusslicestatus())
  } else {
  }

  const colourOptions = [
    { value: 'nodejs', label: 'Node.js' },
    { value: 'php', label: 'PHP' },
    { value: 'laravel', label: 'Laravel' },
    { value: 'codegniter', label: 'Codegniter'},
    { value: 'python', label: 'Python'},
    { value: 'c#', label: 'C#'},
    { value: 'ios', label: 'iOS'},
    { value: 'reactjs', label: 'React.js'},
    { value: 'angular', label: 'Angular'},
    { value: 'flutter', label: 'Flutter'},
    { value: 'vuejs', label: 'Vue.js'},
    { value: 'salesforce', label: 'Salesforce'},
    { value: 'android', label: 'Android'},
    { value: 'oddo', label: 'Odoo'},
  ];
  const handleChange = (e) => {
    setSelectval(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const handlehiresubmit = (e) => {
    let number_verify;
    if (!/^\+?\d{0,3}\s?\d{6,14}$/.test(phone)) {
      number_verify = false;
    } else {
      number_verify = true;
    }
        if ( !name || !email || !phone || selectval.length === 0  || !work || number_verify === false || !isVerified) {
      if (!name) {
        error.name = "Name Required !"
      }
      if (!email) {
        error.email = "email Required !"
      }
      if (!phone) {
        error.phone = " NUmber Required !"
      } else {
        error.phone = ''
        if (!number_verify) {
          error.num_verify = "Add Correct number";
        } else {
          error.num_verify = "";
        }
      }
      if (selectval.length === 0) {
        error.selectval = 'Apply For Required !'
      }else {
        error.selectval = ''
      }
      if (!work) {
        error.work = "Work Details"
      }
      if (!isVerified) {
        error.captcha = "Required !";
      } 
      setError({ ...error, [e.target.name]: e.target.value })
      setTimeout(() => {
        setError([])
      }, 2000);
    } else {
      dispatch(HireusSlice({name , email , phone , selectval , skype , work}))
    }
  }
  const handleVerify = (response) => {
    setIsVerified(true);
  };
  
  return (<>
  <ToastContainer
      position="top-right"
      closeOnClick
      style={{ marginTop: "55px" }}
    />
    <div className="amm-shopping-cart-wrapper">
      <div className={`amm-shopping-cart-canvas ${value ? 'open' : ''}`}>
        <div className="amm-shopping_cart">
          <div className="amm-shopping_cart-top-bar d-flex justify-content-between">
            <h6>Hire us!</h6>
            <button type="button" onClick={action} className="amm-shopping-cart-close" id="closehirebox">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <form className="row hireform mt-3">
            <div className="col-md-12">
              <input type="text" className={`${error.name ? "handleinput_error" : ''} ${dberr.name ? 'mb-0' : ''}`} name="f-name" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)}/>
              {dberr.name && <p className='handledberror mb-2' >{dberr.name}</p>}
              <input type="email" className={`${error.email ? "handleinput_error" : ''} ${dberr.email ? 'mb-0' : ''}`} name="email" placeholder="Email "  value={email} onChange={(e) => setEmail(e.target.value)}/>
              {dberr.email && <p className='handledberror mb-2'>{dberr.email}</p>}
              <input type="text" name="number" className={`${error.phone ? "handleinput_error" : ''} ${dberr.phone ? 'mb-0' : ''}  ${error.num_verify ? 'error_padding' : ''} `} placeholder="Contect Number " value={phone} onChange={(e) => setPhone(e.target.value)}/>
              {dberr.phone && <p className='handledberror mb-2'>{dberr.phone}</p>}
              {error.num_verify && <p className={`handledberror mb-0  ${error.num_verify ? 'error_padding_add' : ''}` }>{error.num_verify}</p>}

              <Select
                isMulti
                maxMenuHeight={'200px'}
                classNamePrefix="select"
                name="color"
                className={` ${error.selectval ? "handleinput_error" : ''} ${dberr.hiredev ? 'mb-0' : ''}`}
                value={colourOptions.filter((obj) =>
                  selectval.includes(obj.value)
                )}
                onChange={handleChange}
                options={colourOptions}
              />
              {dberr.hiredev && <p className='handledberror mb-2'>{dberr.hiredev}</p>}
              <input type="text" name="skype" placeholder="Skype id "  className="mt-3" value={skype} onChange={(e) => setSkype(e.target.value)}/>
              <textarea
                style={{ lineHeight: '25px', minHeight: '70px' }}
                name="message"
                placeholder="Work Detail"
                rows="3"
                className={` ${error.work ? "handleinput_error" : ''} ${dberr.hiredev ? 'mb-0' : ''}`}
                value={work} onChange={(e) => setWork(e.target.value)}
              />
              {dberr.work && <p className='handledberror mb-2'>{dberr.work}</p>}
              <div className="recaptcha-container">
                      <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleVerify} theme="light" size="normal" />
                    </div>
                    {error.captcha && <p className="handledberror mb-0">{error.captcha}</p>}
            </div>
          </form>
          <div className="amm-shopping_cart-btn">
            <div className="cart-btn mt-3">
              <button className="submit_btn" style={{ width: '100%', marginTop: "0px" }} onClick={handlehiresubmit}>
                INQUIRE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`overlay ${value ? 'open' : ''}`}></div>
    </div>
  </>)
};

export default Hireus;
