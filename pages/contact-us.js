import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import axios from "../Component/Axios";

const Contactindex = lazy(() => import("@/Component/websiteComponent/contact"));

const contactus = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === "/contact-us");

  return (
    <>
      <Seo title={data ? data.title : "Contact Us"} pagedescription={data ? data.description : ""} keywords={data ? data.key : ""} />
      <Suspense fallback={<Loader />}>
        <Contactindex />
      </Suspense>
    </>
  );
};

export default contactus;

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
