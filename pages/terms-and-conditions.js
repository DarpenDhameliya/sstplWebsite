import Seo from "@/Component/Seo";
import TermandConditionIndex from "@/Component/websiteComponent/tems&consition/Index";
import React from "react";
import { Metaapicall } from "@/redux/Metaapicall";

const terms = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === '/terms-and-conditions')

  return (
    <>
      <Seo title={data ? data.title : "terms-and-conditions"} pagedescription={data ? data.description : ''} keywords={data ? data.key : ''} />
      <TermandConditionIndex />
    </>
  );
};

export default terms;

export const getServerSideProps = async () => {
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};
