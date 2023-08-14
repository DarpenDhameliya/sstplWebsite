import React from "react";
import Layout from "@/Component/websiteComponent/Layout/Layout";
import AdminLayout from "@/Component/AdminComponent/Layout/Layout";
import "../assets/css/sstplmain.css";
import "../assets/css/custom-animated.css";
import "../assets/css/default.css";
import "../assets/css/Fonts.css";
import "../assets/css/bootstrap.min.css";
import AOSWrapper from "@/Component/websiteComponent/SubComponent/AosWrapper";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { pathname } = router;
  // const Layout = pathname.startsWith("/dashboard") ? AdminLayout : webLayout;

  return (
    <Provider store={store}>
      <Layout>
        <AOSWrapper>
          <Component {...pageProps} />
        </AOSWrapper>
      </Layout>
    </Provider>
  );
};

export default MyApp;
