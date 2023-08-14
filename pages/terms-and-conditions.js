import Seo from "@/Component/Seo";
import TermandConditionIndex from "@/Component/websiteComponent/tems&consition/Index";
import React from "react";
import axios from '../Component/Axios';

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
