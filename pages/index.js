import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import axios from "../Component/Axios";
import React, { Suspense, lazy } from "react";
const HomeIndex = lazy(() => import("@/Component/websiteComponent/Home"));

const index = (props) => {
  let data = props.initialPortfolioList.result.find((e) => e.url === '/')

  return (
    <>
    <Seo title={data ? data.title : ""} pagedescription={data ? data.description : ""} keywords={data ? data.key : ""} />
      <Suspense fallback={<Loader />}>
        <HomeIndex apidata={props.portfoliodata}/>
      </Suspense>
    </>
  );
};

export default index;



export const getServerSideProps = async () => {
  try {
    const [portfolioResponse, otherApiResponse] = await Promise.all([axios.post("portfolio/portfolio_list"), axios.get("meta/meta_list")]);

    const portfoliodata = portfolioResponse.data.result;
    const initialPortfolioList = otherApiResponse.data;

    return {
      props: {
        portfoliodata,
        initialPortfolioList,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        portfoliodata: null,
        initialPortfolioList: null,
      },
    };
  }
};
