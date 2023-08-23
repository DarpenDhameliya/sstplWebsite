import Seo from "@/Component/Seo";
import ReturnPolicyIndex from "@/Component/websiteComponent/returnpolicy/ReturnPolicyIndex";
import React from "react";
import { Metaapicall } from "@/redux/Metaapicall";

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
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};
