import Seo from "@/Component/Seo";
import React, { Suspense, lazy } from "react";
import axios from '../Component/Axios';
import Loader from "@/Component/loader";

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
  try {
    const response = await axios.get("meta/meta_list");
    const initialPortfolioList = response.data.result;

    return {
      props: {
        initialPortfolioList,
      },
    };
  } catch (error) {
    console.error("Error fetching initial portfolio data:", error);
    return {
      props: {
        initialPortfolioList: error,
      },
    };
  }
};
