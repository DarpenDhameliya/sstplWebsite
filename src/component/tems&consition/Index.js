import React,{useState} from "react";
import Drawer from "../Mobile/Drawer";
import Header from "../common/Header";
import useToggle from '../common/Hooks/useToggle';
import Footer from "../common/Footer";
import BackToTop from "../common/BackToTop";
import Headers from "../common/PageHeader";
import Hireus from "../common/Hireus";
  import Temsandconsition from "./Tems&consition";

const TermandConditionIndex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  return <>
            <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle}/>
            <Header action={drawerAction.toggle} cartToggle={cartAction.toggle}/>
            <Hireus value={cart} action={cartAction.toggle}/>
            <Headers title="TERMS & CONDITIONS"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/terms', title: 'TERMS & CONDITIONS' },
                ]} className={'handlebredcrumb'} />
            {/* <About /> */}
            <Temsandconsition />
            <Footer />
            <BackToTop />
  </>;
};

export default TermandConditionIndex;
