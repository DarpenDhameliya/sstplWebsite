import React from "react";
import Drawer from "../Mobile/Drawer";
import Header from "../common/Header";
import useToggle from '../common/Hooks/useToggle';
import Headers from "../common/PageHeader";
import Footer from "../common/Footer";
import Servicecontent from "./Servicecontent";
import BackToTop from "../common/BackToTop";
import Hireus from "../common/Hireus";

const Serviceindex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);

  return (<>
                <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle}/>
            <Header action={drawerAction.toggle} cartToggle={cartAction.toggle}/>
            <Hireus value={cart} action={cartAction.toggle}/>
            <Headers title="Our Service"
                breadcrumb={[
                    { link: "/", title: "Home" },
                    { link: '/ourservice', title: 'Our Service' },
                ]} className={'handlebredcrumb'} />
                <Servicecontent />
            <Footer />
            <BackToTop />
  </>)
};

export default Serviceindex;
