//   {/* <Script src="https://www.googletagmanager.com/gtag/js?id=UA-142119303-1" />
//   <Script strategy="lazyOnload">
//     {`window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     gtag('js', new Date());
//      gtag('config', 'UA-142119303-1');`}
//   </Script> */}

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "../assets/css/sstplmain.css";
import "../assets/css/custom-animated.css";
import "../assets/css/default.css";
import "../assets/css/Fonts.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/adminpanel.css";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const ErrorBoundary = dynamic(() => import("@/Component/websiteComponent/ErrorBoundary"), { ssr: false });
const AOSWrapper = dynamic(() => import("@/Component/websiteComponent/SubComponent/AosWrapper"), { ssr: false });
const webLayout = dynamic(() => import("@/Component/websiteComponent/Layout/Layout"), { ssr: false });
const AdminLayout = dynamic(() => import("@/Component/AdminComponent/Layout/Layout"), { ssr: false });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const { pathname } = router;

  const displaylayout = pathname.startsWith("/online-admin/dashboard");
  const Layout = pathname.startsWith("/online-admin") ? AdminLayout : webLayout;

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div className={`${displaylayout && "setdisplay"}`}>
          <Layout>
            <AOSWrapper>
              <Component {...pageProps} />
            </AOSWrapper>
          </Layout>
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default MyApp;
