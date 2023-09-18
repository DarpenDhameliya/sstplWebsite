import React, { useEffect, useState } from "react";
import useToggle from "../SubComponent/Hooks/useToggle";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const CommonLowerFooter = dynamic(() => import("./CommonLowerFooter"), { ssr: false });
const BackToTop = dynamic(() => import("./BackToTop"), { ssr: false });
const ScrollToSection = dynamic(() => import("./ScrollToTop"), { ssr: false });
const DynamicDrawer = dynamic(() => import("./Drawer"), { ssr: false });
const DynamicHeader = dynamic(() => import("./Header"), { ssr: false });
const DynamicHireus = dynamic(() => import("./Hireus"), { ssr: false });
const DynamicFooter = dynamic(() => import("./Footer"), { ssr: false });

const Layout = ({ children }) => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [scrollAbove200, setScrollAbove200] = useState(false);
  const [openHireus, setOpenHireus] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setOpenHireus(true);
    }, 1000);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 180 && !scrollAbove200) {
      setScrollAbove200(true);
    }
  };

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollAbove200]);

  return (
    <>
      {innerWidth < 992 && <DynamicDrawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle} />}
      <DynamicHeader action={drawerAction.toggle} cartToggle={cartAction.toggle} />
      {openHireus && <DynamicHireus value={cart} action={cartAction.toggle} />}
      <main>{children}</main>
      {router.pathname === "/contact-us" ? "" :  openHireus && <DynamicFooter />}
      {scrollAbove200 && <CommonLowerFooter />}
      {openHireus && <ScrollToSection />}
      {scrollAbove200 && <BackToTop />}
    </>
  );
};

export default Layout;
