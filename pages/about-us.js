import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import { Metaapicall } from "@/redux/Metaapicall";
const IndexAbout = lazy(() => import("@/Component/websiteComponent/About/IndexAbout"));

const aboutus = ({initialPortfolioList}) => {
let data = initialPortfolioList.find((e) => e.url === '/about-us')

  return (
    <>
      <Seo title={data ? data.title : 'About us'} pagedescription={data ? data.description : ''} keywords={data ? data.key : ''}  />
      <Suspense fallback={<Loader />}>
        <IndexAbout />
      </Suspense>
    </>
  );
};

export default aboutus;

export const getServerSideProps = async () => {
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};