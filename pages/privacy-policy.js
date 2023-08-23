import Seo from "@/Component/Seo";
import PrivacyIndex from "@/Component/websiteComponent/Privacy/PrivacyIndex";
import React from "react";
import { Metaapicall } from "@/redux/Metaapicall";

const privacy = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === '/privacy-policy')

  return (
    <>
      <Seo title={data ? data.title : "privacy-policy"} pagedescription={data ? data.description : ''} keywords={data ? data.key : ''} />
      <PrivacyIndex />
    </>
  );
};

export default privacy;

export const getServerSideProps = async () => {
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};
