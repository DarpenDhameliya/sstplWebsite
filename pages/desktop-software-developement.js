import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import axios from "../Component/Axios";

const Desktopserviceindex = lazy(() => import("@/Component/websiteComponent/Services/desktop/Desktopserviceindex"));

const desktop = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === "/desktop-software-developement");

  return (
    <>
      <Seo title={data ? data.title : "Desktop Software Developement"} pagedescription={data ? data.description : ""} keywords={data ? data.key : ""} />
      <Suspense fallback={<Loader />}>
        <Desktopserviceindex />
      </Suspense>
    </>
  );
};

export default desktop;

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
