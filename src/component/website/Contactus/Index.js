import React, {useState, useEffect} from "react";
import Headers from "../../common/PageHeader";
import ContactForm from "./ContactForm";
import logo from '../../../assets/images/logo-removebg-preview.webp'

const ContactIndex = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <>
      {loading && (
        <div className="onloadpage" id="page-load">
          <div className="loader-div d-flex justify-content-center ">
            <div className="on-img">
              <img src={logo} alt="loader" style={{width: "100px"}} />
              <div className="loader">Loading ...</div>
            </div>
          </div>
        </div>
      )}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <Headers
          title="Contact Us"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/Contact", title: "Contact"},
          ]}
        />
        <ContactForm />
        </div>
    </>
  );
};

export default ContactIndex;
