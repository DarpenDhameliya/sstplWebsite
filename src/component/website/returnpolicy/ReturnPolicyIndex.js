import React, { useState } from "react";
import Drawer from "../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from "../../common/Hooks/useToggle";
import Footer from "../../common/Footer";
import BackToTop from "../../common/BackToTop";
import Headers from "../../common/PageHeader";
import Hireus from "../../common/Hireus";
import ReturnPolicy from "./ReturnPolicy";

const ReturnPolicyIndex = () => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  return (
    <>
      <Drawer
        drawer={drawer}
        action={drawerAction.toggle}
        cartToggle={cartAction.toggle}
      />
      <Header action={drawerAction.toggle} cartToggle={cartAction.toggle} />
      <Hireus value={cart} action={cartAction.toggle} />
      <Headers
        title="RETURN POLICY"
        breadcrumb={[
          { link: "/", title: "Home" },
          { link: "/returnpolicy", title: "Return Policy" },
        ]}
        className={"handlebredcrumb"}
      />
      <ReturnPolicy />
      <Footer />
      <BackToTop />
    </>
  );
};

export default ReturnPolicyIndex;
