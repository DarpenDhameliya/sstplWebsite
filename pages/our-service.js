import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import { Metaapicall } from "@/redux/Metaapicall";
const Serviceindex = lazy(() => import("@/Component/websiteComponent/Services/Serviceindex"));

const ourservice = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === '/our-service')

  return (
    <>
    <Seo title={ data ? data.title :'service'}  pagedescription={data ? data.description : ''} keywords={data ? data.key : ''} />
    <Suspense fallback={<Loader />}>
      <Serviceindex />
      </Suspense>
    </>
  );
};

export default ourservice;

export const getServerSideProps = async () => {
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};
