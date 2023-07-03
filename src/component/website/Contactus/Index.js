import React  from "react";
import Drawer from "../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from '../../common/Hooks/useToggle';
import Headers from "../../common/PageHeader";
import ContactForm from "./ContactForm";
import BackToTop from "../../common/BackToTop";
import Hireus from "../../common/Hireus";

const ContactIndex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);

  return (<>
            <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle}/>
            <Hireus value={cart} action={cartAction.toggle} />
            <Header action={drawerAction.toggle} cartToggle={cartAction.toggle}/>
            <Headers title="Contact Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/Contact', title: 'Contact' },
                ]}/>
            <ContactForm />
            <BackToTop />

            
  </>)
};

export default ContactIndex;
