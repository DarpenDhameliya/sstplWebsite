import Seo from "@/Component/Seo";
import React, { Suspense, lazy } from "react";
import axios from '../Component/Axios';
import Loader from "@/Component/loader";
import { Metaapicall } from "@/redux/Metaapicall";

const Web_graphicIndex = lazy(() => import("@/Component/websiteComponent/Services/web_graphic/Web_graphicIndex"));


const web_graphic = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === '/web_graphic-designing')

  return (
    <>
      <Seo title={data ? data.title : "web_graphic-designing"} pagedescription={data ? data.description : ''} keywords={data ? data.key : ''}  />
      <Suspense fallback={<Loader />}>
        <Web_graphicIndex />
      </Suspense>
    </>
  );
};

export default web_graphic;
export const getServerSideProps = async () => {
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};
