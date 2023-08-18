import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import { Metaapicall } from "@/redux/Metaapicall";
const WebserviceIndex = lazy(() => import("@/Component/websiteComponent/Services/webapp/WebserviceIndex"));

const webapplication = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === '/web-application-developement')

  return (
    <>
      <Seo title={data ? data.title : "web-application-developement"} pagedescription={data ? data.description : ''} keywords={data ? data.key : ''} />
      <Suspense fallback={<Loader />}>
        <WebserviceIndex />
      </Suspense>
    </>
  );
};

export default webapplication;

export const getServerSideProps = async () => {
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};