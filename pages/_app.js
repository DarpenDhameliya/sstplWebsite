import React from "react";
import webLayout from "@/Component/websiteComponent/Layout/Layout";
import AdminLayout from "@/Component/AdminComponent/Layout/Layout";
import "../assets/css/sstplmain.css";
import "../assets/css/custom-animated.css";
import "../assets/css/default.css";
import "../assets/css/Fonts.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/adminpanel.css";
import AOSWrapper from "@/Component/websiteComponent/SubComponent/AosWrapper";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
// import { ThemeProvider } from "@mui/styles";
// import { theme } from "@/Component/AdminComponent/common/Theme";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  const { pathname } = router;
  const  displaylayout = pathname.startsWith("/online-admin/dashboard")
  const Layout = pathname.startsWith("/online-admin") ? AdminLayout : webLayout;

  return (
    // <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className={`${ displaylayout && 'setdisplay' }`}>
          <Layout>
            <AOSWrapper>
              <Component {...pageProps} />
            </AOSWrapper>
          </Layout>
        </div>
      </Provider>
    // </ThemeProvider>
  );
};

export default MyApp;
