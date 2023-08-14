import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import axios from "../Component/Axios";
import React, { Suspense, lazy } from "react";
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