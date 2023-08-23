import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import { Metaapicall } from "@/redux/Metaapicall";
const WorlIndex = lazy(() => import("@/Component/websiteComponent/ourwork/WorlIndex"));

const ourwork = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === "/our-work");

  return (
    <>
      <Seo title={data ? data.title : "Our-Work"} pagedescription={data ? data.description : ""} keywords={data ? data.key : ""} />
      <Suspense fallback={<Loader />}>
        <WorlIndex  />
      </Suspense>
    </>
  );
};

export default ourwork;

export const getServerSideProps = async () => {
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
 
};

