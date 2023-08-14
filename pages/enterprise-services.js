import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import axios from '../Component/Axios';

const Enterpriseserviceindex = lazy(() => import("@/Component/websiteComponent/Services/enterprise/Enterpriseserviceindex"));

const enterprise = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === '/enterprise-services')

  return (
    <>
      <Seo title={data ? data.title : "enterprise-services"} pagedescription={data ? data.description : ''} keywords={data ? data.key : ''} />
      <Suspense fallback={<Loader />}>
        <Enterpriseserviceindex />
      </Suspense>
    </>
  );
};

export default enterprise;

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