import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import axios from '../Component/Axios';
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
