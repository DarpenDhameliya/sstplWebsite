import Drawer from "../Mobile/Drawer";
import Header from "../../common/Header";
import useToggle from "../../common/Hooks/useToggle";
import Headers from "../../common/PageHeader";
import Portfoliyo from "./Portfoliyo";
import Footer from "../../common/Footer";
import BackToTop from "../../common/BackToTop";
import Hireus from "../../common/Hireus";

const WorlIndex = () => {
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
        title="Portfolio"
        breadcrumb={[
          { link: "/", title: "Home" },
          { link: "/ourwork", title: "Portfolio" },
        ]}
      />
      <Portfoliyo />
      <Footer />
      <BackToTop />
    </>
  );
};

export default WorlIndex;
