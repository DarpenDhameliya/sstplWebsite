// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import CommonLowerFooter from "./CommonLowerFooter";
// import useToggle from "../SubComponent/Hooks/useToggle";
// import Hireus from "./Hireus";
// import { useRouter } from "next/router";
// import Drawer from "./Drawer";
// import BackToTop from "./BackToTop";
// import ScrollToSection from "./ScrollToTop";
// // import "../../../assets/css/custom-animated.css";

// const Layout = ({ children }) => {
//   const [drawer, drawerAction] = useToggle(false);
//   const [cart, cartAction] = useToggle(false);
//   const router = useRouter();
//   console.log('hi')
//   return (
//     <>
//       <ScrollToSection>
//         <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle} />
//         <Header action={drawerAction.toggle} cartToggle={cartAction.toggle} />
//         <Hireus value={cart} action={cartAction.toggle} />
//         <main>{children}</main>
//         {router.pathname === "/contact-us" ? "" : <Footer />}
//         <CommonLowerFooter />
//       </ScrollToSection>
//       <BackToTop />
//     </>
//   );
// };

// export default Layout;

import React from "react";
import CommonLowerFooter from "./CommonLowerFooter";
import useToggle from "../SubComponent/Hooks/useToggle";
import { useRouter } from "next/router";
import BackToTop from "./BackToTop";
import ScrollToSection from "./ScrollToTop";
import DynamicHeader from "./Header";
import DynamicFooter from "./Footer";
import DynamicHireus from "./Hireus";
import DynamicDrawer from "./Drawer";

// const DynamicDrawer = dynamic(() => import("./Drawer"), { ssr: false });
// const DynamicHeader = dynamic(() => import("./Header"), { ssr: false });
// const DynamicHireus = dynamic(() => import("./Hireus"), { ssr: false });
// const DynamicFooter = dynamic(() => import("./Footer"), { ssr: false });

const Layout = ({ children }) => {
  const [drawer, drawerAction] = useToggle(false);
  const [cart, cartAction] = useToggle(false);
  const router = useRouter();

  return (
    <>
      <ScrollToSection>
        <DynamicDrawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle} />
        <DynamicHeader action={drawerAction.toggle} cartToggle={cartAction.toggle} />
        <DynamicHireus value={cart} action={cartAction.toggle} />
        <main>{children}</main>
        {router.pathname === "/contact-us" ? "" : <DynamicFooter />}
        <CommonLowerFooter />
      </ScrollToSection>
      <BackToTop />
    </>
  );
};

export default Layout;

