import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import { Metaapicall } from "@/redux/Metaapicall";

import React, { Suspense, lazy } from "react";
const Digitalserviceindex = lazy(() => import("@/Component/websiteComponent/Services/digital/Digitalserviceindex"));

const digital = ({ initialPortfolioList }) => {
  let data = initialPortfolioList.find((e) => e.url === "/digital-marketing");

  return (
    <>
      <Seo title={data ? data.title : "Digital"} pagedescription={data ? data.description : ""} keywords={data ? data.key : ""} />
      <Suspense fallback={<Loader />}>
        <Digitalserviceindex />
      </Suspense>
    </>
  );
};

export default digital;

export const getServerSideProps = async () => {
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};
