import Seo from "@/Component/Seo";
import PrivacyIndex from "@/Component/websiteComponent/Privacy/PrivacyIndex";
import React from "react";
import axios from '../Component/Axios';

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
