import Seo from "@/Component/Seo";
import ReturnPolicyIndex from "@/Component/websiteComponent/returnpolicy/ReturnPolicyIndex";
import React from "react";
import axios from '../Component/Axios';

const returnpolicy = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === '/return-policy')

  return (
    <>
      <Seo title={data ? data.title :"Return-Policy"} pagedescription={data ? data.description : ''} keywords={data ? data.key : ''}/>
      <ReturnPolicyIndex />
    </>
  );
};

export default returnpolicy;

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
