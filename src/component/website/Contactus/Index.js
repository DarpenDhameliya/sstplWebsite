import React, {useState, useEffect} from "react";
import Drawer from "../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from "../../common/Hooks/useToggle";
import Headers from "../../common/PageHeader";
import ContactForm from "./ContactForm";
import BackToTop from "../../common/BackToTop";
import Hireus from "../../common/Hireus";
import logo from '../../../assets/images/logo-removebg-preview.png'

const ContactIndex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
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
              <div class="loader">Loading ...</div>
            </div>
          </div>
        </div>
      )}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle} />
        <Hireus value={cart} action={cartAction.toggle} />
        <Header action={drawerAction.toggle} cartToggle={cartAction.toggle} />
        <Headers
          title="Contact Us"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/Contact", title: "Contact"},
          ]}
        />
        <ContactForm />
        <BackToTop />
        </div>
    </>
  );
};

export default ContactIndex;
