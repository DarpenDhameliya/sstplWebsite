import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import { Metaapicall } from "@/redux/Metaapicall";

const Desktopserviceindex = lazy(() => import("@/Component/websiteComponent/Services/desktop/Desktopserviceindex"));

const desktop = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === "/desktop-software-developement");

  return (
    <>
      <Seo title={data ? data.title : "Desktop Software Developement"} pagedescription={data ? data.description : ""} keywords={data ? data.key : ""} />
      <Suspense fallback={<Loader />}>
        <Desktopserviceindex />
      </Suspense>
    </>
  );
};

export default desktop;

export const getServerSideProps = async () => {
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};
